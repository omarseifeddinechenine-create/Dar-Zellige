import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Localização & Horários | Azul Caffé & Brunch's Dz Lisboa",
  description: "Visite o Azul Caffé & Brunch's Dz na Rua da Rosa 42, Bairro Alto, Lisboa. Horários de almoço, brunch e jantar, mapa, estacionamento e metro.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

