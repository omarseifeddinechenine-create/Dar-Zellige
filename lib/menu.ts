import fs from "fs"
import path from "path"
import { MENU_SEED, parseTags, type MenuDish } from "@/lib/data/menu"
import type { MenuItem } from "@/lib/db/schema"

const MENU_FILE = path.join(process.cwd(), "lib", "data", "menu.json")

export function readLocalMenu(): MenuDish[] {
  try {
    if (fs.existsSync(MENU_FILE)) {
      const content = fs.readFileSync(MENU_FILE, "utf8")
      const parsed = JSON.parse(content)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (e) {
    console.error("Error reading local menu file:", e)
  }
  return MENU_SEED
}

export function writeLocalMenu(dishes: MenuDish[]): void {
  try {
    const dir = path.dirname(MENU_FILE)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(MENU_FILE, JSON.stringify(dishes, null, 2), "utf8")
  } catch (e) {
    console.error("Error writing local menu file:", e)
  }
}

function fromRow(row: MenuItem): MenuDish {
  return {
    id: row.id,
    category: row.category as MenuDish["category"],
    namePt: row.namePt,
    nameEn: row.nameEn,
    nameFr: row.nameFr,
    nameAr: (row as { nameAr?: string | null }).nameAr ?? "",
    descPt: row.descPt ?? "",
    descEn: row.descEn ?? "",
    descFr: row.descFr ?? "",
    descAr: (row as { descAr?: string | null }).descAr ?? "",
    price: String(row.price),
    imageUrl: row.imageUrl,
    isSignature: row.isSignature,
    sortOrder: row.sortOrder,
    available: row.available,
    tags: parseTags(row.tags),
  }
}

export async function getMenu(): Promise<MenuDish[]> {
  if (!process.env.DATABASE_URL) {
    return readLocalMenu()
  }
  try {
    const { db } = await import("@/lib/db")
    const { menuItems } = await import("@/lib/db/schema")
    const { asc } = await import("drizzle-orm")
    const rows = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder))
    if (!rows.length) return readLocalMenu()
    return rows.map(fromRow)
  } catch {
    return readLocalMenu()
  }
}
