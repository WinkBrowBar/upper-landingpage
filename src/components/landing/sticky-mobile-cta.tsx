import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/data/site-config";

export function StickyMobileCta({ onBook }: { onBook: () => void }) {
  return (
    <>
      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-champagne/15 bg-ink/95 p-3 backdrop-blur lg:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[3px] border border-champagne/40 text-xs font-bold uppercase tracking-[0.1em] text-champagne"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <button
          onClick={onBook}
          className="flex h-11 flex-[2] items-center justify-center rounded-[3px] bg-primary text-xs font-bold uppercase tracking-[0.1em] text-primary-foreground"
        >
          Book Your Appointment
        </button>
      </div>
      {/* Spacer so the sticky bar never covers the final CTA on mobile */}
      <div className="h-16 bg-ink lg:hidden" aria-hidden="true" />
    </>
  );
}
