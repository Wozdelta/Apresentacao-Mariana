"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChefHat, Ruler, CupSoda } from "lucide-react";

export function ExecuteSlide() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="h-full w-full relative bg-borcelle-dark flex flex-col md:flex-row overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-borcelle-red/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-borcelle-red/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0"></div>

      {/* Left Text / Info */}
      <div className="w-full md:w-[45%] p-8 md:p-16 h-full flex flex-col justify-center z-10 relative">
        <motion.div variants={containerVariants} initial="hidden" whileInView="show">
          <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-7xl text-borcelle-cream mb-6 tracking-tight leading-none">
            Exemplos <br /><span className="text-borcelle-red">Práticos</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-10 max-w-lg">
            Como a <strong className="text-borcelle-cream">Bouche Nerveuse</strong> aplica a NR 17 no dia a dia da confeitaria para garantir a saúde dos colaboradores.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col hover:bg-white/10 transition-colors">
              <ChefHat className="w-8 h-8 text-emerald-500 mb-4" />
              <span className="text-zinc-500 text-lg font-medium mb-1">Satisfação</span>
              <span className="text-borcelle-cream font-display text-2xl md:text-3xl">+ 85%</span>
            </div>
            <div className="bg-borcelle-red/10 backdrop-blur-sm border border-borcelle-red/20 p-6 rounded-2xl flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-borcelle-red/0 to-borcelle-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CheckCircle className="w-8 h-8 text-borcelle-red mb-4 z-10" />
              <span className="text-borcelle-red/80 text-lg font-medium mb-1 z-10">Conformidade</span>
              <span className="text-borcelle-red font-display text-2xl md:text-3xl z-10">100% Legal</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Content / Visuals */}
      <div className="w-full md:w-[55%] bg-white/[0.02] backdrop-blur-xl h-full p-8 md:p-16 flex flex-col justify-center border-l border-white/5 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative w-full max-w-2xl mx-auto flex flex-col gap-6"
        >
          <div className="border-b border-white/10 pb-6 mb-2">
            <h3 className="text-borcelle-cream font-display text-3xl">Aplicações Reais</h3>
            <p className="text-zinc-400 text-lg mt-1">Intervenções ergonômicas já implementadas</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all shadow-lg">
              <div className="bg-borcelle-red/20 p-3 rounded-lg shrink-0 border border-borcelle-red/10">
                <Ruler className="w-6 h-6 text-borcelle-red" />
              </div>
              <div>
                <h4 className="text-borcelle-cream font-bold text-2xl mb-1">Bancadas de Altura Ajustável</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Bancadas com regulagem de altura para que cada confeiteiro possa decorar bolos sem curvar a coluna.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all shadow-lg">
              <div className="bg-emerald-500/20 p-3 rounded-lg shrink-0 border border-emerald-500/10">
                <CupSoda className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-borcelle-cream font-bold text-2xl mb-1">Rodízio e Pausas</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  A cada 2 horas de trabalho contínuo no preparo de doces, pausas de 10 minutos para descanso e alongamento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all shadow-lg">
              <div className="bg-blue-500/20 p-3 rounded-lg shrink-0 border border-blue-500/10">
                <CheckCircle className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="text-borcelle-cream font-bold text-2xl mb-1">Tapetes Antifadiga</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Instalação de tapetes emborrachados em frente aos fornos para reduzir o impacto nas articulações.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
