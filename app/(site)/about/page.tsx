"use client"

import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { Zellige } from "@/components/zellige"
import { site } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <FadeIn>
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-primary uppercase font-medium">
            <Zellige className="size-4 text-accent" />
            <span>{t.about.tag}</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-bold leading-tight text-foreground">
            {t.about.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            {t.about.p1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.about.p2}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reserve"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90"
            >
              {t.nav.reserve}
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              {t.nav.menu}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
              alt="Ambiente acolhedor Azul Caffé & Brunch's Dz Lisboa"
              className="aspect-[4/5] rounded-3xl object-cover shadow-lg ring-1 ring-border"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#241711] p-5 text-white shadow-xl hidden sm:block">
              <Zellige className="size-7 text-accent" />
              <p className="mt-1 font-serif text-sm font-bold text-accent">{site.nameArabic}</p>
              <p className="text-xs text-white/70">Bairro Alto · Chiado</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-10">
        {[
          [t.about.stat1, t.about.stat1l],
          [t.about.stat2, t.about.stat2l],
          [t.about.stat3, t.about.stat3l],
        ].map(([n, l]) => (
          <div key={l} className="text-center sm:text-left">
            <dt className="font-serif text-3xl sm:text-5xl font-bold text-primary">{n}</dt>
            <dd className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium">{l}</dd>
          </div>
        ))}
      </dl>

      {/* Cultural Heritage Pillar Cards */}
      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
          <p className="font-serif text-3xl text-accent font-bold">01</p>
          <h3 className="mt-3 font-serif text-xl font-bold text-foreground">O Segredo do Cuscuz</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            A sémola fina não é cozida, mas sim vaporizada lentamente três vezes na cuscuzeira tradicional de cobre, esfregada à mão com azeite puro e manteiga clarificada.
          </p>
        </div>
        <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
          <p className="font-serif text-3xl text-primary font-bold">02</p>
          <h3 className="mt-3 font-serif text-xl font-bold text-foreground">A Rota das Especiarias</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Misturas exclusivas de canela de Ceilão, cubeba, coentros e açafrão colhido, combinados para criar caldos ricos que confortam o corpo e a alma.
          </p>
        </div>
        <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
          <p className="font-serif text-3xl text-secondary font-bold">03</p>
          <h3 className="mt-3 font-serif text-xl font-bold text-foreground">Mesa & Partilha</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Na cultura argelina, comer juntos é um ato sagrado de generosidade. Nenhum convidado sai com fome e o chá é servido em abundância.
          </p>
        </div>
      </div>
    </div>
  )
}

