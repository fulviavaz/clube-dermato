"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    eyebrow: "CADASTRO DE CLIENTES",
    text:
      "Centraliza o registro e gerenciamento dos pacientes da clínica, permitindo acompanhar perfis, histórico de participação, níveis, pontos e engajamento nas campanhas.",
    image: "/cadastro-clientes.png",
  },
  // duplicado enquanto não tem os outros
  {
    eyebrow: "CONFIGURAÇÃO DE NÍVEIS E PONTOS",
    text:
      "Permite acompanhar a evolução dos clientes no programa, visualizar a pontuação acumulada e identificar quem está próximo de alcançar novos níveis e recompensas.",
    image: "/config-niveis-pontos.png",
  },
  {
    eyebrow: "CONFIGURAÇÃO DO CATÁLOGO DE SEVIÇOS E PRODUTOS",
    text:
      "Mostra o interesse dos clientes pelos itens do catálogo, facilitando a análise de acessos, compras e preferências em tratamentos e produtos.",
    image: "/config-catalogo.png",
  },
  {
    eyebrow: "HABILITAÇÃO DO CONTEÚDO BLOG",
    text:
      "Centraliza a ativação e visualização dos conteúdos disponibilizados no blog, permitindo acompanhar o acesso dos clientes e o interesse pelos temas de cuidado dermatológico.",
    image: "/hab-blog.png",
  },
  {
    eyebrow: "CAMPANHAS PRÉ PRODUZIDAS",
    text:
      "Disponibiliza campanhas prontas para uso, facilitando a execução de ações rápidas e permitindo acompanhar o desempenho e alcance de cada disparo.",
    image: "/camp-pre-prod.png",
  },
  {
    eyebrow: "CAMPANHAS AVULSAS",
    text:
      "Oferece liberdade para criar campanhas personalizadas do zero, com total flexibilidade de formato e mensagem, acompanhando resultados em tempo real.",
    image: "/camp-avul.png",
  },
  {
    eyebrow: "GESTÃO DE CAMPANHA",
    text:
      "Área onde você administra todas as campanhas criadas na plataforma. Aqui é possível visualizar status, editar conteúdos, acompanhar resultados, pausar ou ativar ações e manter o controle completo das comunicações enviadas aos usuários.",
    image: "/gestao-campanha.png",
  },
  {
    eyebrow: "PAINEL DE ANÁLISE PARA CONTROLE DE CAMPANHAS",
    text:
      "Reúne indicadores essenciais de desempenho, como abertura de e-mails, cliques, acessos ao portal, uso de benefícios, perfil dos clientes e evolução das ações de marketing.",
    image: "/painel-analise.png",
  },
  {
    eyebrow: "CONSULTORIA DE MARKETING",
    text:
      "Reunião mensal dividida em dois momentos: - Onboarding para novas assinantes - Sessões de dúvidas para clínicas ativas",
    image: "/consultoria-marketing.png",
  },
    {
    eyebrow: "TREINAMENTO SOBRE A FERRAMENTA",
    text:
      "Garantia de que toda a equipe saiba utilizar a plataforma de maneira eficiente.",
    image: "/treinamento-ferramenta.png",
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
          lg:absolute lg:right-[-36px] lg:top-[30px]
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
