"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { garamond, jetmono } from "@/lib/fonts";

const links = [
  { href: "/", label: "Início" },
  { href: "/work", label: "Trabalhos" },
  { href: "/games", label: "Jogos Digitais" },
  // { href: "/photography", label: "Fotografia" },
  // { href: "/music", label: "Música" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/60 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group inline-flex items-baseline gap-4">
          <span
            className={`${garamond.className} text-xl font-semibold text-neutral-100`}
          >
            Ezequias Lopes
          </span>
          <span
            className={`${jetmono.className} text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-amber-300 transition-colors`}
          >
            dev • foto • jogos
          </span>
        </Link>

        <nav
          aria-label="Primária"
          className="hidden md:flex items-center gap-8"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors relative ${
                  active
                    ? "text-amber-300"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-300" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5 text-neutral-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-neutral-900">
              <SheetHeader className="flex flex-row items-center justify-between">
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-amber-300 text-black hover:bg-amber-200 rounded-full"
                    aria-label="Fechar menu"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
              </SheetHeader>
              <div className="mt-8 grid gap-0">
                {links.map((l, index) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`py-4 px-2 text-base transition-colors border-b border-neutral-900/60 ${
                        active
                          ? "text-amber-300 bg-amber-300/5"
                          : "text-neutral-300 hover:text-neutral-100 hover:bg-neutral-900/30"
                      } ${index === links.length - 1 ? "border-b-0" : ""}`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
