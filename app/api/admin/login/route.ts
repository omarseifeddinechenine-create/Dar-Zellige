import { NextResponse } from "next/server"
import { adminCredentials, ADMIN_COOKIE } from "@/lib/admin"

export async function POST(req: Request) {
  const body = await req.json()
  const email = String(body.email ?? "").trim().toLowerCase()
  const password = String(body.password ?? "")
  const creds = adminCredentials()
  if (email !== creds.email || password !== creds.password) {
    return NextResponse.json({ error: "Invalid login" }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 })
  return res
}
