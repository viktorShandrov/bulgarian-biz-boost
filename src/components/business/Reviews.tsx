import { Star } from "lucide-react";
import type { Business } from "@/data/businesses";

export function Reviews({ business }: { business: Business }) {
  return (
    <section id="otzivi" className="bg-secondary/50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Какво казват клиентите
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {business.reviews.map((r) => (
            <figure
              key={r.author + r.text}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex gap-0.5" aria-label={`${r.rating} от 5 звезди`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < r.rating
                        ? "size-4 fill-accent text-accent"
                        : "size-4 text-muted-foreground/40"
                    }
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-card-foreground">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.author}
                {r.date && (
                  <span className="ml-2 font-normal text-muted-foreground">{r.date}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
