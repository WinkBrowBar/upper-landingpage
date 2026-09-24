import { BookButton } from "@/components/landing/shared/book-button";
import { CallButton } from "@/components/landing/shared/call-button";
import {
  CROSS_STREETS,
  LOGO_CDN,
  LOGO_LOCAL,
  STOREFRONT_SRC,
  STREET_ADDRESS,
} from "@/data/site-config";

export function HeroSection({ onBook }: { onBook: () => void }) {
  return (
    // 1. HERO — location, offer, and both CTAs visible without scrolling
    <section className="grid min-h-svh bg-ink lg:grid-cols-2">
      <div className="order-2 flex min-h-[38svh] items-center justify-center p-5 sm:p-8 lg:order-1 lg:min-h-0 lg:p-12">
        <img
          src={STOREFRONT_SRC}
          alt="Wink Brow Bar studio front at 244 East 60th Street, Upper East Side"
          className="max-h-[calc(100svh-6rem)] w-full object-contain"
        />
      </div>

      <div className="order-1 flex items-center justify-center px-6 py-10 text-center text-champagne sm:px-12 lg:order-2 lg:px-14 lg:py-16 xl:px-20">
        <div className="w-full max-w-xl">
          <a
            // href="https://winkbrowbar.com"
            aria-label="Wink Brow Bar home"
            className="inline-block"
          >
            <img
              src={LOGO_LOCAL}
              alt="Wink Brow Bar"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src !== LOGO_CDN) img.src = LOGO_CDN;
              }}
              className="h-20 w-auto sm:h-24 lg:h-32 xl:h-36"
            />
          </a>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.1em] text-primary">
            New location open now
          </p>
          <h1 className="mt-4 text-3xl font-bold uppercase leading-[1.1] tracking-[0.1em] text-primary sm:text-4xl xl:text-5xl">
            Brow Bar in Upper East Side NYC
          </h1>
          <p className="mt-4 text-sm font-light uppercase tracking-[0.14em] text-champagne sm:text-base">
            {STREET_ADDRESS}
          </p>
          <p className="mt-1 text-xs font-light uppercase tracking-[0.16em] text-champagne/65 sm:text-sm">
            {CROSS_STREETS}
          </p>

          <div className="mx-auto my-7 h-px w-16 bg-primary/70" />

          <p className="text-xs font-light uppercase leading-relaxed tracking-[0.12em] text-champagne/75 sm:text-sm">
            New Clients
          </p>
          <h2 className="mt-2 text-2xl font-bold uppercase leading-tight tracking-[0.1em] text-champagne sm:text-3xl">
            Brow Shaping – $35
          </h2>
          <p className="mt-2 text-xs font-light tracking-[0.08em] text-champagne/60">
            Limited-time offer · New clients only
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <BookButton onClick={onBook} className="w-full max-w-xs sm:w-auto" />
            <CallButton className="w-full max-w-xs sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
