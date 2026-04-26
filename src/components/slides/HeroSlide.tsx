"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";

export function HeroSlide() {
  return (
    <section className="h-full w-full relative overflow-hidden bg-borcelle-red flex flex-col p-8 md:p-16">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-start text-borcelle-cream w-full z-10"
      >
        <Logo color="cream" />
        <div className="text-right">
          <p className="text-sm font-medium tracking-wide">Criado por:</p>
          <h3 className="font-display text-2xl tracking-wide">José Milton dos Santos Nicolau Junior</h3>
        </div>
      </motion.div>

      {/* Main Title Center */}
      <div className="flex-grow flex items-center justify-center relative z-10 w-full group">
        <motion.h1
          className="flex flex-col items-center justify-center text-borcelle-cream text-center transition-transform duration-1000 group-hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <span className="font-display text-[16vw] leading-none tracking-tight block relative z-0">
            PLANO DE
          </span>
          <span className="font-display text-[16vw] leading-none tracking-tight block relative z-10 -mt-[1.5vw]">
            AÇÃO
          </span>
        </motion.h1>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-end text-borcelle-cream w-full z-10 gap-8"
      >
        <p className="text-sm font-medium tracking-widest hidden md:block">

        </p>
        <p className="md:w-1/2 text-sm md:text-base leading-relaxed font-medium">
          Bem-vindos!<br />
          Hoje vou apresentar meu plano de ação, baseado na metodologia 5W2H, sobre meu objetivo de morar na Irlanda, destacando metas, planejamento financeiro, etapas e cronograma.
        </p>
      </motion.div>
    </section>
  );
}
