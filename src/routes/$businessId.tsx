import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ContactSection } from "@/components/business/ContactSection";
import { Gallery } from "@/components/business/Gallery";
import { Hero } from "@/components/business/Hero";
import { Reviews } from "@/components/business/Reviews";
import { Services } from "@/components/business/Services";
import { StickyContactBar } from "@/components/business/StickyContactBar";
import { getBusiness } from "@/data/businesses";

export const Route = createFileRoute("/$businessId")({
  loader: ({ params }) => {
    const business = getBusiness(params.businessId);
    if (!business) throw notFound();
    return { business };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Страницата не е намерена" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { business } = loaderData;
    const title = `${business.name} — ${business.city}`;
    const description = `${business.tagline}. Обадете се на ${business.phone}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BusinessLanding,
  notFoundComponent: BusinessNotFound,
});

function BusinessLanding() {
  const { business } = Route.useLoaderData();

  return (
    <main className="pb-20 md:pb-0">
      <Hero business={business} />
      <Services business={business} />
      <Reviews business={business} />
      <Gallery business={business} />
      <ContactSection business={business} />
      <footer className="border-t border-border bg-card py-8 text-center text-sm text-muted-foreground">
        <p>
          {business.name} · {business.city} ·{" "}
          <a href={`tel:${business.phone}`} className="font-medium text-brand">
            {business.phone}
          </a>
        </p>
        <p className="mt-2">
          <Link to="/" className="underline">
            Всички обекти
          </Link>
        </p>
      </footer>
      <StickyContactBar business={business} />
    </main>
  );
}

function BusinessNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="font-display text-2xl font-bold">Няма такъв обект</h1>
      <p className="text-muted-foreground">Проверете адреса или разгледайте списъка.</p>
      <Link to="/" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">
        Към списъка
      </Link>
    </main>
  );
}
