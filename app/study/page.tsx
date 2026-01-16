"use client";

import { useState, useEffect } from "react";
import Dock from "@/components/Dock";
import Link from "next/link";
import { motion } from "framer-motion";
import { questions } from "@/lib/questions";

const icons: {[key: string]: string} = {
  "Patient Treatment": "🚑", "Primary Assessment": "👁️", "Secondary Assessment": "🩺",
  "Scene Size-Up": "⚠️", "EMS Operations": "🚁", "Clinical Judgment": "🧠",
  "Airway": "🫁", "Cardiology": "❤️", "Trauma": "🦴", "Medical & OBGYN": "👶"
};

export default function StudyHub() {
  const [userLevel, setUserLevel] = useState("EMT");
  const [masteredIds, setMasteredIds] = useState<number[]>([]); // Real Data
  
  useEffect(() => {
    // Load Data
    setUserLevel(localStorage.getItem("userLevel") || "EMT");
    const saved = JSON.parse(localStorage.getItem("mastered-ids") || "[]");
    setMasteredIds(saved);
  }, []);

  const categories = userLevel === "EMT" 
    ? ["Patient Treatment", "Primary Assessment", "Secondary Assessment", "Scene Size-Up", "EMS Operations"]
    : ["Clinical Judgment", "Airway", "Cardiology", "Trauma", "Medical & OBGYN", "EMS Operations"];

  // Helper to calculate progress per category
  const getProgress = (category: string) => {
    // 1. Find all questions for this category & level
    const catQuestions = questions.filter(q => q.level === userLevel && q.category === category);
    if (catQuestions.length === 0) return 0;

    // 2. Count how many of these are in the masteredIds array
    const masteredCount = catQuestions.filter(q => masteredIds.includes(q.id)).length;

    // 3. Return Percentage (0 to 100)
    return Math.round((masteredCount / catQuestions.length) * 100);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white pb-32 p-6">
      <header className="mb-8 mt-4">
        <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">Clinical Library</p>
        <h1 className="text-3xl font-black text-white">Study Hub</h1>
        <p className="text-gray-500 text-sm mt-1">{userLevel} Protocols • {categories.length} Modules</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => {
          const progress = getProgress(cat); // Real percentage
          
          // Calculate Ring Dash (Circumference ~100)
          const radius = 16;
          const circumference = 2 * Math.PI * radius; // ~100
          const dashOffset = circumference - (progress / 100) * circumference;

          return (
            <Link href={`/station?category=${encodeURIComponent(cat)}`} key={i}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 hover:bg-blue-900/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl border border-white/5 group-hover:scale-110 transition-transform">
                    {icons[cat] || "📚"}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{cat}</h3>
                    <p className="text-xs text-gray-500 group-hover:text-blue-300 transition-colors">
                      {progress === 100 ? "Mastered" : `${progress}% Complete`}
                    </p>
                  </div>
                </div>
                
                {/* REAL Progress Ring */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="20" cy="20" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" />
                    <circle 
                      cx="20" cy="20" r={radius} 
                      stroke={progress === 100 ? "#10B981" : "#3B82F6"} 
                      strokeWidth="3" fill="none" 
                      strokeDasharray={circumference} 
                      strokeDashoffset={dashOffset} 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
      <Dock />
    </div>
  );
}
