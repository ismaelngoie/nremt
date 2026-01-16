"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "home", href: "/dashboard", icon: "●", label: "Station" },
  { id: "sim", href: "/simulator", icon: "▲", label: "Simulator" }, // Points to our new Station Mode
  { id: "shift", href: "/study", icon: "■", label: "The Shift" }, // Placeholders for now
  { id: "profile", href: "/profile", icon: "◆", label: "Profile" },
];

export default function Dock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-sm md:max-w-none md:w-auto">
      <div className="flex items-center justify-between md:justify-center md:gap-2 p-2 bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full shadow-2xl shadow-black/50">
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.id} href={item.href} className="relative px-4 py-3 md:px-6 rounded-full transition-all group">
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className="relative flex flex-col items-center gap-1">
                <span className={`text-xl leading-none ${isActive ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"}`}>
                  {item.icon}
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? "text-white" : "text-gray-600"}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}

      </div>
    </div>
  );
}
