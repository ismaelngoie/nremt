"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { questions } from "@/lib/questions";

// --- Types ---
type Level = "EMT" | "Paramedic";

export default function StationPageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
      </div>
    }>
      <StationPage />
    </Suspense>
  );
}

function StationPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  // If category exists, it's "Focus Mode" (Study). If not, it's "Shift Mode" (Timer).
  const isStudyMode = !!categoryFilter;

  // --- STATE ---
  const [level, setLevel] = useState<Level>("EMT");
  const [activeQuestions, setActiveQuestions] = useState<typeof questions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(isStudyMode ? 0 : 900); // 15 mins for Shift
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  // --- THEME ENGINE ---
  const isP = level === "Paramedic";
  const theme = useMemo(() => ({
    bg: isP ? "bg-[#0B1022]" : "bg-[#0F172A]",
    accent: isP ? "text-rose-400" : "text-cyan-400",
    accentBg: isP ? "bg-rose-500" : "bg-cyan-500",
    border: isP ? "border-rose-500/30" : "border-cyan-500/30",
    glow: isP ? "shadow-rose-500/20" : "shadow-cyan-500/20",
    btn: isP ? "bg-gradient-to-r from-rose-600 to-red-600" : "bg-gradient-to-r from-blue-600 to-cyan-500",
    optionSelected: isP ? "border-rose-500 bg-rose-500/10" : "border-cyan-400 bg-cyan-500/10",
  }), [isP]);

  // --- INIT ---
  useEffect(() => {
    // 1. Get Level
    const storedLevel = (localStorage.getItem("userLevel") as Level) || "EMT";
    setLevel(storedLevel === "Paramedic" ? "Paramedic" : "EMT");

    // 2. Filter Questions
    let filtered = questions.filter(q => q.level === storedLevel);
    if (categoryFilter) {
      filtered = filtered.filter(q => q.category === categoryFilter);
    }

    // 3. Shuffle & Set
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    // If study mode, take all. If shift mode, take 10.
    const finalSet = isStudyMode ? shuffled : shuffled.slice(0, 10);
    
    if (finalSet.length === 0) {
       // Fallback if no questions match (prevents crash)
       setActiveQuestions(questions.slice(0, 5));
    } else {
       setActiveQuestions(finalSet);
    }
  }, [categoryFilter, isStudyMode]);

  const question = activeQuestions[currentIndex];
  const totalQs = activeQuestions.length;

  // --- TIMER (Shift Mode Only) ---
  useEffect(() => {
    if (isFinished || isStudyMode) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished, isStudyMode]);

  // --- KEYBOARD SHORTCUTS ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFinished) return;
      if (submitted) {
        if (e.key === "Enter") handleNext();
        return;
      }
      if (["1", "a", "A"].includes(e.key)) handleOptionSelect(0);
      if (["2", "b", "B"].includes(e.key)) handleOptionSelect(1);
      if (["3", "c", "C"].includes(e.key)) handleOptionSelect(2);
      if (["4", "d", "D"].includes(e.key)) handleOptionSelect(3);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, submitted, isFinished]);

  // --- LOGIC ---
  const handleOptionSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
    
    // Auto-submit for that snappy feel? No, let them confirm? 
    // Actually, "Million Dollar" apps usually let you select, then confirm, OR select and immediate reveal.
    // Let's go with: Select -> Immediate Feedback (Snappy)
    setSubmitted(true);
    
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
      // Save Mastery
      const mastered = JSON.parse(localStorage.getItem("mastered-ids") || "[]");
      if (!mastered.includes(question.id)) {
        mastered.push(question.id);
        localStorage.setItem("mastered-ids", JSON.stringify(mastered));
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= totalQs) {
      setIsFinished(true);
    } else {
      setSubmitted(false);
      setSelected(null);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- VIEW: LOADING ---
  if (!question) return <div className={`min-h-screen ${theme.bg}`} />;

  // --- VIEW: MISSION REPORT (End Screen) ---
  if (isFinished) {
    const percentage = totalQs > 0 ? Math.round((score / totalQs) * 100) : 0;
    const passed = percentage >= 70;
    
    return (
      <div className={`min-h-screen ${theme.bg} text-white font-sans flex items-center justify-center p-4 relative overflow-hidden`}>
        {/* Background FX */}
        <div className={`absolute top-[-20%] left-[-20%] w-[600px] h-[600px] ${isP ? "bg-rose-600/10" : "bg-cyan-500/10"} blur-[120px] rounded-full pointer-events-none`} />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-sm font-black tracking-[0.3em] text-slate-400 uppercase mb-2">After Action Report</h1>
            <div className={`text-4xl font-black ${passed ? "text-white" : "text-white"}`}>
              {isStudyMode ? "SESSION COMPLETE" : "SHIFT ENDED"}
            </div>
          </div>

          <div className="flex justify-center mb-10 relative">
             {/* Glowing Ring */}
             <div className={`absolute inset-0 rounded-full blur-xl opacity-40 ${passed ? "bg-emerald-500" : "bg-red-500"}`} />
             <div className={`relative w-32 h-32 rounded-full border-4 flex items-center justify-center bg-slate-950 ${passed ? "border-emerald-500 text-emerald-400" : "border-red-500 text-red-500"}`}>
                <div className="text-center">
                  <div className="text-3xl font-black">{percentage}%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">{passed ? "PASSED" : "FAILED"}</div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
               <div className="text-[10px] text-slate-400 uppercase tracking-widest">Correct</div>
               <div className="text-2xl font-black text-white">{score}/{totalQs}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
               <div className="text-[10px] text-slate-400 uppercase tracking-widest">XP Earned</div>
               <div className={`text-2xl font-black ${theme.accent}`}>+{score * 15}</div>
            </div>
          </div>

          <Link 
            href={isStudyMode ? "/dashboard" : "/dashboard"} 
            className={`block w-full py-4 rounded-xl font-black text-center text-white shadow-lg transition-transform active:scale-95 ${theme.btn}`}
          >
            RETURN TO BASE
          </Link>
        </motion.div>
      </div>
    );
  }

  // --- VIEW: ACTIVE STATION ---
  return (
    <div className={`min-h-screen ${theme.bg} text-white font-sans flex flex-col relative overflow-hidden`}>
      
      {/* Background Grids */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,#fff_50%)] bg-[length:100%_4px]`} />
      
      {/* HEADER (HUD) */}
      <header className="px-4 py-4 md:px-6 md:py-5 border-b border-white/5 bg-slate-950/50 backdrop-blur-md flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </Link>
          
          <div>
            <div className="flex items-center gap-2">
               <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${theme.accent}`}>
                 {categoryFilter ? categoryFilter : "GENERAL SHIFT"}
               </span>
               {!isStudyMode && (
                 <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[9px] font-bold border border-red-500/30 animate-pulse">
                   LIVE
                 </span>
               )}
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-3 mt-1.5">
               <div className="h-1.5 w-24 md:w-32 bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   className={`h-full ${theme.accentBg}`} 
                   initial={{ width: 0 }}
                   animate={{ width: `${((currentIndex) / totalQs) * 100}%` }}
                 />
               </div>
               <span className="text-[10px] font-mono text-slate-400">Q{currentIndex + 1} OF {totalQs}</span>
            </div>
          </div>
        </div>

        {/* Timer / Score */}
        {!isStudyMode ? (
          <div className="text-right">
             <div className={`text-xl font-mono font-bold tracking-tight ${timeLeft < 60 ? "text-red-500 animate-pulse" : "text-white"}`}>
               {formatTime(timeLeft)}
             </div>
             <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Time Left</div>
          </div>
        ) : (
           <div className="text-right">
             <div className={`text-xl font-mono font-bold tracking-tight ${theme.accent}`}>
               {score * 100}
             </div>
             <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">XP Gained</div>
           </div>
        )}
      </header>

      {/* QUESTION CARD */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6 flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.3 }}
          >
            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 rounded bg-slate-800 border border-white/10 text-[10px] font-bold tracking-widest text-slate-300 uppercase shadow-lg">
                 {question.category}
               </span>
               <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <h2 className="text-xl md:text-3xl font-bold leading-relaxed mb-8 text-slate-100 drop-shadow-md">
              {question.text}
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, idx) => {
                const isActive = selected === idx;
                const isCorrect = idx === question.correctIndex;
                
                let borderColor = "border-white/10";
                let bgColor = "bg-slate-800/40";
                let textColor = "text-slate-300";
                let shadow = "";

                if (submitted) {
                  if (isCorrect) {
                     borderColor = "border-emerald-500"; 
                     bgColor = "bg-emerald-500/10"; 
                     textColor = "text-emerald-400";
                     shadow = "shadow-[0_0_30px_rgba(16,185,129,0.1)]";
                  } else if (isActive) {
                     borderColor = "border-red-500"; 
                     bgColor = "bg-red-500/10"; 
                     textColor = "text-red-400";
                  } else {
                     bgColor = "opacity-40 grayscale";
                  }
                } else if (isActive) {
                   borderColor = theme.optionSelected.split(" ")[0]; // grab border part
                   bgColor = theme.optionSelected.split(" ")[1]; // grab bg part
                   textColor = "text-white";
                   shadow = isP ? "shadow-[0_0_20px_rgba(244,63,94,0.15)]" : "shadow-[0_0_20px_rgba(34,211,238,0.15)]";
                }

                return (
                  <button 
                    key={idx} 
                    onClick={() => handleOptionSelect(idx)} 
                    disabled={submitted}
                    className={`relative p-5 rounded-xl border transition-all duration-200 group text-left ${borderColor} ${bgColor} ${shadow} hover:border-white/20`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Key Hint (A, B, C...) */}
                      <div className={`hidden md:flex w-6 h-6 rounded border items-center justify-center text-[10px] font-mono mt-0.5 transition-colors ${
                        submitted 
                          ? (isCorrect ? "border-emerald-500 text-emerald-500 bg-emerald-500/10" : "border-white/10 text-slate-600") 
                          : "border-white/15 text-slate-500 group-hover:border-white/30 group-hover:text-slate-300"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      
                      <span className={`text-base md:text-lg font-medium leading-snug ${textColor}`}>
                        {option}
                      </span>

                      {/* Result Icon */}
                      {submitted && (isCorrect || isActive) && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                           {isCorrect 
                             ? <div className="text-emerald-500 bg-emerald-500/20 rounded-full p-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg></div>
                             : <div className="text-red-500 bg-red-500/20 rounded-full p-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M18 6L6 18M6 6l12 12"/></svg></div>
                           }
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* RATIONALE SYSTEM DRAWER */}
      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }} 
            transition={{ type: "spring", bounce: 0, duration: 0.4 }} 
            className="fixed bottom-0 left-0 w-full bg-[#020617] border-t border-white/10 z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.7)]"
          >
            {/* Progress/Scanning Line */}
            <div className={`h-1 w-full ${selected === question.correctIndex ? "bg-emerald-500" : "bg-red-500"}`} />
            
            <div className="max-w-4xl mx-auto p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`text-xs font-black uppercase tracking-widest px-2 py-1 rounded ${selected === question.correctIndex ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                    {selected === question.correctIndex ? "Target Hit" : "Target Missed"}
                  </div>
                </div>
                <div className="text-slate-300 text-sm md:text-base leading-relaxed opacity-90">
                   <span className="text-white font-bold">Rationale: </span>
                   {question.explanation}
                </div>
              </div>
              
              <button 
                onClick={handleNext} 
                className={`w-full md:w-auto px-10 py-4 rounded-xl font-black text-sm tracking-widest uppercase text-white shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 ${selected === question.correctIndex ? "bg-emerald-600" : "bg-slate-700 hover:bg-slate-600"}`}
              >
                {currentIndex + 1 >= totalQs ? "FINISH SHIFT" : "NEXT TARGET"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
