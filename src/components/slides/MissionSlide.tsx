"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";
import Image from "next/image";
import { Plane } from "lucide-react";
import { useEffect, useRef } from "react";

interface MissionSlideProps {
  onStartJourney?: () => void;
}

export function MissionSlide({ onStartJourney }: MissionSlideProps) {
  return (
    <section className="h-full w-full relative overflow-hidden bg-white flex">
      {/* Left Content Half */}
      <div className="w-full md:w-[55%] flex flex-col p-8 md:p-16 h-full justify-between z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo color="red" />
        </motion.div>

        <div className="flex flex-col gap-12 mt-12 flex-grow justify-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-display text-7xl md:text-8xl text-borcelle-dark mb-6 tracking-tight">Definições</h2>
            <p className="text-xl text-zinc-500 leading-relaxed font-medium">
              As escolhas que utilizei para a construção desta apresentação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <h3 className="font-display text-5xl text-borcelle-red mb-4">01.</h3>
              <h4 className="text-xl font-bold text-borcelle-dark mb-3">Pessoal ou Profissional?</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Pessoal, pois esta apresentação representa um objetivo de vida meu e um planejamento voltado para meu futuro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <h3 className="font-display text-5xl text-borcelle-red mb-4">02.</h3>
              <h4 className="text-xl font-bold text-borcelle-dark mb-3">Meta</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Morar na Irlanda com planejamento financeiro e profissional.
              </p>
            </motion.div>
          </div>
          
        </div>

        <motion.p
          className="text-sm font-medium tracking-widest text-zinc-400 mt-auto hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
        </motion.p>
      </div>

      {/* Right Image Half */}
      <motion.div
        className="hidden md:block w-[45%] h-full relative"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/viagem.jpg"
          alt="Viagem para a Irlanda"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay to blend perfectly */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 w-16" />
      </motion.div>
    </section>
  );
}
