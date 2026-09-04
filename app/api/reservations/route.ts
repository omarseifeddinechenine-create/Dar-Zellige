import { NextResponse } from "next/server"
import { isAdmin, unauthorized } from "@/lib/admin"
import { site } from "@/lib/data/site"

type MemoryRes = {
  id: number
  name: string
  email: string
  phone: string
  partySize: number
  date: string
  time: string
  occasion: string | null
  notes: string | null
  status: string
  createdAt: string
}

const memory: MemoryRes[] = []
let memId = 1

function isMonday(date: string) {
  const d = new Date(`${date}T12:00:00`)
  return d.getDay() === site.hours.closedDay
}

async function tryDb() {
  if (!process.env.DATABASE_URL) throw new Error("No DB configured")
  const { db } = await import("@/lib/db")
  const { reservations } = await import("@/lib/db/schema")
  return { db, reservations }
}

export async function GET() {
  if (!(await isAdmin())) return unauthorized()
  try {
    const { db, reservations } = await tryDb()
    const rows = await db.select().from(reservations)
    return NextResponse.json(rows)
  } catch {
    return NextResponse.json(memory)
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const name = String(body.name ?? "").trim()
  const email = String(body.email ?? "").trim()
  const phone = String(body.phone ?? "").trim()
  const partySize = Number(body.partySize)
  const date = String(body.date ?? "")
  const time = String(body.time ?? "")
  const occasion = body.occasion ? String(body.occasion) : null
  const notes = body.notes ? String(body.notes) : null

  if (!name || !email || !phone || !date || !time || !partySize) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }
  if (isMonday(date)) {
    return NextResponse.json({ error: "Closed on Monday" }, { status: 400 })
  }
  if (!site.slots.includes(time as (typeof site.slots)[number])) {
    return NextResponse.json({ error: "Invalid time" }, { status: 400 })
  }

  try {
    const { db, reservations } = await tryDb()
    const [row] = await db
      .insert(reservations)
      .values({ name, email, phone, partySize, date, time, occasion, notes, status: "confirmed" })
      .returning()
    return NextResponse.json({ ok: true, reservation: row })
  } catch {
    const row: MemoryRes = {
      id: memId++,
      name,
      email,
      phone,
      partySize,
      date,
      time,
      occasion,
      notes,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }
    memory.unshift(row)
    return NextResponse.json({ ok: true, reservation: row })
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return unauthorized()
  const body = await req.json()
  const id = Number(body.id)
  const status = String(body.status ?? "")
  if (!id || !status) return NextResponse.json({ error: "Invalid" }, { status: 400 })
  try {
    const { eq } = await import("drizzle-orm")
    const { db, reservations } = await tryDb()
    await db.update(reservations).set({ status }).where(eq(reservations.id, id))
    return NextResponse.json({ ok: true })
  } catch {
    const row = memory.find((r) => r.id === id)
    if (row) row.status = status
    return NextResponse.json({ ok: true })
  }
}
