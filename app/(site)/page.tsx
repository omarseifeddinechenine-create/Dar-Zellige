import { HomeView } from "@/components/home-view"
import { getMenu } from "@/lib/menu"

export default async function HomePage() {
  const dishes = await getMenu()
  return <HomeView dishes={dishes} />
}
