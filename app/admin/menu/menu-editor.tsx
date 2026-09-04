"use client"

import { useEffect, useState } from "react"
import type { DietaryTag, MenuDish } from "@/lib/data/menu"

export function MenuEditor() {
  const [items, setItems] = useState<MenuDish[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function load() {
    const res = await fetch("/api/menu")
    if (res.ok) setItems(await res.json())
  }

  useEffect(() => {
    load()
  }, [])

  async function toggleAvailable(item: MenuDish) {
    await fetch("/api/menu", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, available: !item.available }),
    })
    load()
  }

  async function deleteDish(id: number, name: string) {
    if (!confirm(`Tem a certeza que deseja remover "${name}" do menu?`)) return
    await fetch(`/api/menu?id=${id}`, { method: "DELETE" })
    load()
  }

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.currentTarget)
    const tags = ["halal", "vegetarian", "spicy"].filter((t) => data.get(t) === "on") as DietaryTag[]
    
    await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: data.get("category"),
        namePt: data.get("namePt"),
        nameEn: data.get("nameEn"),
        nameFr: data.get("nameFr"),
        nameAr: data.get("nameAr"),
        descPt: data.get("descPt"),
        descEn: data.get("descEn"),
        descFr: data.get("descFr"),
        descAr: data.get("descAr"),
        price: data.get("price"),
        imageUrl: data.get("imageUrl"),
        isSignature: data.get("isSignature") === "on",
        sortOrder: Number(data.get("sortOrder") || 99),
        available: true,
        tags,
      }),
    })
    setLoading(false)
    setOpen(false)
    e.currentTarget.reset()
    load()
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-stone-900">Gestão de Ementa</h2>
          <p className="text-xs text-stone-500">Adicione pratos, atualize preços, traduções e disponibilidade em tempo real.</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full bg-[#c25438] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow hover:bg-[#a8442d] transition-colors"
        >
          {open ? "Fechar Formulário" : "+ Adicionar Prato"}
        </button>
      </div>

      {open ? (
        <form onSubmit={save} className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-sm border border-stone-200 sm:grid-cols-2">
          <div className="sm:col-span-2 border-b border-stone-100 pb-3">
            <h3 className="font-serif font-semibold text-stone-900">Novo Prato Argelino</h3>
            <p className="text-xs text-stone-500">Preencha os dados nas 4 línguas (PT, EN, FR, AR).</p>
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Nome em Português *</label>
            <input name="namePt" required placeholder="Ex: Couscous Real" className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Nome em Inglês *</label>
            <input name="nameEn" required placeholder="Ex: Royal Couscous" className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Nom em Francês *</label>
            <input name="nameFr" required placeholder="Ex: Couscous Royal" className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">الاسم بالعربية (Árabe)</label>
            <input name="nameAr" dir="rtl" placeholder="مثال: الكسكس الملكي" className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none font-arabic" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Preço (€) *</label>
            <input name="price" required placeholder="Ex: 19.50" className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Categoria *</label>
            <select name="category" className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none bg-white">
              <option value="starters">Entradas & Sopas (Chorba, Bourek, Mahjouba)</option>
              <option value="signatures">Pratos Principais & Tajines (Couscous, Tajine)</option>
              <option value="sweet">Doces Tradicionais (Makroudh, Baklawa)</option>
              <option value="drinks">Chás & Bebidas (Chá de Hortelã, Cherbet)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-stone-600 block mb-1">URL da Fotografia</label>
            <input name="imageUrl" placeholder="https://images.unsplash.com/..." className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Descrição (PT)</label>
            <textarea name="descPt" rows={2} placeholder="Sêmola fina no vapor, borrego tenro, legumes da época..." className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Description (EN)</label>
            <textarea name="descEn" rows={2} placeholder="Steamed fine semolina, tender braised lamb..." className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">Description (FR)</label>
            <textarea name="descFr" rows={2} placeholder="Semoule fine à la vapeur, agneau mijoté..." className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none" />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-600 block mb-1">الوصف بالعربية (AR)</label>
            <textarea name="descAr" dir="rtl" rows={2} placeholder="سميد ناعم مبخر، لحم ضأن طري مع خضار ومرق غني..." className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-[#c25438] outline-none font-arabic" />
          </div>

          <div className="sm:col-span-2 flex flex-wrap gap-4 py-2 border-t border-stone-100">
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 cursor-pointer">
              <input type="checkbox" name="halal" defaultChecked className="accent-[#1d4231] rounded" /> Halal Certificado
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 cursor-pointer">
              <input type="checkbox" name="vegetarian" className="accent-[#1d4231] rounded" /> Vegetariano
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 cursor-pointer">
              <input type="checkbox" name="spicy" className="accent-[#c25438] rounded" /> Picante (com Harissa)
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 cursor-pointer">
              <input type="checkbox" name="isSignature" className="accent-[#d99824] rounded" /> Prato Assinatura ⭐
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-[#1d4231] hover:bg-[#153225] py-2.5 text-sm font-semibold text-white sm:col-span-2 transition-colors disabled:opacity-50"
          >
            {loading ? "A guardar..." : "Gravar Prato no Menu"}
          </button>
        </form>
      ) : null}

      <div className="mt-8">
        <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">
          Pratos registados ({items.length})
        </p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border transition-all ${
                item.available ? "border-stone-200" : "border-stone-200 opacity-60 bg-stone-50"
              }`}
            >
              {item.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.imageUrl} alt="" className="size-16 rounded-xl object-cover ring-1 ring-stone-200" />
              ) : (
                <div className="size-16 rounded-xl bg-[#faf6f0] flex items-center justify-center text-xs font-serif text-stone-400">
                  Sem foto
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-serif font-bold text-stone-900 text-base">
                    {item.namePt}
                  </p>
                  {item.isSignature && (
                    <span className="text-[10px] bg-[#d99824]/15 text-[#916212] px-1.5 py-0.5 rounded font-medium">
                      Assinatura
                    </span>
                  )}
                  {item.nameAr && (
                    <span className="text-xs text-stone-500 font-arabic">
                      ({item.nameAr})
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                  {item.descPt || item.descEn}
                </p>
                <div className="flex items-center gap-3 mt-1 text-xs">
                  <span className="font-semibold text-[#c25438]">€{Number(item.price).toFixed(2)}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-stone-500 capitalize">{item.category}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-stone-400">{(item.tags ?? []).join(", ")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleAvailable(item)}
                  className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                    item.available
                      ? "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100"
                      : "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                  }`}
                >
                  {item.available ? "Marcar Esgotado" : "Disponibilizar"}
                </button>
                <button
                  type="button"
                  onClick={() => deleteDish(item.id, item.namePt)}
                  className="rounded-full px-3 py-1 text-xs font-medium border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
