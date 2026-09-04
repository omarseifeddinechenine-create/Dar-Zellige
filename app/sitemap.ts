import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://darzellige.pt"
  return ["", "/menu", "/gallery", "/about", "/visit", "/reserve", "/plans"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }))
}
