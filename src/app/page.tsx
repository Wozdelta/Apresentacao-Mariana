"use client";

import { useEffect, useRef, useState } from "react";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { MissionSlide } from "@/components/slides/MissionSlide";
import { LogoSlide } from "@/components/slides/LogoSlide";
import { ImagerySlide } from "@/components/slides/ImagerySlide";
import { RulesSlide } from "@/components/slides/RulesSlide";
import { ExecuteSlide } from "@/components/slides/ExecuteSlide";
import { FinalSlide } from "@/components/slides/FinalSlide";
import { ConclusionSlide } from "@/components/slides/ConclusionSlide";
import { EndSlide } from "@/components/slides/EndSlide";

// We will import transition components later. For now, we stub them.
import { PlaneTransition } from "@/components/transitions/PlaneTransition";
import { ExecuteToFinalTransition } from "@/components/transitions/ExecuteToFinalTransition";
import { HeroToMissionTransition } from "@/components/transitions/HeroToMissionTransition";
import { LogoToImageryTransition } from "@/components/transitions/LogoToImageryTransition";
import { ImageryToRulesTransition } from "@/components/transitions/ImageryToRulesTransition";
import { RulesToExecuteTransition } from "@/components/transitions/RulesToExecuteTransition";
import { FinalToConclusionTransition } from "@/components/transitions/FinalToConclusionTransition";
import { ConclusionToEndTransition } from "@/components/transitions/ConclusionToEndTransition";
import { BackwardTransition } from "@/components/transitions/BackwardTransition";

export default function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [targetSlideIndex, setTargetSlideIndex] = useState(0);
  const [transitionStartIndex, setTransitionStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"forward" | "backward" | null>(null);

  const totalSlides = 9;
  const lastScrollTime = useRef(0);

  // Lida com o scroll nativo (trackpad/mouse)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Ignora scroll se o mouse estiver sobre um mapa (não passa para outra página)
      if (e.target instanceof Element && e.target.closest('.maplibregl-map')) {
        return;
      }

      const now = Date.now();
      // Impede múltiplas rolagens enquanto a animação roda ou durante o cooldown
      if (isTransitioning || now - lastScrollTime.current < 1500) return;

      // Threshold reduzido para 20 para captar trackpads mais leves
      if (e.deltaY > 20 && activeSlideIndex < totalSlides - 1) {
        lastScrollTime.current = now;
        triggerTransition(activeSlideIndex + 1, "forward");
      } else if (e.deltaY < -20 && activeSlideIndex > 0) {
        lastScrollTime.current = now;
        triggerTransition(activeSlideIndex - 1, "backward");
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now();
      if (isTransitioning || now - lastScrollTime.current < 1500) return;
      
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (diff > 40 && activeSlideIndex < totalSlides - 1) {
        lastScrollTime.current = now;
        triggerTransition(activeSlideIndex + 1, "forward");
        touchStartY = touchEndY; // Reset
      } else if (diff < -40 && activeSlideIndex > 0) {
        lastScrollTime.current = now;
        triggerTransition(activeSlideIndex - 1, "backward");
        touchStartY = touchEndY; // Reset
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeSlideIndex, isTransitioning]);

  const triggerTransition = (nextIndex: number, direction: "forward" | "backward") => {
    setTransitionDirection(direction);
    setTransitionStartIndex(activeSlideIndex); // Salva de onde a transição começou!
    setTargetSlideIndex(nextIndex);
    setIsTransitioning(true);
  };

  // Callback chamado pelas transições quando chegam no "meio" (quando a tela está coberta)
  const onTransitionHalfway = () => {
    setActiveSlideIndex(targetSlideIndex);
  };

  const onTransitionComplete = () => {
    setIsTransitioning(false);
    setTransitionDirection(null);
  };

  // Renderiza o slide baseado no index. Usamos z-index para garantir que o atual fique em cima.
  const renderSlide = (index: number, Component: React.FC<any>) => {
    const isActive = index === activeSlideIndex;
    const isTarget = index === targetSlideIndex;
    
    // Mostra apenas o slide ativo ou o slide alvo (durante a transição)
    if (!isActive && !isTarget) return null;

    return (
      <div 
        key={index} 
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isActive ? 'z-10 opacity-100 pointer-events-auto' : 'z-0 opacity-100 pointer-events-none'}`}
      >
        <Component isActive={isActive} onStartJourney={index === 1 ? () => triggerTransition(2, "forward") : undefined} />
      </div>
    );
  };

  return (
    <main className="fixed inset-0 w-full h-full bg-borcelle-dark overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {renderSlide(0, HeroSlide)}
        {renderSlide(1, MissionSlide)}
        {renderSlide(2, LogoSlide)}
        {renderSlide(3, ImagerySlide)}
        {renderSlide(4, RulesSlide)}
        {renderSlide(5, ExecuteSlide)}
        {renderSlide(6, FinalSlide)}
        {renderSlide(7, ConclusionSlide)}
        {renderSlide(8, EndSlide)}
      </div>

      {/* Orchestrator Transições Forward */}
      {isTransitioning && transitionDirection === "forward" && (
        <>
          {transitionStartIndex === 0 && (
            <HeroToMissionTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 1 && (
            <PlaneTransition isTriggered={true} onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 2 && (
            <LogoToImageryTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 3 && (
            <ImageryToRulesTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 4 && (
            <RulesToExecuteTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 5 && (
            <ExecuteToFinalTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 6 && (
            <FinalToConclusionTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
          {transitionStartIndex === 7 && (
            <ConclusionToEndTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
          )}
        </>
      )}

      {/* Orchestrator Transições Backward (Genérica e Elegante) */}
      {isTransitioning && transitionDirection === "backward" && (
        <BackwardTransition onHalfway={onTransitionHalfway} onComplete={onTransitionComplete} />
      )}
    </main>
  );
}
