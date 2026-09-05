import fs from "fs"
import path from "path"

export type SiteConfig = {
  heroImage: string
}

const DEFAULT_CONFIG: SiteConfig = {
  heroImage: "/gmaps/photo_06.jpeg",
}

const CONFIG_FILE = path.join(process.cwd(), "lib", "data", "site-config.json")

export function getSiteConfig(): SiteConfig {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"))
      return { ...DEFAULT_CONFIG, ...data }
    }
  } catch (e) {
    console.error("Error reading site config:", e)
  }
  return DEFAULT_CONFIG
}

export function saveSiteConfig(patch: Partial<SiteConfig>): SiteConfig {
  try {
    const current = getSiteConfig()
    const updated = { ...current, ...patch }
    const dir = path.dirname(CONFIG_FILE)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(updated, null, 2), "utf8")
    return updated
  } catch (e) {
    console.error("Error saving site config:", e)
    return DEFAULT_CONFIG
  }
}
