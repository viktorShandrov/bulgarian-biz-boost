import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import type { Business } from "@/data/businesses";

export function ContactSection({ business }: { business: Business }) {
  const [sent, setSent] = useState(false);
  const viber = business.viberPhone ?? business.phone;

  return (
    <section id="zapitvane" className="bg-brand-soft py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            {business.type === "medical" ? "Запази час" : "Заяви безплатен оглед"}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Отговаряме в рамките на работния ден. Най-бързо е по телефон или Viber.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-3 font-semibold text-brand"
            >
              <Phone className="size-4" />
              {business.phone}
            </a>
            <a
              href={`viber://chat?number=${encodeURIComponent(viber)}`}
              className="flex items-center gap-3 text-foreground"
            >
              <MessageCircle className="size-4 text-brand" />
              Viber чат
            </a>
            {business.whatsappPhone && (
              <a
                href={`https://wa.me/${business.whatsappPhone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground"
              >
                <MessageCircle className="size-4 text-brand" />
                WhatsApp
              </a>
            )}
            {business.email && (
              <a href={`mailto:${business.email}`} className="flex items-center gap-3">
                <Mail className="size-4 text-brand" />
                {business.email}
              </a>
            )}
            {business.address && (
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-brand" />
                {business.address}
              </p>
            )}
            {business.workingHours && (
              <p className="flex items-center gap-3">
                <Clock className="size-4 text-brand" />
                {business.workingHours}
              </p>
            )}
          </div>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-5 shadow-elevated md:p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Запитването е изпратено. Ще се свържем с вас скоро.");
          }}
        >
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Име
              <input
                required
                name="name"
                className="mt-1.5 h-12 w-full rounded-xl border border-input bg-background px-3 text-base outline-none focus:border-brand"
                placeholder="Иван Иванов"
              />
            </label>
            <label className="block text-sm font-medium">
              Телефон
              <input
                required
                type="tel"
                name="phone"
                inputMode="tel"
                className="mt-1.5 h-12 w-full rounded-xl border border-input bg-background px-3 text-base outline-none focus:border-brand"
                placeholder="0888 123 456"
              />
            </label>
            <label className="block text-sm font-medium">
              {business.type === "medical" ? "Какво ви притеснява?" : "Какво трябва да се направи?"}
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-input bg-background p-3 text-base outline-none focus:border-brand"
                placeholder={
                  business.type === "medical"
                    ? "Болка в горен ляв зъб от 2 дни..."
                    : "Ремонт на баня, 5 кв.м, панелен блок..."
                }
              />
            </label>
            <button
              type="submit"
              className="h-13 w-full rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-cta transition-transform active:scale-[0.98]"
            >
              {sent ? "Изпратено ✓" : "Изпрати запитване"}
            </button>
            <p className="text-xs text-muted-foreground">
              Данните се използват само за връзка по това запитване.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
