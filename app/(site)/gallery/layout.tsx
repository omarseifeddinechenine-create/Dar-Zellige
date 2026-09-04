import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria de Fotos | Dar Zellige Lisboa",
  description: "Descubra os pratos autênticos, o pátio andalusino e a atmosfera acolhedora do restaurante Dar Zellige em Lisboa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

