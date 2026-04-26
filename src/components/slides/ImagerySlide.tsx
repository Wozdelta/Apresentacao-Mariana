"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Logo } from "../Logo";

const planData = [
  { step: 1, what: "Definir a meta de morar na Irlanda", why: "Ter um objetivo claro e bem definido", where: "Brasil", when: "Imediatamente", who: "Eu", how: "Estruturar meu plano pessoal e financeiro", howMuch: "Sem custo" },
  { step: 2, what: "Organizar minhas finanças", why: "Saber quanto ganho, gasto e posso investir", where: "Brasil", when: "Curto prazo", who: "Eu", how: "Fazer controle financeiro mensal", howMuch: "Sem custo" },
  { step: 3, what: "Reduzir gastos desnecessários", why: "Aumentar o valor disponível para investir", where: "Brasil", when: "Curto prazo", who: "Eu", how: "Cortar despesas supérfluas", howMuch: "Economia mensal" },
  { step: 4, what: "Aumentar meus investimentos", why: "Alcançar rendimento de R$ 5.000 por mês", where: "Brasil", when: "Alto prazo", who: "Eu", how: "Fazer aportes frequentes até completar o valor", howMuch: "Falta cerca de R$ 160.000" },
  { step: 5, what: "Pesquisar curso e visto de estudante", why: "Entrar legalmente na Irlanda", where: "Brasil / Irlanda", when: "Médio prazo", who: "Eu", how: "Escolher escola, curso e requisitos do visto", howMuch: "Taxas, curso e doc." },
  { step: 6, what: "Montar reserva para mudança", why: "Garantir segurança financeira inicial", where: "Brasil", when: "Antes da viagem", who: "Eu", how: "Guardar dinheiro para passagem, moradia e etc", howMuch: "Valor a definir" },
  { step: 7, what: "Trabalhar meio período na Irlanda", why: "Ajudar no sustento durante os estudos", where: "Irlanda", when: "Após chegada", who: "Eu", how: "Buscar emprego compatível com visto de estudante", howMuch: "1500 € + 950 € inv." },
  { step: 8, what: "Trocar para visto de trabalho", why: "Permanecer fixo na Irlanda", where: "Irlanda", when: "Longo prazo", who: "Eu", how: "Buscar oportunidade profissional e regularizar", howMuch: "Custos com doc." },
];

const getWhereBadge = (where: string) => {
  if (where === "Brasil") return <span className="bg-green-900/30 text-green-400 border border-green-800/50 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">{where}</span>;
  if (where === "Irlanda") return <span className="bg-orange-900/30 text-orange-400 border border-orange-800/50 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">{where}</span>;
  return <span className="bg-zinc-800 text-zinc-300 border border-zinc-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">{where}</span>;
};

const getWhenBadge = (when: string) => {
  if (when === "Imediatamente") return <span className="bg-red-900/30 text-red-400 border border-red-800/50 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">{when}</span>;
  if (when === "Curto prazo" || when === "Antes da viagem") return <span className="bg-yellow-900/30 text-yellow-400 border border-yellow-800/50 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">{when}</span>;
  return <span className="bg-blue-900/30 text-blue-400 border border-blue-800/50 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">{when}</span>;
};

export function ImagerySlide() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const rowVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="h-full min-h-screen w-full relative bg-borcelle-dark flex flex-col px-8 py-4 md:px-16 md:pt-8 md:pb-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-4 gap-4"
      >
        <div>
          <h2 className="font-display text-5xl md:text-6xl text-borcelle-cream tracking-tight leading-none mb-4">
            Plano de Ação <span className="text-borcelle-red">5W2H</span>
          </h2>
          <div className="text-zinc-400 text-base font-medium max-w-2xl mt-2">
            <p className="mb-3">Aqui temos estas 3 etapas do trabalho, todas aplicadas em uma única ferramenta:</p>
            <ul className="flex flex-col gap-1.5 pl-2">
              <li className="flex items-center gap-2">
                <span className="text-borcelle-red font-black text-sm bg-borcelle-red/10 px-1.5 py-0.5 rounded min-w-[24px] text-center">1.</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-zinc-300">Estabeleça prioridades</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-borcelle-red font-black text-sm bg-borcelle-red/10 px-1.5 py-0.5 rounded min-w-[24px] text-center">2.</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-zinc-300">Defina responsabilidades</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-borcelle-red font-black text-sm bg-borcelle-red/10 px-1.5 py-0.5 rounded min-w-[24px] text-center">3.</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-zinc-300">Estabeleça prazos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo container */}
        <div className="hidden md:flex flex-col justify-start h-full self-start mt-2">
          <Logo color="red" />
        </div>
      </motion.div>

      {/* Table Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="flex-1 w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col"
      >
        <div className="overflow-x-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800">
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-zinc-500 w-16 text-center">Etapa</th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[15%]">What <span className="text-zinc-500 text-[10px] ml-1">(O que)</span></th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[18%]">Why <span className="text-zinc-500 text-[10px] ml-1">(Por que)</span></th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[10%]">Where <span className="text-zinc-500 text-[10px] ml-1">(Onde)</span></th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[12%]">When <span className="text-zinc-500 text-[10px] ml-1">(Quando)</span></th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[8%]">Who <span className="text-zinc-500 text-[10px] ml-1">(Quem)</span></th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[18%]">How <span className="text-zinc-500 text-[10px] ml-1">(Como)</span></th>
                <th className="py-4 px-6 font-display tracking-widest uppercase text-xs text-borcelle-red w-[14%]">How much <span className="text-zinc-500 text-[10px] ml-1">(Quanto)</span></th>
              </tr>
            </thead>
            <tbody>
              {planData.map((row, idx) => (
                <motion.tr
                  variants={rowVariants}
                  key={idx}
                  className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors group cursor-default"
                >
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 font-bold text-xs border border-zinc-700 group-hover:bg-borcelle-red group-hover:text-white group-hover:border-borcelle-red transition-colors shadow-sm">
                      {row.step}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-zinc-200 font-bold leading-snug">{row.what}</td>
                  <td className="py-4 px-6 text-sm text-zinc-400 leading-snug">{row.why}</td>
                  <td className="py-4 px-6">{getWhereBadge(row.where)}</td>
                  <td className="py-4 px-6">{getWhenBadge(row.when)}</td>
                  <td className="py-4 px-6 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[9px] font-bold text-zinc-300 tracking-tighter">EU</div>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-zinc-400 leading-snug">{row.how}</td>
                  <td className="py-4 px-6 text-sm text-borcelle-cream font-medium leading-snug">
                    {row.howMuch.includes("R$") || row.howMuch.includes("€") ? (
                      <span className="text-emerald-400">{row.howMuch}</span>
                    ) : (
                      row.howMuch
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
