import { BookButton } from "@/components/landing/shared/book-button";

export function OfferBanner({ onBook }: { onBook: () => void }) {
  return (
    // 3. NEW CLIENT OFFER
    <section className="bg-primary px-6 py-16 text-center text-ink sm:px-10 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
          Limited-time offer
        </p>
        <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-ink sm:text-4xl">
          New Client Brow Shaping – $35
        </h2>
        <p className="mt-5 text-base font-light leading-relaxed text-ink/80">
          First-time Wink Brow Bar clients can get a professional Brow Shaping for $35. This offer
          is for new clients only and available for a limited time — mention it when you book.
        </p>
        <BookButton onClick={onBook} className="mt-8 bg-ink text-champagne hover:bg-ink/85">
          Book Brow Shaping
        </BookButton>
      </div>
    </section>
  );
}
