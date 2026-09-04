"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Sparkles, TrendingUp, ShieldCheck, Zap, MessageCircle, HelpCircle } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Zellige } from "@/components/zellige"
import { site } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function PlansPage() {
  const { t, lang } = useLanguage()
  const p = t.plansPage

  // Interactive ROI Calculator State
  const [extraTablesPerWeek, setExtraTablesPerWeek] = useState(3)
  const [avgSpendPerPerson, setAvgSpendPerPerson] = useState(25)
  const [avgPartySize, setAvgPartySize] = useState(2)

  const monthlyExtraRevenue = extraTablesPerWeek * 4 * (avgSpendPerPerson * avgPartySize)
  const proPlanCost = 89
  const netMonthlyProfit = monthlyExtraRevenue - proPlanCost
  const roiPercentage = Math.round((netMonthlyProfit / proPlanCost) * 100)

  const plans = [
    {
      id: "basic",
      data: p.tiers.basic,
      popular: false,
      badge: "Início Rápido",
      features: [
        { name: p.tiers.basic.pages, highlight: false },
        { name: p.tiers.basic.reservations, highlight: false },
        { name: p.tiers.basic.langs, highlight: false },
        { name: p.tiers.basic.seo, highlight: false },
        { name: p.tiers.basic.updates, highlight: false },
        { name: p.tiers.basic.support, highlight: false },
        { name: "Alojamento de alta velocidade incluído", highlight: false },
      ],
    },
    {
      id: "pro",
      data: p.tiers.pro,
      popular: true,
      badge: p.popular,
      features: [
        { name: p.tiers.pro.pages, highlight: true },
        { name: p.tiers.pro.reservations, highlight: true },
        { name: p.tiers.pro.langs, highlight: true },
        { name: p.tiers.pro.seo, highlight: true },
        { name: p.tiers.pro.updates, highlight: false },
        { name: p.tiers.pro.support, highlight: false },
        { name: "Painel de gestão staff sem código", highlight: true },
        { name: "Relatório mensal de tráfego e reservas", highlight: false },
      ],
    },
    {
      id: "max",
      data: p.tiers.max,
      popular: false,
      badge: "Crescimento Total",
      features: [
        { name: p.tiers.max.pages, highlight: true },
        { name: p.tiers.max.reservations, highlight: true },
        { name: p.tiers.max.langs, highlight: true },
        { name: p.tiers.max.seo, highlight: true },
        { name: p.tiers.max.updates, highlight: true },
        { name: p.tiers.max.support, highlight: true },
        { name: "Templates para redes sociais (Instagram)", highlight: false },
        { name: "Reunião trimestral de estratégia digital", highlight: false },
      ],
    },
  ]

  function getPlanContactUrl(planName: string) {
    const text = encodeURIComponent(
      lang === "pt"
        ? `Olá! Gostaria de falar sobre a adesão ao plano ${planName} para o Azul Caffé & Brunch's Dz Lisboa.`
        : lang === "fr"
        ? `Bonjour ! J'aimerais échanger au sujet de l'offre ${planName} pour Azul Caffé & Brunch's Dz Lisbonne.`
        : lang === "ar"
        ? `مرحباً! أود الاستفسار والاشتراك في باقة ${planName} لأزول كافيه & برانش دزاد.`
        : `Hello! I would like to discuss activating the ${planName} plan for Azul Caffé & Brunch's Dz Lisbon.`
    )
    return `${site.whatsappHref}?text=${text}`
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Header */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-accent uppercase border border-accent/25">
            <Zellige className="size-3.5" />
            <span>{p.tag}</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-bold text-foreground tracking-tight">
            {p.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {p.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Pricing Cards Grid */}
      <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
        {plans.map((item) => (
          <FadeIn key={item.id} className="flex">
            <div
              className={`relative flex flex-col justify-between w-full rounded-3xl p-8 transition duration-300 ${
                item.popular
                  ? "bg-card ring-2 ring-primary shadow-xl shadow-primary/10"
                  : "bg-card/70 ring-1 ring-border/80 hover:shadow-md"
              }`}
            >
              {item.popular ? (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider shadow">
                  ★ {item.badge}
                </div>
              ) : (
                <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                  {item.badge}
                </div>
              )}

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">{item.data.name}</h2>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed min-h-[32px]">{item.data.forWho}</p>

                <div className="mt-6 flex items-baseline gap-1 border-b border-border/60 pb-6">
                  <span className="font-serif text-5xl font-bold text-foreground">{item.data.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">{p.month}</span>
                </div>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
                  <p className="font-semibold text-xs tracking-wider text-foreground uppercase">{p.featuresTitle}</p>
                  {item.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div
                        className={`flex size-4 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                          f.highlight
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground/70"
                        }`}
                      >
                        <Check className="size-2.5 stroke-[3]" />
                      </div>
                      <span className={f.highlight ? "font-medium text-foreground" : "text-muted-foreground"}>
                        {f.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <a
                  href={getPlanContactUrl(item.data.name)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition ${
                    item.popular
                      ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80 ring-1 ring-border"
                  }`}
                >
                  <MessageCircle className="size-4" />
                  <span>{p.choosePlan}</span>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Interactive ROI Calculator for Restaurant Owner */}
      <section className="mt-20 rounded-3xl bg-[#1e2e24] p-8 sm:p-12 text-[#faf6f0] shadow-xl relative overflow-hidden">
        <div className="zellige-green-pattern absolute inset-0 opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
                <TrendingUp className="size-3.5" />
                <span>{p.roiBadge}</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
                Calculadora de Retorno (ROI) para o Dono
              </h2>
              <p className="mt-1 text-sm text-white/80 max-w-xl">
                Veja como uma presença digital moderna e reservas online se pagam a si próprias em poucos dias.
              </p>
            </div>
            <div className="rounded-2xl bg-accent/20 border border-accent/40 p-4 text-center min-w-[160px]">
              <span className="text-xs uppercase tracking-wider text-accent font-semibold">Retorno Estimado</span>
              <p className="font-serif text-4xl font-bold text-accent">+{roiPercentage}%</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3 border-y border-white/15 py-8">
            <div>
              <label className="block text-xs font-medium text-white/75 mb-2">
                Mesas extras reservadas por semana: <span className="text-accent font-bold text-sm">{extraTablesPerWeek}</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={extraTablesPerWeek}
                onChange={(e) => setExtraTablesPerWeek(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/75 mb-2">
                Pessoas em média por mesa: <span className="text-accent font-bold text-sm">{avgPartySize}</span>
              </label>
              <input
                type="range"
                min="1"
                max="6"
                value={avgPartySize}
                onChange={(e) => setAvgPartySize(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/75 mb-2">
                Consumo médio por pessoa: <span className="text-accent font-bold text-sm">€{avgSpendPerPerson}</span>
              </label>
              <input
                type="range"
                min="15"
                max="50"
                step="5"
                value={avgSpendPerPerson}
                onChange={(e) => setAvgSpendPerPerson(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="text-xs text-white/60 uppercase tracking-wide">Faturação Extra Mensal Estimada:</span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white">
                €{monthlyExtraRevenue.toLocaleString()} <span className="text-xs font-normal text-white/60">/mês</span>
              </p>
              <p className="text-xs text-emerald-400 mt-1">
                Lucro líquido após pagar o plano Pro (€{proPlanCost}): +€{netMonthlyProfit}/mês
              </p>
            </div>
            <a
              href={getPlanContactUrl("Pro")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#1e2e24] shadow-lg hover:bg-accent/90 transition"
            >
              Ativar Plano Pro Agora
            </a>
          </div>
        </div>
      </section>

      {/* Positioning & Value Proposition Notes */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 ring-1 ring-border">
          <ShieldCheck className="size-6 text-primary mb-3" />
          <h3 className="font-serif text-lg font-bold text-foreground">Sem Investimento Inicial Pesado</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Elimina a barreira de pagar milhares de euros adiantados a desenvolvedores. O seu restaurante tem um site de topo imediatamente ativo.
          </p>
        </div>
        <div className="rounded-2xl bg-card p-6 ring-1 ring-border">
          <Zap className="size-6 text-accent mb-3" />
          <h3 className="font-serif text-lg font-bold text-foreground">Sempre Atualizado no Google</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Novos pratos sazonais, preços, feriados e horários de Ramadão são atualizados sem esforço para a equipa do restaurante.
          </p>
        </div>
        <div className="rounded-2xl bg-card p-6 ring-1 ring-border">
          <HelpCircle className="size-6 text-secondary mb-3" />
          <h3 className="font-serif text-lg font-bold text-foreground">Apoio Dedicado em Lisboa</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Canal direto por WhatsApp com tempo de resposta rápido para alterações urgentes de ementa e suporte técnico.
          </p>
        </div>
      </div>
    </div>
  )
}
