import { type Business, getBusinessServices } from "@/data/businesses";
import { ServiceIcon } from "./icon-map";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function Services({ business }: { business: Business }) {
  const services = getBusinessServices(business);

  return (
    <section id="uslugi" className="relative overflow-hidden bg-gradient-to-b from-background via-brand-soft/10 to-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              <Sparkles className="size-4" />
              Нашите Услуги (6 Специализирани процедури)
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Дентални услуги & Лечение
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Пълен спектър от стоматологични манипулации с модерна апаратура, доказано качество и ясни фиксирани цени.
            </p>
          </div>
          <a
            href="#zapitvane"
            className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline md:mt-0"
          >
            Консултирай се с лекар <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title + i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-elevated hover:bg-gradient-to-br hover:from-card hover:to-brand-soft/20"
            >
              <div>
                {/* Service Image */}
                {s.imageUrl && (
                  <div className="relative mb-5 overflow-hidden rounded-2xl">
                    <img
                      src={s.imageUrl}
                      alt={s.title}
                      width={800}
                      height={450}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    {s.priceFrom && (
                      <span className="absolute bottom-3 right-3 rounded-xl bg-card/90 px-3 py-1 text-xs font-bold text-brand shadow-xs backdrop-blur-xs">
                        от {s.priceFrom}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-primary-foreground shadow-xs">
                    <ServiceIcon name={s.iconName} className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4 text-xs font-bold text-brand">
                <span>Запази час</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


