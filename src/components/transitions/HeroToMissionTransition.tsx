"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onHalfway: () => void;
  onComplete: () => void;
}

export function HeroToMissionTransition({ onHalfway, onComplete }: Props) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Dispara a troca de slide exatamente quando a tela estiver branca
    const timer = setTimeout(onHalfway, 800);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* O círculo branco cresce do centro até engolir a tela inteira */}
      <motion.div
        className="bg-white rounded-full shadow-[0_0_100px_rgba(255,255,255,1)]"
        style={{ width: "10vmax", height: "10vmax" }}
        initial={{ scale: 0 }}
        animate={{ scale: 25 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          // Espera um micro-segundo para evitar flashes antes de desmontar
          setTimeout(onComplete, 50);
        }}
      />
    </motion.div>
  );
}
