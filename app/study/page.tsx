"use client";

import { useState, useEffect } from "react";
import Dock from "@/components/Dock";
import Link from "next/link";
import { motion } from "framer-motion";

// Icons mapping for visual polish
const icons: {[key: string]: string} = {
  "Patient Treatment": "🚑",
  "Primary Assessment": "👁️",
  "Secondary Assessment": "🩺",
  "Scene Size-Up": "⚠️",
  "EMS Operations": "🚁",
  "Clinical Judgment": "🧠",
  "Airway": "🫁",
  "Cardiology": "❤️",
  "Trauma": "🦴",
  "Medical & OBGYN": "👶"
};

export default function StudyHub() {
  const [userLevel, setUserLevel] = useState("EMT");
  
  useEffect(() => {
    setUserLevel(localStorage.getItem("userLevel") || "EMT");
  }, []);

  // Define categories based on level
  const categories = userLevel === "EMT" 
    ? ["Patient Treatment", "Primary Assessment", "Secondary Assessment", "Scene Size-Up", "EMS Operations"]
    : ["Clinical Judgment", "Airway", "Cardiology", "Trauma", "Medical & OBGYN", "EMS Operations"];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white pb-32 p-6">
      
      {/* Header */}
      <header className="mb-8 mt-4">
        <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">Clinical Library</p>
        <h1 className="text-3xl font-black text-white">Study Hub</h1>
        <p className="text-gray-500 text-sm mt-1">
          {userLevel} Protocols • {categories.length} Modules
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <Link 
            href={`/station?category=${encodeURIComponent(cat)}`} 
            key={i}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 hover:bg-blue-900/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl border border-white/5 group-hover:scale-110 transition-transform">
                  {icons[cat] || "📚"}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{cat}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-blue-300 transition-colors">Start Practice Set →</p>
                </div>
              </div>
              
              {/* Fake Progress Ring */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" />
                  <circle cx="20" cy="20" r="16" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="100" strokeDashoffset={Math.random() * 60 + 20} strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <Dock />
    </div>
  );
}
