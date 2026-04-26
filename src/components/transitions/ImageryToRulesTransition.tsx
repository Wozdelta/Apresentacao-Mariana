"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onHalfway: () => void;
  onComplete: () => void;
}

export function ImageryToRulesTransition({ onHalfway, onComplete }: Props) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    // Dispara a troca aos 800ms, quando os painéis estão totalmente fechados
    const timer = setTimeout(onHalfway, 800);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  // Criamos 5 persianas verticais
  const shutters = Array.from({ length: 5 });

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex perspective-1000">
      {shutters.map((_, i) => (
        <motion.div
          key={i}
          className="h-full flex-1 bg-zinc-950 border-r border-white/5 shadow-2xl"
          style={{ transformOrigin: "left" }}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: [90, 0, 0, 90] }}
          transition={{ 
            duration: 1.4, 
            times: [0, 0.4, 0.6, 1], 
            ease: modernEase,
            delay: i * 0.05 // Efeito cascata
          }}
          onAnimationComplete={i === shutters.length - 1 ? onComplete : undefined}
        />
      ))}
    </motion.div>
  );
}
