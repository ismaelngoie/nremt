"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PaywallPage() {
  const [selectedPlan, setSelectedPlan] = useState<"lifetime" | "monthly" | "weekly">("lifetime");
  const [userLevel, setUserLevel] = useState("EMT");
  const [userName, setUserName] = useState("CANDIDATE");

  useEffect(() => {
    setUserLevel(localStorage.getItem("userLevel") || "EMT");
    // In a real flow, you might have asked for their name earlier, or default to Future Medic
    setUserName("FUTURE MEDIC");
  }, []);

  // Future Date for ID Card
  const validDate = new Date();
  validDate.setFullYear(validDate.getFullYear() + 2);
  const dateString = validDate.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }); // MM/YYYY

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans flex flex-col items-center p-4 md:p-6 relative overflow-y-auto">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* 1. THE ID CARD (Identity Reinforcement) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-sm mt-4 mb-8"
      >
        <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-blue-900/50 relative overflow-hidden text-black transform rotate-1 hover:rotate-0 transition-transform duration-500">
          {/* Holographic Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-50 pointer-events-none" />
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">National Registry</p>
              <div className="h-1 w-12 bg-blue-600 mt-1" />
            </div>
            <span className="text-xl font-black text-gray-200">2026</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center border-2 border-blue-100 text-3xl">
              {userLevel === "Paramedic" ? "⚡️" : "🚑"}
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase mb-0.5">{userLevel} CERTIFICATION</p>
              <h2 className="text-2xl font-black tracking-tight leading-none">{userName}</h2>
              <p className="text-[10px] font-mono text-gray-500 mt-1">VALID THROUGH: {dateString}</p>
            </div>
          </div>

          <div className="flex justify-between items-end">
             <div className="flex gap-2">
               <div className="px-2 py-1 bg-gray-100 rounded text-[9px] font-bold text-gray-600">NREMT-P</div>
               <div className="px-2 py-1 bg-gray-100 rounded text-[9px] font-bold text-gray-600">BLS</div>
             </div>
             {/* Authentic looking barcode */}
             <div className="h-6 w-24 bg-black opacity-80" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 90%, 20% 90%, 25% 100%, 30% 100%, 35% 80%, 40% 100%)"}}></div>
          </div>
        </div>
      </motion.div>

      {/* 2. VALUE PROPS (What You Get) */}
      <div className="w-full max-w-sm space-y-3 mb-8 z-10">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-400 text-lg">📚</span>
          <span className="text-gray-200">Unlock <strong>2026 Clinical Protocols</strong></span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-blue-400 text-lg">🧠</span>
          <span className="text-gray-200">Unlimited <strong>Clinical Scenarios</strong></span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-yellow-400 text-lg">🛡️</span>
          <span className="text-gray-200"><strong>100% Pass Guarantee</strong> or Refund</span>
        </div>
      </div>

      {/* 3. PRICING TIERS */}
      <div className="w-full max-w-sm space-y-3 z-10 mb-8">
        
        {/* LIFETIME */}
        <button
          onClick={() => setSelectedPlan("lifetime")}
          className={`relative w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
            selectedPlan === "lifetime" 
              ? "bg-blue-600/20 border-blue-500 shadow-[0_0_30px_-10px_rgba(59,130,246,0.4)]" 
              : "bg-slate-800/50 border-slate-700 opacity-80 hover:opacity-100"
          }`}
        >
          {selectedPlan === "lifetime" && (
            <div className="absolute -top-3 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
              Best Value
            </div>
          )}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white">Lifetime Access</h3>
              <p className="text-xs text-slate-400">One-time payment. Own it forever.</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 line-through block">$149</span>
              <span className="text-xl font-black text-white">$69</span>
            </div>
          </div>
        </button>

        {/* MONTHLY */}
        <button
          onClick={() => setSelectedPlan("monthly")}
          className={`relative w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
            selectedPlan === "monthly" 
              ? "bg-blue-600/20 border-blue-500" 
              : "bg-slate-800/50 border-slate-700 opacity-80 hover:opacity-100"
          }`}
        >
          {selectedPlan === "monthly" && (
            <div className="absolute -top-3 right-4 bg-gray-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Popular
            </div>
          )}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white">Monthly Pro</h3>
              <p className="text-xs text-slate-400">Full access. Cancel anytime.</p>
            </div>
            <span className="text-xl font-bold text-white">$19<span className="text-sm font-normal text-slate-400">/mo</span></span>
          </div>
        </button>

        {/* WEEKLY (Low Friction) */}
        <button
          onClick={() => setSelectedPlan("weekly")}
          className={`relative w-full p-3 rounded-xl border transition-all duration-300 text-left flex justify-between items-center ${
            selectedPlan === "weekly" 
              ? "bg-blue-600/10 border-blue-500/50" 
              : "bg-transparent border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          <span className="text-sm font-medium text-slate-300">Weekly Access</span>
          <span className="text-sm font-bold text-white">$6.99<span className="text-xs font-normal text-slate-500">/wk</span></span>
        </button>
      </div>

      {/* CTA Button */}
      <Link href="/dashboard" className="w-full max-w-sm z-10 sticky bottom-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-black text-lg shadow-lg hover:shadow-cyan-500/25 transition-all text-white border border-white/10"
        >
          UNLOCK CERTIFICATION
        </motion.button>
        <p className="text-center text-[10px] text-slate-500 mt-3 font-medium">
          Launch pricing ends soon. Verified Secure.
        </p>
      </Link>

    </div>
  );
}
