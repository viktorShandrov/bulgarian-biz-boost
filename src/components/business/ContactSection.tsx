import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Navigation } from "lucide-react";
import { toast } from "sonner";
import { type Business, getBusinessAddress, getBusinessWorkingHours } from "@/data/businesses";

export function ContactSection({ business }: { business: Business }) {
  const [sent, setSent] = useState(false);
  const viber = business.viberPhone ?? business.phone;
  const address = getBusinessAddress(business);
  const workingHours = getBusinessWorkingHours(business);
  const mapQuery = business.googleMapsQuery || `${business.name}, ${address}`;

  return (
    <section id="zapitvane" className="bg-brand-soft/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <MapPin className="size-4" />
            Локация & Контакти
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Запазете час за преглед
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Намерете ни лесно или изпратете запитване онлайн. Отговаряме бързо в рамките на деня.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Location Info & Interactive Map */}
          <div className="space-y-6 lg:col-span-6">
            {/* Exact Address Badge Card */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-xs">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Адрес на кабинета</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{address}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{business.city}, България</p>
                </div>
              </div>

              {/* Contact Actions Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-bold text-accent-foreground shadow-cta transition-transform active:scale-[0.98]"
                >
                  <Phone className="size-4" />
                  {business.phone}
                </a>
                <a
                  href={`viber://chat?number=${encodeURIComponent(viber)}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 font-semibold text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft/30"
                >
                  <MessageCircle className="size-4 text-brand" />
                  Viber чат
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Clock className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Работно време</h3>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/40 pb-2.5">
                  <span className="font-medium text-muted-foreground">Делнични дни</span>
                  <span className="font-semibold text-foreground">{workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2.5">
                  <span className="font-medium text-muted-foreground">Събота</span>
                  <span className="font-semibold text-foreground">{workingHours.saturday}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="font-medium text-muted-foreground">Неделя</span>
                  <span className="font-semibold text-muted-foreground">{workingHours.sunday}</span>
                </div>
                {workingHours.note && (
                  <p className="mt-3 rounded-xl bg-brand-soft/60 p-3 text-xs font-medium text-brand">
                    ⚡ {workingHours.note}
                  </p>
                )}
              </div>
            </div>

            {/* Google Maps Embedded iframe */}
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft">
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-3.5 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Navigation className="size-4 text-brand" />
                  Интерактивна карта
                </span>
                <span className="text-brand">{business.city}</span>
              </div>
              <iframe
                title={`Карта — ${business.name}`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full grayscale-[10%] hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-6">
            <form
              className="rounded-3xl border border-border/80 bg-card p-6 shadow-elevated md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Запитването е изпратено успешно! Ще се свържем с вас в най-кратък срок.");
              }}
            >
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Онлайн запитване
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Попълнете формата и наш сътрудник ще се свърже с вас за потвърждение на часа.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block text-sm font-semibold text-foreground">
                  Вашето име
                  <input
                    required
                    name="name"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="Иван Иванов"
                  />
                </label>

                <label className="block text-sm font-semibold text-foreground">
                  Телефон за връзка
                  <input
                    required
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="0888 123 456"
                  />
                </label>

                <label className="block text-sm font-semibold text-foreground">
                  Причина за посещението / Симптоми
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-2xl border border-input bg-background p-4 text-base outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="Описание на оплакванията или предпочитан ден за преглед..."
                  />
                </label>

                <button
                  type="submit"
                  className="h-14 w-full rounded-2xl bg-accent px-6 py-4 text-base font-extrabold text-accent-foreground shadow-cta transition-all hover:brightness-105 active:scale-[0.98]"
                >
                  {sent ? "Запитването е изпратено ✓" : "Изпрати запитване"}
                </button>

                <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Вашите данни са напълно защитени и се използват само за връзка с вас.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

