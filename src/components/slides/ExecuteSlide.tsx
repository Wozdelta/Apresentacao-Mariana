"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Target, Trophy } from "lucide-react";

export function ExecuteSlide() {
  // Dados simulados para o gráfico (projeção a longo prazo)
  const chartData = [
    { month: "2024", value: 1800, label: "R$ 1.800", isCurrent: false },
    { month: "2026", value: 3600, label: "R$ 3.600", isCurrent: true },
    { month: "2028", value: 4200, label: "R$ 4.200", isCurrent: false },
    { month: "2030", value: 4600, label: "R$ 4.600", isCurrent: false },
    { month: "2032", value: 5000, label: "R$ 5.000", isCurrent: false },
  ];

  const maxVal = 5000;

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

      {/* Left Text / Info */}
      <div className="w-full md:w-[45%] p-8 md:p-16 h-full flex flex-col justify-center z-10 relative">
        <motion.div variants={containerVariants} initial="hidden" whileInView="show">


          <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-7xl text-borcelle-cream mb-6 tracking-tight leading-none">
            Execute e <br /><span className="text-borcelle-red">Acompanhe</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            O plano só ganha vida com ação. O foco nos investimentos de alto retorno já mostra resultados concretos: a meta de <strong className="text-borcelle-cream">R$ 5.000 mensais</strong> está cada vez mais próxima.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col">
              <TrendingUp className="w-8 h-8 text-emerald-500 mb-4" />
              <span className="text-zinc-500 text-sm font-medium mb-1">Rendimento Atual</span>
              <span className="text-borcelle-cream font-display text-2xl md:text-3xl">R$ 3.600<span className="text-sm md:text-lg text-zinc-500">/mês</span></span>
            </div>
            <div className="bg-borcelle-red/10 border border-borcelle-red/20 p-6 rounded-2xl flex flex-col relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Trophy className="w-24 h-24 text-borcelle-red" />
              </div>
              <ArrowUpRight className="w-8 h-8 text-borcelle-red mb-4 z-10" />
              <span className="text-borcelle-red/80 text-sm font-medium mb-1 z-10">Status da Meta</span>
              <span className="text-borcelle-red font-display text-2xl md:text-3xl z-10">Em processo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Chart / Visuals */}
      <div className="w-full md:w-[55%] bg-zinc-900/30 h-full p-8 md:p-16 flex flex-col justify-center border-l border-zinc-800/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl relative w-full max-w-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h3 className="text-borcelle-cream font-display text-2xl">Crescimento de Rendimentos</h3>
              <p className="text-zinc-500 text-sm mt-1">Evolução dos rendimentos gerados a longo prazo</p>
            </div>
            <div className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 border border-emerald-500/20 whitespace-nowrap">
              <ArrowUpRight className="w-4 h-4" />
              Projeção até 2032
            </div>
          </div>

          <div className="h-72 flex items-end justify-between gap-3 md:gap-6 mt-8 relative">

            {/* Goal Line */}
            <div className="absolute top-[0%] left-0 right-0 border-t-2 border-dashed border-emerald-500/30 z-0 flex justify-end">
              <span className="text-emerald-500 font-bold text-xs -mt-6 mr-1 bg-zinc-900 px-2 rounded-full py-0.5 border border-emerald-500/20">META: R$ 5k</span>
            </div>

            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-4 relative group h-full justify-end z-10">
                {/* Tooltip on hover */}
                <div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-borcelle-dark text-xs font-bold px-3 py-1.5 rounded shadow-lg pointer-events-none z-20 whitespace-nowrap -mt-10">
                  {data.label}
                </div>

                {/* Bar Container */}
                <div className="w-full bg-zinc-800/50 rounded-t-xl relative flex items-end justify-center h-full border-b border-zinc-700">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(data.value / maxVal) * 100}%` }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-t-xl relative overflow-hidden transition-colors ${data.isCurrent ? 'bg-borcelle-red group-hover:bg-red-600' : 'bg-zinc-600 group-hover:bg-zinc-500'}`}
                  >
                    {/* Inner highlight for 3D feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-white/10" />
                  </motion.div>
                </div>

                {/* Label */}
                <span className={`text-xs md:text-sm font-medium whitespace-nowrap ${data.isCurrent ? 'text-borcelle-red font-bold' : 'text-zinc-500'}`}>
                  {data.month}
                </span>

                {data.isCurrent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute -bottom-10 md:-bottom-12 bg-borcelle-red text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(204,32,39,0.4)]"
                  >
                    Em processo
                  </motion.div>
                )}
              </div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
}
