"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

export function EndSlide() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6; // Volume agradável
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <section className="h-full w-full relative bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      <audio ref={audioRef} src="/images/Musica.mp3" autoPlay loop />
      {/* Luz muito sutil central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-borcelle-red/5 rounded-full filter blur-[150px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center flex flex-col items-center"
      >
        <h1 className="font-display text-[150px] md:text-[250px] leading-none text-borcelle-cream tracking-tight drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
          FIM
        </h1>
        
        {/* Traço minimalista */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-borcelle-red to-transparent w-full mt-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-zinc-500 text-sm md:text-base font-medium mt-12 uppercase tracking-[0.3em]"
        >
          Obrigado pela atenção
        </motion.p>
      </motion.div>

      {/* GIFs animando após o texto */}
      <motion.img 
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
        transition={{ delay: 2.0, duration: 0.8, type: "spring", bounce: 0.5 }}
        src="/images/homen aranha.gif" 
        alt="Homem Aranha" 
        className="absolute top-10 md:top-20 left-10 md:left-20 w-32 md:w-48 h-auto object-contain z-20 drop-shadow-2xl"
      />

      <motion.img 
        initial={{ opacity: 0, scale: 0, rotate: 30 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ delay: 2.2, duration: 0.8, type: "spring", bounce: 0.5 }}
        src="/images/meme-dancando-1.gif" 
        alt="Meme Dançando" 
        className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 md:w-56 h-auto object-contain z-20 drop-shadow-2xl"
      />

      <motion.img 
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ delay: 2.4, duration: 0.8, type: "spring", bounce: 0.5 }}
        src="/images/nick-wilde-zootopia.gif" 
        alt="Nick Wilde" 
        className="absolute top-20 md:top-32 right-10 md:right-32 w-32 md:w-48 h-auto object-contain z-20 drop-shadow-2xl"
      />

      <motion.img 
        initial={{ opacity: 0, scale: 0, rotate: 40 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ delay: 2.6, duration: 0.8, type: "spring", bounce: 0.5 }}
        src="/images/rat-dance.gif" 
        alt="Rat Dance" 
        className="absolute bottom-20 md:bottom-32 left-10 md:left-32 w-24 md:w-40 h-auto object-contain z-20 drop-shadow-2xl"
      />

    </section>
  );
}
