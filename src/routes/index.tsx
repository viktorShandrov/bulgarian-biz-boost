import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { businesses } from "@/data/businesses";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Лендинг страници за местни услуги в България" },
      {
        name: "description",
        content:
          "Готови мобилни лендинг страници за зъболекари, майстори, ВиК и ремонтни екипи — с обаждане с едно докосване.",
      },
      { property: "og:title", content: "Лендинг страници за местни услуги в България" },
      {
        property: "og:description",
        content: "Мобилни страници за зъболекари и майстори с ясни цени и бърз контакт.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-hero-gradient px-5 py-14 text-primary-foreground md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Страници, които превръщат търсенето в обаждане
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">
            Мобилно ориентирани лендинг страници за зъболекари, майстори, ВиК и ремонтни
            екипи в България. Избери обект, за да видиш страницата.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <h2 className="font-display text-2xl font-bold tracking-tight">Демо обекти</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {businesses.map((b) => {
            const avg =
              b.reviews.reduce((s, r) => s + r.rating, 0) / Math.max(b.reviews.length, 1);
            return (
              <Link
                key={b.id}
                to="/$businessId"
                params={{ businessId: b.id }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elevated"
              >
                <img
                  src={b.heroImageUrl}
                  alt={b.name}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-5">
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4" />
                    {b.city}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold">{b.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.tagline}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand">
                    <Star className="size-4 fill-accent text-accent" />
                    {avg.toFixed(1)}
                    <span className="ml-auto inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Виж страницата <ArrowRight className="size-4" />
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
