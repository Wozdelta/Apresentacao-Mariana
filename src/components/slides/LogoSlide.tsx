"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";
import Image from "next/image";

export function LogoSlide() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="h-full w-full relative overflow-hidden bg-white flex flex-col md:flex-row">
      {/* Left Content Half */}
      <div className="w-full md:w-[45%] flex flex-col p-8 md:p-16 h-full justify-between z-10 border-r border-zinc-100">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo color="red" />
        </motion.div>

        <div className="flex flex-col gap-6 mt-12 flex-grow justify-center max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-display text-5xl md:text-7xl text-borcelle-dark mb-6 tracking-tight leading-none">Objetivo da<br/>Norma</h2>
            <p className="text-2xl text-zinc-500 leading-relaxed font-medium mb-10">
              Por que a ergonomia é tão crucial para o ambiente de trabalho?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-borcelle-red font-bold text-2xl leading-snug mb-6">
              O objetivo principal da NR 17 é prevenir acidentes e doenças relacionadas ao trabalho (como LER e DORT), adaptando o ambiente ao trabalhador, e não o oposto.
            </p>
            <div className="h-px bg-zinc-200 w-full mb-6"></div>

            <ul className="text-zinc-600 space-y-3 font-medium">
              <li>✓ Redução de fadiga muscular</li>
              <li>✓ Prevenção de lesões posturais</li>
              <li>✓ Promoção de bem-estar físico e mental</li>
              <li>✓ Aumento da produtividade e foco</li>
            </ul>

          </motion.div>
        </div>

        <motion.p
          className="text-lg font-medium tracking-widest text-zinc-400 mt-auto hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          OBJETIVO PRINCIPAL
        </motion.p>
      </div>

      {/* Right Grid Half */}
      <motion.div
        className="w-full md:w-[55%] h-full flex flex-col p-8 md:p-12 gap-8 bg-zinc-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* Top Full Width Example */}
        <motion.div variants={itemVariants} className="flex-1 rounded-md overflow-hidden relative group shadow-sm bg-white border border-zinc-200">
           <Image
              src="/images/bakery_3.png"
              alt="Ambiente de trabalho organizado e ergonômico"
              fill
              className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-borcelle-dark/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white font-bold tracking-wide text-lg mb-1">Ambiente Adaptado</p>
              <p className="text-zinc-300 text-lg font-medium">Tapetes antifadiga e organização otimizada.</p>
            </div>
        </motion.div>

        {/* Bottom Example */}
        <motion.div variants={itemVariants} className="flex-1 rounded-md overflow-hidden relative group shadow-sm border border-zinc-200">
           <Image
              src="/images/bakery_2.png"
              alt="Mãos trabalhando com conforto"
              fill
              className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-borcelle-red/90 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white font-bold tracking-wide text-lg mb-1">Conforto no Preparo</p>
              <p className="text-white/80 text-lg font-medium">Equipamentos ajustados para evitar esforços repetitivos nocivos.</p>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
