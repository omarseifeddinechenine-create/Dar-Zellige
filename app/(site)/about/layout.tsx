import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A Nossa História | Dar Zellige Lisboa",
  description: "Conheça as raízes e a tradição culinária do Dar Zellige, autêntico restaurante argelino no Bairro Alto, Lisboa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

