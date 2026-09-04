import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A Nossa História | Azul Caffé & Brunch's Dz Lisboa",
  description: "Conheça as raízes e a tradição de brunch e culinária do Azul Caffé & Brunch's Dz, no Bairro Alto, Lisboa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

