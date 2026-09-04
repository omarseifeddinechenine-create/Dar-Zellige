import { isAdmin } from "@/lib/admin"
import { redirect } from "next/navigation"
import { MenuEditor } from "./menu-editor"

export default async function AdminMenuPage() {
  if (!(await isAdmin())) redirect("/admin/login")
  return (
    <div>
      <div className="border-b border-stone-200 pb-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Ementa & Pratos</h1>
        <p className="mt-1 text-sm text-stone-600">
          Controle pratos, traduções nas 4 línguas (PT, EN, FR, AR), preços e disponibilidade imediata.
        </p>
      </div>
      <MenuEditor />
    </div>
  )
}
