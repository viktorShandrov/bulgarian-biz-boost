import heroDental from "@/assets/hero-dental.jpg";
import heroRemont from "@/assets/hero-remont.jpg";

export interface Service {
  title: string;
  description: string;
  iconName?: string;
  priceFrom?: string;
}

export interface Review {
  author: string;
  rating: number; // 1 to 5
  text: string;
  date?: string;
}

export interface Business {
  id: string; // URL slug, e.g. "dr-ivanov", "remonti-petrov"
  type: "medical" | "trade"; // medical = dentist/doctors, trade = handymen/repairs
  name: string;
  tagline: string;
  city: string;
  phone: string;
  viberPhone?: string;
  whatsappPhone?: string;
  email?: string;
  address?: string;
  workingHours?: string;
  badgeText?: string;
  heroImageUrl: string;
  features: string[];
  services: Service[];
  reviews: Review[];
  galleryUrls?: string[];
}

export const businesses: Business[] = [
  {
    id: "dr-ivanov",
    type: "medical",
    name: "Дентална практика д-р Иванов",
    tagline: "Безболезнено лечение и естетика на усмивката в центъра на София",
    city: "София",
    phone: "+359888123456",
    viberPhone: "+359888123456",
    whatsappPhone: "+359888123456",
    email: "kabinet@drivanov.bg",
    address: "бул. Витоша 42, ет. 2, София",
    workingHours: "Пон – Пет: 09:00 – 19:00 | Съб: 10:00 – 14:00",
    badgeText: "Безплатен първичен преглед",
    heroImageUrl: heroDental,
    features: [
      "Час до 48 часа",
      "Модерна апаратура",
      "Прозрачни цени",
      "Работим с деца",
    ],
    services: [
      {
        title: "Профилактика и почистване",
        description:
          "Ултразвуково почистване на зъбен камък, полиране и флуорна профилактика.",
        iconName: "Sparkles",
        priceFrom: "80 лв.",
      },
      {
        title: "Лечение на кариес",
        description:
          "Естетични фотополимерни обтурации с гаранция и пълна анестезия.",
        iconName: "ShieldCheck",
        priceFrom: "100 лв.",
      },
      {
        title: "Импланти",
        description:
          "Имплантологично възстановяване с водещи системи и 3D планиране.",
        iconName: "Activity",
        priceFrom: "1200 лв.",
      },
      {
        title: "Избелване",
        description: "Кабинетно избелване до 6 тона по-бели зъби за един час.",
        iconName: "Smile",
        priceFrom: "260 лв.",
      },
      {
        title: "Ортодонтия",
        description: "Метални, керамични брекети и прозрачни алайнери.",
        iconName: "AlignCenter",
        priceFrom: "1800 лв.",
      },
      {
        title: "Спешни случаи",
        description: "Остра болка? Приемаме в същия ден при възможност.",
        iconName: "Siren",
      },
    ],
    reviews: [
      {
        author: "Мария Г.",
        rating: 5,
        text: "Изключително внимателен доктор. За първи път не изпитах никакво напрежение на стола.",
        date: "юли 2026",
      },
      {
        author: "Стоян П.",
        rating: 5,
        text: "Направиха ми имплант — обясниха всяка стъпка и цената не се промени.",
        date: "юни 2026",
      },
      {
        author: "Елена Д.",
        rating: 4,
        text: "Много чист кабинет и мил персонал. Детето ми вече не се страхува от зъболекар.",
        date: "май 2026",
      },
    ],
    galleryUrls: [heroDental, heroRemont],
  },
  {
    id: "remonti-petrov",
    type: "trade",
    name: "Ремонти Петров",
    tagline: "Цялостни ремонти на апартаменти в срок и по договор",
    city: "Пловдив",
    phone: "+359877654321",
    viberPhone: "+359877654321",
    whatsappPhone: "+359877654321",
    email: "office@remontipetrov.bg",
    address: "ул. Капитан Райчо 18, Пловдив",
    workingHours: "Пон – Съб: 08:00 – 19:00",
    badgeText: "5 години гаранция",
    heroImageUrl: heroRemont,
    features: [
      "Спазване на срокове",
      "Писмен договор",
      "Фиксирана оферта",
      "Чистене след ремонт",
    ],
    services: [
      {
        title: "Цялостен ремонт",
        description:
          "От къртене до ключ — шпакловка, боя, ел. и ВиК инсталации, подови настилки.",
        iconName: "Hammer",
        priceFrom: "180 лв./кв.м",
      },
      {
        title: "Баня до ключ",
        description: "Хидроизолация, фаянс, санитария и монтаж за 10–14 дни.",
        iconName: "ShowerHead",
        priceFrom: "3500 лв.",
      },
      {
        title: "ВиК услуги",
        description: "Отстраняване на течове, смяна на тръби и смесители.",
        iconName: "Wrench",
        priceFrom: "60 лв.",
      },
      {
        title: "Електроинсталации",
        description: "Нови инсталации, табла, контакти и осветление по норматив.",
        iconName: "Zap",
        priceFrom: "50 лв.",
      },
      {
        title: "Шпакловка и боя",
        description: "Машинна шпакловка, гипсокартон и латекс без прах и петна.",
        iconName: "PaintRoller",
        priceFrom: "14 лв./кв.м",
      },
      {
        title: "Спешен майстор",
        description: "Авариен екип в рамките на деня за Пловдив и региона.",
        iconName: "Siren",
      },
    ],
    reviews: [
      {
        author: "Иван К.",
        rating: 5,
        text: "Ремонтираха тристаен за 6 седмици, точно както обещаха. Без изненади в сметката.",
        date: "август 2026",
      },
      {
        author: "Даниела М.",
        rating: 5,
        text: "Банята стана перфектна. Оставиха жилището чисто, което е рядкост.",
        date: "юли 2026",
      },
      {
        author: "Георги В.",
        rating: 4,
        text: "Коректни хора с договор и гаранция. Забавиха се 3 дни заради доставка.",
        date: "април 2026",
      },
    ],
    galleryUrls: [heroRemont, heroDental],
  },
];

export const getBusiness = (id: string): Business | undefined =>
  businesses.find((b) => b.id === id);
