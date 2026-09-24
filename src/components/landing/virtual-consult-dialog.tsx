import { Minimize2 } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";

export function VirtualConsultDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    // Virtual Consultant — embeds the studio's LeadConnector booking widget
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[94vw] max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[3px] border border-champagne/15 bg-ink shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <DialogPrimitive.Title className="px-6 pb-3 pt-6 pr-16 text-lg font-bold uppercase tracking-[0.1em] text-champagne">
            Free Virtual Consultation
          </DialogPrimitive.Title>

          <div className="min-h-0 flex-1 px-4 pb-4 sm:px-6 sm:pb-6">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/2wwNib29z6MaBxKoX6KZ"
              id="OX5YMOXnSkQih1k0JcMi_1789855029422"
              title="Book a free virtual consultation"
              className="h-[72vh] min-h-[560px] w-full rounded-[3px] bg-white"
              style={{ border: "none" }}
            />
          </div>

          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-champagne transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Minimize2 className="h-4 w-4" aria-hidden="true" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
