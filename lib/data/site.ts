export const site = {
  name: "Azul Caffé & Brunch's Dz",
  shortName: "Azul Caffé",
  nameArabic: "أزول كافيه & برانش دزاد",
  subtitle: "Brunch & Cozinha Tradicional Argelina",
  legalName: "Azul Caffé & Brunch's Dz Lisboa, Lda.",
  tagline: "Autêntico Brunch & Gastronomia Argelina no Coração de Lisboa",
  founded: 2024,
  address: {
    street: "Rua da Rosa 42",
    neighborhood: "Bairro Alto / Chiado",
    city: "Lisboa",
    postal: "1200-389",
    country: "Portugal",
    mapsQuery: "Rua da Rosa 42, Bairro Alto, Lisboa",
    mapsEmbed:
      "https://maps.google.com/maps?q=Rua%20da%20Rosa%2042%20Lisboa&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapsUrl: "https://maps.google.com/?q=Rua+da+Rosa+42,+1200-389+Lisboa",
    transit: {
      metro: "Baixa-Chiado (Linhas Azul & Verde) — 5 min a pé (saída Largo do Chiado)",
      tram: "Elétrico 28E (Paragem Praça Luís de Camões)",
      parking: "Parque de Estacionamento Praça Luís de Camões & Calçada do Combro (3 min)",
    },
  },
  geo: { lat: 38.7139, lng: -9.1445 },
  phone: "+351 21 346 8920",
  phoneHref: "tel:+351213468920",
  whatsapp: "+351 912 345 678",
  whatsappHref: "https://wa.me/351912345678",
  email: "reservas@azulcaffe.pt",
  emailHref: "mailto:reservas@azulcaffe.pt",
  instagram: "https://instagram.com/azulcaffe.lisboa",
  instagramHandle: "@azulcaffe.lisboa",
  facebook: "https://facebook.com/azulcaffe.lisboa",
  hours: {
    closedDay: 1, // Monday
    lunch: { open: "12:00", close: "15:30" },
    dinner: { open: "19:00", close: "23:30" },
    display: {
      pt: "Terça a Domingo: Brunch & Almoço 12h00–15h30 · Jantar 19h00–23h30 · Segunda Encerrado",
      en: "Tuesday to Sunday: Brunch & Lunch 12:00–15:30 · Dinner 19:00–23:30 · Closed Monday",
      fr: "Mardi au Dimanche : Brunch & Déjeuner 12h00–15h30 · Dîner 19h00–23h30 · Fermé le Lundi",
      ar: "الثلاثاء إلى الأحد: برانش وغداء 12:00–15:30 · عشاء 19:00–23:30 · مغلق يوم الاثنين",
    },
  },
  slots: [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ],
  areas: [
    { id: "main", namePt: "Sala Principal (Luz Quente & Zellige)", nameEn: "Main Dining Room", nameFr: "Salle Principale", nameAr: "القاعة الرئيسية" },
    { id: "patio", namePt: "Pátio Andalusino / Esplanada", nameEn: "Zellige Courtyard / Terrace", nameFr: "Patio Andalou / Terrasse", nameAr: "فناء الزليج الأندلسي" },
    { id: "salon", namePt: "Salão Real Privado (Grupos)", nameEn: "Private Royal Salon", nameFr: "Salon Royal Privé", nameAr: "الصالون الملكي الخاص" },
  ],
} as const

export type SiteLang = "pt" | "en" | "fr" | "ar"

export function whatsappReserveUrl(lang: SiteLang) {
  const messages: Record<SiteLang, string> = {
    pt: "Olá! Gostaria de reservar uma mesa no Azul Caffé & Brunch's Dz Lisboa.",
    en: "Hello! I would like to reserve a table at Azul Caffé & Brunch's Dz Lisbon.",
    fr: "Bonjour ! Je souhaiterais réserver une table chez Azul Caffé & Brunch's Dz Lisbonne.",
    ar: "مرحباً! أود حجز طاولة في أزول كافيه & برانش دزاد لشبونة.",
  }
  return `${site.whatsappHref}?text=${encodeURIComponent(messages[lang] || messages.pt)}`
}

export function whatsappOrderUrl(lang: SiteLang) {
  const messages: Record<SiteLang, string> = {
    pt: "Olá! Gostaria de fazer um pedido de take-away / entrega no Azul Caffé & Brunch's Dz.",
    en: "Hello! I would like to place a take-away / delivery order at Azul Caffé & Brunch's Dz.",
    fr: "Bonjour ! J'aimerais passer une commande à emporter / livraison chez Azul Caffé & Brunch's Dz.",
    ar: "مرحباً! أود طلب وجبة سفري / توصيل من أزول كافيه & برانش دزاد.",
  }
  return `${site.whatsappHref}?text=${encodeURIComponent(messages[lang] || messages.pt)}`
}
