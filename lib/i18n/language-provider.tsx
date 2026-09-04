"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { dict, type Lang } from "./dictionary"

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof dict)[Lang]
  isRtl: boolean
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("darzellige-lang") as Lang | null) : null
    if (stored && ["pt", "en", "fr", "ar"].includes(stored)) {
      setLangState(stored)
    } else if (typeof navigator !== "undefined") {
      const nav = navigator.language.slice(0, 2)
      if (nav === "en" || nav === "fr" || nav === "ar") setLangState(nav as Lang)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("darzellige-lang", l)
    document.documentElement.lang = l
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr"
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict[lang], isRtl: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

