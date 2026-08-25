import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { type Business, getBusinessDoctor } from "@/data/businesses";

export function DoctorBio({ business }: { business: Business }) {
  const doctor = getBusinessDoctor(business);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-brand-soft/20 to-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <Stethoscope className="size-4" />
            Вашият лекар
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            За Вашия лекар
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Професионален опит, висока квалификация и лично отношение към всеки пациент.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Doctor Portrait Card */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-elevated transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={doctor.photoUrl}
                alt={doctor.name}
                width={800}
                height={900}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-xl font-bold">{doctor.name}</p>
                <p className="text-xs font-medium text-white/80">{doctor.title}</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-elevated md:-right-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground font-extrabold text-xl shadow-cta">
                {doctor.experienceYears}+
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Опит</p>
                <p className="text-sm font-extrabold text-foreground">години практика</p>
              </div>
            </div>
          </div>

          {/* Doctor Details & Credentials */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {doctor.name}
              </h3>
              <p className="mt-1 text-base font-semibold text-brand">{doctor.title}</p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              {doctor.bio}
            </p>

            {doctor.quote && (
              <div className="rounded-2xl border border-brand/20 bg-brand-soft/40 p-5 backdrop-blur-xs">
                <div className="flex gap-3">
                  <HeartHandshake className="size-6 shrink-0 text-brand" />
                  <blockquote className="text-sm font-medium italic text-foreground/90">
                    "{doctor.quote}"
                  </blockquote>
                </div>
              </div>
            )}

            {/* Credentials Badges */}
            <div className="space-y-3 pt-2">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Award className="size-4 text-brand" />
                Квалификации и Сертификати
              </h4>
              <ul className="grid gap-3 sm:grid-cols-1">
                {doctor.credentials.map((cred, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-3.5 shadow-soft transition-colors hover:border-brand/30"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                    <span className="text-sm font-medium text-foreground">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">
                <ShieldCheck className="size-4 text-brand" />
                Високи хигиенни стандарти
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">
                <Award className="size-4 text-brand" />
                100% Пациентско удовлетворение
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
