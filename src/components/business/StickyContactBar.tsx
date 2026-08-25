import { MessageCircle, Phone } from "lucide-react";
import type { Business } from "@/data/businesses";

export function StickyContactBar({ business }: { business: Business }) {
  const viber = business.viberPhone ?? business.phone;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${business.phone}`}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-cta"
        >
          <Phone className="size-4" />
          Обади се сега
        </a>
        <a
          href={`viber://chat?number=${encodeURIComponent(viber)}`}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 text-sm font-semibold text-secondary-foreground"
        >
          <MessageCircle className="size-4" />
          Viber
        </a>
      </div>
    </div>
  );
}
