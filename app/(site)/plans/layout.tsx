import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planos Mensais & Serviços | Dar Zellige Lisboa",
  description:
    "Conheça os planos de gestão digital para o restaurante Dar Zellige em Lisboa. Gestão de reservas, ementa online e suporte dedicado.",
}

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return children
}
