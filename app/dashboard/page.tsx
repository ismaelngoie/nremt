"use client";

import Dock from "@/components/Dock";
import BodyHeatmap from "@/components/BodyHeatmap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { questions } from "@/lib/questions";

type Level = "EMT" | "Paramedic";

type DomainRow = {
  category: string;
  correct: number;
  total: number;
  accuracy: number; // 0..100
};

type DiagnosticAnswer = {
  id: number;
  category: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  text: string;
  options: string[];
  explanation: string;
};

type DayDot = { label: string; iso: string; active: boolean };

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n));
}
function safeJSON<T>(raw: string | null, fallback: T): T {
  try {
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function normalizeLevel(v: unknown): Level {
  return v === "Paramedic" ? "Paramedic" : "EMT";
}
function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
function addDaysISO(base: Date, offsetDays: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + offsetDays);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
function dayLetterFromISO(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  const map = ["S", "M", "T", "W", "T", "F", "S"];
  return map[d.getDay()];
}
function daysUntil(iso: string) {
  const target = new Date(`${iso}T00:00:00`).getTime();
  const now = new Date().getTime();
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}
function statusFromReadiness(readiness: number) {
  if (readiness >= 80) return { label: "ON TRACK", tone: "text-emerald-300" };
  if (readiness >= 65) return { label: "BORDERLINE", tone: "text-yellow-300" };
  return { label: "AT RISK", tone: "text-red-300" };
}
// Matches your sim’s behavior (stable small-sample readiness)
function readinessScoreFromAnswers(correct: number, n: number) {
  const total = Math.max(1, n);
  const passProb = (correct + 1) / (total + 2);
  const score = Math.round(35 + passProb * 60);
  return clamp(score, 35, 95);
}

export default function DashboardPage() {
  const router = useRouter();
  const params = useSearchParams();

  const [level, setLevel] = useState<Level>("EMT");
  const [userName, setUserName] = useState("FUTURE MEDIC");

  // plan (real): URL param OR localStorage userPlan
  const [plan, setPlan] = useState<string | null>(null);

  // report fields (real)
  const [readiness, setReadiness] = useState<number>(0);
  const [weakDomain, setWeakDomain] = useState<string>("General");
  const [weakPct, setWeakPct] = useState<number>(0);
  const [passProb, setPassProb] = useState<number | null>(null);
  const [ciLow, setCiLow] = useState<number | null>(null);
  const [ciHigh, setCiHigh] = useState<number | null>(null);
  const [domainBreakdown, setDomainBreakdown] = useState<DomainRow[]>([]);
  const [missed, setMissed] = useState<DiagnosticAnswer | null>(null);

  // progress (real): mastered question ids (optional, but if you store it, it’s real)
  const [masteredCount, setMasteredCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // exam date (real)
  const [examDate, setExamDate] = useState<string>("");
  const [daysToExam, setDaysToExam] = useState<number>(14);
  const [showExamSetter, setShowExamSetter] = useState(false);

  // streak (real): shift-history is array of ISO dates "YYYY-MM-DD"
  const [streakDays, setStreakDays] = useState<DayDot[]>([]);
  const [shiftComplete, setShiftComplete] = useState(false);

  const isP = level === "Paramedic";

  const theme = useMemo(() => {
    return {
      bg: isP ? "bg-[#0B1022]" : "bg-[#0F172A]",
      accent: isP ? "text-rose-300" : "text-cyan-300",
      accentStrong: isP ? "text-rose-200" : "text-cyan-200",
      ring: isP ? "border-rose-400/35" : "border-cyan-400/35",
      chip: isP ? "bg-rose-500/10 border-rose-500/20" : "bg-cyan-500/10 border-cyan-500/20",
      chipText: isP ? "text-rose-200" : "text-cyan-200",
      btnGrad: isP ? "from-rose-600 to-red-500" : "from-blue-600 to-cyan-500",
      bar: isP ? "bg-rose-500" : "bg-cyan-400",
      barGlow: isP ? "shadow-[0_0_12px_#f43f5e]" : "shadow-[0_0_12px_#22d3ee]",
      glowA: isP ? "bg-rose-500/10" : "bg-cyan-500/10",
      glowB: isP ? "bg-red-600/10" : "bg-blue-600/10",
      icon: isP ? "⚡️" : "🚑",
      modeLabel: isP ? "ALS" : "BLS",
    };
  }, [isP]);

  const status = useMemo(() => statusFromReadiness(readiness), [readiness]);

  const ROUTES = useMemo(() => {
    return {
      sim: "/sim",
      pay: "/pay",
      // adjust if your station routes differ
      drill: `/station?category=${encodeURIComponent(weakDomain)}`,
      review: `/station?mode=review&category=${encodeURIComponent(weakDomain)}`,
    };
  }, [weakDomain]);

  // ---- streak helpers (REAL) ----
  function loadShiftHistory(): string[] {
    return safeJSON<string[]>(localStorage.getItem("shift-history"), []);
  }
  function saveShiftHistory(arr: string[]) {
    const unique = Array.from(new Set(arr)).sort(); // stable
    localStorage.setItem("shift-history", JSON.stringify(unique));
    return unique;
  }
  function recomputeLast7(historyISO: string[]) {
    const set = new Set(historyISO);
    const base = new Date();
    const last7: DayDot[] = [];
    for (let i = 6; i >= 0; i--) {
      const iso = addDaysISO(base, -i);
      last7.push({ iso, label: dayLetterFromISO(iso), active: set.has(iso) });
    }
    setStreakDays(last7);
    const t = todayISO();
    setShiftComplete(set.has(t));
  }
  function logShiftToday() {
    const t = todayISO();
    const hist = loadShiftHistory();
    if (!hist.includes(t)) {
      const next = saveShiftHistory([...hist, t]);
      recomputeLast7(next);
    } else {
      recomputeLast7(hist);
    }
  }

  // ---- init load (REAL) ----
  useEffect(() => {
    // level + name
    const lvl = normalizeLevel(localStorage.getItem("userLevel"));
    setLevel(lvl);
    setUserName(localStorage.getItem("userName") || "FUTURE MEDIC");

    // plan (url param wins)
    const urlPlan = params.get("plan");
    if (urlPlan) {
      setPlan(urlPlan);
      localStorage.setItem("userPlan", urlPlan);
    } else {
      const storedPlan = localStorage.getItem("userPlan");
      setPlan(storedPlan);
    }

    // diagnostic base fields
    const storedWeak = localStorage.getItem("weakestDomain");
    if (storedWeak) setWeakDomain(storedWeak);

    const wp = Number(localStorage.getItem("weakestDomainPct"));
    if (Number.isFinite(wp)) setWeakPct(clamp(Math.round(wp)));

    const pp = Number(localStorage.getItem("passProbability"));
    if (Number.isFinite(pp)) setPassProb(clamp(Math.round(pp)));

    const cl = Number(localStorage.getItem("confidenceLow"));
    const ch = Number(localStorage.getItem("confidenceHigh"));
    if (Number.isFinite(cl)) setCiLow(clamp(Math.round(cl)));
    if (Number.isFinite(ch)) setCiHigh(clamp(Math.round(ch)));

    // domain breakdown (real)
    const db = safeJSON<DomainRow[]>(localStorage.getItem("domainBreakdown"), []);
    if (Array.isArray(db) && db.length) {
      const sorted = [...db].sort((a, b) => a.accuracy - b.accuracy);
      setDomainBreakdown(sorted.slice(0, 8));

      // align weakest if missing
      if (!storedWeak && sorted[0]?.category) setWeakDomain(sorted[0].category);
      if (!Number.isFinite(wp) && typeof sorted[0]?.accuracy === "number") setWeakPct(sorted[0].accuracy);
    }

    // missed question (real)
    const da = safeJSON<DiagnosticAnswer[]>(localStorage.getItem("diagnosticAnswers"), []);
    if (Array.isArray(da) && da.length) {
      const firstMiss = da.find((a) => a && a.isCorrect === false) || null;
      setMissed(firstMiss);
    }

    // readiness: prefer stored readinessScore, else compute from answers
    const rs = Number(localStorage.getItem("readinessScore"));
    if (Number.isFinite(rs)) {
      setReadiness(clamp(Math.round(rs)));
    } else if (Array.isArray(da) && da.length) {
      const correct = da.filter((a) => a.isCorrect).length;
      setReadiness(readinessScoreFromAnswers(correct, da.length));
    } else {
      setReadiness(0);
    }

    // exam date (real)
    const storedExam = localStorage.getItem("exam-date"); // "YYYY-MM-DD"
    if (storedExam) {
      setExamDate(storedExam);
      const d = daysUntil(storedExam);
      if (Number.isFinite(d)) setDaysToExam(d);
    } else {
      const dte = Number(localStorage.getItem("daysToExam"));
      if (Number.isFinite(dte) && dte >= 0 && dte <= 365) setDaysToExam(Math.round(dte));
    }

    // progress (real)
    const mastered = safeJSON<number[]>(localStorage.getItem("mastered-ids"), []);
    setMasteredCount(Array.isArray(mastered) ? mastered.length : 0);

    const totalForLevel = questions.filter((q) => q.level === lvl).length;
    setTotalCount(totalForLevel || questions.length || 0);

    // streak (real)
    const hist = loadShiftHistory();
    recomputeLast7(hist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function saveExamDate() {
    if (!examDate) return;
    localStorage.setItem("exam-date", examDate);
    const d = daysUntil(examDate);
    if (Number.isFinite(d)) setDaysToExam(d);
    setShowExamSetter(false);
  }

  function switchLevel(next: Level) {
    localStorage.setItem("userLevel", next);
    setLevel(next);
    // optional: kick them to sim to regenerate diagnostic in that mode
    // router.push("/sim");
  }

  const nextAction = useMemo(() => {
    if (readiness < 65) return { title: "Fix your weakest domain", sub: `Start ${weakDomain} drills now.` };
    if (readiness < 80) return { title: "Stabilize + retest", sub: `Do a drill then run a full sim.` };
    return { title: "Maintain peak readiness", sub: `Full sim + review misses.` };
  }, [readiness, weakDomain]);

  return (
    <div className={`min-h-screen ${theme.bg} text-white pb-32 relative overflow-hidden`}>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-28 left-1/2 -translate-x-1/2 w-[740px] h-[740px] ${theme.glowA} blur-[150px] rounded-full`} />
        <div className={`absolute -left-40 top-[30%] w-[560px] h-[560px] ${theme.glowB} blur-[150px] rounded-full`} />
        <div className="absolute -right-40 bottom-[-15%] w-[560px] h-[560px] bg-white/5 blur-[170px] rounded-full" />
      </div>

      {/* Sticky Header */}
      <header className="relative z-40 px-5 py-5 border-b border-white/5 bg-black/10 backdrop-blur-md sticky top-0">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <span className="text-[11px] font-black tracking-[0.22em] uppercase text-slate-200">NREMTS</span>
                <span className={`text-[11px] font-mono ${theme.accent}`}>{theme.modeLabel} • {level}</span>
              </div>

              {plan ? (
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${theme.chip}`}>
                  <span className={`text-[10px] font-black tracking-widest uppercase ${theme.chipText}`}>plan</span>
                  <span className="text-[11px] font-mono text-white">{plan.toUpperCase()}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                  <span className="text-[10px] font-black tracking-widest uppercase text-slate-300">free</span>
                  <span className="text-[11px] font-mono text-slate-200">locked</span>
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center gap-2 min-w-0">
              <h1 className="text-xl font-black tracking-tight truncate">
                {userName}
              </h1>
              <span className="text-white/20">•</span>
              <span className={`text-xs font-black uppercase tracking-widest ${status.tone}`}>{status.label}</span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>T-{daysToExam} days</span>
              <span className="text-white/15">|</span>
              <button onClick={() => setShowExamSetter((v) => !v)} className="text-slate-300 hover:text-white">
                {examDate ? "edit exam date" : "set exam date"}
              </button>
              <span className="text-white/15">|</span>
              <button
                onClick={() => switchLevel(level === "EMT" ? "Paramedic" : "EMT")}
                className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${theme.chip}`}
              >
                <span className={`text-[10px] font-black uppercase tracking-widest ${theme.chipText}`}>switch</span>
                <span className="text-[11px] font-mono text-white">{level === "EMT" ? "Paramedic" : "EMT"}</span>
              </button>
            </div>

            {showExamSetter && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none"
                />
                <button
                  onClick={saveExamDate}
                  className={`px-4 py-2 rounded-xl font-black text-sm border border-white/10 bg-gradient-to-r ${theme.btnGrad}`}
                >
                  SAVE
                </button>
                <button
                  onClick={() => setShowExamSetter(false)}
                  className="px-4 py-2 rounded-xl font-black text-sm bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  CANCEL
                </button>
              </div>
            )}
          </div>

          <div className="text-right shrink-0">
            <div className="flex items-end justify-end gap-1">
              <span className={`text-4xl font-black tracking-tighter ${theme.accent}`}>{readiness}</span>
              <span className="text-sm font-bold text-white/35 mb-1">%</span>
            </div>
            <div className="mt-2 flex justify-end gap-2">
              {passProb !== null && (
                <div className={`px-3 py-1.5 rounded-full border ${theme.chip}`}>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${theme.chipText}`}>pass</span>{" "}
                  <span className="text-[11px] font-mono text-white">{passProb}%</span>
                </div>
              )}
              {ciLow !== null && ciHigh !== null && (
                <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">ci</span>{" "}
                  <span className="text-[11px] font-mono text-white">{ciLow}–{ciHigh}</span>
                </div>
              )}
            </div>
            <div className="mt-2 text-[10px] font-mono text-slate-400">
              mastered: <span className="text-white font-black">{masteredCount}</span> / {totalCount || "—"}
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 p-4 space-y-4 max-w-lg mx-auto">
        {/* Anatomy Centerpiece */}
        <section className="relative h-[340px] flex items-center justify-center rounded-3xl border border-white/10 bg-slate-900/25 overflow-hidden">
          <div className="absolute top-4 left-4 right-4 flex justify-between z-20 text-[10px] font-mono text-slate-500">
            <div>
              mode: <span className={theme.accentStrong}>{theme.modeLabel}</span>
              <br />
              focus: <span className="text-white/80">{weakDomain}</span>
            </div>
            <div className="text-right">
              risk: <span className="text-red-300">{weakPct}%</span>
              <br />
              t-{daysToExam} days
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[560px] ${theme.glowA} blur-[120px] rounded-full`} />
          </div>

          <BodyHeatmap />

          {/* Floating Weakness Indicator */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute bottom-4 right-4 backdrop-blur-md bg-black/35 border border-white/10 p-3 rounded-2xl shadow-2xl max-w-[170px]"
          >
            <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Weakest domain</div>
            <div className={`text-sm font-black leading-tight ${theme.accent}`}>{weakDomain.toUpperCase()}</div>
            <div className="mt-2 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className={`h-full ${theme.bar} ${theme.barGlow}`} style={{ width: `${clamp(weakPct)}%` }} />
            </div>
          </motion.div>
        </section>

        {/* Daily Mission */}
        <motion.section
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-slate-900/55 to-black/20 border border-white/10 p-5 rounded-3xl relative overflow-hidden"
        >
          <div className={`absolute inset-0 -z-10 blur-[150px] ${theme.glowA}`} />

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">Daily mission</div>
              <div className="mt-1 text-xl font-
