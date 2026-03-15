import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { garamond } from "@/lib/fonts";
import { Games } from "@/components/games";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezequias - Projetos",
  description: "Projetos digitais autorais e colaborativos.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-20">
          <h1
            className={`${garamond.className} text-3xl sm:text-4xl text-neutral-100`}
          >
            Jogos Digitais
          </h1>
          <p className="mt-2 text-neutral-500 max-w-prose">
            Jogos digitais disponíveis até para a Web
          </p>
          <Games />
        </section>
        <SiteFooter />
      </GrainBG>
    </main>
  );
}
