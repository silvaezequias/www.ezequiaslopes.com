import Link from "next/link";
import { garamond, jetmono } from "@/lib/fonts";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-900/60 bg-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className={`${garamond.className} text-lg text-neutral-200`}>
              Meu espaço intimo e honesto.
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Agradecimento especial para ❤️{" "}
              <Link
                href={"/gabrielle"}
                className="hover:underline bg-gradient-to-r from-purple-700  to-red-700 bg-clip-text text-transparent"
                title="Eu te amo Gabrielle!"
              >
                Gabrielle G. Rojas
              </Link>{" "}
              | 498.***.***-90
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <a
              href="mailto:workzeca@gmail.com"
              className={`${jetmono.className} text-xs uppercase tracking-widest text-amber-300 hover:text-amber-200`}
            >
              workzeca@gmail.com
            </a>
            <div
              className={`${jetmono.className} text-xs uppercase tracking-widest text-neutral-500`}
            >
              © {new Date().getFullYear()} Ezequias Lopes
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm text-neutral-500">
          <div className="flex flex-wrap gap-4">
            <Link href="/nexteam" className="hover:text-neutral-300">
              NEXTEAM®
            </Link>
            <Link
              href="https://github.com/silvaezequias"
              className="hover:text-neutral-300"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/silvaezequias/"
              className="hover:text-neutral-300"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/e.zequias/"
              className="hover:text-neutral-300"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="cursor-not-allowed select-none text-neutral-600 hover:text-neutral-500"
              title="EM BREVE"
            >
              Spotify
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
