"use client";
import Image from "next/image";
import FadeIn from "../components/FadeIn/FadeIn";

const clinicCards = [
  { title: "Fluxos claros e centralizados", icon: "/icone-fluxos.png" },
  { title: "Mais organização no dia a dia", icon: "/icone-calendario.png" },
  { title: "Redução de retrabalhos", icon: "/icone-reducao.png" },
  { title: "Planejamento estratégico de comunicação", icon: "/icone-planejamento.png" },
  { title: "Autonomia sem depender de equipe grande", icon: "/icone-autonomia.png" },
];

const marketingSteps = [
  { title: "Criar campanhas profissionais em minutos", icon: "/icone-criar-campanhas.png" },
  { title: "Manter presença digital diária", icon: "/icone-manter-presenca.png" },
  { title: "Aumentar visibilidade e autoridade", icon: "/icone-aumente-visibilidade.png" },
  { title: "Receber conteúdo pensado para quem cuida da pele", icon: "/icone-receber-conteudos.png" },
];

const opportunities = [
  {
    title:
      "Com concorrência crescente, experiência + relacionamento estruturado se tornam os maiores diferenciais.",
    icon: "/oportunidades-icone-1.png",
  },
  {
    title:
      "Pacientes estão mais propensos a aderir a tratamentos recorrentes quando recebem benefícios, atenção e exclusividade.",
    icon: "/oportunidades-icone-2.png",
  },
  {
    title:
      "Clínicas que organizam comunicação e fidelização conseguem elevar o ticket, aumentar retorno e destacar a marca.",
    icon: "/oportunidades-icone-3.png",
  },
];

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col bg-base text-primary">
      <header className="relative overflow-hidden h-full">
  <div className="absolute inset-0">
  
      <Image src="/bg-hero.png" alt="Background" fill priority className="object-cover" />
  
    <div className="absolute inset-0 bg-base/10" />
  </div>

  <div className="container-xl relative pt-8 pb-10">
    <FadeIn delay={0.1}>
      <div className="flex justify-end gap-6 text-[11px] font-bold tracking-widest text-primary/65">
        <a
          href="#suporte"
          className="inline-flex rounded-3xl bg-[#f1e8ef] px-4 py-2 text-primary transition hover:text-primary/80"
        >
          VER PLANOS
        </a>

        <a
          href="#plataforma"
          className="inline-flex rounded-3xl bg-[#f1e8ef] px-4 py-2 text-primary transition hover:text-primary/80"
        >
          ACESSAR A PLATAFORMA
        </a>
      </div>
    </FadeIn>

    <div className="mt-24 mb-12 grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-6 flex flex-col items-center">
        <FadeIn delay={0.18}>
          <div className="mb-10 w-[150px]">
            <Image
              src="/logo.png"
              alt="Club Dermato Care"
              width={600}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.28}>
          <h1 className="text-3xl text-center text-black font-extrabold tracking-tight sm:text-4xl">
            Automação de marketing <br className="hidden sm:block" />
            para clínicas dermatológicas
          </h1>
        </FadeIn>

        <FadeIn delay={0.38}>
          <p className="mt-3 max-w-prose text-lg leading-relaxed text-black text-center">
            Crie campanhas exclusivas, reative os clientes da sua base e venda mais.
          </p>
        </FadeIn>

        <FadeIn delay={0.48}>
          <div className="mt-6">
            <a
              href="#demonstracao"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold tracking-widest text-base shadow-sm hover:opacity-95"
            >
              CONHEÇA A FERRAMENTA
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-6">
        <FadeIn delay={0.22} y={16}>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/image-hero.png"
              alt="Imagem do hero"
              width={1200}
              height={800}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
</header>

      <main className="flex-1 bg-white">
      <section className="container-xl py-16">
  <h2 className="text-center text-4xl font-extrabold text-black">Quem já faz parte</h2>
  <p className="mt-1 text-center text-lg text-black">
    Dermatologistas que apostam em uma experiência mais organizada e personalizada.
  </p>

  <div className="relative mt-10 overflow-hidden">
    {/* faixa animada (1 linha) */}
    <div className="marquee flex flex-nowrap items-center gap-6">
      {Array.from({ length: 10 }).flatMap((_, i) => [
        <div key={`a-${i}`} className="shrink-0 rounded-lg bg-[#f1e8ef] px-2 py-2 shadow-sm">
          <Image
            src="/logo-renata.png"
            alt="Renata Mitelman"
            width={210}
            height={52}
            className="block h-[52px] w-auto object-contain"
          />
        </div>,
        <div key={`b-${i}`} className="shrink-0 rounded-lg bg-[#f1e8ef] px-2 py-2 shadow-sm">
          <Image
            src="/logo-renata.png"
            alt="Renata Mitelman"
            width={210}
            height={52}
            className="block h-[52px] w-auto object-contain"
          />
        </div>,
      ])}
    </div>
  </div>
</section>


<section className="bg-base py-16" id="plataforma">
  <div className="container-xl">
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

      {/* COLUNA TEXTO */}
      <div className="lg:col-span-4 w-full">
        <FadeIn delay={0.1}>
          <div className="w-full">
            <h3 className="text-4xl font-extrabold text-black">
              Por que é bom para sua clínica
            </h3>

            <p className="mt-3 text-lg leading-relaxed text-black">
              O Club Dermato Care permite criar e gerenciar campanhas de forma estratégica,
              com ferramentas que aumentam a fidelização e fortalecem o relacionamento com seus pacientes.
            </p>

            <div className="mt-6">
              <a
                href="#demonstracao"
                className="inline-flex text-center items-center justify-center rounded-full bg-primary px-12 py-3 text-[11px] tracking-widest text-base shadow-sm hover:opacity-95"
              >
                OTIMIZE SUA ESTRATÉGIA
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* COLUNA CARDS */}
      <div className="lg:col-span-8 w-full">
        <FadeIn delay={0.2}>
          <div className="w-full">
            <div className="grid gap-4 lg:grid-cols-12">

              {/* COLUNA ESQUERDA (2 cards quadrados/verticais) */}
              <div className="grid gap-4 lg:col-span-4">

                {/* 1 - Roxo escuro */}
                <div className="rounded-3xl bg-primary p-6 text-base shadow-sm text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center">
                    <Image
                      src="/icone-fluxos.png"
                      alt=""
                      width={73}
                      height={73}
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="mt-5 text-lg font-normal leading-snug text-white">
                    Fluxos claros <br /> e centralizados
                  </p>
                </div>

                {/* 2 - Lilás */}
                <div className="rounded-3xl bg-secondary p-6 text-white shadow-sm text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center">
                    <Image
                      src="/icone-reducao.png"
                      alt=""
                      width={72}
                      height={73}
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="mt-5 text-lg font-normal leading-snug">
                    Redução de <br /> retrabalhos
                  </p>
                </div>
              </div>

              {/* COLUNA DIREITA (3 cards retangulares) */}
              <div className="grid gap-4 lg:col-span-8">

                {/* Lilás */}
                <div className="rounded-3xl bg-secondary p-6 text-white shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center">
                      <Image
                        src="/icone-calendario.png"
                        alt=""
                        width={73}
                        height={66}
                        className="h-auto w-auto"
                      />
                    </div>
                    <p className="text-lg font-normal leading-snug">
                      Mais organização no dia a dia
                    </p>
                  </div>
                </div>

                {/* Roxo escuro */}
                <div className="rounded-3xl bg-primary p-6 text-base shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center">
                      <Image
                        src="/icone-planejamento.png"
                        alt=""
                        width={73}
                        height={74}
                        className="h-auto w-auto"
                      />
                    </div>
                    <p className="text-lg font-normal leading-snug text-white">
                      Planejamento estratégico de comunicação
                    </p>
                  </div>
                </div>

                {/* Lilás */}
                <div className="rounded-3xl bg-secondary p-6 text-white shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center">
                      <Image
                        src="/icone-autonomia.png"
                        alt=""
                        width={73}
                        height={73}
                        className="h-auto w-auto"
                      />
                    </div>
                    <p className="text-lg font-normal leading-snug">
                      Autonomia sem depender de equipe grande
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </FadeIn>
      </div>

    </div>
  </div>
</section>



        <section className="container-xl py-14">
  <FadeIn>
    <div className="text-center">
      <h3 className="text-4xl font-extrabold text-black">
        Facilidade é a palavra chave
      </h3>
      <p className="mt-1 text-lg text-black">
        Impulsionando seu marketing com poucos cliques
      </p>
    </div>
  </FadeIn>

  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {marketingSteps.map((s, i) => (
      <FadeIn key={s.title} delay={0.08 * i} y={18}>
        <div className="grid justify-items-center text-center">
          <div className="grid h-[147px] w-[147px] place-items-center rounded-full bg-primary shadow-sm">
            <Image
              src={s.icon}
              alt=""
              width={102}
              height={85}
              className="h-auto w-auto"
            />
          </div>

          <p className="mt-3 w-52 text-lg font-normal text-black">
            {s.title}
          </p>
        </div>
      </FadeIn>
    ))}
  </div>
</section>


        <section className="container-xl pb-14">
  <h3 className="text-4xl font-extrabold text-black">Features para a clínica</h3>

  <div className="mt-6 rounded-[36px] bg-[#f1e8ef] p-10 shadow-sm ring-1 ring-primary/10 relative h-[600px]">
    {/* setas nos cantos */}
    <div className="flex items-center justify-between">
      <button
        aria-label="Anterior"
        className="grid h-12 w-12 place-items-center "
      >
        <Image src="/seta-esquerda.png" alt="" width={57} height={57} className="h-auto w-auto" />
      </button>

      <button
        aria-label="Próximo"
        className="grid h-12 w-12 place-items-center "
      >
        <Image src="/seta-direita.png" alt="" width={57} height={57} className="h-auto w-auto" />
      </button>
    </div>

    {/* conteúdo */}
    <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <p className="text-xl font-extrabold tracking-widest text-primary">
          CADASTRO DE CLIENTES
        </p>

        <p className="mt-4 text-xl l leading-relaxed text-black w-96">
          Centraliza o registro e gerenciamento dos pacientes da clínica, permitindo acompanhar perfis,
          histórico de participação, níveis, pontos e engajamento nas campanhas.
        </p>
      </div>

      <div className="lg:col-span-6 absolute -right-10 top-28 ">
        <Image
          src="/laptop.png"
          alt="Prévia do painel"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  </div>
</section>


        <section className="container-xl pb-14">
          <FadeIn delay={0.08} y={18}>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h3 className="text-4xl font-extrabold text-black">Por que é bom para o seu cliente</h3>
              <ul className="mt-4 space-y-2 text-lg text-black">
                <li>• Comunicação mais clara e consistente;</li>
                <li>• Acesso fácil a informações;</li>
                <li>• Experiência organizada e personalizada;</li>
                <li>• Sensação de acompanhamento próximo.</li>
              </ul>

              <div className="mt-6">
                <a href="#demonstracao" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[14px] font-normal tracking-widest text-base shadow-sm hover:opacity-95">
                  CONECTE DADOS E RELACIONAMENTO
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl">
                <Image src="/imagem-consulta.png" alt="Consulta" width={1200} height={800} className="w-full rounded-2xl object-cover" />
              </div>
            </div>
            </div>
            </FadeIn>
        </section>

      <section className="bg-base">
  <div className="container-xl py-16">
    {/* título fora do card */}
      <FadeIn delay={0.08} y={18}><h3 className="text-4xl font-extrabold text-black">
      Features para o paciente
    </h3>

    <p className="mt-4  text-lg leading-relaxed text-black">
      As funcionalidades destinadas aos clientes oferecem uma jornada mais organizada e engajada,
      reunindo recursos que facilitam o acompanhamento de tratamentos, o acesso a benefícios e a
      interação direta com a clínica.
    </p></FadeIn>

  {/* CARD */}
<div className="relative mt-32 h-[420px] rounded-[40px] bg-secondary px-16 py-16 overflow-visible">
  {/* seta esquerda */}
  <button
    aria-label="Anterior"
    className="absolute left-8 top-1/2 -translate-y-1/2 z-20"
  >
    <Image src="/seta-esquerda.png" alt="" width={57} height={57} />
  </button>

  {/* seta direita */}
  <button
    aria-label="Próximo"
    className="absolute right-8 top-1/2 -translate-y-1/2 z-20"
  >
    <Image src="/seta-direita.png" alt="" width={57} height={57} />
  </button>

  {/* TEXTO (continua no fluxo normal) */}
  <div className="max-w-md pl-12">
    <p className="text-2xl font-extrabold tracking-widest text-white">
      PERFIL/NÍVEL/PONTOS
    </p>

    <p className="mt-6 text-xl leading-relaxed text-white">
      Menu completo com informações para os usuários consultarem sobre seu perfil,
      nível alcançado e pontuação acumulada.
    </p>
  </div>

  {/* MOBILE (absolute, controlado) */}
  <div className="absolute right-28 top-1/3 -translate-y-1/2">
    <Image
      src="/mobile.png"
      alt="Aplicativo do paciente"
      width={260}
      height={530}
      priority
      className="drop-shadow-2xl"
    />
  </div>
</div>

            
  </div>
</section>


        <section className="container-xl py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-top">
            <div className="lg:col-span-6">
              <FadeIn delay={0.08} y={18}><h3 className="text-4xl font-extrabold text-black">Você não precisa de uma super equipe</h3>
              <p className="mt-3 text-xl leading-relaxed text-black">
                Automações, templates e uma navegação simples garantem que você mantenha tudo organizado sem depender
                de grandes times. Mais autonomia, menos esforço.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <div >
                <FadeIn delay={0.08} y={18}><Image src="/medica.png" alt="Profissional" width={1200} height={800} className="w-full rounded-2xl object-cover" /></FadeIn>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 ">
              <FadeIn delay={0.08} y={18}>  <Image src="/mulher-negra.png" alt="Benefícios" width={1200} height={800} className="w-full rounded-2xl object-cover" />
              </FadeIn>
            </div>
            <div className="lg:col-span-7 ">
            <FadeIn delay={0.08} y={18}> <h4 className="text-4xl font-extrabold text-black">Tipos de benefícios que o cliente vai encontrar</h4>
              <p className="mt-3 text-xl leading-relaxed text-black">
                Uma experiência clara e fácil: conteúdos organizados, jornada transparente, acesso rápido
                ao que precisa e uma comunicação mais humana.
              </p></FadeIn>
            </div>
          </div>

          <div className="mt-10 rounded-full bg-primary px-6 py-3 text-center">
            <a href="#demonstracao" className="text-[11px] font-bold tracking-widest text-base">AUTOMATIZE SUAS CAMPANHAS</a>
          </div>
        </section>

      <section className="bg-base">
  <div className="container-xl py-14">
            <h3 className="text-4xl font-extrabold text-black">Contexto do Mercado</h3>
            
            {/* row 1 */}
            <FadeIn delay={0.08} y={18}>
<div className="flex mt-8 gap-4 w-full">
  {/* imagens */}
  <div className="flex gap-4">
    <Image
      src="/grid-img-2.png"
      alt="mulheres"
      width={277}
      height={384}
      className="h-[384px] w-auto object-cover rounded-3xl"
    />

    <Image
      src="/grid-img-1.png"
      alt="procedimento"
      width={277}
      height={384}
      className="h-[384px] w-auto object-cover rounded-3xl"
    />
  </div>

  {/* card rosa */}
  <div className="flex flex-col gap-4 max-w-lg">
    <div className="bg-secondary p-8 rounded-3xl">
      <p className="text-white text-xl">
        O mercado de estética segue em forte expansão no Brasil, impulsionado pela demanda
        por cuidados com a pele e procedimentos não invasivos. (RBCP / Ipsos)
      </p>
                </div>

                <div className="flex gap-4">
                
                <div className="bg-primary p-8 rounded-3xl">
                  <p className="text-white text-xl">
                    O número de profissionais aumentou, tornando o setor mais competitivo e exigindo diferenciação. (RBCP)

                  </p>
                  </div>

                    <Image
      src="/grid-img-3.png"
      alt="procedimento"
      width={171}
      height={187}
      className="h-auto w-auto object-cover rounded-3xl"
    />

                  </div>
  </div>
              </div>
              </FadeIn>
            
            {/* row 2 */}

          <FadeIn delay={0.08} y={18}> <div className="flex gap-4 ">

              <div className="bg-secondary p-8 rounded-3xl mt-4 max-w-lg h-[216px]">
                <p className="text-white text-xl">A faixa entre 20 e 60 anos é a que mais investe em dermatologia
                  e prioriza confiança e vínculo acima de preço. (Estética e Mercado)</p>

              </div>

              
                    <Image
      src="/grid-img-4.png"
      alt="procedimento"
      width={255}
      height={216}
      className="h-auto w-auto object-cover rounded-3xl mt-4"
              />
              
              <div className="bg-secondary p-8 rounded-3xl mt-4 max-w-lg h-[216px]">
                <p className="text-white text-xl">
                  Novos tratamentos e tecnologias surgem continuamente, ampliando o interesse e
                  a necessidade de comunicação ativa. (IMARC)

                </p>

              </div>

            </div>
            </FadeIn>

              
            {/* row 3 */}

          <FadeIn delay={0.08} y={18}> <div className="flex gap-4 ">


              
                    <Image
      src="/grid-img-5.png"
      alt="procedimento"
      width={380}
      height={187}
      className="h-auto w-auto object-cover rounded-3xl mt-4"
              />
              
              <div className="bg-primary p-8 rounded-3xl mt-4  h-[187px]">
                <p className="text-white text-xl">
                <span className="font-bold">Jovens dermatologistas são maioria nas redes sociais</span>, ocupando espaço, construindo audiência e influenciando decisões de pacientes. (Levantamentos de engajamento, setor de saúde/estética)


                </p>

              </div>

            </div>
            </FadeIn>


  
  </div>
</section>



      <section className="container-xl py-14" id="demonstracao">
  <h3 className="text-5xl font-extrabold text-black">Oportunidades</h3>

  <FadeIn delay={0.08} y={18}><div className="mt-10 space-y-14">
    {opportunities.map((o) => (
      <div key={o.title} className="flex items-center gap-10">
        {/* ícone grande no círculo */}
        <div className="grid h-[147px] w-[147px] place-items-center rounded-full bg-secondary">
          <Image src={o.icon} alt="" width={76} height={96} className="h-auto w-auto" />
        </div>

        {/* texto grande preto */}
        <p className="max-w-4xl text-2xl leading-relaxed text-black">
          {o.title}
        </p>
      </div>
    ))}
          </div>
          </FadeIn>

  {/* CTA grande */}
  <div className="mt-14">
    <a
      href="#suporte"
      className="block w-full rounded-full bg-primary py-5 text-center text-xl font-extrabold tracking-widest text-base"
    >
      SOLICITE UMA DEMONSTRAÇÃO
    </a>
  </div>
</section>

      </main>

      <footer className="w-full bg-primary text-base" id="suporte">
        <div className="container-xl py-10 text-center">
          <div className="mx-auto mb-4 w-[140px] opacity-95">
            <Image src="/logo-claro.png" alt="Club Dermato Care" width={600} height={320} className="w-full h-auto" />
          </div>

          <address className="not-italic text-lg leading-relaxed text-base/90">
            <strong>GT MARKETING DIRETO EIRELI</strong> <br />
            Rua jose Ramon Urtiza 209 bloco A, CEP 05717-250, inscrita no CNPJ/MF sob o número 34.650.034/0001-43
          </address>
        </div>
      </footer>
    </div>
  );
}
