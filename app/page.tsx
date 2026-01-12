import Image from "next/image";

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

          <div className="mt-24 mb-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="mb-10 w-[150px]">
                <Image src="/logo.png" alt="Club Dermato Care" width={600} height={320} className="w-full h-auto" priority />
              </div>

              <h1 className="text-3xl text-center text-black font-extrabold tracking-tight sm:text-4xl">
                Automação de marketing <br className="hidden sm:block" />
                para clínicas dermatológicas
              </h1>
              <p className="mt-3 max-w-prose text-lg leading-relaxed text-black text-center">
                Crie campanhas exclusivas, reative os clientes da sua base e venda mais.
              </p>

              <div className="mt-6">
                <a
                  href="#demonstracao"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold tracking-widest text-base shadow-sm hover:opacity-95"
                >
                  CONHEÇA A FERRAMENTA
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl">
                <Image src="/image-hero.png" alt="Imagem do hero" width={1200} height={800} className="h-auto w-full rounded-2xl object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container-xl py-10">
          <h2 className="text-center text-lg font-extrabold">Quem já faz parte</h2>
          <p className="mt-1 text-center text-xs text-primary/70">
            Dermatologistas que apostam em uma experiência mais organizada e personalizada.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="rounded-full border border-primary/10 bg-white/70 px-4 py-2 shadow-sm">
                <Image src="/logo-renata.png" alt="Renata Mitelman" width={220} height={44} className="h-[22px] w-auto" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/35" id="plataforma">
          <div className="container-xl py-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <h3 className="text-2xl font-extrabold">Por que é bom para sua clínica</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/75">
                  O Club Dermato Care permite criar e gerenciar campanhas de forma estratégica,
                  com ferramentas que aumentam a fidelização e fortalecem o relacionamento com seus pacientes.
                </p>
                <div className="mt-6">
                  <a
                    href="#demonstracao"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[11px] font-bold tracking-widest text-base shadow-sm hover:opacity-95"
                  >
                    ENTENDA SUA ESTRATÉGIA
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {clinicCards.map((f) => (
                    <div key={f.title} className="flex items-start gap-3 rounded-2xl bg-primary px-4 py-4 text-base shadow-sm">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/35">
                        <Image src={f.icon} alt="" width={24} height={24} className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-bold leading-snug">{f.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-xl py-14">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold">Facilidade é a palavra chave</h3>
            <p className="mt-1 text-xs text-primary/70">Impulsionando seu marketing com poucos cliques</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketingSteps.map((s) => (
              <div key={s.title} className="grid justify-items-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary shadow-sm">
                  <Image src={s.icon} alt="" width={28} height={28} className="h-7 w-7" />
                </div>
                <p className="mt-3 text-xs font-bold text-primary/80">{s.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-xl pb-14">
          <h3 className="text-lg font-extrabold">Features para a clínica</h3>

          <div className="mt-6 rounded-3xl bg-white/55 p-6 shadow-sm ring-1 ring-primary/10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between">
                  <button aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full bg-base ring-1 ring-primary/10">
                    <Image src="/seta-esquerda.png" alt="" width={20} height={20} className="h-5 w-5" />
                  </button>
                  <button aria-label="Próximo" className="grid h-10 w-10 place-items-center rounded-full bg-base ring-1 ring-primary/10">
                    <Image src="/seta-direita.png" alt="" width={20} height={20} className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-5 text-[11px] font-extrabold tracking-widest text-primary/70">CADASTRO DE CLIENTES</p>
                <p className="mt-3 text-sm leading-relaxed text-primary/75">
                  Centraliza o registro e gerenciamento dos pacientes da clínica, permitindo acompanhar perfis,
                  histórico de participação, níveis, pontos e engajamento nas campanhas.
                </p>
              </div>

              <div className="lg:col-span-6">
                <Image src="/laptop.png" alt="Prévia do painel" width={1200} height={800} className="h-auto w-full rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-xl pb-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-extrabold">Por que é bom para o seu cliente</h3>
              <ul className="mt-4 space-y-2 text-sm text-primary/75">
                <li>• Comunicação mais clara e consistente;</li>
                <li>• Acesso fácil a informações;</li>
                <li>• Experiência organizada e personalizada;</li>
                <li>• Sensação de acompanhamento próximo.</li>
              </ul>

              <div className="mt-6">
                <a href="#demonstracao" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[11px] font-bold tracking-widest text-base shadow-sm hover:opacity-95">
                  CONECTE DADOS E RELACIONAMENTO
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl bg-white/55 p-3 shadow-sm ring-1 ring-primary/10">
                <Image src="/imagem-consulta.png" alt="Consulta" width={1200} height={800} className="w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/35">
          <div className="container-xl py-14">
            <h3 className="text-2xl font-extrabold">Features para o paciente</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-primary/75">
              As funcionalidades destinadas aos clientes oferecem uma jornada mais organizada e engajada,
              reunindo recursos que facilitam o acompanhamento de tratamentos, o acesso a benefícios e a
              interação direta com a clínica.
            </p>

            <div className="mt-8 rounded-3xl bg-secondary/70 p-6 shadow-sm ring-1 ring-primary/10">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center justify-between">
                    <button aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full bg-base/70 ring-1 ring-primary/10">
                      <Image src="/seta-esquerda.png" alt="" width={20} height={20} className="h-5 w-5" />
                    </button>
                    <button aria-label="Próximo" className="grid h-10 w-10 place-items-center rounded-full bg-base/70 ring-1 ring-primary/10">
                      <Image src="/seta-direita.png" alt="" width={20} height={20} className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="mt-5 text-[11px] font-extrabold tracking-widest text-primary/80">PERFIL/NÍVEL/PONTOS</p>
                  <p className="mt-3 text-sm text-primary/75">
                    Menu completo com informações para os usuários consultarem sobre seu perfil, nível alcançado e
                    pontuação acumulada.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <Image src="/mobile.png" alt="App" width={1200} height={800} className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-xl py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-extrabold">Você não precisa de uma super equipe</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary/75">
                Automações, templates e uma navegação simples garantem que você mantenha tudo organizado sem depender
                de grandes times. Mais autonomia, menos esforço.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl bg-white/55 p-3 shadow-sm ring-1 ring-primary/10">
                <Image src="/medica.png" alt="Profissional" width={1200} height={800} className="w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 overflow-hidden rounded-3xl bg-white/55 p-3 shadow-sm ring-1 ring-primary/10">
              <Image src="/mulher-negra.png" alt="Benefícios" width={1200} height={800} className="w-full rounded-2xl object-cover" />
            </div>
            <div className="lg:col-span-7">
              <h4 className="text-lg font-extrabold text-primary">Tipos de benefícios que o cliente vai encontrar</h4>
              <p className="mt-3 text-sm leading-relaxed text-primary/75">
                Uma experiência clara e fácil: conteúdos organizados, jornada transparente, acesso rápido
                ao que precisa e uma comunicação mais humana.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-full bg-primary px-6 py-3 text-center">
            <a href="#demonstracao" className="text-[11px] font-bold tracking-widest text-base">AUTOMATIZE SUAS CAMPANHAS</a>
          </div>
        </section>

        <section className="bg-white/35">
          <div className="container-xl py-14">
            <h3 className="text-2xl font-extrabold">Contexto do Mercado</h3>

            <div className="mt-6 grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-5 overflow-hidden rounded-3xl bg-white/55 p-3 shadow-sm ring-1 ring-primary/10">
                <Image src="/grid-img-1.png" alt="Contexto 1" width={1200} height={800} className="w-full rounded-2xl object-cover" />
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {[
                  { img: "/grid-img-2.png", text: "O mercado de estética segue em forte expansão no Brasil, impulsionado pela demanda por cuidados com a pele e procedimentos não invasivos." },
                  { img: "/grid-img-3.png", text: "O número de profissionais aumenta, tornando o setor mais competitivo e exigindo diferenciação." },
                  { img: "/grid-img-4.png", text: "Novos tratamentos e tecnologias surgem continuamente, ampliando o interesse e a necessidade de comunicação ativa." },
                  { img: "/grid-img-5.png", text: "Jovens dermatologistas são maioria nas redes sociais, construindo audiência e influenciando decisões de pacientes." },
                ].map((c, i) => (
                  <div key={i} className="rounded-3xl bg-white/55 p-4 shadow-sm ring-1 ring-primary/10">
                    <div className="overflow-hidden rounded-2xl">
                      <Image src={c.img} alt={`Card ${i + 1}`} width={1200} height={800} className="w-full h-auto object-cover" />
                    </div>
                    <p className="mt-3 text-sm text-primary/75">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-xl py-14" id="demonstracao">
          <h3 className="text-2xl font-extrabold">Oportunidades</h3>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {opportunities.map((o) => (
              <div key={o.title} className="flex gap-4 rounded-3xl bg-white/55 p-6 shadow-sm ring-1 ring-primary/10">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/45">
                  <Image src={o.icon} alt="" width={28} height={28} className="h-7 w-7" />
                </div>
                <p className="text-sm text-primary/75">{o.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-full bg-primary px-6 py-3 text-center">
            <a href="#suporte" className="text-[11px] font-bold tracking-widest text-base">SOLICITE UMA DEMONSTRAÇÃO</a>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary text-base" id="suporte">
        <div className="container-xl py-10 text-center">
          <div className="mx-auto mb-4 w-[140px] opacity-95">
            <Image src="/logo-claro.png" alt="Club Dermato Care" width={600} height={320} className="w-full h-auto" />
          </div>

          <address className="not-italic text-xs leading-relaxed text-base/90">
            <strong>GT MARKETING DIRETO EIRELI</strong> <br />
            Rua jose Ramon Urtiza 209 bloco A, CEP 05717-250, inscrita no CNPJ/MF sob o número 34.650.034/0001-43
          </address>
        </div>
      </footer>
    </div>
  );
}
