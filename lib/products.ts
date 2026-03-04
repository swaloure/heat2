export type Category = "chemistry" | "metals" | "equipment"

export interface Product {
  id: string
  category: Category
  name: { ru: string; kz: string; en: string }
  description: { ru: string; kz: string; en: string }
}

export const products: Product[] = [
  // === CHEMISTRY ===
  {
    id: "chem-1",
    category: "chemistry",
    name: {
      ru: "Каустическая сода (NaOH)",
      kz: "Каустикалық сода (NaOH)",
      en: "Caustic Soda (NaOH)",
    },
    description: {
      ru: "Щёлочь для процессов выщелачивания, нейтрализации и водоподготовки в горнодобыче и металлургии.",
      kz: "Тау-кен өндірісі мен металлургиядағы сілтілеу, бейтараптау және су дайындау процестеріне арналған сілті.",
      en: "Alkali for leaching, neutralization, and water treatment processes in mining and metallurgy.",
    },
  },
  {
    id: "chem-2",
    category: "chemistry",
    name: {
      ru: "Цианид натрия (NaCN)",
      kz: "Натрий цианиді (NaCN)",
      en: "Sodium Cyanide (NaCN)",
    },
    description: {
      ru: "Основной реагент для извлечения золота методом цианирования. Поставки в брикетах и растворах.",
      kz: "Цианидтеу әдісімен алтын алу үшін негізгі реагент. Брикеттерде және ерітінділерде жеткізу.",
      en: "Primary reagent for gold extraction by cyanidation. Supplied in briquettes and solutions.",
    },
  },
  {
    id: "chem-3",
    category: "chemistry",
    name: {
      ru: "Ксантогенаты (флотореагенты)",
      kz: "Ксантогенаттар (флотореагенттер)",
      en: "Xanthates (Flotation Reagents)",
    },
    description: {
      ru: "Собиратели для флотации сульфидных руд цветных металлов. Бутиловый, этиловый, изопропиловый ксантогенат.",
      kz: "Түсті металдардың сульфидті кендерін флотациялауға арналған жинағыштар.",
      en: "Collectors for flotation of non-ferrous metal sulfide ores. Butyl, ethyl, isopropyl xanthate.",
    },
  },
  {
    id: "chem-4",
    category: "chemistry",
    name: {
      ru: "Ионообменные смолы",
      kz: "Ионалмасу шайырлары",
      en: "Ion Exchange Resins",
    },
    description: {
      ru: "Смолы для извлечения золота и урана из растворов. Анионообменные и катионообменные типы.",
      kz: "Ерітінділерден алтын мен уран алуға арналған шайырлар. Аниондық және катиондық түрлері.",
      en: "Resins for gold and uranium extraction from solutions. Anionic and cationic types.",
    },
  },
  {
    id: "chem-5",
    category: "chemistry",
    name: {
      ru: "Активированный уголь",
      kz: "Белсендірілген көмір",
      en: "Activated Carbon",
    },
    description: {
      ru: "Для процессов сорбции золота (CIP/CIL), очистки газов и водоподготовки. Кокосовый и каменноугольный.",
      kz: "Алтынды сорбциялау (CIP/CIL), газ тазалау және су дайындау процестеріне арналған.",
      en: "For gold sorption processes (CIP/CIL), gas purification, and water treatment. Coconut and coal-based.",
    },
  },
  {
    id: "chem-6",
    category: "chemistry",
    name: {
      ru: "Кальцинированная сода (Na2CO3)",
      kz: "Кальцинирленген сода (Na2CO3)",
      en: "Soda Ash (Na2CO3)",
    },
    description: {
      ru: "Применяется в процессах флотации, регулирования pH и водоподготовки на обогатительных фабриках.",
      kz: "Байыту фабрикаларында флотация, pH реттеу және су дайындау процестерінде қолданылады.",
      en: "Used in flotation, pH regulation, and water treatment at processing plants.",
    },
  },

  // === METALS ===
  {
    id: "met-1",
    category: "metals",
    name: {
      ru: "Ферромарганец (FeMn)",
      kz: "Ферромарганец (FeMn)",
      en: "Ferromanganese (FeMn)",
    },
    description: {
      ru: "Ферросплав для легирования стали. Высоко- и среднеуглеродистый. ГОСТ и международные стандарты.",
      kz: "Болатты легирлеуге арналған ферроқорытпа. Жоғары және орта көміртекті.",
      en: "Ferroalloy for steel alloying. High and medium carbon grades. GOST and international standards.",
    },
  },
  {
    id: "met-2",
    category: "metals",
    name: {
      ru: "Феррохром (FeCr)",
      kz: "Феррохром (FeCr)",
      en: "Ferrochrome (FeCr)",
    },
    description: {
      ru: "Для производства нержавеющих и легированных сталей. Высоко-, средне- и низкоуглеродистый феррохром.",
      kz: "Тот баспайтын және легирленген болат өндірісіне арналған.",
      en: "For production of stainless and alloyed steels. High, medium, and low carbon ferrochrome.",
    },
  },
  {
    id: "met-3",
    category: "metals",
    name: {
      ru: "Стальные канаты",
      kz: "Болат арқандар",
      en: "Steel Wire Ropes",
    },
    description: {
      ru: "Канаты различных конструкций для горнодобычи, грузоподъёмного и шахтного оборудования.",
      kz: "Тау-кен, жүк көтеру және шахта жабдықтарына арналған әр түрлі конструкциядағы арқандар.",
      en: "Ropes of various constructions for mining, lifting, and shaft equipment.",
    },
  },
  {
    id: "met-4",
    category: "metals",
    name: {
      ru: "Графитированные электроды",
      kz: "Графиттелген электродтар",
      en: "Graphite Electrodes",
    },
    description: {
      ru: "Для дуговых сталеплавильных печей. Диаметры от 200 до 700 мм с ниппельным соединением.",
      kz: "Доғалы болат балқыту пештеріне арналған. 200-ден 700 мм-ге дейінгі диаметрлер.",
      en: "For electric arc furnaces. Diameters from 200 to 700 mm with nipple connections.",
    },
  },
  {
    id: "met-5",
    category: "metals",
    name: {
      ru: "Металлопрокат (трубы, листы)",
      kz: "Металл прокаты (құбырлар, парақтар)",
      en: "Metal Products (Pipes, Sheets)",
    },
    description: {
      ru: "Трубы бесшовные и сварные, листовой и сортовой прокат из конструкционных и легированных сталей.",
      kz: "Жіксіз және пісірілген құбырлар, конструкциялық және легирленген болаттан жасалған парақ прокат.",
      en: "Seamless and welded pipes, sheet and section steel from structural and alloyed steels.",
    },
  },
  {
    id: "met-6",
    category: "metals",
    name: {
      ru: "Стальные шары (мелющие)",
      kz: "Болат шарлар (ұнтақтағыш)",
      en: "Steel Grinding Balls",
    },
    description: {
      ru: "Мелющие шары для шаровых мельниц. Диаметры 20-120 мм, твёрдость HRC 58-65.",
      kz: "Шарлы диірмендерге арналған ұнтақтағыш шарлар. Диаметрлері 20-120 мм.",
      en: "Grinding balls for ball mills. Diameters 20-120 mm, hardness HRC 58-65.",
    },
  },

  // === EQUIPMENT ===
  {
    id: "equip-1",
    category: "equipment",
    name: {
      ru: "Буровые долота PDC",
      kz: "PDC бұрғылау қашаулары",
      en: "PDC Drill Bits",
    },
    description: {
      ru: "Долота с поликристаллическими алмазными резцами для бурения горных пород различной твёрдости.",
      kz: "Әр түрлі қаттылықтағы тау жыныстарын бұрғылауға арналған поликристалды алмас кескіштері бар қашаулар.",
      en: "Drill bits with polycrystalline diamond cutters for drilling rocks of various hardness.",
    },
  },
  {
    id: "equip-2",
    category: "equipment",
    name: {
      ru: "Дробилки",
      kz: "Ұсатқыштар",
      en: "Crushers",
    },
    description: {
      ru: "Щековые, конусные и молотковые дробилки для первичного и вторичного дробления руды.",
      kz: "Кенді бастапқы және қайталама ұсатуға арналған жақты, конусты және балғалы ұсатқыштар.",
      en: "Jaw, cone, and hammer crushers for primary and secondary ore crushing.",
    },
  },
  {
    id: "equip-3",
    category: "equipment",
    name: {
      ru: "Фильтр-прессы",
      kz: "Сүзгі-престер",
      en: "Filter Presses",
    },
    description: {
      ru: "Камерные и мембранные фильтр-прессы для обезвоживания концентратов и хвостов обогащения.",
      kz: "Концентраттар мен байыту қалдықтарын сусыздандыруға арналған камералық және мембраналық сүзгі-престер.",
      en: "Chamber and membrane filter presses for dewatering concentrates and tailings.",
    },
  },
  {
    id: "equip-4",
    category: "equipment",
    name: {
      ru: "Конвейерные ленты",
      kz: "Конвейерлік таспалар",
      en: "Conveyor Belts",
    },
    description: {
      ru: "Резинотканевые и резинотросовые конвейерные ленты для транспортировки руды и породы.",
      kz: "Кен мен жыныстарды тасымалдауға арналған резина-мата және резина-арқан конвейерлік таспалар.",
      en: "Rubber-fabric and steel-cord conveyor belts for ore and rock transportation.",
    },
  },
  {
    id: "equip-5",
    category: "equipment",
    name: {
      ru: "Насосы промышленные",
      kz: "Өнеркәсіптік сорғылар",
      en: "Industrial Pumps",
    },
    description: {
      ru: "Шламовые, грунтовые и химические насосы для перекачки пульп, кислот и щелочей.",
      kz: "Пульпаларды, қышқылдар мен сілтілерді айдауға арналған шламды, грунтты және химиялық сорғылар.",
      en: "Slurry, ground, and chemical pumps for transferring pulps, acids, and alkalis.",
    },
  },
  {
    id: "equip-6",
    category: "equipment",
    name: {
      ru: "Шины КГШ (карьерные)",
      kz: "КГШ шиналары (карьерлік)",
      en: "OTR Tires (Off-The-Road)",
    },
    description: {
      ru: "Крупногабаритные шины для самосвалов, погрузчиков и карьерной техники. Размеры от 18.00-25 до 46/90R57.",
      kz: "Өздігінен түсіргіштер, тиегіштер және карьер техникасына арналған ірі габаритті шиналар.",
      en: "Large-size tires for dump trucks, loaders, and quarry equipment. Sizes from 18.00-25 to 46/90R57.",
    },
  },
]

export const categoryIcons: Record<Category, string> = {
  chemistry: "flask",
  metals: "layers",
  equipment: "cog",
}
