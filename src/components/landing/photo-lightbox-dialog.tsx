import { Minimize2 } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import type { LightboxState } from "@/hooks/use-booking-flow";

export function PhotoLightboxDialog({
  lightbox,
  onOpenChange,
}: {
  lightbox: LightboxState | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    // Photo lightbox — "maximize" button on each before/after photo opens this, "minimize" closes it
    <Dialog open={!!lightbox} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3px] border border-champagne/15 bg-ink shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <DialogPrimitive.Title className="sr-only">
            {lightbox?.alt ?? "Photo preview"}
          </DialogPrimitive.Title>
          {lightbox && (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-full object-contain"
            />
          )}
          <DialogPrimitive.Close
            aria-label="Close preview"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-champagne transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Minimize2 className="h-4 w-4" aria-hidden="true" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
