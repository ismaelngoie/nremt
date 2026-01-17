"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { questions } from "@/lib/questions";
import { useRouter } from "next/navigation";

export default function SimulatorPage() {
  const router = useRouter();
  
  // State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // New "Thinking" state
  const [showGate, setShowGate] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 Hours
  
  // Data State
  const [activeQuestions, setActiveQuestions] = useState<typeof questions>([]);
  const [userLevel, setUserLevel] = useState<string>("EMT");

  // --- INIT ---
  useEffect(() => {
    const level = localStorage.getItem("userLevel") || "EMT";
    setUserLevel(level);
    const filtered = questions.filter(q => q.level === level);
    setActiveQuestions(filtered.length > 0 ? filtered : questions);
  }, []);

  const question = activeQuestions[currentQIndex % activeQuestions.length];

  // --- TIMER ---
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  // --- HANDLERS ---
  const handleNext = () => {
    if (selectedOption === null) return;

    // TRIGGER THE STOP AT Q5
    if (currentQIndex === 4) {
      setIsAnalyzing(true);
      // Fake "Analysis" delay before showing the Gate
      setTimeout(() => setShowGate(true), 2500);
    } else {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  // --- 3. THE GATE (Paywall Redirect) ---
  if (showGate) {
    // We redirect to the paywall immediately after showing the status
    // But we render this briefly to smooth the transition
    setTimeout(() => router.push('/pay'), 100); 
    return (
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center">
        <div className="animate-pulse">
          <h1 className="text-3xl font-black text-white mb-2 tracking-widest">REDIRECTING...</h1>
        </div>
      </div>
    );
  }

  // --- 2. THE ANALYZING SCREEN (The "Glitch" Replacement) ---
  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center font-mono relative overflow-hidden">
        
        {/* Background Scanline */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="z-10"
        >
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            EXAM STOPPED
          </h1>
          
          <div className="space-y-2 text-blue-400 text-sm md:text-base">
            <p>&gt; ACQUIRING RESPONSE MATRIX...</p>
            <p>&gt; CALCULATING CONFIDENCE INTERVAL...</p>
            <p>&gt; DETERMINING COMPETENCY...</p>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- 1. THE SIMULATOR (Dark Mode / Premium Feel) ---
  if (!question) return <div className="min-h-screen bg-[#0F172A]" />;

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans flex flex-col">
      
      {/* HEADER */}
      <header className="px-6 py-4 border-b border-white/5 bg-[#0F172A] flex justify-between items-center sticky top-0 z-10">
        <div>
          <h1 className="text-xs font-bold tracking-widest text-blue-400 uppercase">
            NREMT ADAPTIVE SIMULATION
          </h1>
          <p className="text-[10px] text-gray-500 font-mono mt-1">CANDIDATE: {userLevel}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-mono font-bold text-white">{formatTime(timeLeft)}</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Time Remaining</p>
        </div>
      </header>

      {/* PROGRESS BAR */}
      <div className="w-full bg-slate-900 h-1">
        <div 
          className="bg-blue-600 h-full transition-all duration-500 shadow-[0_0_10px_#2563EB]" 
          style={{ width: `${((currentQIndex + 1) / 5) * 100}%` }} // Scaling just for the demo feel
        />
      </div>

      {/* QUESTION STAGE */}
      <main className="flex-1 max-w-3xl mx-auto w-full p-6 flex flex-col justify-center relative">
        
        {/* Question Card */}
        <motion.div
          key={currentQIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="bg-slate-800 text-gray-300 text-xs font-bold px-3 py-1 rounded border border-white/10">
              Q{currentQIndex + 1}
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              {question.category}
            </span>
          </div>

          <h2 className="text-xl md:text-3xl font-bold leading-relaxed mb-10 text-slate-100">
            {question.text}
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(idx)}
                className={`relative p-5 rounded-xl border-2 text-left transition-all duration-200 group ${
                  selectedOption === idx 
                    ? "border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                    selectedOption === idx ? "border-blue-500" : "border-gray-600"
                  }`}>
                    {selectedOption === idx && <div className="w-3 h-3 bg-blue-500 rounded-full" />}
                  </div>
                  <span className={`text-lg font-medium ${selectedOption === idx ? "text-white" : "text-gray-300"}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

      </main>

      {/* FOOTER */}
      <div className="p-6 border-t border-white/5 flex justify-end max-w-3xl mx-auto w-full">
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`px-8 py-4 rounded-xl font-bold text-white transition-all flex items-center gap-2 ${
            selectedOption === null 
              ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
              : "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
          }`}
        >
          {currentQIndex === 4 ? "COMPLETE EXAM" : "NEXT QUESTION"} 
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
