import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planos Mensais & Serviços | Azul Caffé & Brunch's Dz Lisboa",
  description:
    "Conheça os planos de gestão digital para o restaurante e café Azul Caffé & Brunch's Dz em Lisboa. Gestão de reservas, ementa online e suporte dedicado.",
}

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return children
}
