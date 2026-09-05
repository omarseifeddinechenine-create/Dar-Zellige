import { getGallery } from "@/lib/menu"
import { GalleryView } from "@/components/gallery-view"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Galeria",
  description: "Descubra o ambiente, esplanada e os pratos tradicionais argelinos do Azul Caffé & Brunch's Dz em Lisboa.",
}

export default async function GalleryPage() {
  const items = await getGallery()
  return <GalleryView items={items} />
}
