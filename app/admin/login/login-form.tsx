"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError("")
    const data = new FormData(e.currentTarget)
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    })
    setPending(false)
    if (!res.ok) {
      setError("Email ou palavra-passe incorrectos.")
      return
    }
    router.push("/admin")
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl border border-stone-200">
      <div className="flex items-center gap-2 mb-1">
        <span className="h-2 w-2 rounded-full bg-[#c25438]" />
        <p className="text-xs font-semibold tracking-[0.2em] text-[#c25438] uppercase">Dar Zellige</p>
      </div>
      <h1 className="mt-1 font-serif text-3xl font-bold text-stone-900">Área da equipa</h1>
      <p className="mt-1 text-xs text-stone-500">Gestão simplificada de menu, reservas e pratos esgotados.</p>
      <label className="mt-6 block text-sm">
        <span className="text-xs font-medium text-stone-600">Email de Acesso</span>
        <input
          name="email"
          type="email"
          required
          defaultValue="staff@darzellige.pt"
          className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm focus:border-[#c25438] outline-none"
        />
      </label>
      <label className="mt-4 block text-sm">
        <span className="text-xs font-medium text-stone-600">Palavra-passe</span>
        <input
          name="password"
          type="password"
          required
          placeholder="zellige2025"
          className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm focus:border-[#c25438] outline-none"
        />
      </label>
      {error ? <p className="mt-3 text-xs text-rose-600">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-full bg-[#c25438] hover:bg-[#a8442d] py-2.5 text-sm font-semibold text-white shadow transition-colors disabled:opacity-60 cursor-pointer"
      >
        {pending ? "A autenticar…" : "Entrar no Painel"}
      </button>
      <p className="mt-4 text-center text-[11px] text-stone-400">
        Credenciais padrão de demonstração: <br />
        <span className="text-stone-600 font-mono">staff@darzellige.pt</span> / <span className="text-stone-600 font-mono">zellige2025</span>
      </p>
    </form>
  )
}
