"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/lib/questions";
import { useRouter } from "next/navigation";

type Level = "EMT" | "Paramedic";
type Stage = "quiz" | "analyzing" | "preview";

type Q = (typeof questions)[number];

type AnswerRecord = {
  id: number;
  category: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;

  // Snapshot for premium preview
  text: string;
  options: string[];
  explanation: string;
};

type DomainRow = {
  category: string;
  correct: number;
  total: number;
  accuracy: number; // 0..100
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const r = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
    const j = Math.floor(r * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Pick 5 questions with category diversity if possible.
 * This makes the “weakest domain” feel real and premium.
 */
function pickDiagnosticQuestions(pool: Q[], count = 5) {
  const byCat = new Map<string, Q[]>();
  for (const q of pool) {
    const list = byCat.get(q.category) || [];
    list.push(q);
    byCat.set(q.category, list);
  }

  const categories = shuffle(Array.from(byCat.keys()));

  // Pick 1 from each category first
  const picked: Q[] = [];
  for (const cat of categories) {
    const list = byCat.get(cat)!;
    const one = shuffle(list)[0];
    if (one) picked.push(one);
    if (picked.length >= count) break;
  }

  if (picked.length >= count) return picked.slice(0, count);

  // Fill remaining with randoms not already picked
  const pickedIds = new Set(picked.map((q) => q.id));
  const remaining = shuffle(pool.filter((q) => !pickedIds.has(q.id)));
  return [...picked, ...remaining.slice(0, count - picked.length)];
}

/**
 * Wilson score interval (approx CI for a proportion).
 * Great for premium-feeling “confidence interval”.
 */
function wilsonCI(correct: number, n: number, z = 1.96) {
  if (n <= 0) return { low: 0, high: 100 };
  const p = correct / n;
  const denom = 1 + (z * z) / n;
  const center = (p + (z * z) / (2 * n)) / denom;
  const margin =
    (z *
      Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) /
    denom;

  return {
    low: Math.round(clamp((center - margin) * 100, 0, 100)),
    high: Math.round(clamp((center + margin) * 100, 0, 100)),
  };
}

/**
 * Converts small-sample diagnostic to a “readiness” score
 * that feels stable (not whiplash).
 */
function readinessScore(correct: number, n: number) {
  // Posterior mean of Beta(correct+1, wrong+1)
  const passProb = (correct + 1) / (n + 2); // 0..1
  // Map to readiness range with a strong floor/ceiling:
  // 0% -> ~35, 100% -> ~95
  const score = Math.round(35 + passProb * 60);
  return clamp(score, 35, 95);
}

function computeDomainBreakdown(ans: AnswerRecord[]): DomainRow[] {
  const by = new Map<string, { correct: number; total: number }>();
  for (const a of ans) {
    const cur = by.get(a.category) || { correct: 0, total: 0 };
    cur.total += 1;
    if (a.isCorrect) cur.correct += 1;
    by.set(a.category, cur);
  }

  const rows: DomainRow[] = Array.from(by.entries()).map(([category, v]) => ({
    category,
    correct: v.correct,
    total: v.total,
    accuracy: v.total ? Math.round((v.correct / v.total) * 100) : 0,
  }));

  // Sort worst to best (more “insight”)
  rows.sort((a, b) => a.accuracy - b.accuracy);
  return rows;
}

function statusFromReadiness(readiness: number) {
  if (readiness >= 80) return { label: "ON TRACK", tone: "text-emerald-300" };
  if (readiness >= 65) return { label: "BORDERLINE", tone: "text-yellow-300" };
  return { label: "AT RISK", tone: "text-red-300" };
}

export default function SimulatorPage() {
  const router = useRouter();

  const [stage, setStage] = useState<Stage>("quiz");
  const [userLevel, setUserLevel] = useState<Level>("EMT");

  const [activeQuestions, setActiveQuestions] = useState<Q[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [analysisText, setAnalysisText] = useState("INITIATING STOP PROTOCOL...");
  const [analysisPct, setAnalysisPct] = useState(0);

  // Premium-feeling diagnostic timer (shorter than “real exam”, still pressure)
  const [timeLeft, setTimeLeft] = useState(420);

  const question = activeQuestions[currentQIndex];

  const theme = useMemo(() => {
    const isP = userLevel === "Paramedic";
    return {
      isP,
      accent: isP ? "text-rose-300" : "text-cyan-300",
      accentSoft: isP ? "text-rose-200" : "text-cyan-200",
      border: isP ? "border-rose-400/35" : "border-cyan-400/35",
      btn: isP
        ? "bg-gradient-to-r from-rose-600 to-red-500"
        : "bg-gradient-to-r from-blue-600 to-cyan-500",
      selectRing: isP ? "border-rose-500 bg-rose-500/10" : "border-blue-500 bg-blue-500/10",
      radioFill: isP ? "bg-rose-500" : "bg-blue-500",
      bar: isP ? "bg-rose-500" : "bg-blue-600",
      barGlow: isP ? "shadow-[0_0_10px_#f43f5e]" : "shadow-[0_0_10px_#2563EB]",
      scan:
        isP
          ? "bg-[linear-gradient(transparent_50%,rgba(244,63,94,0.28)_50%)]"
          : "bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.22)_50%)]",
      spinner: isP ? "border-rose-500" : "border-cyan-500",
      chip: isP ? "bg-rose-500/10 border-rose-500/20" : "bg-cyan-500/10 bor
