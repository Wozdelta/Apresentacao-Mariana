"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";

export function ConclusionSlide() {
  return (
    <section className="h-full w-full relative bg-borcelle-dark flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-borcelle-red rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-borcelle-red rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center flex flex-col items-center max-w-4xl"
      >
        <Logo color="cream" />
        <div className="h-8"></div>
        <h1 className="font-display text-6xl md:text-8xl leading-none text-borcelle-cream tracking-tight mb-8">
          A Receita do <span className="text-borcelle-red">Sucesso</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-zinc-400 text-2xl md:text-3xl font-medium leading-relaxed mb-12"
        >
          A ergonomia vai além da obrigação legal. Na Bouche Nerveuse, o cuidado com a postura e a saúde da equipe é o ingrediente secreto para bolos feitos com perfeição, funcionários felizes e uma marca forte.
        </motion.p>

      </motion.div>
      
    </section>
  );
}
