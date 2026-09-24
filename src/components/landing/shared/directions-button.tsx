import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { DIRECTIONS_URL } from "@/data/site-config";

export function DirectionsButton({ className }: { className?: string }) {
  return (
    <a
      href={DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-champagne/40 px-8 text-xs font-bold uppercase tracking-[0.1em] text-champagne transition-colors hover:bg-champagne/10",
        className,
      )}
    >
      <MapPin className="h-4 w-4" aria-hidden="true" />
      Get Directions
    </a>
  );
}
