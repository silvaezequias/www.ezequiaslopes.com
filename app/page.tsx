import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Code2, Gamepad } from "lucide-react";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { Button } from "@/components/ui/button";
import { garamond, jetmono } from "@/lib/fonts";
import { Projects } from "@/components/projects";
import { Games } from "@/components/games";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-center">
            <div>
              <p
                className={`${jetmono.className} text-[11px] uppercase tracking-widest text-neutral-500`}
              >
                Desenvolvedor • Fotógrafo • Jogador
              </p>
              <h1
                className={`${garamond.className} mt-3 text-4xl sm:text-5xl leading-tight text-neutral-100`}
              >
                Crio experiências digitais através de aplicações, jogos e
                fotografias.
              </h1>
              <p className="mt-5 text-neutral-400 max-w-prose">
                Sou Ezequias Lopes. Desenvolvo software, automatizações e jogos
                digitais. Gosto de fotografia e registrar momentos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-amber-300 text-black hover:bg-amber-200"
                >
                  <Link href="/work">
                    Ver trabalhos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-neutral-800 text-neutral-300 hover:bg-neutral-900 bg-transparent"
                >
                  <Link href="/contact">Contato</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-neutral-900 bg-neutral-950/40 p-4 overflow-hidden">
                  <Code2 className="h-5 w-5 text-amber-300" />
                  <div className="mt-2 text-sm text-neutral-400 ellipsis">
                    Software & Automatizações
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-900 bg-neutral-950/40 p-4 overflow-hidden">
                  <Camera className="h-5 w-5 text-amber-300" />
                  <div className="mt-2 text-sm text-neutral-400 ellipsis">
                    Arte, Cinema & Fotografia
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-900 bg-neutral-950/40 p-4 overflow-hidden">
                  <Gamepad className="h-5 w-5 text-amber-300" />
                  <div className="mt-2 text-sm text-neutral-400 ellipsis">
                    Jogos, Histórias & Experiências{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border bg-amber-300 border-neutral-900 ">
                <Image
                  src="/images/yellowme.png"
                  alt="Retrato de Ezequias em luz baixa"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-neutral-900/60" />
              </div>
              <p
                className={`${jetmono.className} mt-3 text-[10px] uppercase tracking-widest text-neutral-500`}
              >
                {'"Menos ruído. Mais essência."'}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-20">
          <div className="flex items-end justify-between">
            <h2 className={`${garamond.className} text-2xl text-neutral-100`}>
              Seleção de Projetos
            </h2>
            <Link
              href="/work"
              className="text-sm text-neutral-400 hover:text-neutral-200"
            >
              Ver todos
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 w-full gap-6">
            <Games amount={1} />
            <Projects amount={1} />
          </div>
        </section>

        <SiteFooter />
      </GrainBG>
    </main>
  );
}
