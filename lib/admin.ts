import { cookies, headers } from "next/headers"
import { NextResponse } from "next/server"

export const ADMIN_COOKIE = "azul-admin"
const DEFAULT_EMAIL = "staff@azulcaffe.pt"
const DEFAULT_PASSWORD = "azul2025"

export function adminCredentials() {
  return {
    email: (process.env.ADMIN_EMAIL ?? DEFAULT_EMAIL).toLowerCase(),
    password: process.env.ADMIN_PASSWORD ?? DEFAULT_PASSWORD,
  }
}

export async function isAdmin() {
  if (process.env.DATABASE_URL) {
    try {
      const { auth } = await import("@/lib/auth")
      const session = await auth.api.getSession({ headers: await headers() })
      if (session?.user) return true
    } catch {
      /* no auth db */
    }
  }
  const jar = await cookies()
  return jar.get(ADMIN_COOKIE)?.value === "1"
}

export function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}
