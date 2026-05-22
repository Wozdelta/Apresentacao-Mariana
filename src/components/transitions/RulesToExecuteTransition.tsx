"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RulesToExecuteTransition({ onHalfway, onComplete }: any) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(onHalfway, 800);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Porta Esquerda */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-borcelle-red w-1/2 shadow-[20px_0_50px_rgba(0,0,0,0.5)] z-10"
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "0%", "0%", "-100%"] }}
        transition={{ duration: 1.6, times: [0, 0.4, 0.6, 1], ease: modernEase }}
      />
      {/* Porta Direita */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 bg-borcelle-dark w-1/2 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-10"
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0%", "0%", "100%"] }}
        transition={{ duration: 1.6, times: [0, 0.4, 0.6, 1], ease: modernEase }}
        onAnimationComplete={onComplete}
      />
      {/* Texto Central */}
      <motion.div
        className="absolute z-20 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1.1, 0.8] }}
        transition={{ duration: 1.6, times: [0, 0.4, 0.5, 0.6, 1], ease: modernEase }}
      >
        <span className="text-white font-display text-5xl md:text-7xl tracking-widest uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Prática</span>
      </motion.div>
    </motion.div>
  );
}
