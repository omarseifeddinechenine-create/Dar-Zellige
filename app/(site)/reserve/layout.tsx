import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reservar Mesa Online | Dar Zellige Lisboa",
  description: "Reserve a sua mesa no restaurante Dar Zellige em Lisboa. Confirmação imediata, escolha da sala e pratos autênticos da Argélia.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

