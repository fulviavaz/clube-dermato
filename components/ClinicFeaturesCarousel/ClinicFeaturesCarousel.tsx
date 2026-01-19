"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    eyebrow: "CADASTRO DE CLIENTES",
    text:
      "Centraliza o registro e gerenciamento dos pacientes da clínica, permitindo acompanhar perfis, histórico de participação, níveis, pontos e engajamento nas campanhas.",
    image: "/laptop.png",
  },
  // duplicado enquanto não tem os outros
  {
    eyebrow: "CADASTRO DE CLIENTES",
    text:
      "Centraliza o registro e gerenciamento dos pacientes da clínica, permitindo acompanhar perfis, histórico de participação, níveis, pontos e engajamento nas campanhas.",
    image: "/laptop.png",
  },
  {
    eyebrow: "CADASTRO DE CLIENTES",
    text:
      "Centraliza o registro e gerenciamento dos pacientes da clínica, permitindo acompanhar perfis, histórico de participação, níveis, pontos e engajamento nas campanhas.",
    image: "/laptop.png",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  const s = slides[index];

  return (
    <>
      {/* ... seu resto da página ... */}

      <section className="container-xl pb-14">
        <h3 className="text-4xl font-extrabold text-black">Features para a clínica</h3>

        <div className="relative mt-6 rounded-[36px] bg-[#f1e8ef] p-10 shadow-sm ring-1 ring-primary/10 overflow-visible">
          {/* setas */}
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-10 top-10 grid h-12 w-12 place-items-center"
            type="button"
          >
            <Image src="/seta-esquerda.png" alt="" width={57} height={57} />
          </button>

          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute right-10 top-10 grid h-12 w-12 place-items-center"
            type="button"
          >
            <Image src="/seta-direita.png" alt="" width={57} height={57} />
          </button>

          {/* conteúdo (com animação) */}
        <div className="relative mt-14 min-h-[420px] lg:min-h-[460px]">
  <AnimatePresence mode="wait" initial={false}>
    <div key={index} className="grid items-start gap-10 lg:grid-cols-12">
      {/* TEXTO COM SLIDE */}
      <motion.div
        initial={{ opacity: 0, x: dir * 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: dir * -24 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="lg:col-span-5"
      >
        <p className=" mt-10 text-2xl font-extrabold tracking-widest text-primary">
          {s.eyebrow}
        </p>

        <p className="mt-4 max-w-md text-xl leading-relaxed text-black lg:text-xl">
          {s.text}
        </p>
      </motion.div>

      {/* LAPTOP FIXO NA POSIÇÃO (apenas FADE) */}
      <div
        className="
          lg:col-span-7
          lg:absolute lg:right-[-36px] lg:bottom-[-26px]
          lg:w-[640px]
          pointer-events-none
        "
      >
        <motion.div
          key={`img-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Image
            src={s.image}
            alt="Prévia do painel"
            width={1200}
            height={800}
            className="h-auto w-full drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  </AnimatePresence>

  {/* bolinhas */}
  {/* <div className="absolute bottom-6 left-10 flex items-center gap-2">
    {slides.map((_, i) => (
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
  </div> */}
</div>
        </div>
      </section>

      {/* ... resto ... */}
    </>
  );
}
