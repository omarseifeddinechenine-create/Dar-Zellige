import { NextResponse } from "next/server"
import { MENU_SEED, parseTags, type MenuDish } from "@/lib/data/menu"
import { isAdmin, unauthorized } from "@/lib/admin"

let memory: MenuDish[] = MENU_SEED.map((d) => ({ ...d }))

function serialize(d: MenuDish) {
  return { ...d, tags: d.tags.join(",") }
}

export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json(memory)
  try {
    const { db } = await import("@/lib/db")
    const { menuItems } = await import("@/lib/db/schema")
    const { asc } = await import("drizzle-orm")
    const rows = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder))
    if (!rows.length) return NextResponse.json(memory)
    return NextResponse.json(
      rows.map((row) => ({
        ...row,
        tags: parseTags((row as { tags?: string }).tags),
        price: String(row.price),
      })),
    )
  } catch {
    return NextResponse.json(memory)
  }
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return unauthorized()
  const body = await req.json()
  const dish: MenuDish = {
    id: Number(body.id) || Date.now(),
    category: body.category,
    namePt: body.namePt,
    nameEn: body.nameEn,
    nameFr: body.nameFr,
    nameAr: body.nameAr ?? "",
    descPt: body.descPt ?? "",
    descEn: body.descEn ?? "",
    descFr: body.descFr ?? "",
    descAr: body.descAr ?? "",
    price: String(body.price),
    imageUrl: body.imageUrl || null,
    isSignature: Boolean(body.isSignature),
    sortOrder: Number(body.sortOrder) || 0,
    available: body.available !== false,
    tags: parseTags(Array.isArray(body.tags) ? body.tags.join(",") : body.tags),
  }

  if (!process.env.DATABASE_URL) {
    memory.push(dish)
    return NextResponse.json(serialize(dish))
  }

  try {
    const { db } = await import("@/lib/db")
    const { menuItems } = await import("@/lib/db/schema")
    const [row] = await db
      .insert(menuItems)
      .values({
        category: dish.category,
        namePt: dish.namePt,
        nameEn: dish.nameEn,
        nameFr: dish.nameFr,
        nameAr: dish.nameAr,
        descPt: dish.descPt,
        descEn: dish.descEn,
        descFr: dish.descFr,
        descAr: dish.descAr,
        price: dish.price,
        imageUrl: dish.imageUrl,
        isSignature: dish.isSignature,
        sortOrder: dish.sortOrder,
        available: dish.available,
        tags: dish.tags.join(","),
      })
      .returning()
    return NextResponse.json(row)
  } catch {
    memory.push(dish)
    return NextResponse.json(serialize(dish))
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return unauthorized()
  const body = await req.json()
  const id = Number(body.id)
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 })

  if (!process.env.DATABASE_URL) {
    memory = memory.map((d) => {
      if (d.id !== id) return d
      return {
        ...d,
        ...body,
        tags: body.tags ? parseTags(Array.isArray(body.tags) ? body.tags.join(",") : body.tags) : d.tags,
      }
    })
    return NextResponse.json({ ok: true })
  }

  try {
    const { db } = await import("@/lib/db")
    const { menuItems } = await import("@/lib/db/schema")
    const { eq } = await import("drizzle-orm")
    const patch: Record<string, unknown> = {}
    for (const key of [
      "category",
      "namePt",
      "nameEn",
      "nameFr",
      "nameAr",
      "descPt",
      "descEn",
      "descFr",
      "descAr",
      "price",
      "imageUrl",
      "isSignature",
      "sortOrder",
      "available",
    ]) {
      if (body[key] !== undefined) patch[key] = body[key]
    }
    if (body.tags !== undefined) {
      patch.tags = Array.isArray(body.tags) ? body.tags.join(",") : body.tags
    }
    await db.update(menuItems).set(patch).where(eq(menuItems.id, id))
    return NextResponse.json({ ok: true })
  } catch {
    memory = memory.map((d) => {
      if (d.id !== id) return d
      return {
        ...d,
        ...body,
        tags: body.tags ? parseTags(Array.isArray(body.tags) ? body.tags.join(",") : body.tags) : d.tags,
      }
    })
    return NextResponse.json({ ok: true })
  }
}

export async function DELETE(req: Request) {
  if (!(await isAdmin())) return unauthorized()
  const { searchParams } = new URL(req.url)
  const idParam = searchParams.get("id")
  const id = Number(idParam)
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 })

  if (!process.env.DATABASE_URL) {
    memory = memory.filter((d) => d.id !== id)
    return NextResponse.json({ ok: true })
  }

  try {
    const { db } = await import("@/lib/db")
    const { menuItems } = await import("@/lib/db/schema")
    const { eq } = await import("drizzle-orm")
    await db.delete(menuItems).where(eq(menuItems.id, id))
    return NextResponse.json({ ok: true })
  } catch {
    memory = memory.filter((d) => d.id !== id)
    return NextResponse.json({ ok: true })
  }
}
