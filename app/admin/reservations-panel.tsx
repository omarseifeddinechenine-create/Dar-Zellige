"use client"

import { useEffect, useState } from "react"

type Row = {
  id: number
  name: string
  email: string
  phone: string
  partySize: number
  date: string
  time: string
  occasion?: string | null
  notes?: string | null
  status: string
}

export function ReservationsPanel() {
  const [rows, setRows] = useState<Row[]>([])

  async function load() {
    const res = await fetch("/api/reservations")
    if (res.ok) setRows(await res.json())
  }

  useEffect(() => {
    load()
  }, [])

  async function setStatus(id: number, status: string) {
    await fetch("/api/reservations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    load()
  }

  if (!rows.length) {
    return (
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-500">
        <p className="font-serif text-lg text-stone-800">Ainda não há reservas registadas.</p>
        <p className="mt-1 text-xs">As novas reservas enviadas através do formulário do site aparecerão aqui em tempo real.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-stone-100 bg-[#faf6f0] text-xs font-semibold uppercase tracking-wider text-stone-600">
            <tr>
              <th className="px-4 py-3.5">Data & Hora</th>
              <th className="px-4 py-3.5">Cliente</th>
              <th className="px-4 py-3.5 text-center">Lugares</th>
              <th className="px-4 py-3.5">Contactos</th>
              <th className="px-4 py-3.5">Estado</th>
              <th className="px-4 py-3.5 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {rows.map((r) => {
              const cleanPhone = r.phone.replace(/[^0-9]/g, "")
              const waMsg = encodeURIComponent(
                `Olá ${r.name}! Confirmamos a sua reserva no Dar Zellige (Lisboa) para ${r.date} às ${r.time} (${r.partySize} pessoas). Estamos ansiosos por recebê-lo!`,
              )
              const waUrl = `https://wa.me/${cleanPhone}?text=${waMsg}`

              return (
                <tr key={r.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="px-4 py-3.5 font-mono text-xs">
                    <span className="font-semibold text-stone-900">{r.date}</span>
                    <span className="block text-stone-500 font-sans text-xs mt-0.5">{r.time}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="font-semibold text-stone-900">{r.name}</p>
                    {r.occasion && (
                      <span className="inline-block mt-0.5 rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 border border-amber-200/50">
                        {r.occasion}
                      </span>
                    )}
                    {r.notes && (
                      <p className="text-xs text-stone-500 mt-1 italic line-clamp-1">"{r.notes}"</p>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1d4231]/10 text-xs font-bold text-[#1d4231]">
                      {r.partySize}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs">
                    <p className="font-mono text-stone-800">{r.phone}</p>
                    <p className="text-stone-400 mt-0.5">{r.email}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <select
                      value={r.status}
                      onChange={(e) => setStatus(r.id, e.target.value)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-semibold outline-none transition-colors ${
                        r.status === "confirmed"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : r.status === "cancelled"
                            ? "border-rose-200 bg-rose-50 text-rose-800"
                            : "border-amber-200 bg-amber-50 text-amber-800"
                      }`}
                    >
                      <option value="confirmed">Confirmada</option>
                      <option value="pending">Pendente</option>
                      <option value="cancelled">Cancelada</option>
                    </select>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/15 px-3 py-1 text-xs font-semibold text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-colors"
                      title="Enviar confirmação WhatsApp ao cliente"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
