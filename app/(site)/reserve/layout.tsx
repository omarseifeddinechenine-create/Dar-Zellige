import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reservar Mesa Online | Azul Caffé & Brunch's Dz Lisboa",
  description: "Reserve a sua mesa no Azul Caffé & Brunch's Dz em Lisboa. Confirmação imediata, escolha da sala e autêntica gastronomia e brunch da Argélia.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

