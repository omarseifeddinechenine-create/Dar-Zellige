import { isAdmin } from "@/lib/admin"
import { redirect } from "next/navigation"
import { ReservationsPanel } from "./reservations-panel"

export default async function AdminHome() {
  if (!(await isAdmin())) redirect("/admin/login")
  return (
    <div>
      <div className="border-b border-stone-200 pb-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Reservas de Mesas</h1>
        <p className="mt-1 text-sm text-stone-600">
          Acompanhe reservas efetuadas online, altere o estado e confirme via WhatsApp com um só clique.
        </p>
      </div>
      <ReservationsPanel />
    </div>
  )
}
