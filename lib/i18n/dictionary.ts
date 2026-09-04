export type Lang = "pt" | "en" | "fr" | "ar"

export const LANGS: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "العربية" },
]

type Dict = {
  nav: {
    home: string
    menu: string
    gallery: string
    about: string
    visit: string
    reserve: string
    order: string
    plans: string
  }
  hero: {
    tag: string
    title: string
    subtitle: string
    reserve: string
    viewMenu: string
    order: string
    since: string
  }
  intro: { title: string; body: string; b1: string; b1d: string; b2: string; b2d: string; b3: string; b3d: string }
  signature: { tag: string; title: string; subtitle: string }
  gallery: { tag: string; title: string; subtitle: string; filterAll: string; filterDishes: string; filterInterior: string; filterEvents: string }
  about: {
    tag: string
    title: string
    p1: string
    p2: string
    stat1: string
    stat1l: string
    stat2: string
    stat2l: string
    stat3: string
    stat3l: string
  }
  visit: {
    tag: string
    title: string
    address: string
    addressValue: string
    hours: string
    hoursValue: string
    phone: string
    getDirections: string
    parking: string
    parkingValue: string
    transit: string
    transitValue: string
    whatsapp: string
    email: string
    call: string
  }
  dietary: { halal: string; vegetarian: string; spicy: string }
  contact: { title: string; subtitle: string }
  reserveCta: { title: string; subtitle: string; button: string }
  reserveForm: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    party: string
    date: string
    time: string
    area: string
    occasion: string
    occasionNone: string
    occasionBirthday: string
    occasionAnniversary: string
    occasionBusiness: string
    occasionOther: string
    notes: string
    notesPlaceholder: string
    submit: string
    submitting: string
    people: string
    person: string
    successTitle: string
    successBody: string
    another: string
    errorRequired: string
    errorGeneric: string
  }
  footer: { tagline: string; explore: string; contact: string; hours: string; rights: string; admin: string }
  categories: Record<string, string>
  menuPage: { title: string; subtitle: string; all: string }
  plansPage: {
    tag: string
    title: string
    subtitle: string
    roiBadge: string
    roiText: string
    month: string
    choosePlan: string
    featuresTitle: string
    popular: string
    tiers: {
      basic: { name: string; price: string; forWho: string; pages: string; reservations: string; langs: string; seo: string; updates: string; support: string }
      pro: { name: string; price: string; forWho: string; pages: string; reservations: string; langs: string; seo: string; updates: string; support: string }
      max: { name: string; price: string; forWho: string; pages: string; reservations: string; langs: string; seo: string; updates: string; support: string }
    }
  }
}

export const dict: Record<Lang, Dict> = {
  pt: {
    nav: {
      home: "Início",
      menu: "Menu",
      gallery: "Galeria",
      about: "Sobre Nós",
      visit: "Localização",
      reserve: "Reservar Mesa",
      order: "Take-away",
      plans: "Planos",
    },
    hero: {
      tag: "Autêntica Cozinha Argelina · Bairro Alto, Lisboa",
      title: "Onde o calor de Argel se encontra com Lisboa",
      subtitle:
        "Couscous real no vapor, tajines aromáticos em terracota e mahjouba acabada de dobrar. Uma celebração da gastronomia argelina num ambiente acolhedor e cheio de luz.",
      reserve: "Reservar Mesa",
      viewMenu: "Ver o Menu",
      order: "Pedir Take-away (WhatsApp)",
      since: "Desde 2024 · 100% Halal Certificado",
    },
    intro: {
      title: "Uma viagem aos aromas do Magrebe sem sair de Lisboa",
      body: "No Dar Zellige honramos as receitas ancestrais da Argélia. Dos grãos de sémola rolados à mão às especiarias trazidas das rotas do Sara, cada prato é uma expressão viva de hospitalidade e partilha.",
      b1: "Tradição Artesanal",
      b1d: "Sémola fina no vapor, rechta estendida à mão e mahjouba feita na chapa ao momento.",
      b2: "100% Halal & Fresco",
      b2d: "Carnes nobres com certificação halal e legumes frescos dos melhores mercados de Lisboa.",
      b3: "Hospitalidade Argelina",
      b3d: "Serviço caloroso, chá de menta servido do alto e um ambiente intimista com azulejos zellige.",
    },
    signature: {
      tag: "Da Nossa Cozinha",
      title: "Pratos de Assinatura",
      subtitle: "As criações mais apreciadas pelos nossos clientes",
    },
    gallery: {
      tag: "O Ambiente",
      title: "A Alma do Dar Zellige",
      subtitle: "Luz acolhedora, azulejos geométricos e mesas cheias de vida",
      filterAll: "Tudo",
      filterDishes: "Pratos",
      filterInterior: "Ambiente",
      filterEvents: "Momentos",
    },
    about: {
      tag: "A Nossa História",
      title: "Dar Zellige: A Casa dos Sabores e da Tradição",
      p1: "O Dar Zellige nasceu do amor pela rica gastronomia da Argélia e do desejo de partilhar essa herança vibrante com Lisboa. No coração do Bairro Alto, criámos um refúgio onde o calor da terracota, os aromas das especiarias e os padrões do zellige se fundem com a luz atlântica.",
      p2: "O nosso compromisso é a fidelidade aos sabores originais: o açafrão, o cominho selvagem, a ras el hanout selecionada, o limão confitado e a água pura de flor de laranjeira. Aqui, sentar-se à mesa é ser recebido como família.",
      stat1: "100%",
      stat1l: "Halal Certificado",
      stat2: "16+",
      stat2l: "Especialidades Tradicionais",
      stat3: "4.9★",
      stat3l: "Avaliação dos Clientes",
    },
    visit: {
      tag: "Como Chegar",
      title: "Visite-nos no Bairro Alto",
      address: "Morada",
      addressValue: "Rua da Rosa 42, Bairro Alto / Chiado\n1200-389 Lisboa, Portugal",
      hours: "Horário de Funcionamento",
      hoursValue: "Terça a Domingo: Almoço 12h00–15h30 · Jantar 19h00–23h30\nSegunda-feira: Encerrado para descanso",
      phone: "Telefone",
      getDirections: "Ver no Google Maps",
      parking: "Estacionamento Próximo",
      parkingValue: "Parque Praça Luís de Camões & Calçada do Combro a 3 minutos a pé.",
      transit: "Transportes Públicos",
      transitValue: "Metro Baixa-Chiado (Linhas Azul & Verde) a 5 min a pé. Elétrico 28E paragem Praça Luís de Camões.",
      whatsapp: "WhatsApp Direto",
      email: "Email",
      call: "Ligar",
    },
    dietary: { halal: "Halal", vegetarian: "Vegetariano", spicy: "Picante" },
    contact: { title: "Contactos", subtitle: "Reserve a sua mesa ou fale connosco pelo WhatsApp" },
    reserveCta: {
      title: "Garanta a Sua Mesa no Dar Zellige",
      subtitle: "As noites de fim de semana esgotam rapidamente. Reserve online com confirmação imediata.",
      button: "Reservar Agora",
    },
    reserveForm: {
      title: "Reserva de Mesa",
      subtitle: "Confirmação instantânea sem espera. Escolha o seu espaço preferido.",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone / WhatsApp",
      party: "Número de Pessoas",
      date: "Data da Reserva",
      time: "Horário",
      area: "Zona Preferida",
      occasion: "Ocasião Especial",
      occasionNone: "Almoço / Jantar Casual",
      occasionBirthday: "Aniversário",
      occasionAnniversary: "Comemoração Romântica",
      occasionBusiness: "Almoço de Negócios",
      occasionOther: "Jantar de Grupo / Outra",
      notes: "Pedidos Especiais / Alergias",
      notesPlaceholder: "Ex: cadeira de bebé, alergias a frutos secos, mesa calma...",
      submit: "Confirmar Reserva Instantânea",
      submitting: "A processar a reserva...",
      people: "pessoas",
      person: "pessoa",
      successTitle: "Reserva Confirmada!",
      successBody: "A sua mesa foi reservada com sucesso no Dar Zellige. Enviámos a confirmação com todos os detalhes.",
      another: "Efetuar Nova Reserva",
      errorRequired: "Por favor preencha todos os campos obrigatórios.",
      errorGeneric: "Ocorreu um erro ao processar. Por favor tente novamente ou contacte via WhatsApp.",
    },
    footer: {
      tagline: "Autêntica Cozinha Argelina no Bairro Alto, Lisboa. Couscous, Tajines e Hospitalidade.",
      explore: "Explorar",
      contact: "Contactos",
      hours: "Horários",
      rights: "Todos os direitos reservados.",
      admin: "Área da Equipa",
    },
    categories: {
      signatures: "Pratos de Assinatura",
      mains: "Carnes & Pratos Quentes",
      starters: "Entradas & Street Food",
      sweet: "Doces & Pastelaria",
      drinks: "Bebidas & Chá Tradicional",
      brunch: "Especiais do Dia",
    },
    menuPage: {
      title: "O Nosso Menu",
      subtitle: "Receitas autênticas preparadas diariamente com ingredientes frescos e amor",
      all: "Todos os Pratos",
    },
    plansPage: {
      tag: "Para Restauradores & Clientes",
      title: "Planos Mensais de Gestão Digital",
      subtitle: "Escolha o nível de compromisso ideal para o seu restaurante crescer e encher mesas todos os dias.",
      roiBadge: "Retorno Imediato",
      roiText: "Apenas 2 a 3 reservas adicionais por mês cobrem o valor total do plano Pro!",
      month: "/mês",
      choosePlan: "Escolher Este Plano",
      featuresTitle: "O que inclui este plano:",
      popular: "Mais Recomendado",
      tiers: {
        basic: {
          name: "Basic",
          price: "€49",
          forWho: "Ideal para começar online com presença profissional rápida",
          pages: "Até 3 páginas (Início, Menu, Contactos)",
          reservations: "Reservas diretas via WhatsApp click-to-chat",
          langs: "1 idioma (Português ou Inglês)",
          seo: "Configuração SEO local básica",
          updates: "1 atualização de ementa por mês",
          support: "Suporte por email (48-72h)",
        },
        pro: {
          name: "Pro",
          price: "€89",
          forWho: "Para restaurantes prontos para maximizar reservas e vendas",
          pages: "Até 6 páginas (+ Reservas, Galeria, História)",
          reservations: "Sistema completo de reservas online com confirmação",
          langs: "3 idiomas (Português, Inglês, Francês)",
          seo: "SEO local avançado + Otimização Google Business",
          updates: "2 atualizações de conteúdo por mês",
          support: "Suporte rápido WhatsApp & Email (24-48h)",
        },
        max: {
          name: "Max",
          price: "€179",
          forWho: "Parceiro digital total para dominância e crescimento constante",
          pages: "Páginas ilimitadas + secções personalizadas",
          reservations: "Reservas online + Integração take-away e entrega",
          langs: "4 idiomas completos (PT, EN, FR + Árabe com RTL)",
          seo: "SEO premium, relatórios mensais e monitorização de tráfego",
          updates: "Atualizações de ementa e fotos ilimitadas",
          support: "Suporte prioritário no próprio dia",
        },
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      gallery: "Gallery",
      about: "Our Story",
      visit: "Location & Hours",
      reserve: "Book a Table",
      order: "Take-away",
      plans: "Plans",
    },
    hero: {
      tag: "Authentic Algerian Cuisine · Bairro Alto, Lisbon",
      title: "Where the Warmth of Algiers Meets Lisbon",
      subtitle:
        "Steamed royal couscous, slow-braised terracotta tagines, and crisp hand-folded mahjouba. A celebration of Algerian culinary heritage in a luminous, welcoming setting.",
      reserve: "Reserve a Table",
      viewMenu: "Explore Menu",
      order: "Order Take-away (WhatsApp)",
      since: "Established 2024 · 100% Certified Halal",
    },
    intro: {
      title: "A journey through the rich aromas of the Maghreb in Lisbon",
      body: "At Dar Zellige we honor Algeria's ancestral culinary traditions. From fine hand-steamed semolina to fragrant spices sourced along ancient Saharan trade routes, every dish is an invitation to warmth and sharing.",
      b1: "Handmade Heritage",
      b1d: "Light steamed semolina, delicate hand-rolled rechta, and mahjouba prepared on the griddle to order.",
      b2: "100% Certified Halal",
      b2d: "Certified halal meats and fresh market vegetables selected daily from Lisbon's finest purveyors.",
      b3: "Algerian Hospitality",
      b3d: "Heartfelt hospitality, spearmint tea poured high in silver pots, and an intimate zellige-tiled dining room.",
    },
    signature: {
      tag: "From Our Kitchen",
      title: "Signature Dishes",
      subtitle: "The recipes our guests fall in love with time and again",
    },
    gallery: {
      tag: "Atmosphere",
      title: "Inside Dar Zellige",
      subtitle: "Warm candlelight, geometric tilework, and tables filled with laughter",
      filterAll: "All",
      filterDishes: "Dishes",
      filterInterior: "Interior",
      filterEvents: "Gatherings",
    },
    about: {
      tag: "Our Heritage",
      title: "Dar Zellige: The House of Flavors & Tradition",
      p1: "Dar Zellige was founded with a single passion: to bring the authentic, generous flavors of Algerian cuisine to Lisbon. Nestled in iconic Bairro Alto, our restaurant provides an escape where warm terracotta tones, fragrant spices, and Mediterranean zellige motifs embrace the gentle Atlantic breeze.",
      p2: "We cook with reverence for the classics: saffron, wild cumin, hand-blended ras el hanout, salted preserved lemons, and orange blossom water. Here, sharing a meal means being embraced like family.",
      stat1: "100%",
      stat1l: "Certified Halal",
      stat2: "16+",
      stat2l: "Authentic Specialties",
      stat3: "4.9★",
      stat3l: "Guest Rating",
    },
    visit: {
      tag: "Find Us",
      title: "Visit Dar Zellige in Bairro Alto",
      address: "Address",
      addressValue: "Rua da Rosa 42, Bairro Alto / Chiado\n1200-389 Lisbon, Portugal",
      hours: "Opening Hours",
      hoursValue: "Tuesday to Sunday: Lunch 12:00–15:30 · Dinner 19:00–23:30\nMonday: Closed",
      phone: "Phone",
      getDirections: "Open in Google Maps",
      parking: "Nearby Parking",
      parkingValue: "Parque Praça Luís de Camões & Calçada do Combro parking garages (3 min walk).",
      transit: "Public Transit",
      transitValue: "Baixa-Chiado Metro (Blue & Green lines) 5 min walk. Tram 28E stop at Praça Luís de Camões.",
      whatsapp: "Direct WhatsApp",
      email: "Email",
      call: "Call Us",
    },
    dietary: { halal: "Halal", vegetarian: "Vegetarian", spicy: "Spicy" },
    contact: { title: "Contact", subtitle: "Book your table or chat directly with our team on WhatsApp" },
    reserveCta: {
      title: "Reserve Your Table at Dar Zellige",
      subtitle: "Evenings and weekends fill up rapidly. Reserve your table online with instant confirmation.",
      button: "Reserve Now",
    },
    reserveForm: {
      title: "Table Reservation",
      subtitle: "Instant confirmation. Choose your preferred dining atmosphere.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone / WhatsApp",
      party: "Number of Guests",
      date: "Date",
      time: "Time",
      area: "Seating Preference",
      occasion: "Occasion",
      occasionNone: "Casual Dining",
      occasionBirthday: "Birthday Celebration",
      occasionAnniversary: "Romantic Anniversary",
      occasionBusiness: "Business Lunch",
      occasionOther: "Group Gathering / Other",
      notes: "Special Requests / Dietary",
      notesPlaceholder: "Allergies, high chair, quiet corner, spice preference...",
      submit: "Confirm Reservation Instantly",
      submitting: "Confirming your booking...",
      people: "guests",
      person: "guest",
      successTitle: "Reservation Confirmed!",
      successBody: "Your table is locked in at Dar Zellige. We have dispatched a confirmation with all your details.",
      another: "Book Another Table",
      errorRequired: "Please complete all mandatory fields.",
      errorGeneric: "An error occurred while booking. Please try again or reach out on WhatsApp.",
    },
    footer: {
      tagline: "Authentic Algerian dining in Bairro Alto, Lisbon. Couscous, tagines and warm hospitality.",
      explore: "Explore",
      contact: "Contact",
      hours: "Hours",
      rights: "All rights reserved.",
      admin: "Staff Portal",
    },
    categories: {
      signatures: "Signature Dishes",
      mains: "Mains & Tagines",
      starters: "Starters & Street Food",
      sweet: "Traditional Pastries",
      drinks: "Beverages & Mint Tea",
      brunch: "Chef Specials",
    },
    menuPage: {
      title: "Our Menu",
      subtitle: "Authentic Algerian recipes prepared fresh each day with care and finest ingredients",
      all: "All Dishes",
    },
    plansPage: {
      tag: "For Restaurant Owners & Clients",
      title: "Monthly Digital Growth Plans",
      subtitle: "Choose the service commitment that fits your goals to drive bookings and keep tables full.",
      roiBadge: "Instant ROI",
      roiText: "Just 2 to 3 extra table bookings per month completely cover the Pro plan cost!",
      month: "/mo",
      choosePlan: "Choose This Plan",
      featuresTitle: "What is included:",
      popular: "Most Popular",
      tiers: {
        basic: {
          name: "Basic",
          price: "€49",
          forWho: "Best for getting online fast with a polished web presence",
          pages: "Up to 3 pages (Home, Menu, Contact)",
          reservations: "WhatsApp click-to-chat bookings",
          langs: "1 language (Portuguese or English)",
          seo: "Essential local SEO setup",
          updates: "1 menu update per month",
          support: "Email support (48-72h)",
        },
        pro: {
          name: "Pro",
          price: "€89",
          forWho: "Designed for restaurants ready to multiply table covers",
          pages: "Up to 6 pages (+ Reservations, Gallery, Story)",
          reservations: "Instant online booking widget with staff dashboard",
          langs: "3 languages (Portuguese, English, French)",
          seo: "Local SEO + Google Business Profile optimization",
          updates: "2 content updates per month",
          support: "WhatsApp & email support (24-48h)",
        },
        max: {
          name: "Max",
          price: "€179",
          forWho: "Complete digital growth partner for maximum revenue",
          pages: "All Pro pages + custom promotional sections",
          reservations: "Online booking + take-away / delivery ordering",
          langs: "4 languages (PT, EN, FR + Arabic with RTL)",
          seo: "Advanced local SEO + monthly performance reports",
          updates: "Unlimited menu & photo updates",
          support: "Priority same-day support",
        },
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      menu: "Menu",
      gallery: "Galerie",
      about: "Notre Histoire",
      visit: "Accès & Horaires",
      reserve: "Réserver",
      order: "À Emporter",
      plans: "Forfaits",
    },
    hero: {
      tag: "Cuisine Algérienne Authentique · Bairro Alto, Lisbonne",
      title: "Quand la chaleur d'Alger rencontre Lisbonne",
      subtitle:
        "Couscous royal à la vapeur, tajines dorés en terre cuite et mahjouba feuilletée minute. Une ode généreuse aux saveurs algériennes au cœur de Lisbonne.",
      reserve: "Réserver une Table",
      viewMenu: "Découvrir la Carte",
      order: "Commander (WhatsApp)",
      since: "Fondé en 2024 · 100% Certifié Halal",
    },
    intro: {
      title: "Un voyage au cœur des parfums du Maghreb à Lisbonne",
      body: "Chez Dar Zellige, nous célébrons les recettes d'antan de nos mères et grands-mères. De la semoule roulée à la main aux épices parfumées des routes sahariennes, chaque assiette est un geste de générosité.",
      b1: "Savoir-faire Artisanal",
      b1d: "Semoule vaporeuse cuite à l'étouffée, rechta maison et mahjouba pliée à la commande.",
      b2: "100% Halal & Frais",
      b2d: "Viandes sélectionnées et certifiées halal, légumes frais du marché cueillis chaque matin.",
      b3: "Hospitalité Algérienne",
      b3d: "Accueil chaleureux, thé à la menthe versé de haut en théière argentée et faïence zellige.",
    },
    signature: {
      tag: "De Notre Cuisine",
      title: "Nos Signatures",
      subtitle: "Les recettes incontournables plébiscitées par nos hôtes",
    },
    gallery: {
      tag: "L'Ambiance",
      title: "L'Âme de Dar Zellige",
      subtitle: "Lumière feutrée, zellige andalou et tables joyeuses",
      filterAll: "Tout",
      filterDishes: "Plats",
      filterInterior: "Intérieur",
      filterEvents: "Moments",
    },
    about: {
      tag: "Notre Héritage",
      title: "Dar Zellige : La Maison des Saveurs et du Cœur",
      p1: "Dar Zellige est né d'une passion ardente pour la haute gastronomie algérienne et de l'envie de la partager avec Lisbonne. Dans les ruelles du Bairro Alto, nous avons créé un sanctuaire où la terre cuite, les épices douces et le zellige dialoguent avec la douceur portugaise.",
      p2: "Notre engagement est une fidélité absolue aux goûts originels : safran, cumin sauvage, ras el hanout maison, citron confit et fleur d'oranger pure. Ici, chaque convive est reçu comme un membre de la famille.",
      stat1: "100%",
      stat1l: "Certifié Halal",
      stat2: "16+",
      stat2l: "Spécialités Royales",
      stat3: "4.9★",
      stat3l: "Note Avis Clients",
    },
    visit: {
      tag: "Nous Trouver",
      title: "Rendez-nous Visite au Bairro Alto",
      address: "Adresse",
      addressValue: "Rua da Rosa 42, Bairro Alto / Chiado\n1200-389 Lisbonne, Portugal",
      hours: "Horaires de Service",
      hoursValue: "Du Mardi au Dimanche : Déjeuner 12h00–15h30 · Dîner 19h00–23h30\nLundi : Fermé",
      phone: "Téléphone",
      getDirections: "Ouvrir dans Google Maps",
      parking: "Parkings à Proximité",
      parkingValue: "Parkings couverts Praça Luís de Camões & Calçada do Combro (3 min à pied).",
      transit: "Transports en Commun",
      transitValue: "Métro Baixa-Chiado (Lignes Bleue & Verte) à 5 min. Tramway 28E arrêt Praça Luís de Camões.",
      whatsapp: "WhatsApp Direct",
      email: "Courriel",
      call: "Appeler",
    },
    dietary: { halal: "Halal", vegetarian: "Végétarien", spicy: "Épicé" },
    contact: { title: "Contact", subtitle: "Réservez votre table ou échangez en direct sur WhatsApp" },
    reserveCta: {
      title: "Réservez Votre Table Chez Dar Zellige",
      subtitle: "Les soirées affichent souvent complet. Réservez en ligne avec confirmation instantanée.",
      button: "Réserver Maintenant",
    },
    reserveForm: {
      title: "Réservation en Ligne",
      subtitle: "Confirmation instantanée sans attente. Choisissez votre ambiance.",
      name: "Nom & Prénom",
      email: "Adresse Email",
      phone: "Téléphone / WhatsApp",
      party: "Nombre de Couverts",
      date: "Date",
      time: "Heure",
      area: "Espace Préféré",
      occasion: "Occasion",
      occasionNone: "Repas Convivial",
      occasionBirthday: "Anniversaire",
      occasionAnniversary: "Dîner Romantique",
      occasionBusiness: "Déjeuner d'Affaires",
      occasionOther: "Groupe / Événement",
      notes: "Demandes Particulières",
      notesPlaceholder: "Allergies, chaise haute, préférence de table...",
      submit: "Confirmer la Réservation",
      submitting: "Confirmation en cours...",
      people: "personnes",
      person: "personne",
      successTitle: "Réservation Confirmée !",
      successBody: "Votre table est prête chez Dar Zellige. Nous vous avons transmis le récapitulatif par message.",
      another: "Faire une Autre Réservation",
      errorRequired: "Veuillez renseigner tous les champs obligatoires.",
      errorGeneric: "Une erreur est survenue. Veuillez réessayer ou nous joindre sur WhatsApp.",
    },
    footer: {
      tagline: "Cuisine algérienne authentique au Bairro Alto, Lisbonne. Couscous, tajines et hospitalité.",
      explore: "Explorer",
      contact: "Contact",
      hours: "Horaires",
      rights: "Tous droits réservés.",
      admin: "Espace Équipe",
    },
    categories: {
      signatures: "Plats Signatures",
      mains: "Plats Chauds & Tajines",
      starters: "Entrées & Street Food",
      sweet: "Pâtisseries Orientales",
      drinks: "Boissons & Thé à la Menthe",
      brunch: "Spécialités du Chef",
    },
    menuPage: {
      title: "Notre Carte",
      subtitle: "Des trésors culinaires préparés quotidiennement avec passion et ingrédients nobles",
      all: "Tous les Plats",
    },
    plansPage: {
      tag: "Offres Professionnelles",
      title: "Forfaits Mensuels Clé en Main",
      subtitle: "Choisissez le niveau d'accompagnement adapté à votre établissement pour remplir votre salle chaque jour.",
      roiBadge: "Rentabilité Immédiate",
      roiText: "Seulement 2 à 3 tables réservées en plus par mois amortissent l'intégralité du forfait Pro !",
      month: "/mois",
      choosePlan: "Sélectionner ce Forfait",
      featuresTitle: "Inclus dans ce forfait :",
      popular: "Le Plus Recommandé",
      tiers: {
        basic: {
          name: "Basic",
          price: "€49",
          forWho: "Parfait pour une présence en ligne soignée et rapide",
          pages: "Jusqu'à 3 pages (Accueil, Carte, Contact)",
          reservations: "Réservations en direct via WhatsApp click-to-chat",
          langs: "1 langue (Portugais ou Anglais)",
          seo: "Configuration SEO local essentielle",
          updates: "1 mise à jour de carte par mois",
          support: "Support par email (48-72h)",
        },
        pro: {
          name: "Pro",
          price: "€89",
          forWho: "Conçu pour les restaurants désirant développer activement leurs réservations",
          pages: "Jusqu'à 6 pages (+ Réservations, Galerie, Histoire)",
          reservations: "Module complet de réservation en ligne avec confirmation",
          langs: "3 langues (Portugais, Anglais, Français)",
          seo: "SEO local avancé + Optimisation Google My Business",
          updates: "2 mises à jour de contenu par mois",
          support: "Support réactif WhatsApp & Email (24-48h)",
        },
        max: {
          name: "Max",
          price: "€179",
          forWho: "Partenaire digital complet pour dominer le marché local",
          pages: "Pages illimitées + sections événementielles",
          reservations: "Réservations en ligne + intégration commande à emporter",
          langs: "4 langues complètes (PT, EN, FR + Arabe avec RTL)",
          seo: "SEO premium, rapports mensuels de performance",
          updates: "Mises à jour illimitées (menus & photos)",
          support: "Support prioritaire le jour même",
        },
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      menu: "قائمة الطعام",
      gallery: "معرض الصور",
      about: "قصتنا",
      visit: "الموقع وساعات العمل",
      reserve: "حجز طاولة",
      order: "طلب سفري",
      plans: "الخطط والأسعار",
    },
    hero: {
      tag: "المطبخ الجزائري الأصيل · بايرو ألتو، لشبونة",
      title: "أصالة الطبخ الجزائري في قلب لشبونة",
      subtitle:
        "الكسكسي الملكي الفاخر، طواجن الفخار المعطرة بالزعفران والمحجوبة المورقة على الجمر. تجربة ضيافة استثنائية تحت أضواء لشبونة الساحرة.",
      reserve: "حجز طاولة الآن",
      viewMenu: "استعراض القائمة",
      order: "طلب سفري عبر الواتساب",
      since: "تأسس عام 2024 · حلال 100% معتمد",
    },
    intro: {
      title: "رحلة أصيلة في عبق المطبخ الجزائري العريق",
      body: "في دار الزليج نحيي أسرار الطبخ الجزائري الموروث أباً عن جد. من حبات السميد المفتولة باليد إلى التوابل الأصيلة من واحات الصحراء، كل طبق هو عنوان للكرم والضيافة.",
      b1: "صنعة يدوية تقليدية",
      b1d: "سميد رقيق مبخر على الأصول، رشتة عاصمية مفتولة ومحجوبة سخونة مطهوة على الطاجين.",
      b2: "حلال 100% ومكونات طازجة",
      b2d: "لحوم بلدية حلال معتمدة مع خضار طازجة ننتقيها كل صباح من أسواق لشبونة.",
      b3: "كرم الضيافة الجزائرية",
      b3d: "استقبال دافئ، شاي بالنعناع مسكوب في أباريق الفضة الفاخرة وجلسة مزينة بالزليج التقليدي.",
    },
    signature: {
      tag: "من مطبخنا",
      title: "أطباقنا الملكية المميزة",
      subtitle: "الأطباق الأكثر طلباً وعشقاً من ضيوفنا",
    },
    gallery: {
      tag: "الأجواء",
      title: "في رحاب دار الزليج",
      subtitle: "أضواء دافئة، زليج أندلسي موشح وطاولات مفعمة بالبهجة",
      filterAll: "الكل",
      filterDishes: "الأطباق",
      filterInterior: "الأجواء",
      filterEvents: "لحظاتنا",
    },
    about: {
      tag: "حكايتنا",
      title: "دار الزليج: موطن النكهة والضيافة المغاربية",
      p1: "انطلقت فكرة دار الزليج من العشق العميق لأصالة المائدة الجزائرية والرغبة في تقديمها بأرقى المعايير في لشبونة. في أزقة بايرو ألتو التاريخية، أبدعنا فضاءً يجمع بين دفء الفخار والتوابل العطرة والزليج الأصيل.",
      p2: "نلتزم بالحفاظ على أسرار الوصفات الأصلية: الزعفران، الكمون البلدي، رأس الحانوت الفاخر، الليمون المصبر وماء الزهر الصافي. في دار الزليج، كل ضيف يدخل كفرد من العائلة.",
      stat1: "100%",
      stat1l: "حلال معتمد",
      stat2: "16+",
      stat2l: "طبق جزائري تقليدي",
      stat3: "4.9★",
      stat3l: "تقييم الزوار",
    },
    visit: {
      tag: "موقعنا",
      title: "تفضلوا بزيارتنا في بايرو ألتو",
      address: "العنوان",
      addressValue: "Rua da Rosa 42, Bairro Alto / Chiado\n1200-389 لشبونة، البرتغال",
      hours: "أوقات العمل",
      hoursValue: "من الثلاثاء إلى الأحد: الغداء 12:00–15:30 · العشاء 19:00–23:30\nالاثنين: مغلق للاستراحة",
      phone: "الهاتف",
      getDirections: "افتح في خرائط جوجل",
      parking: "مواقف السيارات القريبة",
      parkingValue: "موقف Praça Luís de Camões وموقف Calçada do Combro على بعد 3 دقائق سيراً.",
      transit: "المواصلات العامة",
      transitValue: "مترو Baixa-Chiado على بعد 5 دقائق سيراً. ترام 28E محطة Praça Luís de Camões.",
      whatsapp: "واتساب مباشر",
      email: "البريد الإلكتروني",
      call: "اتصال هاتفي",
    },
    dietary: { halal: "حلال", vegetarian: "نباتي", spicy: "حار" },
    contact: { title: "تواصل معنا", subtitle: "احجز طاولتك أو تواصل مباشرة معنا عبر الواتساب" },
    reserveCta: {
      title: "احجز طاولتك الآن في دار الزليج",
      subtitle: "تمتلئ الأماكن سريعاً في عطلة نهاية الأسبوع. احجز فوراً وتأكيد الحجز مباشر.",
      button: "احجز طاولتك الآن",
    },
    reserveForm: {
      title: "حجز طاولة",
      subtitle: "تأكيد فوري بدون انتظار. اختر الركن المفضل لديك.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف / الواتساب",
      party: "عدد الأشخاص",
      date: "تاريخ الحجز",
      time: "الوقت",
      area: "الجلسة المفضلة",
      occasion: "المناسبة",
      occasionNone: "غداء / عشاء عادي",
      occasionBirthday: "عيد ميلاد",
      occasionAnniversary: "مناسبة خاصة",
      occasionBusiness: "غداء عمل",
      occasionOther: "عزومة عائلية / أخرى",
      notes: "ملاحظات أو طلبات خاصة",
      notesPlaceholder: "حساسية طعام، كرسي أطفال، جلسة هادئة...",
      submit: "تأكيد الحجز الفوري",
      submitting: "جاري تسجيل الحجز...",
      people: "أشخاص",
      person: "شخص",
      successTitle: "تم تأكيد حجزك بنجاح!",
      successBody: "طاولتك محجوزة في مطعم دار الزليج. أرسلنا لك كافة تفاصيل الحجز ونتشوق لاستقبالكم.",
      another: "إجراء حجز آخر",
      errorRequired: "يرجى ملء جميع الحقول المطلوبة.",
      errorGeneric: "حدث خطأ أثناء الحجز، يرجى المحاولة ثانية أو مراسلتنا عبر الواتساب.",
    },
    footer: {
      tagline: "المطبخ الجزائري الأصيل في بايرو ألتو، لشبونة. كسكسي، طواجن وضيافة راقية.",
      explore: "استكشف",
      contact: "اتصل بنا",
      hours: "أوقات العمل",
      rights: "جميع الحقوق محفوظة.",
      admin: "بوابة الفريق",
    },
    categories: {
      signatures: "أطباق الأصالة والكرماء",
      mains: "الطواجن والمشاوي الساخنة",
      starters: "مقبلات ومحجوبة الشارع",
      sweet: "حلويات ومقروض تقليدي",
      drinks: "مشروبات وشاي النعناع",
      brunch: "أطباق خاصة",
    },
    menuPage: {
      title: "قائمة أطباقنا",
      subtitle: "وصفات عريقة تُعد يومياً بكل حب من أجود المكونات الطازجة",
      all: "جميع الأطباق",
    },
    plansPage: {
      tag: "لأصحاب المطاعم والعملاء",
      title: "باقات الإدارة والتطوير الرقمي الشهرية",
      subtitle: "اختر الباقة المثالية لنمو مطعمك ومضاعفة حجوزات الطاولات والطلبات اليومية.",
      roiBadge: "عائد استثماري فوري",
      roiText: "يكفي حجز طاولتين إلى 3 طاولات إضافية شهرياً لتغطية تكلفة باقة Pro بالكامل!",
      month: "/شهرياً",
      choosePlan: "اختر هذه الباقة",
      featuresTitle: "مميزات هذه الباقة:",
      popular: "الأكثر طلباً وتوصية",
      tiers: {
        basic: {
          name: "الأساسية (Basic)",
          price: "€49",
          forWho: "مثالية للانطلاق أونلاين بمظهر احترافي سريع",
          pages: "حتى 3 صفحات (الرئيسية، القائمة، التواصل)",
          reservations: "حجز مباشر عبر نقرة محادثة الواتساب",
          langs: "لغة واحدة (البرتغالية أو الإنجليزية)",
          seo: "تهيئة محركات البحث المحلية الأساسية",
          updates: "تحديث واحد للقائمة شهرياً",
          support: "دعم عبر البريد الإلكتروني (48-72 ساعة)",
        },
        pro: {
          name: "الاحترافية (Pro)",
          price: "€89",
          forWho: "للمطاعم الجاهزة لزيادة عدد الزبائن ومضاعفة الحجوزات",
          pages: "حتى 6 صفحات (+ الحجوزات، المعرض، قصتنا)",
          reservations: "نظام حجز إلكتروني متكامل مع تأكيد فوري ولوحة تحكم",
          langs: "3 لغات (البرتغالية، الإنجليزية، الفرنسية)",
          seo: "سيو محلي متقدم + تحسين بطاقة Google Business",
          updates: "تحديثان للمحتوى والقائمة شهرياً",
          support: "دعم سريع عبر الواتساب والإيميل (24-48 ساعة)",
        },
        max: {
          name: "الشاملة (Max)",
          price: "€179",
          forWho: "شريك رقمي متكامل للسيطرة والنمو المستمر",
          pages: "صفحات غير محدودة + أقسام مخصصة",
          reservations: "حجز طاولات + دمج نظام الطلبات والتوصيل",
          langs: "4 لغات كاملة تشمل العربية مع دعم RTL",
          seo: "سيو متميز، تقارير شهرية وتتبع الزوار",
          updates: "تحديثات غير محدودة للصور والقائمة",
          support: "دعم مخصص ذو أولوية في نفس اليوم",
        },
      },
    },
  },
}
