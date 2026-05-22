"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChefHat } from "lucide-react";

interface PlaneTransitionProps {
  isTriggered: boolean;
  onHalfway?: () => void;
  onComplete: () => void;
}

export function PlaneTransition({ isTriggered, onHalfway, onComplete }: PlaneTransitionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isTriggered && onHalfway) {
      const timer = setTimeout(onHalfway, 800);
      return () => clearTimeout(timer);
    }
  }, [isTriggered, onHalfway]);

  if (!mounted) return null;

  // Curva de animação super fluida e moderna (estilo Apple/Premium)
  const modernEase: any = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isTriggered && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Camada 1: Vermelho Borcelle */}
          <motion.div
            className="absolute inset-0 bg-borcelle-red shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            initial={{ y: "-100%" }}
            animate={{ y: ["-100%", "0%", "0%", "100%"] }}
            transition={{ duration: 1.6, times: [0, 0.4, 0.6, 1], ease: modernEase }}
          />
          
          {/* Camada 2: Escuro Premium */}
          <motion.div
            className="absolute inset-0 bg-borcelle-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            initial={{ y: "-100%" }}
            animate={{ y: ["-100%", "0%", "0%", "100%"] }}
            transition={{ duration: 1.6, times: [0, 0.4, 0.6, 1], ease: modernEase, delay: 0.1 }}
            onAnimationComplete={onComplete}
          />

          {/* O ícone descendo pela tela */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center"
            initial={{ y: "-50vh", opacity: 0, scale: 0.5 }}
            animate={{ 
              y: "120vh", 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1.2, 1] 
            }}
            transition={{ 
              duration: 1.8, 
              ease: modernEase, 
              delay: 0.15 
            }}
          >
            <ChefHat 
              className="w-32 h-32 relative z-10 text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" 
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
