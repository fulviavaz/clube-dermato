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
  {
    title: "PROGRESSO DE TRATAMENTOS",
    desc: "A paciente pode visualizar quanto falta para completar seu tratamento ou pacote de sessões.",
    image: "/progresso.png",
  },
  {
    title: "CARTELA COMPLETOU GANHOU",
    desc: "Assim que completar uma quantidade X de procedimentos na clínica, a paciente ganha uma porcentagem de desconto em uma consulta ou tratamento.",
    image: "/cartela.png",
  },
  {
    title: "VAQUINHA",
    desc: "Possibilidade de criação de uma vaquinha própria para pacientes que necessitam de auxílio financeiro para realizar um tratamento.",
    image: "/vaquinha.png",
  },
  {
    title: "AGENDAMENTO",
    desc: "A paciente pode agendar procedimentos de forma rápida e fácil direto pelo site e pelo aplicativo.",
    image: "/agendamento.png",
  },
  {
    title: "COMPRA DE SERVIÇOS E PRODUTOS",
    desc: "Acesso a todos os serviços, tratamentos e produtos oferecidos pela clínica de forma simples e prática.",
    image: "/compra-servicos.png",
  },
  {
    title: "CLUBE DE BENEFÍCIOS",
    desc: "Área dedicada aos benefícios disponíveis para cada paciente, conforme seu nível ou campanhas ativas.",
    image: "/club-beneficios.png",
  },
  {
    title: "GIFTCARD",
    desc: "Gift Card para incentivar clientes a voltarem à clínica e realizarem outros tratamentos. A paciente também pode presentear outra pessoa com o gift card, auxiliando na atração de novos clientes.",
    image: "/giftcard.png",
  },
  {
    title: "INDICAÇÃO",
    desc: "Ao indicar uma pessoa e ela realizar um procedimento, a paciente ganha um desconto ou uma cortesia.",
    image: "/indicacao.png",
  },
  {
    title: "CONTEÚDO BLOG",
    desc: "Blog com assuntos informativos sobre o universo da beleza e dos cuidados dermatológicos.",
    image: "/blog.png",
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
    <div className="relative mt-16 overflow-visible rounded-[40px] bg-secondary px-6 py-10 sm:px-10 sm:py-24 lg:mt-32 lg:h-[420px] lg:px-16 lg:py-16 lg:pb-24">
      {/* setas */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-4 top-6 z-20 lg:left-8 lg:top-1/2 lg:-translate-y-1/2"
      >
        <Image src="/seta-esquerda.png" alt="" width={57} height={57} />
      </button>

      <button
        aria-label="Próximo"
        onClick={next}
        className="absolute right-4 top-6 z-20 lg:right-8 lg:top-1/2 lg:-translate-y-1/2"
      >
        <Image src="/seta-direita.png" alt="" width={57} height={57} />
      </button>

      {/* SLIDE */}
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={index} className="relative">
            {/* TEXTO */}
          <motion.div
  initial={{ opacity: 0, x: dir * 24 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: dir * -24 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="mt-16 max-w-xl lg:mt-0 lg:max-w-md lg:pl-12 lg:min-h-[220px]"
>
              <p className="text-xl font-extrabold tracking-widest text-white sm:text-2xl">
                {s.title}
              </p>

              <p className="mt-4 text-base leading-relaxed text-white sm:mt-6 sm:text-xl">
                {s.desc}
              </p>
            </motion.div>

            {/* IMAGEM - MOBILE (frame fixo, embaixo) */}
            <div className="mt-10 flex justify-center lg:hidden">
              <motion.div
                key={`img-m-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative h-[520px] w-[260px]"
              >
                <Image
                  src={s.image}
                  alt="Aplicativo do paciente"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* IMAGEM - DESKTOP (absolute, frame fixo) */}
            <div className="pointer-events-none absolute right-28 top-1/2 hidden -translate-y-1/2 lg:block">
              <motion.div
                key={`img-d-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative h-[560px] w-[280px]"
              >
                <Image
                  src={s.image}
                  alt="Aplicativo do paciente"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* bolinhas (se quiser voltar, já tá no lugar certo e não encosta no texto) */}
        {/*
        <div className="mt-6 flex items-center gap-2 lg:absolute lg:bottom-10 lg:left-16 lg:z-30">
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
        */}
      </div>
    </div>
  );
}
