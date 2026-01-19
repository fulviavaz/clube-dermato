"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type PatientSlide = {
  title: string;
  desc: string;
  image: string;
};

const patientSlides: PatientSlide[] = [
  {
    title: "PERFIL/NÍVEL/PONTOS",
    desc: "Menu completo com informações para os usuários consultarem sobre seu perfil, nível alcançado e pontuação acumulada.",
    image: "/mobile.png",
  },
  // duplicando por enquanto (troque depois)
  {
    title: "PERFIL/NÍVEL/PONTOS",
    desc: "Menu completo com informações para os usuários consultarem sobre seu perfil, nível alcançado e pontuação acumulada.",
    image: "/mobile.png",
  },
  {
    title: "PERFIL/NÍVEL/PONTOS",
    desc: "Menu completo com informações para os usuários consultarem sobre seu perfil, nível alcançado e pontuação acumulada.",
    image: "/mobile.png",
  },
];

export function PatientCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const s = patientSlides[index];

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + patientSlides.length) % patientSlides.length);
  };

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % patientSlides.length);
  };

  return (
    <div className="relative mt-32 overflow-visible rounded-[40px] bg-secondary px-16 py-16 lg:h-[420px]">
      {/* seta esquerda */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-8 top-1/2 z-20 -translate-y-1/2"
      >
        <Image src="/seta-esquerda.png" alt="" width={57} height={57} />
      </button>

      {/* seta direita */}
      <button
        aria-label="Próximo"
        onClick={next}
        className="absolute right-8 top-1/2 z-20 -translate-y-1/2"
      >
        <Image src="/seta-direita.png" alt="" width={57} height={57} />
      </button>

      {/* AREA DO SLIDE */}
      <div className="relative lg:min-h-[280px]">
        <AnimatePresence mode="wait" initial={false}>
          <div key={index} className="relative">
            {/* TEXTO (anima) */}
            <motion.div
              initial={{ opacity: 0, x: dir * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-md pl-12"
            >
              <p className="text-2xl font-extrabold tracking-widest text-white">
                {s.title}
              </p>

              <p className="mt-6 text-xl leading-relaxed text-white">
                {s.desc}
              </p>
            </motion.div>

            {/* MOBILE (absolute, não mexe em Y; só fade) */}
            <div className="pointer-events-none absolute right-28 top-1/2 -translate-y-1/2">
              <motion.div
                key={`img-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Image
                  src={s.image}
                  alt="Aplicativo do paciente"
                  width={260}
                  height={530}
                  priority
                  className="drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </AnimatePresence>

        {/* bolinhas */}
        <div className="absolute bottom-2 left-12 flex items-center gap-2">
          {patientSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-primary" : "bg-primary/20",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
