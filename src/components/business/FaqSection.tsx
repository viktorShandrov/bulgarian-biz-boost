import { HelpCircle } from "lucide-react";
import { type Business, getBusinessFaqs } from "@/data/businesses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ business }: { business: Business }) {
  const faqs = getBusinessFaqs(business);

  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <HelpCircle className="size-4" />
            10 Често задавани въпроси
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Всичко за Вашето дентално лечение
          </h2>
          <p className="mt-2 text-muted-foreground">
            Пълни отговори на 10-те най-важни въпроса преди посещението при стоматолог.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border/80 bg-card p-4 shadow-soft md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border/60 bg-background/50 px-4 transition-colors data-[state=open]:bg-brand-soft/20 data-[state=open]:border-brand/30"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline hover:text-brand">
                  <span className="flex items-center gap-3 text-left">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-xs font-extrabold text-brand">
                      ?
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-10 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
