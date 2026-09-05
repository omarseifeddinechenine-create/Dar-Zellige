import { isAdmin } from "@/lib/admin"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.01_84)]">
      <AdminChrome>{children}</AdminChrome>
    </div>
  )
}

async function AdminChrome({ children }: { children: React.ReactNode }) {
  const authed = await isAdmin()
  if (!authed) return <>{children}</>
  return (
    <>
      <header className="border-b border-white/10 bg-[#1a1410] text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#c25438]" />
            <p className="font-serif text-lg font-semibold tracking-wide text-[#faf6f0]">
              Azul Caffé <span className="text-xs font-sans text-[#d99824] uppercase tracking-widest ml-1">& Brunch's Dz · Staff</span>
            </p>
          </div>
          <nav className="flex items-center gap-5 text-sm text-stone-300">
            <Link href="/admin" className="hover:text-[#d99824] transition-colors">Reservas</Link>
            <Link href="/admin/menu" className="hover:text-[#d99824] transition-colors">Menu</Link>
            <Link href="/admin/images" className="hover:text-[#d99824] transition-colors">Imagens</Link>
            <Link href="/plans" className="text-xs bg-[#c25438]/20 text-[#c25438] px-2 py-0.5 rounded border border-[#c25438]/40 hover:bg-[#c25438] hover:text-white transition-colors">Planos</Link>
            <Link href="/" className="hover:text-white transition-colors">Ver Site</Link>
            <form
              action={async () => {
                "use server"
                const { cookies } = await import("next/headers")
                const { ADMIN_COOKIE } = await import("@/lib/admin")
                ;(await cookies()).delete(ADMIN_COOKIE)
                redirect("/admin/login")
              }}
            >
              <button type="submit" className="text-[#d99824] hover:underline cursor-pointer text-xs font-medium">
                Sair
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
    </>
  )
}
