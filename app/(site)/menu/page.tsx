import { MenuView } from "@/components/menu-view"
import { getMenu } from "@/lib/menu"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu",
  description: "Algerian menu in Lisbon: mahjouba, msemen, tagines, couscous, mint tea. Halal, vegetarian and spicy tags.",
}

export const dynamic = "force-dynamic"

export default async function MenuPage() {
  const dishes = await getMenu()
  return <MenuView dishes={dishes} />
}
