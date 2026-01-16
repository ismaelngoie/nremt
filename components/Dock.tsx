"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { id: "home", icon: "●", label: "Station" },
  { id: "sim", icon: "▲", label: "Simulator" },
  { id: "shift", icon: "■", label: "The Shift" },
  { id: "profile", icon: "◆", label: "Profile" },
];

export default function Dock() {
  const [active, setActive] = useState("home");

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative px-6 py-3 rounded-full transition-all group"
          >
            {active === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <div className="relative flex flex-col items-center gap-1">
              <span className={`text-xl leading-none ${active === item.id ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"}`}>
                {item.icon}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-wider ${active === item.id ? "text-white" : "text-gray-600"}`}>
                {item.label}
              </span>
            </div>
          </button>
        ))}

      </div>
    </div>
  );
}
