import { Phone, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/landing/shared/section-eyebrow";
import { BookButton } from "@/components/landing/shared/book-button";
import { DirectionsButton } from "@/components/landing/shared/directions-button";
import {
  CITY_STATE_ZIP,
  CROSS_STREETS,
  MAP_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  STREET_ADDRESS,
} from "@/data/site-config";

export function LocationSection({ onBook }: { onBook: () => void }) {
  return (
    // 2. UPPER EAST SIDE LOCATION — address, phone, directions and map (merged)
    <section className="bg-ink-soft px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionEyebrow>Visit Us</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-primary sm:text-4xl">
            Your New Upper East Side Brow Bar
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-champagne/75">
            Wink Brow Bar is now open at {STREET_ADDRESS}, {CROSS_STREETS.toLowerCase()} — bringing
            brow threading, shaping, lamination, tinting, lash services, and eye-zone treatments to
            the Upper East Side.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-[3px] border border-champagne/15 bg-ink px-5 py-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-bold uppercase tracking-[0.1em] text-champagne">
                {STREET_ADDRESS}
              </p>
              <p className="text-sm font-light text-champagne/70">{CITY_STATE_ZIP}</p>
              <p className="text-sm font-light text-champagne/70">{CROSS_STREETS}</p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] text-primary hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BookButton onClick={onBook} />
            <DirectionsButton />
          </div>
        </div>
        <div className="h-80 w-full overflow-hidden rounded-[3px] border border-champagne/15 sm:h-96 lg:h-[30rem]">
          <iframe
            title="Map to Wink Brow Bar Upper East Side, 244 E 60th Street"
            src={MAP_EMBED_SRC}
            className="h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.85)]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
