"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ConclusionToEndTransition({ onHalfway, onComplete }: any) {
  const [mounted, setMounted] = useState(false);
  const modernEase: any = [0.76, 0, 0.24, 1];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(onHalfway, 1000);
    return () => clearTimeout(timer);
  }, [onHalfway]);

  if (!mounted) return null;

  return (
    <motion.div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Cinematic Fade to Black */}
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.4, 0.6, 1], ease: modernEase }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
}
