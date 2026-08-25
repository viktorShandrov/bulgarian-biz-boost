import type { Business } from "@/data/businesses";
import { ServiceIcon } from "./icon-map";

export function Services({ business }: { business: Business }) {
  return (
    <section id="uslugi" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
        {business.type === "medical" ? "Дентални услуги" : "Какво правим"}
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Ясни цени, без скрити условия. Финалната стойност потвърждаваме преди започване.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {business.services.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-elevated"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <ServiceIcon name={s.iconName} className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
            {s.priceFrom && (
              <p className="mt-4 text-sm font-semibold text-brand">от {s.priceFrom}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
