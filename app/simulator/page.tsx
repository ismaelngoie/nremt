"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { questions } from "@/lib/questions";

export default function SimulatorPage() {
  const [examState, setExamState] = useState<"rules" | "active" | "results">("rules");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({}); // Store answers
  const [timeLeft, setTimeLeft] = useState(7200); // 2 Hours (7200s)
  
  // Real Exam Mock Data
  // In a real app, you'd fetch 70 unique questions here. For now, we cycle your sample questions.
  const EXAM_LENGTH = 70; 
  const currentQuestion = questions[currentQIndex % questions.length];

  // --- TIMER ---
  useEffect(() => {
    if (examState !== "active") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setExamState("results");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [examState]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- HANDLERS ---
  const handleSelect = (idx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQIndex]: idx }));
  };

  const handleNext = () => {
    if (currentQIndex + 1 >= EXAM_LENGTH) {
      setExamState("results");
    } else {
      setCurrentQIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) setCurrentQIndex(prev => prev - 1);
  };

  // --- SCORING ---
  const calculateScore = () => {
    let correct = 0;
    for (let i = 0; i < EXAM_LENGTH; i++) {
        // Map exam index to your question pool index
        const q = questions[i % questions.length];
        if (selectedAnswers[i] === q.correctIndex) correct++;
    }
    return correct;
  };

  // --- VIEW: RULES SCREEN ---
  if (examState === "rules") {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Medical BG Graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">NREMT SIMULATOR</h1>
          <p className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-8">Full Cognitive Exam Protocol</p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">⏱</div>
              <div>
                <h3 className="font-bold text-white">120 Minutes</h3>
                <p className="text-xs text-gray-400">The timer does not stop. Pace yourself.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">📝</div>
              <div>
                <h3 className="font-bold text-white">70 Questions</h3>
                <p className="text-xs text-gray-400">Covers all domains: Airway, Cardio, Trauma, Medical, Ops.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">🚫</div>
              <div>
                <h3 className="font-bold text-white">No Assistance</h3>
                <p className="text-xs text-gray-400">Answers are only revealed after the exam is submitted.</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setExamState("active")}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            BEGIN EXAM
          </button>
          <Link href="/dashboard" className="block text-center mt-4 text-xs text-gray-500 hover:text-white">Cancel</Link>
        </div>
      </div>
    );
  }

  // --- VIEW: RESULTS SCREEN ---
  if (examState === "results") {
    const score = calculateScore();
    const percent = Math.round((score / EXAM_LENGTH) * 100);
    const passed = percent >= 70;

    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-900 border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${passed ? "bg-green-500/20" : "bg-red-500/20"}`}>
            <span className={`text-5xl ${passed ? "text-green-500" : "text-red-500"}`}>
              {passed ? "✓" : "✕"}
            </span>
          </div>
          
          <h2 className={`text-3xl font-black mb-2 ${passed ? "text-green-400" : "text-red-400"}`}>
            {passed ? "PASSED" : "ATTEMPT FAILED"}
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            {passed ? "You met the NREMT standard." : "Did not meet the passing standard."}
          </p>

          <div className="flex justify-between items-center bg-slate-800 p-6 rounded-xl mb-8">
            <div className="text-center">
              <p className="text-xs text-gray-500 font-bold uppercase">Score</p>
              <p className="text-2xl font-bold text-white">{score}/{EXAM_LENGTH}</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-xs text-gray-500 font-bold uppercase">Percent</p>
              <p className={`text-2xl font-bold ${passed ? "text-green-400" : "text-red-400"}`}>{percent}%</p>
            </div>
          </div>

          <Link href="/dashboard" className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
            RETURN TO DASHBOARD
          </Link>
        </div>
      </div>
    );
  }

  // --- VIEW: ACTIVE EXAM ---
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 bg-slate-900 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => setExamState("results")} className="text-red-400 text-sm font-bold hover:text-red-300">QUIT</button>
          <div className="h-6 w-px bg-white/10" />
          <span className="text-sm font-bold text-gray-400">Q {currentQIndex + 1} of {EXAM_LENGTH}</span>
        </div>
        <div className={`font-mono font-bold text-xl ${timeLeft < 300 ? "text-red-500 animate-pulse" : "text-white"}`}>
          {formatTime(timeLeft)}
        </div>
      </header>

      {/* Question Area */}
      <main className="flex-1 max-w-3xl mx-auto w-full p-6 flex flex-col justify-center">
        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
          {currentQuestion.category} • {currentQuestion.level}
        </span>
        
        <h2 className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-white">
          {currentQuestion.text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center gap-4 ${
                selectedAnswers[currentQIndex] === idx 
                  ? "border-blue-500 bg-blue-500/10 text-white" 
                  : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedAnswers[currentQIndex] === idx ? "border-blue-500" : "border-gray-500"
              }`}>
                {selectedAnswers[currentQIndex] === idx && <div className="w-3 h-3 bg-blue-500 rounded-full" />}
              </div>
              <span className="text-lg">{option}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="p-6 border-t border-white/5 flex justify-between items-center max-w-3xl mx-auto w-full">
        <button 
          onClick={handlePrev} 
          disabled={currentQIndex === 0}
          className={`px-6 py-3 rounded-lg font-bold text-sm ${currentQIndex === 0 ? "text-gray-600 cursor-not-allowed" : "text-gray-300 hover:bg-white/5"}`}
        >
          PREVIOUS
        </button>
        
        <button 
          onClick={handleNext}
          disabled={selectedAnswers[currentQIndex] === undefined}
          className={`px-8 py-3 rounded-lg font-bold text-white transition-all ${
            selectedAnswers[currentQIndex] === undefined
              ? "bg-gray-700 cursor-not-allowed text-gray-400"
              : "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
          }`}
        >
          {currentQIndex + 1 === EXAM_LENGTH ? "SUBMIT EXAM" : "NEXT QUESTION"}
        </button>
      </footer>
    </div>
  );
}
