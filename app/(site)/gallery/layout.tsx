import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria de Fotos | Azul Caffé & Brunch's Dz Lisboa",
  description: "Descubra os pratos autênticos, o brunch argelino, o pátio acolhedor e a atmosfera única do Azul Caffé & Brunch's Dz em Lisboa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

