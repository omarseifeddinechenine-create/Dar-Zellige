import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { isAdmin, unauthorized } from "@/lib/admin"
import { getSiteConfig, saveSiteConfig } from "@/lib/site-config"

export async function GET() {
  return NextResponse.json(getSiteConfig())
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return unauthorized()

  try {
    const body = await req.json()
    const updated = saveSiteConfig(body)
    revalidatePath("/")
    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: "Erro ao atualizar configuração" }, { status: 500 })
  }
}
