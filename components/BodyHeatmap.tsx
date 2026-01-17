"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

type HeatKey = "Neuro" | "Airway" | "Cardiology" | "Trauma";

type HeatRegion = {
  key: HeatKey;
  label: string;
  pct: number; // 0..100
  tone: "good" | "warn" | "crit";
  hint: string;
  protocol?: string;
};

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n));
}

function toneStyles(tone: HeatRegion["tone"]) {
  if (tone === "good") {
    return {
      pill: "bg-emerald-500/10 border-emerald-500/20 text-emerald-200",
      dot: "bg-emerald-500",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.35)]",
      ring: "stroke-emerald-400",
      fill: "rgba(16,185,129,0.20)",
    };
  }
  if (tone === "warn") {
    return {
      pill: "bg-amber-500/10 border-amber-500/20 text-amber-200",
      dot: "bg-amber-400",
      glow: "shadow-[0_0_30px_rgba(245,158,11,0.35)]",
      ring: "stroke-amber-400",
      fill: "rgba(245,158,11,0.20)",
    };
  }
  return {
    pill: "bg-rose-500/10 border-rose-500/20 text-rose-200",
    dot: "bg-rose-500",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.35)]",
    ring: "stroke-rose-400",
    fill: "rgba(244,63,94,0.22)",
  };
}

function Ring({ value }: { value: number }) {
  const r = 10;
  const c = 2 * Math.PI * r;
  const v = clamp(value);
  const offset = c - (v / 100) * c;

  return (
    <svg width="26" height="26" viewBox="0 0 26 26" className="-rotate-90">
      <circle cx="13" cy="13" r={r} stroke="rgba(255,255,255,0.10)" strokeWidth="3" fill="none" />
      <circle
        cx="13"
        cy="13"
        r={r}
        stroke="rgba(255,255,255,0.70)"
        strokeWidth="3"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BodyHeatmap() {
  // This can later be driven by real data/props.
  const regions = useMemo<HeatRegion[]>(
    () => [
      { key: "Neuro", label: "Neuro", pct: 74, tone: "warn", hint: "Review LOC + stroke basics", protocol: "1.3" },
      { key: "Airway", label: "Airway", pct: 98, tone: "good", hint: "Maintain reps, keep speed", protocol: "2.1" },
      { key: "Cardiology", label: "Cardiology", pct: 42, tone: "crit", hint: "Push ACLS rhythm ID drills", protocol: "4.2" },
      { key: "Trauma", label: "Trauma", pct: 61, tone: "warn", hint: "Bleeding control + shock", protocol: "3.4" },
    ],
    []
  );

  const [active, setActive] = useState<HeatRegion | null>(null);

  const activeStyles = active ? toneStyles(active.tone) : null;

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center select-none">
      {/* Premium Background FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.06)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* Frame */}
      <div className="relative z-10 w-full max-w-[520px] h-[380px] flex items-center justify-center">
        {/* Left HUD */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="absolute left-0 top-10 hidden sm:flex flex-col gap-2"
        >
          {regions
            .filter((r) => r.tone === "good")
            .slice(0, 2)
            .map((r) => {
              const s = toneStyles(r.tone);
              return (
                <button
                  key={r.key}
                  onMouseEnter={() => setActive(r)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(r)}
                  onBlur={() => setActive(null)}
                  className={`text-left w-[170px] px-3 py-2 rounded-xl border ${s.pill} backdrop-blur-md hover:bg-white/5 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                      <span className="text-[10px] tracking-[0.22em] font-black uppercase opacity-90">{r.label}</span>
                    </div>
                    <div className="opacity-80">
                      <Ring value={r.pct} />
                    </div>
                  </div>
                  <div className="mt-1 text-[11px] font-mono text-white/70">{r.pct}%</div>
                </button>
              );
            })}
        </motion.div>

        {/* Right HUD */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute right-0 top-10 hidden sm:flex flex-col gap-2"
        >
          {regions
            .filter((r) => r.tone !== "good")
            .slice(0, 2)
            .map((r) => {
              const s = toneStyles(r.tone);
              return (
                <button
                  key={r.key}
                  onMouseEnter={() => setActive(r)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(r)}
                  onBlur={() => setActive(null)}
                  className={`text-left w-[190px] px-3 py-2 rounded-xl border ${s.pill} backdrop-blur-md hover:bg-white/5 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                      <span className="text-[10px] tracking-[0.22em] font-black uppercase opacity-90">{r.label}</span>
                    </div>
                    <div className="opacity-80">
                      <Ring value={r.pct} />
                    </div>
                  </div>
                  <div className="mt-1 text-[11px] font-mono text-white/70">
                    {r.pct}% <span className="text-white/30">•</span>{" "}
                    <span className="text-white/50">Protocol {r.protocol}</span>
                  </div>
                </button>
              );
            })}
        </motion.div>

        {/* Interactive Body */}
        <motion.svg
          width="240"
          height="420"
          viewBox="0 0 120 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Outer silhouette (subtle) */}
          <path
            d="M60 8 C 80 8, 92 25, 92 45 C 92 62, 86 76, 80 90 C 75 102, 74 114, 76 132 C 78 154, 70 188, 60 200 C 50 188, 42 154, 44 132 C 46 114, 45 102, 40 90 C 34 76, 28 62, 28 45 C 28 25, 40 8, 60 8 Z"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1"
            fill="rgba(255,255,255,0.02)"
          />

          {/* HEAD (Neuro) */}
          {(() => {
            const r = regions.find((x) => x.key === "Neuro")!;
            const s = toneStyles(r.tone);
            const isActive = active?.key === "Neuro";
            return (
              <motion.path
                d="M60 18 C 74 18, 82 30, 82 44 C 82 58, 74 68, 60 68 C 46 68, 38 58, 38 44 C 38 30, 46 18, 60 18 Z"
                stroke={isActive ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.25)"}
                strokeWidth={isActive ? 1.2 : 0.8}
                fill={isActive ? s.fill : "rgba(255,255,255,0.05)"}
                whileHover={{ cursor: "pointer" }}
                onMouseEnter={() => setActive(r)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(r)}
                onBlur={() => setActive(null)}
              />
            );
          })()}

          {/* LUNGS (Airway) */}
          {(() => {
            const r = regions.find((x) => x.key === "Airway")!;
            const s = toneStyles(r.tone);
            const isActive = active?.key === "Airway";
            return (
              <>
                <motion.path
                  d="M44 82 Q 32 105 54 116 L 56 90 Z"
                  fill={isActive ? s.fill : "rgba(16,185,129,0.18)"}
                  stroke={isActive ? "rgba(255,255,255,0.65)" : "rgba(16,185,129,0.65)"}
                  strokeWidth={isActive ? 1.2 : 1}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{ cursor: "pointer" }}
                  onMouseEnter={() => setActive(r)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(r)}
                  onBlur={() => setActive(null)}
                />
                <motion.path
                  d="M76 82 Q 88 105 66 116 L 64 90 Z"
                  fill={isActive ? s.fill : "rgba(16,185,129,0.18)"}
                  stroke={isActive ? "rgba(255,255,255,0.65)" : "rgba(16,185,129,0.65)"}
                  strokeWidth={isActive ? 1.2 : 1}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  whileHover={{ cursor: "pointer" }}
                  onMouseEnter={() => setActive(r)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(r)}
                  onBlur={() => setActive(null)}
                />
              </>
            );
          })()}

          {/* HEART (Cardiology) */}
          {(() => {
            const r = regions.find((x) => x.key === "Cardiology")!;
            const s = toneStyles(r.tone);
            const isActive = active?.key === "Cardiology";
            return (
              <>
                <motion.circle
                  cx="68"
                  cy="96"
                  r={7}
                  fill={isActive ? s.fill : "rgba(244,63,94,0.65)"}
                  stroke={isActive ? "rgba(255,255,255,0.75)" : "rgba(244,63,94,0.85)"}
                  strokeWidth={isActive ? 1.2 : 1}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  whileHover={{ cursor: "pointer" }}
                  onMouseEnter={() => setActive(r)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(r)}
                  onBlur={() => setActive(null)}
                />
                {/* pulse ring */}
                <motion.circle
                  cx="68"
                  cy="96"
                  r={12}
                  fill="none"
                  stroke="rgba(244,63,94,0.35)"
                  strokeWidth="1"
                  animate={{ opacity: [0, 0.7, 0], scale: [0.9, 1.1, 1.25] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              </>
            );
          })()}

          {/* TORSO (Trauma) */}
          {(() => {
            const r = regions.find((x) => x.key === "Trauma")!;
            const s = toneStyles(r.tone);
            const isActive = active?.key === "Trauma";
            return (
              <motion.path
                d="M40 74 L 36 134 L 60 148 L 84 134 L 80 74 Z"
                stroke={isActive ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.16)"}
                strokeWidth={isActive ? 1.2 : 0.9}
                fill={isActive ? s.fill : "rgba(255,255,255,0.02)"}
                whileHover={{ cursor: "pointer" }}
                onMouseEnter={() => setActive(r)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(r)}
                onBlur={() => setActive(null)}
              />
            );
          })()}

          {/* spine line */}
          <path
            d="M60 70 L 60 165"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        </motion.svg>

        {/* Center Tooltip */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[420px] rounded-2xl border backdrop-blur-xl bg-slate-950/60 px-4 py-3 ${
                activeStyles ? activeStyles.pill : "border-white/10"
              } ${activeStyles ? activeStyles.glow : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeStyles?.dot || "bg-white/40"}`} />
                    <div className="text-[10px] tracking-[0.22em] font-black uppercase opacity-90">
                      {active.label}
                    </div>
                    {active.protocol && (
                      <div className="text-[10px] font-mono text-white/60">PROTOCOL {active.protocol}</div>
                    )}
                  </div>
                  <div className="mt-1 text-[12px] text-white/80 leading-snug">{active.hint}</div>
                </div>

                <div className="shrink-0 text-right">
                  <div className="text-2xl font-black tracking-tight text-white">{active.pct}%</div>
                  <div className="text-[10px] font-mono text-white/50">Confidence</div>
                </div>
              </div>

              <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${active.tone === "good" ? "bg-emerald-400" : active.tone === "warn" ? "bg-amber-400" : "bg-rose-400"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${clamp(active.pct)}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              <div className="mt-2 text-[10px] font-mono text-white/40">
                Hover another region • Click cards on the sides
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile chips (simple, premium) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex sm:hidden gap-2">
          {regions.slice(0, 3).map((r) => {
            const s = toneStyles(r.tone);
            const isActive = active?.key === r.key;
            return (
              <button
                key={r.key}
                onClick={() => setActive(isActive ? null : r)}
                className={`px-3 py-2 rounded-full border backdrop-blur-md text-[10px] font-black tracking-widest uppercase ${
                  isActive ? "bg-white/10 border-white/20 text-white" : `${s.pill}`
                }`}
              >
                {r.label} {r.pct}%
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
