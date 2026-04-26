"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onHalfway: () => void;
  onComplete: () => void;
  isTriggered?: boolean;
}

export function ExecuteToFinalTransition({ onHalfway, onComplete }: Props) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    // Dispara a troca aos 1100ms, quando a camada vermelha final cobrir a tela
    const timer = setTimeout(onHalfway, 1100);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      
      {/* Detalhe Extra: Linha horizontal cortando a tela rapidamente */}
      <motion.div
        className="absolute bg-white/40 h-[2px] shadow-[0_0_30px_rgba(255,255,255,1)] z-10"
        initial={{ width: "0vw", opacity: 1 }}
        animate={{ width: "100vw", opacity: [1, 1, 0], scaleY: [1, 4, 0] }}
        transition={{ duration: 0.8, ease: modernEase }}
      />

      {/* Camada 1: Círculo de borda fina e brilhante (Efeito Shockwave) */}
      <motion.div
        className="absolute rounded-full border-[15px] border-borcelle-red/60 shadow-[0_0_100px_rgba(204,32,39,0.8)]"
        initial={{ width: "0vmin", height: "0vmin", opacity: 1 }}
        animate={{ 
          width: "300vmin", 
          height: "300vmin", 
          opacity: [1, 1, 0] 
        }}
        transition={{ duration: 1.4, ease: modernEase }}
      />

      {/* Camada 2: Círculo escuro para contraste dramático */}
      <motion.div
        className="absolute bg-zinc-950 rounded-full shadow-[0_0_80px_rgba(0,0,0,1)]"
        initial={{ width: "0vmin", height: "0vmin" }}
        animate={{ 
          width: "300vmin", 
          height: "300vmin",
          opacity: [1, 1, 1, 0]
        }}
        transition={{ duration: 2.0, delay: 0.15, times: [0, 0.4, 0.7, 1], ease: modernEase }}
      />

      {/* Camada 3: Círculo Vermelho Principal que preenche tudo */}
      <motion.div
        className="absolute bg-borcelle-red rounded-full"
        initial={{ width: "0vmin", height: "0vmin" }}
        animate={{ 
          width: ["0vmin", "300vmin", "300vmin", "300vmin"], 
          height: ["0vmin", "300vmin", "300vmin", "300vmin"], 
          opacity: [1, 1, 1, 0] 
        }}
        transition={{ 
          duration: 2.2, 
          delay: 0.3, 
          times: [0, 0.4, 0.7, 1], 
          ease: modernEase 
        }}
        onAnimationComplete={onComplete}
      />
      
    </motion.div>
  );
}
