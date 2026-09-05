"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, MessageCircle, MapPin, Clock, ShieldCheck, HeartHandshake } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { DishCard } from "@/components/dish-card"
import { Zellige, ZelligeBand } from "@/components/zellige"
import { GALLERY, dishName, type MenuDish } from "@/lib/data/menu"
import { site, whatsappOrderUrl, whatsappReserveUrl } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"

export function HomeView({ dishes, heroImage = "/gmaps/photo_06.jpeg" }: { dishes: MenuDish[]; heroImage?: string }) {
  const { t, lang } = useLanguage()
  const signatures = dishes.filter((d) => d.isSignature && d.available).slice(0, 4)

  const dishGalleryItems = dishes
    .filter((d) => Boolean(d.imageUrl))
    .map((d) => ({
      src: d.imageUrl!,
      alt: `${dishName(d, lang)} — ${site.name}`,
      kind: "dish" as const,
    }))
  const seenSrc = new Set<string>()
  const homeGallery = [...dishGalleryItems, ...GALLERY].filter((item) => {
    if (seenSrc.has(item.src)) return false
    seenSrc.add(item.src)
    return true
  })

  return (
    <>
      {/* Warm & Striking Hero Section */}
      <section className="relative isolate min-h-[92vh] overflow-hidden text-[#faf6f0]">
        {/* Background Food & Ambiance Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt="Azul Caffé & Brunch's Dz — Restaurante em Lisboa"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Warm Terracotta & Deep Charcoal Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c110b]/95 via-[#23150d]/80 to-[#1c110b]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c110b] via-transparent to-black/30" />
        <div className="absolute inset-0 zellige-pattern opacity-10 pointer-events-none" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="flex items-center gap-2.5 rounded-full bg-accent/20 px-3.5 py-1.5 text-xs font-semibold tracking-[0.24em] text-accent backdrop-blur-md uppercase w-fit border border-accent/30">
            <Zellige className="size-4" />
            <span>{t.hero.tag}</span>
          </div>

          <h1 className="mt-5 max-w-3xl font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-[#fffefc] drop-shadow-sm">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#f3ede3] font-light drop-shadow">
            {t.hero.subtitle}
          </p>

          {/* Primary High-Converting CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/reserve"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 hover:scale-[1.02]"
            >
              {t.hero.reserve}
            </Link>
            <a
              href={whatsappOrderUrl(lang)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-800/90 px-6 py-3.5 text-sm font-semibold text-white shadow-md backdrop-blur transition hover:bg-emerald-700"
            >
              <MessageCircle className="size-4" />
              <span>{t.hero.order}</span>
            </a>
            <Link
              href="/menu"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
            >
              {t.hero.viewMenu}
            </Link>
          </div>

          {/* Value Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/75 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" />
              {t.hero.since}
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="size-4 text-accent" />
              Hospitalidade Familiar
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" />
              Bairro Alto · Lisboa
            </span>
          </div>
        </div>
      </section>

      {/* Decorative Zellige Band */}
      <ZelligeBand />

      {/* Cultural Introduction Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{site.name}</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold leading-tight text-foreground">
                {t.intro.title}
              </h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {t.intro.body}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            [t.intro.b1, t.intro.b1d],
            [t.intro.b2, t.intro.b2d],
            [t.intro.b3, t.intro.b3d],
          ].map(([title, body], i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="relative rounded-3xl bg-card p-7 ring-1 ring-border/80 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-accent">0{i + 1}</span>
                  <Zellige className="size-5 text-primary/40" />
                </div>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Signature Dishes Showcase (Deep Forest Green / Spiced Dark Palette) */}
      <section className="relative overflow-hidden bg-[#1a2b20] py-24 text-[#faf6f0]">
        <div className="zellige-green-pattern absolute inset-0 opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-accent uppercase font-medium">
              <Sparkles className="size-4" />
              <span>{t.signature.tag}</span>
            </div>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fffdfa]">{t.signature.title}</h2>
                <p className="mt-2 text-sm sm:text-base text-white/75 max-w-xl">{t.signature.subtitle}</p>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition"
              >
                <span>{t.hero.viewMenu}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatures.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{t.gallery.tag}</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-foreground">{t.gallery.title}</h2>
              <p className="mt-2 text-muted-foreground">{t.gallery.subtitle}</p>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition">
              <span>{t.nav.gallery}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {homeGallery.slice(0, 8).map((img, i) => (
            <div
              key={img.src}
              className={i === 0 ? "col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-sm" : "overflow-hidden rounded-3xl shadow-sm"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="size-full min-h-44 object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About & Story Narrative */}
      <section className="border-y border-border/80 bg-card/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <FadeIn>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gmaps/photo_05.jpeg"
                alt="Interior acolhedor do Azul Caffé & Brunch's Dz"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-md"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#241711] p-4 text-white shadow-xl hidden sm:block">
                <Zellige className="size-8 text-accent" />
                <p className="mt-1 font-serif text-sm font-semibold">{site.name}</p>
                <p className="text-[10px] text-white/60">Bairro Alto · Lisboa</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{t.about.tag}</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold leading-tight text-foreground">{t.about.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.about.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.p2}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                [t.about.stat1, t.about.stat1l],
                [t.about.stat2, t.about.stat2l],
                [t.about.stat3, t.about.stat3l],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-serif text-2xl sm:text-3xl font-bold text-primary">{n}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition"
              >
                <span>{t.nav.about}</span>
                <ArrowRight className="size-4" />
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/plans"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition"
              >
                {t.nav.plans}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location, Transit & Hours Preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{t.visit.tag}</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-foreground">{t.visit.title}</h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-sm">
            <iframe
              title={site.address.city}
              src={site.address.mapsEmbed}
              className="h-80 w-full border-0 lg:h-full min-h-80"
              loading="lazy"
            />
          </div>

          <div className="space-y-6 rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{t.visit.address}</p>
              <p className="mt-2 font-medium text-foreground">
                {site.address.street}
                <br />
                {site.address.neighborhood} · {site.address.postal} {site.address.city}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{t.visit.hours}</p>
              <p className="mt-2 text-sm text-foreground/90 whitespace-pre-line leading-relaxed">{t.visit.hoursValue}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{t.visit.transit}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.visit.transitValue}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{t.visit.parking}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.visit.parkingValue}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90"
              >
                {t.visit.getDirections}
              </a>
              <a href={site.phoneHref} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted">
                {t.visit.call}
              </a>
              <a
                href={whatsappOrderUrl(lang)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-700/30 bg-emerald-50 text-emerald-900 px-5 py-2.5 text-sm font-medium transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Booking Banner with Zellige Tile Accents */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground shadow-inner">
        <div className="zellige-pattern pointer-events-none absolute inset-0 opacity-15" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Zellige className="mx-auto size-8 text-accent mb-3" />
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">{t.reserveCta.title}</h2>
          <p className="mt-4 text-base sm:text-lg text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
            {t.reserveCta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/reserve"
              className="rounded-full bg-[#241711] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#180f0b] hover:scale-105"
            >
              {t.reserveCta.button}
            </Link>
            <a
              href={whatsappReserveUrl(lang)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

