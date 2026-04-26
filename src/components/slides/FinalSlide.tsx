"use client";

import { motion } from "framer-motion";

export function FinalSlide() {
  return (
    <section className="h-full w-full relative bg-borcelle-red flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-black rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center flex flex-col items-center"
      >
        <h1 className="font-display text-[8rem] md:text-[15rem] leading-none text-borcelle-cream tracking-normal drop-shadow-2xl font-black">
          FIM
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-borcelle-cream/90 text-xl md:text-3xl font-medium tracking-widest uppercase mt-4"
        >
          Obrigado pela atenção
        </motion.p>
      </motion.div>
      
    </section>
  );
}
