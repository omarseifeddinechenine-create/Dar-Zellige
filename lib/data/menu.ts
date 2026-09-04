export type MenuCategory = "signatures" | "mains" | "starters" | "sweet" | "drinks" | "brunch"
export type DietaryTag = "halal" | "vegetarian" | "spicy"

export type MenuDish = {
  id: number
  category: MenuCategory
  namePt: string
  nameEn: string
  nameFr: string
  nameAr?: string
  descPt: string
  descEn: string
  descFr: string
  descAr?: string
  price: string
  imageUrl: string | null
  isSignature: boolean
  sortOrder: number
  available: boolean
  tags: DietaryTag[]
}

const img = {
  couscous: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
  tajine: "https://images.unsplash.com/photo-1541519227354-08fa9d633c18?auto=format&fit=crop&w=1200&q=80",
  tajineLamb: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  mahjouba: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  shakshuka: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1200&q=80",
  brik: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
  makroud: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  baghrir: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
  tea: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
  lemonade: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
  coffee: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
}

export const MENU_SEED: MenuDish[] = [
  {
    id: 1,
    category: "signatures",
    namePt: "Couscous Real Argelino",
    nameEn: "Royal Algerian Couscous",
    nameFr: "Couscous Royal Algérien",
    nameAr: "الكسكسي الجزائري الملكي",
    descPt: "Sémola fina trabalhada à mão no vapor de alfazema, borrego tenro, frango do campo, merguez artesanal e 7 legumes em caldo de canela e açafrão.",
    descEn: "Fine hand-steamed semolina, braised lamb shoulder, free-range chicken, artisan merguez and 7 vegetables in fragrant cinnamon & saffron broth.",
    descFr: "Semoule fine roulée main à la vapeur, agneau fondant, poulet fermier, merguez artisanale et 7 légumes du marché au bouillon parfumé.",
    descAr: "سميد رقيق مبخر على اليد، لحم خروف طري، دجاج محمر، مرقاز تقليدي وسبع خضار في مرق الزعفران والقرفة العطرية.",
    price: "19.50",
    imageUrl: img.couscous,
    isSignature: true,
    sortOrder: 1,
    available: true,
    tags: ["halal"],
  },
  {
    id: 2,
    category: "signatures",
    namePt: "Tajine Zitoune de Constantina",
    nameEn: "Constantine Olive Tagine",
    nameFr: "Tajine Zitoune de Constantine",
    nameAr: "طاجين الزيتون القسنطيني",
    descPt: "Frango estufado lentamente com azeitonas verdes descaroçadas, cogumelos frescos, limão confitado e molho dourado aromático.",
    descEn: "Slow-braised chicken with green olives, Paris button mushrooms, preserved lemon, and an aromatic golden saffron emulsion.",
    descFr: "Poulet mijoté doucement aux olives vertes, champignons frais, citron confit et sauce dorée au curcuma et laurier.",
    descAr: "دجاج متبل ومطهو على نار هادئة مع الزيتون الأخضر، الفطر الطازج، الليمون المصبر ومرق ذهبي بالزعفران.",
    price: "17.90",
    imageUrl: img.tajine,
    isSignature: true,
    sortOrder: 2,
    available: true,
    tags: ["halal"],
  },
  {
    id: 3,
    category: "signatures",
    namePt: "Tajine Lham Lahlou Real",
    nameEn: "Royal Lham Lahlou (Sweet & Savory)",
    nameFr: "Tajine Lham Lahlou Royal",
    nameAr: "طاجين اللحم الحلو الملكي",
    descPt: "Prato nobre de celebração argelina: borrego caramelizado com ameixas secas, damascos, amêndoas torradas e água de flor de laranjeira.",
    descEn: "Celebrated Algerian ceremonial dish: tender lamb caramelized with prunes, golden apricots, toasted almonds, and orange blossom honey nectar.",
    descFr: "Plat princier des fêtes algériennes : agneau caramélisé aux pruneaux, abricots dorés, amandes grillées et eau de fleur d'oranger.",
    descAr: "طبق الأعراس والمناسبات الكبرى: لحم طري معسل بالبرقوق، المشمش المجفف، اللوز المحمص ونفحات ماء الزهر.",
    price: "18.50",
    imageUrl: img.tajineLamb,
    isSignature: true,
    sortOrder: 3,
    available: true,
    tags: ["halal"],
  },
  {
    id: 4,
    category: "signatures",
    namePt: "Rechta Algéroise Tradicional",
    nameEn: "Traditional Algiers Rechta",
    nameFr: "Rechta Algéroise Traditionnelle",
    nameAr: "الرشتة العاصمية الأصيلة",
    descPt: "Massa fina artesanal argelina cozinhada no vapor, servida com frango tenro, nabos doces, grão-de-bico e molho perfumado a canela de Ceilão.",
    descEn: "Artisanal hand-cut steamed noodles, tender farm chicken, sweet white turnip, chickpeas, and a fragrant Ceylon cinnamon white sauce.",
    descFr: "Pâtes fraîches artisanales algéroises cuites à la vapeur, poulet tendre, navets fondants, pois chiches et sauce blanche à la cannelle.",
    descAr: "معكرونة تقليدية رقيقة مبخرة على البخار، دجاج طري، لفت أبيض، حمص ومرق أبيض فاخر بالقرفة.",
    price: "16.80",
    imageUrl: img.couscous,
    isSignature: true,
    sortOrder: 4,
    available: true,
    tags: ["halal"],
  },
  {
    id: 5,
    category: "starters",
    namePt: "Mahjouba da Casbá",
    nameEn: "Casbah Mahjouba Crêpe",
    nameFr: "Mahjouba de la Casbah",
    nameAr: "المحجوبة الحارة العاصمية",
    descPt: "Fina crepe folhada de sémola dobrada em envelope, recheada na hora com confitado de tomate, cebola caramelizada, coentros e harissa suave.",
    descEn: "Wafer-thin semolina flatbread envelope, stuffed to order with braised spiced tomatoes, caramelized sweet onions, fresh herbs & harissa.",
    descFr: "Crêpe feuilletée de semoule pliée en carré, farcie minute à la compotée de tomate, oignons fondants, coriandre et pointe de harissa.",
    descAr: "فطيرة سميد مورقة ومقرمشة محشوة بتكتوكة الطماطم والبصل المكرمل والكزبرة ولمسة هريسة حارة.",
    price: "8.50",
    imageUrl: img.mahjouba,
    isSignature: true,
    sortOrder: 5,
    available: true,
    tags: ["halal", "vegetarian", "spicy"],
  },
  {
    id: 6,
    category: "starters",
    namePt: "Chakchouka Berbère dos Oasis",
    nameEn: "Berber Oasis Chakchouka",
    nameFr: "Chakchouka Berbère des Oasis",
    nameAr: "الشكشوكة البربرية التقليدية",
    descPt: "Pimentos doces e tomates assados em lume brando com cominhos, alho dourado e ovos biológicos escalfados. Acompanha pão khobz quente.",
    descEn: "Slow-simmered sweet bell peppers, ripe tomatoes, cumin, roasted garlic, and poached bio eggs. Served with warm hearth-baked bread.",
    descFr: "Mijoté de poivrons doux et tomates mûres, ail confit, cumin et œufs bio pochés au cœur. Servi avec pain chaud du jour.",
    descAr: "شكشوكة الفلفل الحلو والطماطم المتبلة بالكمون والثوم مع بيض بلدي عيون، تقدم مع الخبز الطازج.",
    price: "11.50",
    imageUrl: img.shakshuka,
    isSignature: false,
    sortOrder: 6,
    available: true,
    tags: ["halal", "vegetarian", "spicy"],
  },
  {
    id: 7,
    category: "starters",
    namePt: "Brik à l'Œuf & Atum de Annaba",
    nameEn: "Annaba Crispy Brik with Egg & Tuna",
    nameFr: "Brik à l'Œuf & Thon de Annaba",
    nameAr: "بريك عنابة المقرمش بالبيض والتونة",
    descPt: "Folha estaladiça dourada recheada com ovo de gema líquida, atum de qualidade, alcaparras, salsa picada e sumo de limão fresco.",
    descEn: "Golden crispy pastry envelope with a runny egg yolk, bonito tuna, Sicilian capers, fresh parsley and squeeze of Lisbon lemon.",
    descFr: "Feuille de dioul croustillante farcie d'un œuf coulant, thon blanc, câpres, persil plat et trait de citron frais.",
    descAr: "ورقة ديول مقرمشة ومذهبة محشوة ببيضة طرية، تونة فاخرة، كبار وبقدونس طازج مع رشة ليمون.",
    price: "7.90",
    imageUrl: img.brik,
    isSignature: false,
    sortOrder: 7,
    available: true,
    tags: ["halal"],
  },
  {
    id: 8,
    category: "starters",
    namePt: "Chorba Frik com Hortelã",
    nameEn: "Chorba Frik (Green Wheat Soup)",
    nameFr: "Chorba Frik à la Menthe",
    nameAr: "شربة فريك بالنعناع العاصمية",
    descPt: "Sopa tradicional emblemática de trigo verde fumado (frik), carne de borrego desfiada, grão-de-bico, coentros frescos e folhinhas de hortelã.",
    descEn: "Traditional cracked green wheat soup gently stewed with pulled tender lamb, chickpeas, tomato velouté, fresh coriander, and mint.",
    descFr: "Soupe ancestrale au blé vert concassé (frik), émincé d'agneau, pois chiches, coriandre fraîche et pincée de menthe séchée.",
    descAr: "حساء الفريك الأخضر المدخن المحبوب في الجزائر مع لحم الخروف، الحمص، الكزبرة والنعناع العطري.",
    price: "8.50",
    imageUrl: img.soup,
    isSignature: false,
    sortOrder: 8,
    available: true,
    tags: ["halal"],
  },
  {
    id: 9,
    category: "starters",
    namePt: "Salada Mechouia Fumada",
    nameEn: "Smoked Mechouia Salad",
    nameFr: "Salade Méchouia Fumée",
    nameAr: "سلطة مشوية على الجمر",
    descPt: "Pimentos e tomates grelhados ao lume de carvão, pilados com dentes de alho, azeite virgem extra de Trás-os-Montes e azeitonas pretas.",
    descEn: "Charcoal-grilled sweet peppers & vine tomatoes crushed with garlic, premier cold-pressed olive oil, and black dry-cured olives.",
    descFr: "Poivrons et tomates grillés au feu de bois, pilés à l'ail nouveau, huile d'olive vierge extra et olives noires séchées.",
    descAr: "فلفل وطماطم مشوية على الجمر، مهروسة بالثوم، زيت الزيتون البكر الممتاز والزيتون الأسود.",
    price: "8.90",
    imageUrl: img.salad,
    isSignature: false,
    sortOrder: 9,
    available: true,
    tags: ["halal", "vegetarian"],
  },
  {
    id: 10,
    category: "mains",
    namePt: "Merguez Grelhada da Casa com Húmus",
    nameEn: "Artisan Merguez with Spiced Hummus",
    nameFr: "Merguez Artisanale Grillée & Houmous",
    nameAr: "مرقاز بلدي مشوي مع حمص بالطحينة",
    descPt: "Três salsichas merguez artesanais de vaca e borrego halal grelhadas na brasa, servidas com húmus aveludado e molho harissa fresco.",
    descEn: "Three artisan halal beef & lamb merguez links fire-grilled over charcoal, creamy velvet hummus and house harissa dip.",
    descFr: "Trois merguez artisanales bœuf et agneau grillées à la braise, houmous velouté et harissa maison fraîche.",
    descAr: "ثلاث حبات مرقاز بلدي من اللحم البقري والضأن مشوية على الفحم مع حمص كريمي وهريسة منزلية.",
    price: "15.90",
    imageUrl: img.tajine,
    isSignature: false,
    sortOrder: 10,
    available: true,
    tags: ["halal", "spicy"],
  },
  {
    id: 11,
    category: "sweet",
    namePt: "Makroudh El Koucha com Tâmaras",
    nameEn: "Artisan Date Makroudh",
    nameFr: "Makroudh El Koucha aux Dattes",
    nameAr: "مقروض الكوشة بالتمر والعسل",
    descPt: "Losango tradicional de sémola fina recheado de pasta artesanal de tâmaras Medjool com canela, dourado e regado com mel de rosmaninho.",
    descEn: "Diamond of golden baked semolina stuffed with spiced Medjool date paste, bathed in rosemary wildflower honey.",
    descFr: "Losange de semoule fine dorée au four, cœur fondant de pâte de dattes Medjool à la cannelle, glacé au miel tiède.",
    descAr: "مقروض السميد الفاخر المحشو بعجينة تمر المجهول والقرفة، معسل بعسل الزهور الطبيعي.",
    price: "4.50",
    imageUrl: img.makroud,
    isSignature: true,
    sortOrder: 11,
    available: true,
    tags: ["halal", "vegetarian"],
  },
  {
    id: 12,
    category: "sweet",
    namePt: "Kalb El Louz Real",
    nameEn: "Royal Kalb El Louz Cake",
    nameFr: "Kalb El Louz Royal d'Alger",
    nameAr: "قلب اللوز العاصمي الملكي",
    descPt: "O rei dos doces argelinos: bolo fofo de sémola e amêndoas torradas, generosamente embebido em calda perfumada de flor de laranjeira.",
    descEn: "The undisputed king of Algerian sweets: dense semolina and roasted almond cake soaked in fragrant orange blossom syrup.",
    descFr: "Gâteau mythique de semoule dorée et amandes effilées, imbibé d'un généreux sirop à l'eau de fleur d'oranger.",
    descAr: "حلوى قلب اللوز التقليدية الشهية بالسميد واللوز المحمص والمشربة بسيروب ماء الزهر الفواح.",
    price: "4.90",
    imageUrl: img.makroud,
    isSignature: true,
    sortOrder: 12,
    available: true,
    tags: ["halal", "vegetarian"],
  },
  {
    id: 13,
    category: "sweet",
    namePt: "Baghrir com Manteiga e Mel",
    nameEn: "Baghrir (Thousand-Hole Crêpes)",
    nameFr: "Baghrir Mille Trous au Miel",
    nameAr: "بغرير الألف ثقب بالزبدة والعسل",
    descPt: "Três panquecas esponjosas perfuradas com mel de flor de laranjeira e manteiga artesanal derretida na hora.",
    descEn: "Trio of delicate honeycombed semolina pancakes soaked in warm farm butter and orange blossom honey.",
    descFr: "Trois crêpes mille trous légères et alvéolées, nappées minute de beurre fermier fondu et miel d'oranger.",
    descAr: "ثلاث حبات بغرير خفيف كالشهد، مسقى بالزبدة الذائبة وعسل زهر البرتقال.",
    price: "6.90",
    imageUrl: img.baghrir,
    isSignature: false,
    sortOrder: 13,
    available: true,
    tags: ["halal", "vegetarian"],
  },
  {
    id: 14,
    category: "drinks",
    namePt: "Chá de Menta Argelino Cerimonial",
    nameEn: "Ceremonial Algerian Mint Tea",
    nameFr: "Thé à la Menthe Cérémonial",
    nameAr: "شاي النعناع الجزائري الأصيل",
    descPt: "Chá verde Gunpowder preparado com ramos de hortelã fresca, servido à boa maneira argelina — vertido bem alto num bule prateado tradicional.",
    descEn: "Gunpowder green tea infused with fresh garden spearmint leaves, poured from high in traditional hammered silver teapots.",
    descFr: "Thé vert Gunpowder infusé de menthe fraîche cueillie du jour, versé bien haut pour libérer sa mousse dorée en théière argentée.",
    descAr: "شاي أخضر بالنعناع الطازج محضر على الأصول، يسكب عالياً في كؤوس تقليدية مزينة مع رغوته الشهيرة.",
    price: "3.50",
    imageUrl: img.tea,
    isSignature: true,
    sortOrder: 14,
    available: true,
    tags: ["halal", "vegetarian"],
  },
  {
    id: 15,
    category: "drinks",
    namePt: "Cherbet Lemoune de Blida",
    nameEn: "Blida Cherbet Lemonade",
    nameFr: "Cherbet Citron de Blida",
    nameAr: "شربات بوفاريك والبليدة بالليمون",
    descPt: "A famosa limonada artesanal argelina: sumo de limão fresco batido com folhas de hortelã, gota de leite e essência de flor de laranjeira.",
    descEn: "Famous Algerian chilled lemonade crafted with fresh squeezed lemons, garden mint, a touch of cream, and orange blossom water.",
    descFr: "Limonade artisanale culte de Blida : citrons frais pressés, pointe de lait, menthe pilée et eau de fleur d'oranger givrée.",
    descAr: "عصير الليمون المنعش الشهير من البليدة وبوفاريك مع لمسة حليب، ماء الزهر والنعناع المثلج.",
    price: "4.20",
    imageUrl: img.lemonade,
    isSignature: false,
    sortOrder: 15,
    available: true,
    tags: ["halal", "vegetarian"],
  },
  {
    id: 16,
    category: "drinks",
    namePt: "Café Argelino com Cardamomo",
    nameEn: "Cardamom Spiced Algerian Coffee",
    nameFr: "Café Algérien à la Cardamome",
    nameAr: "قهوة جزائرية بالهيل المعطر",
    descPt: "Café aromático torrado escuro, fervido com vagens de cardamomo verde esmagadas e um toque subtil de flor de laranjeira.",
    descEn: "Slow-brewed dark roast coffee infused with freshly cracked green cardamom pods and delicate orange blossom note.",
    descFr: "Café serré torréfié à l'ancienne, infusé aux graines de cardamome verte concassées et goutte de fleur d'oranger.",
    descAr: "قهوة عربية غنية مطبوخة على مهل بحبوب الهيل الأخضر وقطرات ماء الزهر الأصيل.",
    price: "2.80",
    imageUrl: img.coffee,
    isSignature: false,
    sortOrder: 16,
    available: true,
    tags: ["halal", "vegetarian"],
  },
]

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1541519227354-08fa9d633c18?auto=format&fit=crop&w=1400&q=80",
    alt: "Tajine de frango e azeitonas douradas",
    kind: "dish" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    alt: "Interior acolhedor do restaurante com azulejos e luz quente",
    kind: "interior" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1400&q=80",
    alt: "Couscous Royal Argelino fumegante",
    kind: "dish" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1400&q=80",
    alt: "Serviço tradicional de chá de menta argelino",
    kind: "dish" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
    alt: "Convívio familiar e de amigos à mesa",
    kind: "event" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80",
    alt: "Mahjouba acabada de dobrar na chapa",
    kind: "dish" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    alt: "Mesa posta no pátio com iluminação intimista",
    kind: "interior" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80",
    alt: "Jantar sob luz suave no Bairro Alto",
    kind: "event" as const,
  },
]

export const CATEGORY_ORDER: MenuCategory[] = ["signatures", "mains", "starters", "sweet", "drinks"]

export function parseTags(value: string | null | undefined): DietaryTag[] {
  if (!value) return ["halal"]
  return value
    .split(",")
    .map((t) => t.trim())
    .filter((t): t is DietaryTag => t === "halal" || t === "vegetarian" || t === "spicy")
}

export function dishName(dish: MenuDish, lang: "pt" | "en" | "fr" | "ar") {
  if (lang === "ar" && dish.nameAr) return dish.nameAr
  if (lang === "en") return dish.nameEn
  if (lang === "fr") return dish.nameFr
  return dish.namePt
}

export function dishDesc(dish: MenuDish, lang: "pt" | "en" | "fr" | "ar") {
  if (lang === "ar" && dish.descAr) return dish.descAr
  if (lang === "en") return dish.descEn
  if (lang === "fr") return dish.descFr
  return dish.descPt
}

