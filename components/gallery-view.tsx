"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Zellige } from "@/components/zellige"
import type { GalleryItem } from "@/lib/menu"
import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"

export function GalleryView({ items }: { items: GalleryItem[] }) {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<"all" | "dish" | "interior" | "event">("all")

  const filtered = filter === "all" ? items : items.filter((g) => g.kind === filter)

  const dishCount = items.filter((g) => g.kind === "dish").length
  const interiorCount = items.filter((g) => g.kind === "interior").length
  const eventCount = items.filter((g) => g.kind === "event").length

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeIn>
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-primary uppercase font-semibold">
          <Zellige className="size-4 text-accent" />
          <span>{t.gallery.tag}</span>
        </div>
        <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-bold text-foreground">{t.gallery.title}</h1>
        <p className="mt-3 text-base text-muted-foreground max-w-xl">{t.gallery.subtitle}</p>
      </FadeIn>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {[
          { key: "all", label: `${t.gallery.filterAll} (${items.length})` },
          { key: "dish", label: `${t.gallery.filterDishes} (${dishCount})` },
          { key: "interior", label: `${t.gallery.filterInterior} (${interiorCount})` },
          { key: "event", label: `${t.gallery.filterEvents} (${eventCount})` },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as typeof filter)}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition cursor-pointer",
              filter === tab.key
                ? "bg-primary text-primary-foreground shadow"
                : "bg-card text-muted-foreground ring-1 ring-border/70 hover:bg-muted/60",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((img) => (
          <div
            key={img.src}
            className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-muted ring-1 ring-border/70 shadow-sm transition hover:shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <div>
                <p className="text-sm font-semibold text-white drop-shadow">{img.alt}</p>
                {img.kind === "dish" && (
                  <span className="mt-1 inline-block text-[10px] uppercase font-bold text-accent bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    Prato do Menu
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
