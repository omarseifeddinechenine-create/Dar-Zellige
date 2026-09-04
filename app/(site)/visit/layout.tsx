import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Localização & Horários | Dar Zellige Lisboa",
  description: "Visite o Dar Zellige na Rua da Rosa 42, Bairro Alto, Lisboa. Horários de almoço e jantar, mapa, estacionamento e metro.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

