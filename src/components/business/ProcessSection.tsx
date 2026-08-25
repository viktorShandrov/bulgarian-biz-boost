import { Calendar, ArrowRight, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      badge: "Стъпка 1",
      title: "1. Записване на час",
      desc: "Свържете се с нас по телефон, Viber или чрез бързата онлайн форма. Избираме удобно за вас време.",
      icon: Calendar,
    },
    {
      num: "02",
      badge: "Стъпка 2",
      title: "2. Преглед и план",
      desc: "Извършваме обстоен преглед, щадяща диагностика и изготвяме персонален план за лечение с фиксирани цени.",
      icon: Stethoscope,
    },
    {
      num: "03",
      badge: "Стъпка 3",
      title: "3. Безболезнено лечение",
      desc: "Прецизна работа с 100% безболезнена анестезия, съвременна апаратура и гарантирано високо качество.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
          <ShieldCheck className="size-4" />
          Ясен и прозрачен процес
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Как протича лечението
        </h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
          Само в 3 лесни стъпки получавате пълна грижа, спокойствие и перфектна усмивка.
        </p>
      </div>

      <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-elevated hover:bg-gradient-to-b hover:from-card hover:to-brand-soft/20"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand font-display text-lg font-extrabold shadow-xs group-hover:bg-brand group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-3xl font-black text-muted-foreground/30 group-hover:text-brand/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    {step.badge}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:absolute -right-4 top-1/2 -translate-y-1/2 z-10 lg:-right-4">
                  <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card shadow-xs text-muted-foreground">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
