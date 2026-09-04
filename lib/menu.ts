import { MENU_SEED, parseTags, type MenuDish } from "@/lib/data/menu"
import type { MenuItem } from "@/lib/db/schema"

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
  if (!process.env.DATABASE_URL) return MENU_SEED
  try {
    const { db } = await import("@/lib/db")
    const { menuItems } = await import("@/lib/db/schema")
    const { asc } = await import("drizzle-orm")
    const rows = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder))
    if (!rows.length) return MENU_SEED
    return rows.map(fromRow)
  } catch {
    return MENU_SEED
  }
}
