import { isAdmin } from "@/lib/admin"
import { redirect } from "next/navigation"
import { ImageManager } from "./image-manager"

export default async function AdminImagesPage() {
  if (!(await isAdmin())) redirect("/admin/login")
  return (
    <div>
      <div className="border-b border-stone-200 pb-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
          Imagens dos Pratos
        </h1>
        <p className="mt-1 text-sm text-stone-600">
          Clique em qualquer prato para selecionar uma foto da galeria Instagram ou colar um URL externo.
          As alterações são guardadas imediatamente no menu público.
        </p>
      </div>
      <ImageManager />
    </div>
  )
}
