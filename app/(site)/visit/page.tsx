"use client"

import Link from "next/link"
import { MapPin, Clock, Phone, Mail, Navigation, Car, Train, MessageCircle } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Zellige } from "@/components/zellige"
import { site, whatsappOrderUrl, whatsappReserveUrl } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function VisitPage() {
  const { t, lang } = useLanguage()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeIn>
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-primary uppercase font-semibold">
          <Zellige className="size-4 text-accent" />
          <span>{t.visit.tag}</span>
        </div>
        <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-bold text-foreground">{t.visit.title}</h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">{t.contact.subtitle}</p>
      </FadeIn>

      {/* Embedded Google Map */}
      <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-border shadow-md">
        <iframe
          title={site.address.city}
          src={site.address.mapsEmbed}
          className="h-[440px] w-full border-0"
          loading="lazy"
        />
      </div>

      {/* Quick Info Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-card p-7 ring-1 ring-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase font-semibold">
              <MapPin className="size-4 text-accent" />
              <span>{t.visit.address}</span>
            </div>
            <p className="mt-4 font-serif text-xl font-bold text-foreground">{site.address.street}</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {site.address.neighborhood} · {site.address.postal} {site.address.city}, Portugal
            </p>
          </div>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-accent transition"
          >
            <Navigation className="size-3.5" />
            <span>{t.visit.getDirections}</span>
          </a>
        </div>

        <div className="rounded-3xl bg-card p-7 ring-1 ring-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase font-semibold">
              <Clock className="size-4 text-accent" />
              <span>{t.visit.hours}</span>
            </div>
            <p className="mt-4 text-sm font-medium text-foreground whitespace-pre-line leading-relaxed">
              {t.visit.hoursValue}
            </p>
          </div>
          <div className="mt-6">
            <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              Cozinha 100% Halal
            </span>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-7 ring-1 ring-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase font-semibold">
              <Phone className="size-4 text-accent" />
              <span>Contactos Diretos</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a href={site.phoneHref} className="font-semibold text-foreground hover:text-primary transition">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-400 font-medium hover:underline">
                  {site.whatsapp} (WhatsApp)
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="text-muted-foreground hover:text-foreground transition text-xs">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <a
              href={site.phoneHref}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium hover:bg-muted transition"
            >
              {t.visit.call}
            </a>
            <a
              href={whatsappReserveUrl(lang)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-800 px-4 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Transit & Parking Details */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl bg-card p-7 ring-1 ring-border shadow-sm">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase font-semibold">
            <Train className="size-4 text-accent" />
            <span>{t.visit.transit}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90 font-medium">
            {site.address.transit.metro}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {site.address.transit.tram}
          </p>
        </div>

        <div className="rounded-3xl bg-card p-7 ring-1 ring-border shadow-sm">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase font-semibold">
            <Car className="size-4 text-accent" />
            <span>{t.visit.parking}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90 font-medium">
            {site.address.transit.parking}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Estacionamento subterrâneo pago 24 horas a poucos passos de distância da Rua da Rosa.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-3.5">
        <Link
          href="/reserve"
          className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
        >
          {t.nav.reserve}
        </Link>
        <a
          href={site.address.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:bg-muted transition"
        >
          {t.visit.getDirections}
        </a>
        <a
          href={whatsappOrderUrl(lang)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 px-6 py-3.5 text-sm font-semibold hover:bg-emerald-100 transition"
        >
          <MessageCircle className="size-4" />
          <span>{t.nav.order}</span>
        </a>
      </div>
    </div>
  )
}

