"use client"

import { useMemo, useState } from "react"
import { CheckCircle2, MessageCircle, Calendar, Users, Clock, MapPin } from "lucide-react"
import { site } from "@/lib/data/site"
import { useLanguage } from "@/lib/i18n/language-provider"
import { Zellige } from "./zellige"

export function ReservationForm() {
  const { t, lang } = useLanguage()
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [confirmedData, setConfirmedData] = useState<{
    code: string
    name: string
    date: string
    time: string
    partySize: number
    area: string
  } | null>(null)

  const minDate = useMemo(() => {
    const d = new Date()
    return d.toISOString().slice(0, 10)
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      partySize: Number(data.get("partySize")),
      date: String(data.get("date") || ""),
      time: String(data.get("time") || ""),
      area: String(data.get("area") || "main"),
      occasion: String(data.get("occasion") || ""),
      notes: String(data.get("notes") || ""),
    }

    if (!payload.name || !payload.email || !payload.phone || !payload.date || !payload.time || !payload.partySize) {
      setStatus("error")
      setMessage(t.reserveForm.errorRequired)
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const errJson = await res.json().catch(() => null)
        if (errJson?.error === "Closed on Monday") {
          throw new Error("closed_monday")
        }
        throw new Error("fail")
      }

      const randomCode = `DZ-${Math.floor(1000 + Math.random() * 9000)}`
      const areaObj = site.areas.find((a) => a.id === payload.area)
      const areaLabel =
        lang === "ar"
          ? areaObj?.nameAr
          : lang === "fr"
          ? areaObj?.nameFr
          : lang === "en"
          ? areaObj?.nameEn
          : areaObj?.namePt

      setConfirmedData({
        code: randomCode,
        name: payload.name,
        date: payload.date,
        time: payload.time,
        partySize: payload.partySize,
        area: areaLabel || "Sala Principal",
      })

      setStatus("success")
      form.reset()
    } catch (err: unknown) {
      setStatus("error")
      if ((err as Error)?.message === "closed_monday") {
        setMessage(
          lang === "pt"
            ? "O restaurante encontra-se encerrado às segundas-feiras. Por favor escolha outro dia."
            : lang === "fr"
            ? "Le restaurant est fermé le lundi. Veuillez choisir un autre jour."
            : lang === "ar"
            ? "المطعم مغلق يوم الاثنين للاستراحة. يرجى اختيار يوم آخر."
            : "The restaurant is closed on Mondays. Please choose another date."
        )
      } else {
        setMessage(t.reserveForm.errorGeneric)
      }
    }
  }

  if (status === "success" && confirmedData) {
    const waShareText = encodeURIComponent(
      lang === "pt"
        ? `Olá Dar Zellige! Confirmo a minha reserva (Ref: ${confirmedData.code}) para ${confirmedData.name}, ${confirmedData.partySize} pessoas no dia ${confirmedData.date} às ${confirmedData.time}.`
        : lang === "fr"
        ? `Bonjour Dar Zellige ! Je confirme ma réservation (Réf: ${confirmedData.code}) au nom de ${confirmedData.name}, pour ${confirmedData.partySize} personnes le ${confirmedData.date} à ${confirmedData.time}.`
        : lang === "ar"
        ? `مرحباً دار الزليج! أؤكد حجزي (رقم المرجع: ${confirmedData.code}) باسم ${confirmedData.name} لعدد ${confirmedData.partySize} أشخاص يوم ${confirmedData.date} الساعة ${confirmedData.time}.`
        : `Hello Dar Zellige! Confirming my reservation (Ref: ${confirmedData.code}) for ${confirmedData.name}, ${confirmedData.partySize} guests on ${confirmedData.date} at ${confirmedData.time}.`
    )
    const waUrl = `${site.whatsappHref}?text=${waShareText}`

    return (
      <div className="rounded-3xl bg-card p-8 sm:p-10 shadow-lg ring-1 ring-border/80 text-center relative overflow-hidden">
        <div className="zellige-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-lg">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 mb-4">
            <CheckCircle2 className="size-8" />
          </div>

          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] text-primary uppercase font-medium">
            <Zellige className="size-4 text-accent" />
            <span>{site.name}</span>
          </div>

          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-foreground">
            {t.reserveForm.successTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.reserveForm.successBody}</p>

          {/* Reservation Summary Card */}
          <div className="mt-6 rounded-2xl bg-muted/30 p-5 text-left border border-border/70 space-y-3">
            <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
              <span className="text-xs text-muted-foreground">Código de Reserva:</span>
              <span className="font-mono font-bold text-sm text-primary">{confirmedData.code}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-accent shrink-0" />
                <span>{confirmedData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-accent shrink-0" />
                <span>{confirmedData.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-accent shrink-0" />
                <span>{confirmedData.partySize} {confirmedData.partySize === 1 ? t.reserveForm.person : t.reserveForm.people}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-accent shrink-0" />
                <span className="truncate">{confirmedData.area}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
            >
              <MessageCircle className="size-4" />
              <span>Partilhar no WhatsApp</span>
            </a>
            <button
              type="button"
              className="w-full sm:w-auto rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
              onClick={() => {
                setStatus("idle")
                setConfirmedData(null)
              }}
            >
              {t.reserveForm.another}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const field =
    "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8">
      <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase font-semibold">
        <Zellige className="size-4 text-accent" />
        <span>Reserva Imediata</span>
      </div>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-foreground">{t.reserveForm.title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{t.reserveForm.subtitle}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.name} *</span>
          <input name="name" required placeholder="Ex: Maria Santos" className={field} autoComplete="name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.email} *</span>
          <input name="email" type="email" required placeholder="exemplo@email.com" className={field} autoComplete="email" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.phone} *</span>
          <input name="phone" type="tel" required placeholder="+351 912 345 678" className={field} autoComplete="tel" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.party} *</span>
          <select name="partySize" defaultValue="2" className={field}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? t.reserveForm.person : t.reserveForm.people}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.date} *</span>
          <input name="date" type="date" required min={minDate} className={field} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.time} *</span>
          <select name="time" required className={field} defaultValue="20:00">
            <optgroup label="Almoço (12:00 - 15:00)">
              {site.slots.slice(0, 6).map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </optgroup>
            <optgroup label="Jantar (19:00 - 22:00)">
              {site.slots.slice(6).map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.area}</span>
          <select name="area" className={field} defaultValue="main">
            {site.areas.map((area) => (
              <option key={area.id} value={area.id}>
                {lang === "ar"
                  ? area.nameAr
                  : lang === "fr"
                  ? area.nameFr
                  : lang === "en"
                  ? area.nameEn
                  : area.namePt}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.occasion}</span>
          <select name="occasion" className={field} defaultValue="">
            <option value="">{t.reserveForm.occasionNone}</option>
            <option value="birthday">{t.reserveForm.occasionBirthday}</option>
            <option value="anniversary">{t.reserveForm.occasionAnniversary}</option>
            <option value="business">{t.reserveForm.occasionBusiness}</option>
            <option value="other">{t.reserveForm.occasionOther}</option>
          </select>
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{t.reserveForm.notes}</span>
          <textarea name="notes" rows={3} className={field} placeholder={t.reserveForm.notesPlaceholder} />
        </label>
      </div>

      {status === "error" ? (
        <div className="mt-4 rounded-xl bg-destructive/10 p-3 text-sm text-destructive font-medium">
          {message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 disabled:opacity-60 cursor-pointer"
      >
        {status === "submitting" ? t.reserveForm.submitting : t.reserveForm.submit}
      </button>
    </form>
  )
}

