"use client"

import { Clock, ShieldCheck, Users, Phone, MessageCircle } from "lucide-react"
import { ReservationForm } from "@/components/reservation-form"
import { Zellige } from "@/components/zellige"
import { site, whatsappReserveUrl } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function ReservePage() {
  const { t, lang } = useLanguage()

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
      <ReservationForm />

      <aside className="space-y-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#241711] p-8 text-white shadow-xl">
          <div className="zellige-pattern absolute inset-0 opacity-15 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              <Zellige className="size-4" />
              <span>{site.name}</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl font-bold">{t.visit.hours}</h2>
            <p className="mt-3 text-sm text-white/80 whitespace-pre-line leading-relaxed">{t.visit.hoursValue}</p>

            <div className="mt-6 border-t border-white/10 pt-4 space-y-3 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
                <span>Carnes 100% Halal Certificadas & Opções Vegetarianas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-accent shrink-0" />
                <span>Grupos com mais de 10 pessoas: contacte com antecedência</span>
              </div>
            </div>

            <p className="mt-6 text-xs text-white/60">
              {site.address.street}, {site.address.neighborhood} · {site.address.city}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappReserveUrl(lang)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-[#241711] shadow hover:bg-accent/90 transition"
              >
                <MessageCircle className="size-3.5" />
                <span>Reservar via WhatsApp</span>
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-medium text-white hover:bg-white/15 transition"
              >
                <Phone className="size-3.5" />
                <span>{site.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-sm">
          <iframe title="map" src={site.address.mapsEmbed} className="h-64 w-full border-0" loading="lazy" />
        </div>
      </aside>
    </div>
  )
}

