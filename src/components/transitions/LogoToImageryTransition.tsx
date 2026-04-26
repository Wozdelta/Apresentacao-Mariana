"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onHalfway: () => void;
  onComplete: () => void;
}

export function LogoToImageryTransition({ onHalfway, onComplete }: Props) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    // Dispara a troca de slide exatamente quando a tela estiver coberta pelas portas
    const timer = setTimeout(onHalfway, 800);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between overflow-hidden">
      {/* Fechamento Superior */}
      <motion.div
        className="w-full bg-borcelle-dark/95 backdrop-blur-3xl border-b border-borcelle-red/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] origin-top"
        initial={{ height: 0 }}
        animate={{ height: ["0%", "50%", "50%", "0%"] }}
        transition={{ duration: 1.6, times: [0, 0.4, 0.6, 1], ease: modernEase }}
      />
      
      {/* Fechamento Inferior */}
      <motion.div
        className="w-full bg-borcelle-dark/95 backdrop-blur-3xl border-t border-borcelle-red/30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] origin-bottom"
        initial={{ height: 0 }}
        animate={{ height: ["0%", "50%", "50%", "0%"] }}
        transition={{ duration: 1.6, times: [0, 0.4, 0.6, 1], ease: modernEase }}
        onAnimationComplete={onComplete}
      />
      
      {/* Laser vermelho no centro que corta a tela */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px] bg-borcelle-red shadow-[0_0_20px_#cc2027,0_0_40px_#cc2027] z-10 -translate-y-1/2"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          scaleX: [0, 1, 1, 0] 
        }}
        transition={{ duration: 1.6, times: [0, 0.3, 0.7, 1], ease: modernEase }}
      />
    </motion.div>
  );
}
