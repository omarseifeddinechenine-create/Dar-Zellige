"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { site, whatsappOrderUrl } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"
import { Zellige } from "./zellige"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function SiteFooter() {
  const { t, lang } = useLanguage()

  return (
    <footer className="relative bg-[#1e130e] text-[#faf6f0] border-t border-amber-950/40">
      <div className="zellige-pattern absolute inset-0 opacity-10 pointer-events-none" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Zellige className="size-8 text-accent shrink-0" />
            <div>
              <span className="font-serif text-2xl font-semibold">{site.name}</span>
              <p className="font-serif text-xs text-accent">{site.nameArabic}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
            <span className="inline-block rounded-full bg-secondary/80 px-2.5 py-1 text-secondary-foreground font-medium">
              100% Halal
            </span>
            <span>Bairro Alto · Chiado</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{t.footer.explore}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>
              <Link href="/menu" className="hover:text-accent transition">{t.nav.menu}</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-accent transition">{t.nav.gallery}</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition">{t.nav.about}</Link>
            </li>
            <li>
              <Link href="/visit" className="hover:text-accent transition">{t.nav.visit}</Link>
            </li>
            <li>
              <Link href="/reserve" className="hover:text-accent transition font-medium text-accent">{t.nav.reserve}</Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-white transition text-white/60 text-xs flex items-center gap-1.5">
                <span>{t.nav.plans}</span>
                <span className="rounded bg-accent/20 px-1 py-0.2 text-[9px] text-accent">Pro</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{t.footer.contact}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 text-accent mt-0.5" />
              <span>
                {site.address.street}
                <br />
                {site.address.neighborhood}
                <br />
                {site.address.postal} {site.address.city}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-accent transition">
                <Phone className="size-4 shrink-0 text-accent" />
                <span>{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2 hover:text-accent transition">
                <Mail className="size-4 shrink-0 text-accent" />
                <span>{site.email}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition">
                <InstagramIcon className="size-4 shrink-0 text-accent" />
                <span>{site.instagramHandle}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {t.footer.hours}
          </p>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/80 whitespace-pre-line">{t.visit.hoursValue}</p>
          <a
            href={whatsappOrderUrl(lang)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            {t.nav.order}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50 sm:px-6 flex flex-wrap items-center justify-between gap-4 max-w-6xl mx-auto">
        <p>
          © {site.founded} {site.name} ({site.nameArabic}). {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <Link href="/plans" className="hover:text-accent transition">
            {t.nav.plans}
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/admin" className="underline-offset-4 hover:underline hover:text-white transition">
            {t.footer.admin}
          </Link>
        </div>
      </div>
    </footer>
  )
}

