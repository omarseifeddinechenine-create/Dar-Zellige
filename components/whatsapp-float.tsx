"use client"

import { MessageCircle } from "lucide-react"
import { whatsappOrderUrl } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"

export function WhatsAppFloat() {
  const { lang, t } = useLanguage()
  return (
    <a
      href={whatsappOrderUrl(lang)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/25 transition hover:brightness-105 hover:scale-105 sm:bottom-6 sm:right-6 ring-2 ring-white/30"
    >
      <span className="relative flex size-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full size-2.5 bg-white" />
      </span>
      <MessageCircle className="size-4 shrink-0" />
      <span className="hidden sm:inline font-sans">{t.nav.order}</span>
    </a>
  )
}

