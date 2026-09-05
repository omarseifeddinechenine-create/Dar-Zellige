"use client"

import { useEffect, useRef, useState } from "react"
import type { MenuDish } from "@/lib/data/menu"

type LocalImage = { name: string; url: string; label: string; group?: string }

function CategoryBadge({ cat }: { cat: string }) {
  const colours: Record<string, string> = {
    signatures: "bg-amber-50 text-amber-800 border-amber-200",
    mains: "bg-orange-50 text-orange-800 border-orange-200",
    starters: "bg-green-50 text-green-800 border-green-200",
    sweet: "bg-pink-50 text-pink-800 border-pink-200",
    drinks: "bg-blue-50 text-blue-800 border-blue-200",
    brunch: "bg-purple-50 text-purple-800 border-purple-200",
  }
  const labels: Record<string, string> = {
    signatures: "Pratos Principais",
    mains: "Refeições",
    starters: "Entradas",
    sweet: "Doces",
    drinks: "Bebidas",
    brunch: "Brunch",
  }
  return (
    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${colours[cat] ?? "bg-stone-50 text-stone-600 border-stone-200"}`}>
      {labels[cat] ?? cat}
    </span>
  )
}

export function ImageManager() {
  const [dishes, setDishes] = useState<MenuDish[]>([])
  const [localImgs, setLocalImgs] = useState<LocalImage[]>([])
  
  // Hero Image states
  const [heroImage, setHeroImage] = useState<string>("/gmaps/photo_06.jpeg")
  const [heroEdit, setHeroEdit] = useState(false)
  const [heroDraft, setHeroDraft] = useState<string>("")
  const [heroMode, setHeroMode] = useState<"upload" | "gallery" | "url">("upload")
  const [heroUploading, setHeroUploading] = useState(false)
  const [heroSaving, setHeroSaving] = useState(false)
  const [heroSaved, setHeroSaved] = useState(false)
  const heroFileInputRef = useRef<HTMLInputElement | null>(null)

  // Dishes Edit states
  const [editId, setEditId] = useState<number | null>(null)
  const [draft, setDraft] = useState<{ imageUrl: string; descPt: string }>({ imageUrl: "", descPt: "" })
  const [mode, setMode] = useState<"upload" | "gallery" | "url">("upload")
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  async function loadDishes() {
    const res = await fetch("/api/menu")
    if (res.ok) setDishes(await res.json())
  }

  async function loadLocalImgs() {
    const res = await fetch("/api/admin/images")
    if (res.ok) setLocalImgs(await res.json())
  }

  async function loadSiteConfig() {
    const res = await fetch("/api/admin/site-config")
    if (res.ok) {
      const data = await res.json()
      if (data.heroImage) setHeroImage(data.heroImage)
    }
  }

  useEffect(() => {
    loadDishes()
    loadLocalImgs()
    loadSiteConfig()
  }, [])

  // Hero management
  function openHeroEdit() {
    setHeroEdit(true)
    setHeroDraft(heroImage)
    setHeroSaved(false)
    setHeroMode("upload")
  }

  async function handleHeroFileUpload(file: File) {
    setHeroUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData })
      const data = await res.json()
      if (res.ok && data.url) {
        setHeroDraft(data.url)
        await loadLocalImgs()
      }
    } catch {
      alert("Erro ao carregar imagem para o Hero")
    } finally {
      setHeroUploading(false)
    }
  }

  async function handleSaveHero() {
    setHeroSaving(true)
    try {
      const res = await fetch("/api/admin/site-config", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heroImage: heroDraft }),
      })
      if (res.ok) {
        setHeroImage(heroDraft)
        setHeroSaved(true)
        setTimeout(() => {
          setHeroEdit(false)
          setHeroSaved(false)
        }, 1200)
      }
    } finally {
      setHeroSaving(false)
    }
  }

  // Dish management
  function openEdit(dish: MenuDish) {
    setEditId(dish.id)
    setDraft({ imageUrl: dish.imageUrl ?? "", descPt: dish.descPt ?? "" })
    setUploadError(null)
    setUploadSuccess(false)
    setSaved(null)
    setMode("upload")
  }

  function closeEdit() {
    setEditId(null)
    setSaved(null)
    setUploadError(null)
    setUploadSuccess(false)
  }

  async function handleFileUpload(file: File) {
    setUploading(true)
    setUploadError(null)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        setUploadError(data.error || "Falha ao carregar imagem")
        setUploading(false)
        return
      }

      setDraft((d) => ({ ...d, imageUrl: data.url }))
      setUploadSuccess(true)
      await loadLocalImgs()
    } catch {
      setUploadError("Erro na ligação ao carregar a imagem")
    } finally {
      setUploading(false)
    }
  }

  async function handleSave(id: number) {
    setSaving(true)
    await fetch("/api/menu", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, imageUrl: draft.imageUrl || null, descPt: draft.descPt }),
    })
    setSaving(false)
    setSaved(id)
    await loadDishes()
    setTimeout(() => {
      setEditId(null)
      setSaved(null)
    }, 1200)
  }

  const categories = ["all", ...Array.from(new Set(dishes.map((d) => d.category)))]
  const filtered = filter === "all" ? dishes : dishes.filter((d) => d.category === filter)

  return (
    <div className="mt-6 space-y-8">
      {/* ── SECTION 1: Home Page Hero Background ── */}
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🏡</span>
              <h2 className="font-serif font-bold text-stone-900 text-lg sm:text-xl">
                Foto de Capa Principal (Home Hero)
              </h2>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Esta é a grande imagem de fundo exibida no topo da página inicial do restaurante.
            </p>
          </div>
          {!heroEdit && (
            <button
              type="button"
              onClick={openHeroEdit}
              className="rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-800 transition-colors shrink-0"
            >
              ✏️ Mudar Imagem de Capa
            </button>
          )}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 items-center">
          {/* Hero Preview */}
          <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroDraft || heroImage}
              alt="Capa Principal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
              <span className="text-white text-xs font-medium bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                Pré-visualização da Capa
              </span>
            </div>
          </div>

          {/* Hero Edit Controls */}
          {heroEdit ? (
            <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div className="grid grid-cols-3 gap-1 bg-stone-200/70 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setHeroMode("upload")}
                  className={`text-[11px] py-1.5 rounded-lg font-medium transition-colors ${
                    heroMode === "upload" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                  }`}
                >
                  💻 Do Computador
                </button>
                <button
                  type="button"
                  onClick={() => setHeroMode("gallery")}
                  className={`text-[11px] py-1.5 rounded-lg font-medium transition-colors ${
                    heroMode === "gallery" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                  }`}
                >
                  📸 Da Galeria
                </button>
                <button
                  type="button"
                  onClick={() => setHeroMode("url")}
                  className={`text-[11px] py-1.5 rounded-lg font-medium transition-colors ${
                    heroMode === "url" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                  }`}
                >
                  🔗 Link URL
                </button>
              </div>

              {heroMode === "upload" && (
                <div>
                  <input
                    ref={heroFileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/avif"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0]
                      if (f) handleHeroFileUpload(f)
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => heroFileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-stone-300 hover:border-[#1d4231] rounded-xl p-4 text-center cursor-pointer bg-white transition-all"
                  >
                    <span className="text-xl">📁</span>
                    <p className="text-xs font-semibold text-stone-800 mt-1">
                      {heroUploading ? "A carregar do PC..." : "Escolher foto do computador"}
                    </p>
                    <p className="text-[10px] text-stone-500">Recomendado: foto panorâmica de alta resolução</p>
                  </button>
                </div>
              )}

              {heroMode === "gallery" && (
                <div className="grid grid-cols-4 gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {localImgs.map((img) => (
                    <button
                      key={img.url}
                      type="button"
                      onClick={() => setHeroDraft(img.url)}
                      title={img.label}
                      className={`relative rounded-lg overflow-hidden aspect-square ring-2 transition-all ${
                        heroDraft === img.url ? "ring-[#c25438] scale-95" : "ring-transparent hover:ring-stone-300"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {heroMode === "url" && (
                <input
                  type="url"
                  placeholder="https://..."
                  value={heroDraft}
                  onChange={(e) => setHeroDraft(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 px-3 py-2 text-xs bg-white focus:border-[#c25438] outline-none"
                />
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleSaveHero}
                  disabled={heroSaving || heroUploading}
                  className="flex-1 rounded-xl bg-[#1d4231] hover:bg-[#153225] py-2 text-xs font-semibold text-white transition-colors disabled:opacity-50"
                >
                  {heroSaving ? "A guardar..." : heroSaved ? "✓ Capa Atualizada!" : "Guardar Nova Capa"}
                </button>
                <button
                  type="button"
                  onClick={() => setHeroEdit(false)}
                  className="px-3 rounded-xl border border-stone-200 text-xs text-stone-500 bg-white hover:border-stone-400 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="text-xs text-stone-600 space-y-2 p-2">
              <p>
                <strong>Dica:</strong> As fotos dos <strong>Pratos de Assinatura ⭐</strong> (ex: Couscous Real, Tajines, etc.) também aparecem automaticamente na seção de destaques da página inicial.
              </p>
              <p className="text-stone-400">
                Qualquer alteração feita nesta página é guardada em ficheiro local e refletida imediatamente no site.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── SECTION 2: Dishes Image & Description Management ── */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div>
            <h2 className="font-serif font-bold text-stone-900 text-xl">
              🍽️ Fotos & Descrições dos Pratos
            </h2>
            <p className="text-xs text-stone-500">
              Os pratos com o selo <strong>⭐ Assinatura</strong> aparecem na seção principal da Página Inicial.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                  filter === cat
                    ? "bg-[#1d4231] text-white border-[#1d4231]"
                    : "bg-white text-stone-600 border-stone-200 hover:border-[#1d4231]"
                }`}
              >
                {cat === "all" ? "Todos os Pratos" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dish grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dish) => (
            <div key={dish.id} className="rounded-2xl bg-white shadow-sm border border-stone-200 overflow-hidden flex flex-col">
              {/* Current image preview */}
              <div className="relative h-48 bg-[#faf6f0]">
                {dish.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={dish.imageUrl}
                    alt={dish.namePt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-stone-400 text-xs font-serif">
                    Sem imagem
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <CategoryBadge cat={dish.category} />
                </div>
                {dish.isSignature && (
                  <div className="absolute top-2 right-2 bg-[#d99824] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <span>⭐</span>
                    <span>Página Inicial</span>
                  </div>
                )}
              </div>

              {/* Dish info */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-serif font-bold text-stone-900 text-base leading-tight">{dish.namePt}</p>
                    <p className="text-xs text-[#c25438] font-bold shrink-0">€{Number(dish.price).toFixed(2)}</p>
                  </div>
                  {dish.nameAr && (
                    <p className="text-xs text-stone-400 font-arabic mt-0.5" dir="rtl">{dish.nameAr}</p>
                  )}
                  {editId !== dish.id && (
                    <p className="text-xs text-stone-500 mt-2 line-clamp-2 italic">
                      {dish.descPt || "Sem descrição"}
                    </p>
                  )}
                </div>

                {editId === dish.id ? (
                  <div className="space-y-3 border-t border-stone-100 pt-3 mt-2">
                    {/* Mode Selector */}
                    <div className="grid grid-cols-3 gap-1 bg-stone-100 p-1 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setMode("upload")}
                        className={`text-[11px] py-1.5 rounded-lg font-medium transition-colors ${
                          mode === "upload"
                            ? "bg-white text-stone-900 shadow-sm"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        💻 Do PC
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("gallery")}
                        className={`text-[11px] py-1.5 rounded-lg font-medium transition-colors ${
                          mode === "gallery"
                            ? "bg-white text-stone-900 shadow-sm"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        📸 Galeria
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("url")}
                        className={`text-[11px] py-1.5 rounded-lg font-medium transition-colors ${
                          mode === "url"
                            ? "bg-white text-stone-900 shadow-sm"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        🔗 Link URL
                      </button>
                    </div>

                    {/* Mode 1: Upload from local machine */}
                    {mode === "upload" && (
                      <div className="space-y-2">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0]
                            if (f) handleFileUpload(f)
                          }}
                        />

                        <div
                          onDragOver={(e) => {
                            e.preventDefault()
                            setDragOver(true)
                          }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={(e) => {
                            e.preventDefault()
                            setDragOver(false)
                            const f = e.dataTransfer.files?.[0]
                            if (f) handleFileUpload(f)
                          }}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                            dragOver
                              ? "border-[#c25438] bg-orange-50/50"
                              : "border-stone-300 hover:border-[#1d4231] hover:bg-stone-50"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-2xl">📁</span>
                            <p className="text-xs font-semibold text-stone-800">
                              {uploading ? "A carregar do seu PC..." : "Clique para escolher foto"}
                            </p>
                            <p className="text-[10px] text-stone-500">
                              ou arraste o ficheiro para aqui
                            </p>
                          </div>
                        </div>

                        {uploadSuccess && (
                          <p className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 flex items-center gap-1">
                            <span>✓</span> Foto carregada com sucesso!
                          </p>
                        )}

                        {uploadError && (
                          <p className="text-[11px] font-medium text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-200">
                            {uploadError}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Mode 2: Gallery picker */}
                    {mode === "gallery" && (
                      <div className="space-y-1.5">
                        <p className="text-[10px] text-stone-500 font-medium">Escolha uma foto da galeria:</p>
                        <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
                          {localImgs.map((img) => (
                            <button
                              key={img.url}
                              type="button"
                              onClick={() => {
                                setDraft((d) => ({ ...d, imageUrl: img.url }))
                                setUploadSuccess(false)
                              }}
                              title={img.label}
                              className={`relative rounded-lg overflow-hidden aspect-square ring-2 transition-all ${
                                draft.imageUrl === img.url
                                  ? "ring-[#c25438] scale-95"
                                  : "ring-transparent hover:ring-stone-300"
                              }`}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                              {draft.imageUrl === img.url && (
                                <div className="absolute inset-0 bg-[#c25438]/30 flex items-center justify-center">
                                  <span className="text-white text-lg font-bold drop-shadow">✓</span>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Mode 3: Custom URL */}
                    {mode === "url" && (
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                          URL da Imagem
                        </label>
                        <input
                          type="url"
                          placeholder="https://..."
                          value={draft.imageUrl}
                          onChange={(e) => setDraft((d) => ({ ...d, imageUrl: e.target.value }))}
                          className="w-full rounded-xl border border-stone-200 px-3 py-2 text-xs focus:border-[#c25438] outline-none"
                        />
                      </div>
                    )}

                    {/* Preview Selected */}
                    {draft.imageUrl && (
                      <div className="space-y-1">
                        <p className="text-[10px] text-stone-400 font-semibold uppercase">Pré-visualização:</p>
                        <div className="rounded-xl overflow-hidden h-28 border border-stone-200 bg-stone-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={draft.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}

                    {/* Description input */}
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                        Descrição do Prato (PT)
                      </label>
                      <textarea
                        rows={3}
                        value={draft.descPt}
                        onChange={(e) => setDraft((d) => ({ ...d, descPt: e.target.value }))}
                        className="w-full rounded-xl border border-stone-200 px-3 py-2 text-xs focus:border-[#c25438] outline-none resize-none"
                        placeholder="Escreva a descrição do prato aqui..."
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleSave(dish.id)}
                        disabled={saving || uploading}
                        className="flex-1 rounded-xl bg-[#1d4231] hover:bg-[#153225] py-2 text-xs font-semibold text-white transition-colors disabled:opacity-50"
                      >
                        {saving ? "A guardar…" : saved === dish.id ? "✓ Guardado!" : "Guardar Alterações"}
                      </button>
                      <button
                        type="button"
                        onClick={closeEdit}
                        className="px-3 rounded-xl border border-stone-200 text-xs text-stone-500 hover:border-stone-400 transition-colors"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => openEdit(dish)}
                    className="w-full rounded-xl border border-stone-200 py-2.5 text-xs font-semibold text-stone-700 hover:border-[#c25438] hover:text-[#c25438] hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5 mt-2"
                  >
                    <span>📷</span>
                    <span>Mudar Foto ou Descrição</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
