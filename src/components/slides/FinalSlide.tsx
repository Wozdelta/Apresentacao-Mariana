"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Gavel, TrendingDown, Stethoscope } from "lucide-react";

export function FinalSlide() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="h-full w-full relative bg-borcelle-dark flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-borcelle-red/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-borcelle-red/10 rounded-full mix-blend-screen filter blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center mb-12"
      >
        <h2 className="font-display text-5xl md:text-7xl leading-none text-borcelle-cream tracking-normal drop-shadow-lg mb-4">
          Consequências Trabalhistas
        </h2>
        <p className="text-borcelle-cream/80 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
          O que acontece se a Bouche Nerveuse ignorar a NR 17?
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
      >
        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-start gap-5 hover:bg-white/10 hover:border-borcelle-red/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(183,28,28,0.15)] transition-all duration-300 group">
          <div className="bg-borcelle-red/10 p-4 rounded-2xl shrink-0 border border-borcelle-red/20 group-hover:scale-110 transition-transform duration-300">
            <Gavel className="w-8 h-8 text-borcelle-red group-hover:drop-shadow-[0_0_10px_rgba(183,28,28,0.5)]" />
          </div>
          <div className="mt-1">
            <h3 className="text-borcelle-cream font-bold text-2xl mb-2 group-hover:text-white transition-colors">Multas e Processos</h3>
            <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300">Infrações de segurança do trabalho geram pesadas multas do Ministério do Trabalho e processos por danos morais e materiais.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-start gap-5 hover:bg-white/10 hover:border-borcelle-red/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(183,28,28,0.15)] transition-all duration-300 group">
          <div className="bg-borcelle-red/10 p-4 rounded-2xl shrink-0 border border-borcelle-red/20 group-hover:scale-110 transition-transform duration-300">
            <Stethoscope className="w-8 h-8 text-borcelle-red group-hover:drop-shadow-[0_0_10px_rgba(183,28,28,0.5)]" />
          </div>
          <div className="mt-1">
            <h3 className="text-borcelle-cream font-bold text-2xl mb-2 group-hover:text-white transition-colors">Adoecimento (LER/DORT)</h3>
            <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300">Lesões por Esforço Repetitivo são comuns na confeitaria sem ergonomia, causando dor crônica aos funcionários.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-start gap-5 hover:bg-white/10 hover:border-borcelle-red/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(183,28,28,0.15)] transition-all duration-300 group">
          <div className="bg-borcelle-red/10 p-4 rounded-2xl shrink-0 border border-borcelle-red/20 group-hover:scale-110 transition-transform duration-300">
            <TrendingDown className="w-8 h-8 text-borcelle-red group-hover:drop-shadow-[0_0_10px_rgba(183,28,28,0.5)]" />
          </div>
          <div className="mt-1">
            <h3 className="text-borcelle-cream font-bold text-2xl mb-2 group-hover:text-white transition-colors">Queda na Produtividade</h3>
            <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300">Funcionários com dor ou cansados produzem menos, erram mais as receitas e perdem o foco na qualidade.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-start gap-5 hover:bg-white/10 hover:border-borcelle-red/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(183,28,28,0.15)] transition-all duration-300 group">
          <div className="bg-borcelle-red/10 p-4 rounded-2xl shrink-0 border border-borcelle-red/20 group-hover:scale-110 transition-transform duration-300">
            <AlertTriangle className="w-8 h-8 text-borcelle-red group-hover:drop-shadow-[0_0_10px_rgba(183,28,28,0.5)]" />
          </div>
          <div className="mt-1">
            <h3 className="text-borcelle-cream font-bold text-2xl mb-2 group-hover:text-white transition-colors">Alto Turnover</h3>
            <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300">O ambiente desgastante faz com que os talentos peçam demissão rapidamente, aumentando os custos de rescisão e contratação.</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
