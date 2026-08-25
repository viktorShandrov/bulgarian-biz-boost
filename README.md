# Local Business Boost

Create a high-converting, mobile-first dynamic landing page application for local Bulgarian service businesses (like dentists, handymen, plumbers, construction teams, repair services) using React, TypeScript, Tailwind CSS, Lucide Icons, and React Router (`react-router-dom`).

### 1. DATA STRUCTURE (`src/data/businesses.ts`)

Create a central data file with a TypeScript interface `Business` and an array `businesses`:

```typescript

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

  badgeText?: string; // e.g. "Безплатен първичен преглед" or "5 години гаранция"

  heroImageUrl: string;

  features: string[]; // 3-4 quick bullets like "Спазване на срокове", "Договор"

  services: Service[];

  reviews: Review[];

  galleryUrls?: string[];

}

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f271fe53-0b14-4761-ab9b-e743016c268f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
