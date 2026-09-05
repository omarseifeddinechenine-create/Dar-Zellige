import { HomeView } from "@/components/home-view"
import { getMenu } from "@/lib/menu"
import { getSiteConfig } from "@/lib/site-config"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const dishes = await getMenu()
  const config = getSiteConfig()
  return <HomeView dishes={dishes} heroImage={config.heroImage} />
}
