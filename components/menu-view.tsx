"use client"

import { useMemo, useState } from "react"
import { DishRow } from "@/components/dish-card"
import { FadeIn } from "@/components/fade-in"
import { Zellige } from "@/components/zellige"
import { CATEGORY_ORDER, type DietaryTag, type MenuCategory, type MenuDish } from "@/lib/data/menu"
import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"

export function MenuView({ dishes }: { dishes: MenuDish[] }) {
  const { t } = useLanguage()
  const [cat, setCat] = useState<MenuCategory | "all">("all")
  const [dietFilter, setDietFilter] = useState<DietaryTag | "all">("all")

  const available = dishes.filter((d) => d.available)

  const filtered = useMemo(() => {
    return available.filter((d) => {
      const matchCat = cat === "all" || d.category === cat
      const tags = Array.isArray(d.tags) ? d.tags : []
      const matchDiet = dietFilter === "all" || tags.includes(dietFilter)
      return matchCat && matchDiet
    })
  }, [available, cat, dietFilter])

  const grouped = CATEGORY_ORDER.map((key) => ({
    key,
    items: filtered.filter((d) => d.category === key),
  })).filter((g) => g.items.length)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <FadeIn>
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-primary uppercase">
          <Zellige className="size-4 text-accent" />
          <span>{t.nav.menu}</span>
        </div>
        <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-bold text-foreground">{t.menuPage.title}</h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">{t.menuPage.subtitle}</p>
      </FadeIn>

      {/* Category Pills */}
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer",
            cat === "all"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-card text-foreground/80 hover:bg-muted/80 ring-1 ring-border/70",
          )}
        >
          {t.menuPage.all}
        </button>
        {CATEGORY_ORDER.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setCat(key)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer",
              cat === key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-foreground/80 hover:bg-muted/80 ring-1 ring-border/70",
            )}
          >
            {t.categories[key] || key}
          </button>
        ))}
      </div>

      {/* Dietary Quick Filter */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
        <span className="font-medium text-foreground/70">Filtro:</span>
        <button
          type="button"
          onClick={() => setDietFilter("all")}
          className={cn(
            "rounded-full px-3 py-1 transition",
            dietFilter === "all" ? "bg-muted text-foreground font-semibold" : "hover:text-foreground",
          )}
        >
          Todos
        </button>
        {(["halal", "vegetarian", "spicy"] as DietaryTag[]).map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setDietFilter(dietFilter === tag ? "all" : tag)}
            className={cn(
              "rounded-full px-3 py-1 transition border",
              dietFilter === tag
                ? "border-primary bg-primary/10 text-primary font-bold"
                : "border-border/60 hover:border-foreground/40",
            )}
          >
            {t.dietary[tag]}
          </button>
        ))}
      </div>

      {/* Dishes Sections */}
      <div className="mt-12 space-y-14">
        {grouped.length > 0 ? (
          grouped.map((g) => (
            <section key={g.key} className="rounded-3xl bg-card/60 p-6 sm:p-8 ring-1 ring-border/60">
              <div className="flex items-center gap-3 border-b border-border/70 pb-4 mb-6">
                <Zellige className="size-5 text-accent" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {t.categories[g.key] || g.key}
                </h2>
              </div>
              <div className="divide-y divide-border/60">
                {g.items.map((dish) => (
                  <DishRow key={dish.id} dish={dish} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="rounded-3xl bg-card p-12 text-center ring-1 ring-border">
            <p className="text-muted-foreground">Nenhum prato encontrado com os filtros selecionados.</p>
            <button
              type="button"
              onClick={() => {
                setCat("all")
                setDietFilter("all")
              }}
              className="mt-4 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground font-medium"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

