"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FinalToConclusionTransition({ onHalfway, onComplete }: any) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(onHalfway, 800);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center overflow-hidden">
      {/* Blinds verticais descendo */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-full bg-borcelle-red shadow-lg"
          style={{ height: "20vh" }}
          initial={{ scaleY: 0, originY: 0.5 }}
          animate={{ scaleY: [0, 1, 1, 0] }}
          transition={{ 
            duration: 1.4, 
            times: [0, 0.4, 0.6, 1], 
            ease: modernEase, 
            delay: i * 0.08 
          }}
          onAnimationComplete={i === 4 ? onComplete : undefined}
        />
      ))}
      <motion.div
        className="absolute z-10 bg-white/10 backdrop-blur-md rounded-full w-48 h-48 flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1.2, 0] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.6, 1], ease: modernEase, delay: 0.2 }}
      >
        <span className="text-white font-display text-2xl tracking-widest uppercase">Conclusão</span>
      </motion.div>
    </motion.div>
  );
}
