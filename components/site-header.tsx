"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { site, whatsappOrderUrl } from "@/lib/data/site"
import { LANGS } from "@/lib/i18n/dictionary"
import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"
import { Zellige } from "./zellige"

export function SiteHeader() {
  const { t, lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/menu", label: t.nav.menu },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/visit", label: t.nav.visit },
    { href: "/plans", label: t.nav.plans, badge: true },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-950/20 bg-[#241711]/92 text-[#faf6f0] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Zellige className="size-8 text-accent shrink-0" />
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#fdfbf7]">
                Azul Caffé <span className="text-xs font-sans text-accent tracking-normal font-normal">& Brunch's Dz</span>
              </span>
              <span className="font-serif text-xs text-accent hidden lg:inline">{site.nameArabic}</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase hidden sm:block">Brunch & Cozinha Argelina · Lisboa</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#faf6f0]/80 transition hover:text-white flex items-center gap-1.5"
            >
              <span>{l.label}</span>
              {l.badge ? (
                <span className="rounded-full bg-accent/20 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                  Pro
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center rounded-full border border-white/15 bg-white/5 p-0.5 text-[11px] font-medium tracking-wide sm:flex">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={cn(
                  "rounded-full px-2.5 py-1 transition text-xs",
                  lang === l.code
                    ? "bg-accent text-[#241711] font-semibold shadow-sm"
                    : "text-white/70 hover:text-white",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link
            href="/reserve"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 sm:inline-flex"
          >
            {t.nav.reserve}
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-amber-950/40 bg-[#241711] px-5 py-6 md:hidden shadow-xl">
          <nav className="flex flex-col gap-3.5 text-base">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-[#faf6f0]/90 hover:text-white flex items-center justify-between"
              >
                <span>{l.label}</span>
                {l.badge ? (
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[11px] text-accent">
                    Proposta
                  </span>
                ) : null}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/reserve"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-primary py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                {t.nav.reserve}
              </Link>
              <a
                href={whatsappOrderUrl(lang)}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/20 py-2.5 text-center text-sm font-medium text-[#faf6f0]"
              >
                {t.nav.order}
              </a>
            </div>
          </nav>
          <div className="mt-5 flex items-center justify-center gap-1.5 border-t border-white/10 pt-4">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs",
                  lang === l.code
                    ? "border-accent bg-accent text-[#241711] font-semibold"
                    : "border-white/20 text-white/75",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

