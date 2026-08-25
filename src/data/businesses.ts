import heroDental from "@/assets/hero-dental.jpg";
import heroDental2 from "@/assets/hero-dental-2.jpg";
import dentalGallery from "@/assets/dental-gallery.jpg";

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
  id: string; // URL slug, e.g. "dr-ivanov"
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
    galleryUrls: [heroDental, dentalGallery],
  },
  {
    id: "dental-smile",
    name: "Дентален център Smile Пловдив",
    tagline: "Детска и естетична дентална медицина с грижа за всяко семейство",
    city: "Пловдив",
    phone: "+359877654321",
    viberPhone: "+359877654321",
    whatsappPhone: "+359877654321",
    email: "office@dentalsmile.bg",
    address: "ул. Капитан Райчо 18, Пловдив",
    workingHours: "Пон – Съб: 08:00 – 19:00",
    badgeText: "Безплатна консултация за деца",
    heroImageUrl: heroDental2,
    features: [
      "Детски зъболекар",
      "Седация при страх",
      "Дигитален скенер",
      "Плащане на части",
    ],
    services: [
      {
        title: "Детска дентална медицина",
        description:
          "Профилактика, силанти и лечение в спокойна среда без стрес за детето.",
        iconName: "Smile",
        priceFrom: "60 лв.",
      },
      {
        title: "Естетични корони",
        description: "Циркониеви и керамични корони с дигитален отпечатък.",
        iconName: "Sparkles",
        priceFrom: "650 лв.",
      },
      {
        title: "Лечение на кариес",
        description: "Съвременни обтурации с гаранция и безболезнена анестезия.",
        iconName: "ShieldCheck",
        priceFrom: "90 лв.",
      },
      {
        title: "Кореново лечение",
        description: "Ендодонтия с машинна обработка и рентгенов контрол.",
        iconName: "Activity",
        priceFrom: "180 лв.",
      },
      {
        title: "Алайнери",
        description: "Прозрачно изправяне на зъбите с 3D план на резултата.",
        iconName: "AlignCenter",
        priceFrom: "2200 лв.",
      },
      {
        title: "Спешен приём",
        description: "Остра болка или счупен зъб — приемаме в рамките на деня.",
        iconName: "Siren",
      },
    ],
    reviews: [
      {
        author: "Иван К.",
        rating: 5,
        text: "Детето влиза при доктора с усмивка. Обясняват всичко търпеливо.",
        date: "август 2026",
      },
      {
        author: "Даниела М.",
        rating: 5,
        text: "Направиха ми корони за две седмици — изглеждат напълно естествено.",
        date: "юли 2026",
      },
      {
        author: "Георги В.",
        rating: 4,
        text: "Коректни цени и точни часове. Само паркирането в центъра е трудно.",
        date: "април 2026",
      },
    ],
    galleryUrls: [heroDental2, dentalGallery],
  },
];

export const getBusiness = (id: string): Business | undefined =>
  businesses.find((b) => b.id === id);
