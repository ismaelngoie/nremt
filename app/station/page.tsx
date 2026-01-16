"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { questions } from "@/lib/questions";

export default function StationMode() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [streak, setStreak] = useState(0);

  const question = questions[currentIndex % questions.length]; // Loop for demo

  // KEYBOARD SHORTCUTS (The Pro Feature)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (submitted) {
        if (e.key === "Enter") handleNext();
        return;
      }
      
      if (e.key === "1") setSelected(0);
      if (e.key === "2") setSelected(1);
      if (e.key === "3") setSelected(2);
      if (e.key === "4") setSelected(3);
      if (e.key === "Enter" && selected !== null) handleSubmit();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, submitted]);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === question.correctIndex) {
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelected(null);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans flex flex-col">
      
      {/* 1. HUD HEADER */}
      <header className="px-6 py-4 border-b border-white/5 bg-[#0F172A] flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </Link>
          <div>
            <h1 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Station Mode</h1>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${streak > 2 ? "bg-green-500 animate-pulse" : "bg-blue-500"}`} />
              <span className="text-xs font-mono text-blue-400">STREAK: {streak}</span>
            </div>
          </div>
        </div>
        
        <div className="text-right hidden md:block">
          <p className="text-[10px] text-gray-600 font-mono">KEYBOARD ACTIVE</p>
          <p className="text-xs font-bold text-gray-500">[1-4] SELECT • [ENTER] SUBMIT</p>
        </div>
      </header>

      {/* 2. QUESTION STAGE */}
      <main className="flex-1 max-w-3xl mx-auto w-full p-6 flex flex-col justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Category Tag */}
            <span className="inline-block px-3 py-1 rounded bg-blue-900/30 text-blue-400 text-xs font-bold tracking-widest mb-6 border border-blue-500/20">
              {question.category.toUpperCase()} • {question.level}
            </span>

            {/* The Question */}
            <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-10 text-slate-100">
              {question.text}
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, idx) => {
                // Logic for coloring options after submit
                let borderColor = "border-white/10";
                let bgColor = "bg-white/5";
                let textColor = "text-gray-300";

                if (submitted) {
                  if (idx === question.correctIndex) {
                    borderColor = "border-green-500";
                    bgColor = "bg-green-500/20";
                    textColor = "text-green-400";
                  } else if (idx === selected) {
                    borderColor = "border-red-500";
                    bgColor = "bg-red-500/20";
                    textColor = "text-red-400";
                  } else {
                    bgColor = "opacity-50";
                  }
                } else if (selected === idx) {
                  borderColor = "border-blue-500";
                  bgColor = "bg-blue-500/20";
                  textColor = "text-white";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => !submitted && setSelected(idx)}
                    className={`relative p-5 rounded-xl border-2 text-left transition-all duration-200 group ${borderColor} ${bgColor}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`hidden md:flex w-6 h-6 rounded border items-center justify-center text-[10px] font-mono mt-0.5 ${submitted ? "opacity-0" : "border-white/20 text-gray-500"}`}>
                        {idx + 1}
                      </div>
                      <span className={`text-lg font-medium ${textColor}`}>
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </main>

      {/* 3. FEEDBACK DRAWER (Slides up on Submit) */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-white/10 p-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selected === question.correctIndex ? "bg-green-500" : "bg-red-500"}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d={selected === question.correctIndex ? "M20 6L9 17l-5-5" : "M18 6L6 18M6 6l12 12"} /></svg>
                  </div>
                  <h3 className={`font-bold text-lg ${selected === question.correctIndex ? "text-green-400" : "text-red-400"}`}>
                    {selected === question.correctIndex ? "Correct" : "Incorrect"}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                NEXT SCENARIO <span className="text-xs bg-black/10 px-1.5 py-0.5 rounded ml-1 hidden md:inline">ENTER</span>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
