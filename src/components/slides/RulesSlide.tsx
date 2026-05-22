"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";
import { CheckCircle2, Building2, User } from "lucide-react";

export function RulesSlide() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="h-full w-full relative overflow-hidden flex flex-col md:flex-row bg-borcelle-cream">
      {/* Left Content Half */}
      <div className="w-full md:w-[40%] bg-gradient-to-br from-borcelle-red to-[#7f1111] flex flex-col p-8 md:p-16 h-full justify-between z-10 shadow-2xl relative overflow-hidden">
        {/* Background orb */}
        <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-0"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] bg-black/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo color="cream" />
        </motion.div>

        <div className="flex flex-col mt-12 flex-grow justify-center max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-display text-5xl md:text-7xl text-borcelle-cream mb-6 tracking-tight leading-none drop-shadow-sm">Responsabilidades</h2>
            <p className="text-xl text-borcelle-cream/90 leading-relaxed font-medium mb-12">
              A ergonomia não é uma via de mão única. Para que o ambiente da Bouche Nerveuse seja seguro e produtivo, há deveres para ambas as partes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-borcelle-cream font-bold text-xl leading-snug flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" />
              <span>O sucesso da ergonomia depende da colaboração entre empresa e equipe.</span>
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-sm font-medium tracking-widest text-borcelle-cream/70 mt-auto hidden md:block uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          NR 17 - DEVERES
        </motion.p>
      </div>

      {/* Right Split Half */}
      <div className="w-full md:w-[60%] bg-borcelle-cream h-full flex flex-col items-center justify-center p-4 md:p-12 overflow-y-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-6 w-full max-w-2xl my-auto"
        >
          {/* Empresa */}
          <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-200 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-borcelle-red/10 flex items-center justify-center border border-borcelle-red/20">
                <Building2 className="w-6 h-6 text-borcelle-red" />
              </div>
              <h3 className="font-display text-3xl text-borcelle-dark">A Empresa</h3>
            </div>
            <ul className="space-y-4 text-zinc-600 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-red mt-2 shrink-0" />
                <p>Fornecer mobiliário adequado (bancadas ajustáveis, cadeiras ergonômicas).</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-red mt-2 shrink-0" />
                <p>Garantir iluminação e temperatura confortáveis na cozinha.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-red mt-2 shrink-0" />
                <p>Implementar pausas regulares para descanso.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-red mt-2 shrink-0" />
                <p>Realizar a Análise Ergonômica do Trabalho (AET).</p>
              </li>
            </ul>
          </motion.div>

          {/* Colaborador */}
          <motion.div variants={itemVariants} className="bg-borcelle-dark p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-zinc-800 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[80px] pointer-events-none mix-blend-screen z-0"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-borcelle-cream/10 flex items-center justify-center border border-white/10">
                <User className="w-6 h-6 text-borcelle-cream" />
              </div>
              <h3 className="font-display text-3xl text-borcelle-cream">O Colaborador</h3>
            </div>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-cream mt-2 shrink-0" />
                <p>Utilizar corretamente os equipamentos fornecidos.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-cream mt-2 shrink-0" />
                <p>Participar dos treinamentos oferecidos sobre ergonomia.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-cream mt-2 shrink-0" />
                <p>Informar imediatamente qualquer desconforto ou dor constante.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-borcelle-cream mt-2 shrink-0" />
                <p>Adotar as posturas ensinadas durante o preparo dos doces.</p>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
