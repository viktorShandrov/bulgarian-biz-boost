import type { Business } from "@/data/businesses";

export function Gallery({ business }: { business: Business }) {
  if (!business.galleryUrls?.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
        {business.type === "medical" ? "Нашият кабинет" : "Наши проекти"}
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {business.galleryUrls.map((url, i) => (
          <img
            key={url + i}
            src={url}
            alt={`${business.name} — снимка ${i + 1}`}
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
          />
        ))}
      </div>
    </section>
  );
}
