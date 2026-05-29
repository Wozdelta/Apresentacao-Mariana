"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";
import Image from "next/image";

export function HeroSlide() {
  return (
    <section className="h-full w-full relative overflow-hidden bg-borcelle-dark flex flex-col p-8 md:p-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bakery_hero1.png" 
          alt="Bouche Nerveuse Confeitaria" 
          fill 
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-borcelle-dark via-borcelle-dark/50 to-borcelle-dark/80" />
      </div>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-start text-borcelle-cream w-full z-10"
      >
        <Logo color="white" />
        <div className="text-right">
          <h3 className="font-display text-2xl tracking-wide">NR 17 - Ergonomia</h3>
        </div>
      </motion.div>

      {/* Main Title Center */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full group">
        <motion.h1
          className="flex flex-col items-center justify-center text-borcelle-red text-center transition-transform duration-1000 group-hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <span className="font-display text-[14vw] leading-none tracking-tight block relative z-0">
            ERGONOMIA
          </span>
          <span className="font-display text-[8vw] text-borcelle-cream leading-none tracking-tight block relative z-10 mt-2">
            NA BOUCHE NERVEUSE
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
        <p className="text-lg font-medium tracking-widest hidden md:block uppercase leading-relaxed">
          José Milton<br />Kaiky Leão
        </p>
        <p className="md:w-1/2 text-lg md:text-xl leading-relaxed font-medium">
          Docente: Mariana Beneli<br />
          Bem-vindos à nossa apresentação. Hoje abordaremos a NR 17 (Ergonomia) aplicada à realidade da nossa empresa.
        </p>
      </motion.div>
    </section>
  );
}
