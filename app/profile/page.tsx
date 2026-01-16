"use client";

import Dock from "@/components/Dock";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [level, setLevel] = useState("EMT");

  useEffect(() => {
    setLevel(localStorage.getItem("userLevel") || "EMT");
  }, []);

  const toggleLevel = () => {
    const newLevel = level === "EMT" ? "Paramedic" : "EMT";
    localStorage.setItem("userLevel", newLevel);
    setLevel(newLevel);
    alert(`Switched to ${newLevel} Protocols. Your dashboard has been updated.`);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white pb-32 p-6">
      
      <header className="mb-8 mt-4">
        <h1 className="text-2xl font-black text-white">OPERATOR PROFILE</h1>
        <p className="text-gray-500 text-sm font-mono">ID: 8492-ALPHA • {level}</p>
      </header>

      <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/30 p-6 rounded-2xl mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
        </div>
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Status</h3>
        <h2 className="text-xl font-bold text-white mb-4">NREMT OS: PRO</h2>
        <button className="text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-bold transition-colors">
          Manage Subscription
        </button>
      </div>

      <div className="space-y-4">
        {/* PROFESSION SWITCHER */}
        <button onClick={toggleLevel} className="w-full bg-slate-900/50 border border-white/5 p-4 rounded-xl flex justify-between items-center group">
          <div className="text-left">
            <span className="text-sm font-medium block text-white">Certification Level</span>
            <span className="text-xs text-blue-400 font-bold">{level} (Tap to Switch)</span>
          </div>
          <div className="w-10 h-6 bg-slate-700 rounded-full relative group-hover:bg-blue-600 transition-colors">
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${level === "Paramedic" ? "right-1" : "left-1"}`} />
          </div>
        </button>

        <div className="bg-slate-900/50 border border-white/5 p-4 rounded-xl flex justify-between items-center">
          <span className="text-sm font-medium">Notifications</span>
          <div className="w-10 h-6 bg-green-600 rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
          </div>
        </div>

        <Link href="/" onClick={() => localStorage.clear()} className="block bg-red-900/20 border border-red-500/20 p-4 rounded-xl text-center text-red-400 font-bold text-sm">
          Reset All Data
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] text-gray-700 font-mono">NREMT SIM OS v1.2.0</p>
      </div>

      <Dock />
    </div>
  );
}
