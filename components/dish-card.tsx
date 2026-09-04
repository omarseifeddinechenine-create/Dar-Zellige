"use client"

import { MessageCircle } from "lucide-react"
import { dishDesc, dishName, parseTags, type DietaryTag, type MenuDish } from "@/lib/data/menu"
import { site } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"

export function DietaryBadges({ tags }: { tags: DietaryTag[] }) {
  const { t } = useLanguage()
  const labels: Record<DietaryTag, string> = {
    halal: t.dietary.halal,
    vegetarian: t.dietary.vegetarian,
    spicy: t.dietary.spicy,
  }
  const styles: Record<DietaryTag, string> = {
    halal: "bg-[#1e3d2f]/12 text-[#1e3d2f] border border-[#1e3d2f]/20 font-semibold",
    vegetarian: "bg-amber-900/10 text-amber-900 border border-amber-900/15",
    spicy: "bg-primary/12 text-primary border border-primary/25 font-semibold",
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] tracking-wide uppercase transition-colors",
            styles[tag],
          )}
        >
          {labels[tag]}
        </span>
      ))}
    </div>
  )
}

export function DishCard({ dish, featured = false }: { dish: MenuDish; featured?: boolean }) {
  const { lang, t } = useLanguage()
  const name = dishName(dish, lang)
  const desc = dishDesc(dish, lang)

  const orderMessage = encodeURIComponent(
    lang === "pt"
      ? `Olá! Gostaria de encomendar ${name} no Azul Caffé & Brunch's Dz.`
      : lang === "fr"
      ? `Bonjour ! Je souhaiterais commander ${name} chez Azul Caffé & Brunch's Dz.`
      : lang === "ar"
      ? `مرحباً! أود طلب طبق ${name} من أزول كافيه & برانش دزاد.`
      : `Hello! I would like to order ${name} from Azul Caffé & Brunch's Dz.`
  )
  const orderUrl = `${site.whatsappHref}?text=${orderMessage}`

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/70 hover:shadow-md transition duration-300",
        featured && "md:col-span-1",
      )}
    >
      <div>
        {dish.imageUrl ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dish.imageUrl}
              alt={name}
              className="size-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {dish.isSignature ? (
              <span className="absolute top-3 right-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-[#241711] shadow-sm uppercase tracking-wider">
                Signature
              </span>
            ) : null}
          </div>
        ) : null}
        <div className="space-y-2.5 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl leading-tight font-semibold text-foreground">{name}</h3>
            <span className="shrink-0 font-serif text-lg font-bold text-primary">
              €{Number(dish.price).toFixed(2)}
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-border/50 px-5 py-3.5 bg-muted/20">
        <DietaryBadges tags={parseTags(Array.isArray(dish.tags) ? dish.tags.join(",") : String(dish.tags ?? "halal"))} />
        <a
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition"
          title={t.nav.order}
        >
          <MessageCircle className="size-3.5" />
          <span>{t.nav.order}</span>
        </a>
      </div>
    </article>
  )
}

export function DishRow({ dish }: { dish: MenuDish }) {
  const { lang, t } = useLanguage()
  const name = dishName(dish, lang)
  const desc = dishDesc(dish, lang)

  const orderMessage = encodeURIComponent(
    lang === "pt"
      ? `Olá! Gostaria de encomendar ${name} no Azul Caffé & Brunch's Dz.`
      : lang === "fr"
      ? `Bonjour ! Je souhaiterais commander ${name} chez Azul Caffé & Brunch's Dz.`
      : lang === "ar"
      ? `مرحباً! أود طلب طبق ${name} من أزول كافيه & برانش دزاد.`
      : `Hello! I would like to order ${name} from Azul Caffé & Brunch's Dz.`
  )
  const orderUrl = `${site.whatsappHref}?text=${orderMessage}`

  return (
    <div className="flex gap-4 border-b border-border/70 py-5 last:border-0 hover:bg-muted/15 px-2 rounded-xl transition">
      {dish.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={dish.imageUrl} alt={name} className="size-20 shrink-0 rounded-2xl object-cover sm:size-24 shadow-sm" loading="lazy" />
      ) : null}
      <div className="min-w-0 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-lg sm:text-xl font-semibold">{name}</h3>
            <span className="shrink-0 font-serif text-base sm:text-lg font-bold text-primary">€{Number(dish.price).toFixed(2)}</span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
          <DietaryBadges tags={parseTags(Array.isArray(dish.tags) ? dish.tags.join(",") : String(dish.tags ?? "halal"))} />
          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent font-medium transition"
          >
            <MessageCircle className="size-3.5" />
            <span>{t.nav.order}</span>
          </a>
        </div>
      </div>
    </div>
  )
}



