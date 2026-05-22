"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, FileText, Activity, ShieldCheck } from "lucide-react";
import { Logo } from "../Logo";

const hrRoles = [
  {
    icon: <Users className="w-6 h-6 text-borcelle-red" />,
    title: "Treinamento e Capacitação",
    desc: "Educar os confeiteiros sobre posturas corretas, alongamentos e uso adequado dos equipamentos durante o preparo dos doces."
  },
  {
    icon: <FileText className="w-6 h-6 text-borcelle-red" />,
    title: "Análise Ergonômica (AEP)",
    desc: "Garantir a realização da Avaliação Ergonômica Preliminar para identificar riscos nas bancadas e fornos da confeitaria."
  },
  {
    icon: <Activity className="w-6 h-6 text-borcelle-red" />,
    title: "Monitoramento de Saúde",
    desc: "Acompanhar exames periódicos e queixas de dores (ex: braços e costas) em parceria com a medicina do trabalho."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-borcelle-red" />,
    title: "Cultura de Prevenção",
    desc: "Promover pausas regulares, ginástica laboral e rodízio de tarefas (ex: alternar entre confeitar e embalar)."
  }
];

export function ImagerySlide() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="h-full min-h-screen w-full relative bg-borcelle-dark flex flex-col px-8 py-8 md:px-16 md:py-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-borcelle-red/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-borcelle-red/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6 gap-4"
      >
        <div>
          <h2 className="font-display text-5xl md:text-6xl text-borcelle-cream tracking-tight leading-none mb-4">
            Papel do <span className="text-borcelle-red">RH</span>
          </h2>
          <div className="text-zinc-400 text-base font-medium max-w-2xl mt-2">
            <p className="mb-3">O Setor de Recursos Humanos é protagonista na aplicação da NR 17:</p>
            <ul className="flex flex-col gap-2 pl-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-zinc-300">Não é apenas cumprir a lei, é cuidar das pessoas.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-zinc-300">Integra a ergonomia à cultura da confeitaria.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo container */}
        <div className="hidden md:flex flex-col justify-start h-full self-start mt-2">
          <Logo color="red" />
        </div>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto"
      >
        {hrRoles.map((role, idx) => (
          <motion.div
            variants={cardVariants}
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:bg-white/10 hover:border-borcelle-red/30 hover:shadow-[0_8px_30px_rgba(183,28,28,0.15)] hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-borcelle-red/0 to-borcelle-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-borcelle-red/10 flex items-center justify-center mb-6 border border-borcelle-red/20 group-hover:scale-110 transition-transform duration-500">
              {role.icon}
            </div>
            <h3 className="text-xl font-bold text-borcelle-cream mb-4 group-hover:text-white transition-colors">{role.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
              {role.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
