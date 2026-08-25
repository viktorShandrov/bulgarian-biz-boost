import { Star, MessageSquareQuote } from "lucide-react";
import { type Business, getBusinessReviews } from "@/data/businesses";

export function Reviews({ business }: { business: Business }) {
  const reviews = getBusinessReviews(business);

  return (
    <section id="otzivi" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <MessageSquareQuote className="size-4" />
            Отзиви от пациенти
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Оценки & Мнения от доволни пациенти
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            Реални отзиви от хора, които се довериха на нашето професионално и безболезнено лечение.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <figure
              key={r.author + idx}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:border-brand/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" aria-label={`${r.rating} от 5 звезди`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < r.rating
                            ? "size-4 fill-amber-400 text-amber-400"
                            : "size-4 text-muted-foreground/30"
                        }
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">
                    Потвърден пациент
                  </span>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 italic">
                  "{r.text}"
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 text-xs">
                <span className="font-bold text-foreground">{r.author}</span>
                {r.date && (
                  <span className="font-medium text-muted-foreground">{r.date}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

