import { BookButton } from "@/components/landing/shared/book-button";
import { CallButton } from "@/components/landing/shared/call-button";
import { FULL_ADDRESS } from "@/data/site-config";

export function FinalCtaSection({ onBook }: { onBook: () => void }) {
  return (
    // 9. FINAL CTA
    <section className="border-t border-champagne/10 bg-ink px-6 py-20 text-center text-champagne sm:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold uppercase tracking-[0.1em] text-primary sm:text-4xl lg:whitespace-nowrap lg:text-3xl xl:text-4xl">
          Ready for Your Brow Appointment?
        </h2>
        <p className="mt-6 text-base font-light text-champagne/75 sm:text-lg">
          Wink Brow Bar – {FULL_ADDRESS}
        </p>
        <p className="mt-3 text-lg font-bold uppercase tracking-[0.1em] text-champagne sm:text-2xl">
          New Clients – Brow Shaping $35
        </p>
        <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col items-stretch gap-4 sm:flex-row">
          <BookButton onClick={onBook} className="h-14 w-full sm:flex-1" />
          <CallButton className="h-14 w-full sm:flex-1" />
        </div>
      </div>
    </section>
  );
}
