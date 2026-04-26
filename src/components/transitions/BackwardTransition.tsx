"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onHalfway: () => void;
  onComplete: () => void;
}

export function BackwardTransition({ onHalfway, onComplete }: Props) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(onHalfway, 600);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "0%", "-100%"] }}
        transition={{ duration: 1.2, times: [0, 0.4, 0.6, 1], ease: modernEase }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
}
