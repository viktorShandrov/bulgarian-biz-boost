export interface Service {
  title: string;
  description: string;
  priceFrom?: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
}

export interface Business {
  id: string;
  type: "medical" | "trade";
  name: string;
  tagline: string;
  city: string;
  phone: string;
  badgeText?: string;
  heroImageUrl: string;
  features: string[];
  services: Service[];
  reviews: Review[];
}

export const businesses: Business[] = [
  {
    id: "dental-place-rocket",
    type: "medical",
    name: "Dental Place Rocket - Стоматологичен Кабинет",
    tagline: "Професионална стоматологична грижа и модерно лечение в Габрово",
    city: "Габрово",
    phone: "0888036313",
    badgeText: "Работи със Здравната каса (НЗОК)",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Съвременна апаратура", "Индивидуален подход", "Безболезнени процедури", "Удобна локация"],
    services: [
      { title: "Профилактика и почистване", description: "Почистване на зъбен камък с ултразвук и AirFlow" },
      { title: "Терапевтично лечение", description: "Безболезнено лечение на кариеси и фотополимерни пломби" },
      { title: "Естетична стоматология", description: "Кабинетно избелване и фасети" },
      { title: "Протетично възстановяване", description: "Циркониеви и металокерамични коронки" }
    ],
    reviews: [
      { author: "Мария Георгиева", rating: 5, text: "Изключително внимателен специалист и чистота на най-високо ниво!" },
      { author: "Димитър Иванов", rating: 5, text: "Страхотен кабинет. Всичко мина бързо и напълно безболезнено." }
    ]
  },
  {
    id: "prodent-clinic-sofia",
    type: "medical",
    name: "ProDent Clinic Sofia- Dental clinic Dr. Albena Veselinova",
    tagline: "Професионална стоматологична грижа и модерно лечение в София",
    city: "София",
    phone: "0888637380",
    badgeText: "Безплатен първичен преглед",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Съвременна апаратура", "Индивидуален подход", "Безболезнени процедури", "Удобна локация"],
    services: [
      { title: "Профилактика и почистване", description: "Почистване на зъбен камък с ултразвук и AirFlow" },
      { title: "Терапевтично лечение", description: "Безболезнено лечение на кариеси и фотополимерни пломби" },
      { title: "Естетична стоматология", description: "Кабинетно избелване и фасети" },
      { title: "Протетично възстановяване", description: "Циркониеви и металокерамични коронки" }
    ],
    reviews: [
      { author: "Елена Попова", rating: 5, text: "Прекрасно отношение от д-р Веселинова!" },
      { author: "Стефан Николов", rating: 5, text: "Много съм доволен от резултата и вниманието към детайла." }
    ]
  },
  {
    id: "implants-group",
    type: "medical",
    name: "Implants Group",
    tagline: "Професионална имплантология и стоматологична грижа в София",
    city: "София",
    phone: "",
    badgeText: "Специалисти по дентална имплантология",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Високотехнологични импланти", "Дългосрочна гаранция", "Индивидуален план за лечение"],
    services: [
      { title: "Дентална имплантология", description: "Поставяне на премиум клас импланти с висока успеваемост" },
      { title: "Хирургия и екстракции", description: "Атравматично изваждане на зъби и ретинирани мъдреци" },
      { title: "Протезиране върху импланти", description: "Цялостни All-on-4 / All-on-6 конструкции" }
    ],
    reviews: [
      { author: "Георги Тодоров", rating: 5, text: "Върнаха ми увереността и усмивката. Истински професионалисти!" }
    ]
  },
  {
    id: "dental-tourism-bg",
    type: "medical",
    name: "Dental Tourism in Bulgaria",
    tagline: "Международно ниво на дентална грижа и възстановяване в София",
    city: "София",
    phone: "0877178018",
    badgeText: "Европейски стандарти на достъпни цени",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Пълно комплексно обслужване", "Кратък срок за лечение", "Модерен медицински екип"],
    services: [
      { title: "Пълна рехабилитация", description: "Цялостно естетично и функционално възстановяване на усмивката" },
      { title: "Дигитална естетика", description: "Фасети, цирконий и лазерно избелване" }
    ],
    reviews: [
      { author: "Мартин Кръстев", rating: 5, text: "Бързо, организирано и с невероятно качество." }
    ]
  },
  {
    id: "future-dental-clinic",
    type: "medical",
    name: "Future Dental Clinic",
    tagline: "Иновативна стоматология и дигитална грижа за вашата усмивка в София",
    city: "София",
    phone: "0883333730",
    badgeText: "Дигитално 3D планиране",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Дигитална диагностика", "Безболезнено лечение", "Модерен интериор"],
    services: [
      { title: "Терапевтично лечение", description: "Микроскопска ендодонтия и фотополимерни пломби" },
      { title: "Ортодонтия и алайнери", description: "Изправяне на зъби с невидими шини" }
    ],
    reviews: [
      { author: "Виктория С.", rating: 5, text: "Клиника от бъдещето! Оборудването е невероятно." }
    ]
  },
  {
    id: "dr-kamburova",
    type: "medical",
    name: "Зъболекарски кабинет - д-р Камбурова",
    tagline: "Индивидуална дентална грижа и спокойна атмосфера в София",
    city: "София",
    phone: "0888542751",
    badgeText: "Дългогодишен клиничен опит",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Внимателно отношение", "Работа с деца и възрастни", "Профилактични прегледи"],
    services: [
      { title: "Обща стоматология", description: "Лечение на кариес, пулпит и периодични контролни прегледи" },
      { title: "Почистване на плака и зъбен камък", description: "Ултразвуково премахване на натрупвания и полиране" }
    ],
    reviews: [
      { author: "Анелия Д.", rating: 5, text: "Д-р Камбурова е изключително мила и внимателна. Препоръчвам!" }
    ]
  },
  {
    id: "kavident",
    type: "medical",
    name: "Kavident - Дентален Център",
    tagline: "Цялостни стоматологични решения за цялото семейство в София",
    city: "София",
    phone: "0887925737",
    badgeText: "Пълен спектър от дентални услуги",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Мултидисциплинарен екип", "Безкомпромисна хигиена", "Гъвкав график"],
    services: [
      { title: "Лечение на зъби", description: "Кариеси, коренови канали и естетични пломби" },
      { title: "Дентална естетика", description: "Избелване на зъби, коронки и мостове" }
    ],
    reviews: [
      { author: "Петър Василев", rating: 5, text: "Много добра организация и безупречна работа." }
    ]
  },
  {
    id: "dr-nikolaev",
    type: "medical",
    name: "DR. Nikolaev Dental Clinic",
    tagline: "Съвременна дентална медицина и естетични решения в София",
    city: "София",
    phone: "0879945750",
    badgeText: "Безплатен консултативен преглед",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Персонализирано внимание", "Най-нови технологии", "Пълен комфорт по време на манипулациите"],
    services: [
      { title: "Естетично възстановяване", description: "Фасети, бондинг и полиране" },
      { title: "Терапевтична стоматология", description: "Надеждно лечение на възпаления и пломбиране" }
    ],
    reviews: [
      { author: "Христина М.", rating: 5, text: "Д-р Николаев обяснява всичко стъпка по стъпка. Страхотен лекар!" }
    ]
  },
  {
    id: "dr-daniel-metodiev",
    type: "medical",
    name: "Дентален център Д-р Даниел Методиев",
    tagline: "Качествено и достъпно зъболечение за цялото семейство в Елин Пелин",
    city: "Елин Пелин",
    phone: "0888315390",
    badgeText: "Работи по договор с НЗОК",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Грижа за деца и възрастни", "Без болка и стрес", "Локация с удобен паркинг"],
    services: [
      { title: "Общо зъболечение", description: "Лечение на кариеси, почистване на зъбен камък и екстракции" },
      { title: "Протезиране", description: "Частични и цели плакови протези, мостови конструкции" }
    ],
    reviews: [
      { author: "Иван С.", rating: 5, text: "Най-добрият стоматолог в района. Препоръчвам с две ръце!" }
    ]
  },
  {
    id: "dr-rosen-mashev",
    type: "medical",
    name: "Стоматологичен кабинет Д-р Росен Машев",
    tagline: "Доказан опит и прецизна стоматологична грижа в София",
    city: "София",
    phone: "029719947",
    badgeText: "Над 20 години клиничен опит",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Традиции и опит", "Точна диагностика", "Коректно отношение"],
    services: [
      { title: "Консервативно зъболечение", description: "Естетични фотополимери и лечение на коренови канали" },
      { title: "Протетична стоматология", description: "Металокерамика, коронки и мостове" }
    ],
    reviews: [
      { author: "Красимир Б.", rating: 5, text: "Доверен семеен стоматолог от години." }
    ]
  },
  {
    id: "stomatologichen-kabinet-samokov",
    type: "medical",
    name: "Стоматологичен Кабинет - Самоков",
    tagline: "Надеждна дентална помощ и съвременно лечение в Самоков",
    city: "Самоков",
    phone: "0886945727",
    badgeText: "Безплатен първичен преглед",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Бързо обслужване", "Качествени материали", "Достъпни цени"],
    services: [
      { title: "Терапия и кариесология", description: "Поставяне на трайни фотополимерни пломби" },
      { title: "Почистване на зъбен камък", description: "Ултразвукова профилактика и полиране" }
    ],
    reviews: [
      { author: "Надежда К.", rating: 5, text: "Много съм доволна от отношението и бързината." }
    ]
  },
  {
    id: "dr-martin-bidzhekov",
    type: "medical",
    name: "Зъболекарски кабинет д-р Мартин Биджеков",
    tagline: "Естетична стоматология и висококачествено лечение в София",
    city: "София",
    phone: "0885078834",
    badgeText: "Модерна медицинска база",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Прецизност и детайл", "Безболезнена анестезия", "Удобна комуникация"],
    services: [
      { title: "Естетични възстановявания", description: "Фасети, циркониеви коронки и избелване" },
      { title: "Ендодонтия", description: "Машинно обработване и запълване на коренови канали" }
    ],
    reviews: [
      { author: "Борислав П.", rating: 5, text: "Д-р Биджеков е невероятен професионалист. Препоръчвам го!" }
    ]
  },
  {
    id: "dr-fani-krasteva",
    type: "medical",
    name: "Зъболекарски Кабинет д-р Фани Кръстева",
    tagline: "Внимателна и цялостна грижа за здравето на вашите зъби в София",
    city: "София",
    phone: "0888219155",
    badgeText: "Работи с възрастни и деца",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Спокойна обстановка", "Индивидуален план за профилактика", "Качествени фотополимери"],
    services: [
      { title: "Терапевтично зъболечение", description: "Безболезнено лечение на кариес и възпаления" },
      { title: "Профилактични прегледи", description: "Почистване на плака и зъбен камък" }
    ],
    reviews: [
      { author: "Теодора В.", rating: 5, text: "Изключително мил и предразполагащ лекар. Няма никакъв страх!" }
    ]
  },
  {
    id: "stomadent",
    type: "medical",
    name: "Стомадент - Дентална практика",
    tagline: "Комплексно дентално здраве и сияйна усмивка в София",
    city: "София",
    phone: "0887003868",
    badgeText: "Модерно терапевтично оборудване",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Опитен медицински състав", "Бързо записване на часове", "Гарантирано качество"],
    services: [
      { title: "Обща стоматология", description: "Пълна санация на устната кухина" },
      { title: "Протетични конструкции", description: "Коронки, мостове и плакови протези" }
    ],
    reviews: [
      { author: "Владимир Д.", rating: 5, text: "Отлично обслужване и коректни цени." }
    ]
  },
  {
    id: "naturadent",
    type: "medical",
    name: "Натурадент Клиника",
    tagline: "Биосъвместима стоматология и съвременна дентална естетика в София",
    city: "София",
    phone: "0884186985",
    badgeText: "Висококачествени биосъвместими материали",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Щадящи процедури", "Естетични решения от ново поколение", "Професионален комфорт"],
    services: [
      { title: "Биоестетична стоматология", description: "Изцяло керамични възстановявания и фасети" },
      { title: "Пародонтална профилактика", description: "Комплексна грижа за венците и зъбодържащия апарат" }
    ],
    reviews: [
      { author: "Силвия И.", rating: 5, text: "Много приятна клиника с модерен подход." }
    ]
  },
  {
    id: "dr-m-mihaylov",
    type: "medical",
    name: "Дентален кабинет Д-р М. Михайлов",
    tagline: "Прецизно дентално лечение и коректно отношение в София",
    city: "София",
    phone: "0888335060",
    badgeText: "Безплатен преглед и консултация",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Индивидуален подход", "Качествени материали", "Удобна централна локация"],
    services: [
      { title: "Терапевтично зъболечение", description: "Лечение на кариес, пулпит и смяна на стари пломби" },
      { title: "Почистване на зъбен камък", description: "Ултразвуково почистване и полиране" }
    ],
    reviews: [
      { author: "Калоян Р.", rating: 5, text: "Д-р Михайлов е изключителен професионалист!" }
    ]
  },
  {
    id: "dr-pavlovski",
    type: "medical",
    name: "Зъболекарски кабинет д-р Павловски",
    tagline: "Съвременна стоматология и безболезнено лечение в София",
    city: "София",
    phone: "0898559583",
    badgeText: "Работи със Здравната каса (НЗОК)",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Модерна апаратура", "Внимание към всеки детайл", "Спокойна атмосфера"],
    services: [
      { title: "Консервативно зъболечение", description: "Лечение на кариеси с естетични фотополимери" },
      { title: "Протетично възстановяване", description: "Коронки и мостове от висококачествени сплави и цирконий" }
    ],
    reviews: [
      { author: "Гергана Д.", rating: 5, text: "Много съм доволна от свършената работа. Препоръчвам!" }
    ]
  },
  {
    id: "natali-dent",
    type: "medical",
    name: "Натали Дент - Стоматологичен център",
    tagline: "Перфектната усмивка започва с качествена грижа в София",
    city: "София",
    phone: "0888479306",
    badgeText: "Безплатен първичен преглед",
    heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    features: ["Комплексна диагностика", "Семейна стоматология", "Дълготрайни резултати"],
    services: [
      { title: "Профилактика и хигиена", description: "Ултразвук, AirFlow и полиране на емайла" },
      { title: "Естетично зъболечение", description: "Избелване на зъби и естетични пломби" }
    ],
    reviews: [
      { author: "Юлия М.", rating: 5, text: "Страхотно отношение, чистота и отлични резултати!" }
    ]
  }
];