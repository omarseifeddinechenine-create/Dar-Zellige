import { NextResponse } from "next/server"
import { isAdmin, unauthorized } from "@/lib/admin"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  if (!(await isAdmin())) return unauthorized()

  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "Nenhum ficheiro enviado" }, { status: 400 })
    }

    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]
    const ext = path.extname(file.name).toLowerCase()
    if (!validExtensions.includes(ext)) {
      return NextResponse.json(
        { error: "Formato de imagem inválido. Formatos suportados: JPG, PNG, WEBP, AVIF, GIF" },
        { status: 400 }
      )
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads")
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const rawBaseName = path.basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .slice(0, 40)
    const fileName = `${Date.now()}-${rawBaseName || "dish"}${ext}`
    const filePath = path.join(uploadsDir, fileName)

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    fs.writeFileSync(filePath, buffer)

    const publicUrl = `/uploads/${fileName}`

    return NextResponse.json({
      success: true,
      url: publicUrl,
      name: fileName,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Erro ao processar o carregamento da imagem" },
      { status: 500 }
    )
  }
}
