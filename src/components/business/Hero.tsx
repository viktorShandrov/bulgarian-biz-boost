import { BadgeCheck, Check, Clock, MapPin, Phone, Star } from "lucide-react";
import type { Business } from "@/data/businesses";

export function Hero({ business }: { business: Business }) {
  const avg =
    business.reviews.reduce((s, r) => s + r.rating, 0) /
    Math.max(business.reviews.length, 1);

  return (
    <header className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:px-8 md:pt-16 md:pb-14">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80">
              <MapPin className="size-4" />
              {business.city}
              {business.type === "medical" ? " · Дентална практика" : " · Ремонти и услуги"}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
              {business.name}
            </h1>
            <p className="mt-3 text-base text-primary-foreground/85 md:text-lg">
              {business.tagline}
            </p>

            {business.badgeText && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-cta">
                <BadgeCheck className="size-4" />
                {business.badgeText}
              </p>
            )}

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {business.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                  <Check className="size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-cta transition-transform active:scale-[0.98]"
              >
                <Phone className="size-5" />
                Позвъни: {business.phone}
              </a>
              <a
                href="#zapitvane"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3.5 text-base font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                {business.type === "medical" ? "Запази час" : "Вземи оферта"}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1.5">
                <Star className="size-4 fill-accent text-accent" />
                {avg.toFixed(1)} / 5 от {business.reviews.length} отзива
              </span>
              {business.workingHours && (
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {business.workingHours}
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <img
              src={business.heroImageUrl}
              alt={`${business.name} — ${business.city}`}
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elevated"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
