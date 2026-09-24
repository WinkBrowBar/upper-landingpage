import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_TEL } from "@/data/site-config";

export function CallButton({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-champagne/40 px-8 text-xs font-bold uppercase tracking-[0.1em] text-champagne transition-colors hover:bg-champagne/10",
        className,
      )}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call Now
    </a>
  );
}
