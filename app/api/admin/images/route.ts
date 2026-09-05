import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const images: { name: string; url: string; label: string; group: string }[] = []

  // Read uploaded files
  try {
    const uploadsDir = path.join(process.cwd(), "public", "uploads")
    if (fs.existsSync(uploadsDir)) {
      const uploadFiles = fs
        .readdirSync(uploadsDir)
        .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
        .sort((a, b) => b.localeCompare(a))

      for (const name of uploadFiles) {
        images.push({
          name,
          url: `/uploads/${name}`,
          label: name.replace(/\.(jpe?g|png|webp|avif|gif)$/i, ""),
          group: "Carregadas Recentemente",
        })
      }
    }
  } catch (e) {
    console.error("Error reading uploads:", e)
  }

  // Read Instagram photos
  try {
    const instaDir = path.join(process.cwd(), "public", "instagram")
    if (fs.existsSync(instaDir)) {
      const files = fs.readdirSync(instaDir).filter((f) =>
        /\.(jpe?g|png|webp|avif)$/i.test(f)
      )
      for (const name of files) {
        images.push({
          name,
          url: `/instagram/${name}`,
          label: name
            .replace(/\.(jpe?g|png|webp|avif)$/i, "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase()),
          group: "Fotos Instagram (@azul_cafe_and_brunch)",
        })
      }
    }
  } catch (e) {
    console.error("Error reading instagram photos:", e)
  }

  return NextResponse.json(images)
}
