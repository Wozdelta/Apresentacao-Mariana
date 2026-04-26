"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";
import { CheckCircle2 } from "lucide-react";

export function RulesSlide() {
  const timeline = [
    {
      period: "Fase 1",
      title: "Pesquisa & Planejamento",
      description: "Escolha da cidade (Dublin), agência e escola de inglês. Definição do orçamento total necessário para o projeto."
    },
    {
      period: "Fase 2",
      title: "Organização Financeira",
      description: "Quitação do intercâmbio, compra gradual de euros e montagem da comprovação financeira exigida pelo governo irlandês."
    },
    {
      period: "Fase 3",
      title: "Documentação & Passagens",
      description: "Emissão de passaporte, fechamento do seguro saúde governamental e compra das passagens aéreas de ida."
    },
    {
      period: "Fase 4",
      title: "Embarque & Chegada",
      description: "Despedidas da família e amigos, voo para a Irlanda e chegada na acomodação temporária."
    },
    {
      period: "Fase 5",
      title: "Estabelecimento",
      description: "Tirar o visto de estudante (IRP/GNIB), emissão do PPS Number, alugar acomodação definitiva e buscar emprego."
    }
  ];

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
      <div className="w-full md:w-[40%] bg-borcelle-red flex flex-col p-8 md:p-16 h-full justify-between z-10 shadow-2xl">
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
            <h2 className="font-display text-7xl md:text-8xl text-borcelle-cream mb-6 tracking-tight leading-none drop-shadow-sm">Cronograma</h2>
            <p className="text-xl text-borcelle-cream/90 leading-relaxed font-medium mb-12">
              A jornada para a Irlanda não acontece da noite para o dia. Este é o mapa visual das etapas necessárias para transformar esse objetivo em realidade, desde o primeiro planejamento até o momento de pisar em solo europeu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-borcelle-cream font-bold text-xl leading-snug flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" />
              <span>Cada etapa concluída é um passo mais perto do destino final.</span>
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-sm font-medium tracking-widest text-borcelle-cream/70 mt-auto hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          PROJETO IRLANDA
        </motion.p>
      </div>

      {/* Right Timeline Half */}
      <div className="w-full md:w-[60%] bg-borcelle-cream h-full flex flex-col p-4 md:p-8 justify-center overflow-y-auto custom-scrollbar">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="max-w-2xl mx-auto w-full relative py-2"
        >
          {/* Linha vertical central/esquerda */}
          <div className="absolute left-3 md:left-5 top-8 bottom-8 w-1 bg-borcelle-red/20 rounded-full" />

          <div className="flex flex-col gap-4">
            {timeline.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative pl-12 md:pl-16">
                {/* Ponto na linha */}
                <div className="absolute left-[14px] md:left-[22px] top-[20px] w-4 h-4 bg-borcelle-red rounded-full shadow-[0_0_15px_rgba(204,32,39,0.5)] z-10 transform -translate-x-1/2 ring-4 ring-white" />
                
                {/* Conteúdo do Card */}
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl shadow-black/5 border border-zinc-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-borcelle-red/10 text-borcelle-red font-bold text-[10px] rounded-full mb-2 tracking-widest uppercase">
                    {item.period}
                  </span>
                  <h4 className="text-borcelle-dark font-display text-xl md:text-2xl mb-1.5">{item.title}</h4>
                  <p className="text-zinc-500 leading-relaxed text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
