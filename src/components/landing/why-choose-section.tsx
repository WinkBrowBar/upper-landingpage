import { SectionEyebrow } from "@/components/landing/shared/section-eyebrow";
import { USPS } from "@/data/services-data";

export function WhyChooseSection() {
  return (
    // 5. WHY CHOOSE WINK BROW BAR
    <section className="bg-ink-soft px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <SectionEyebrow>Why Wink Brow Bar</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-primary sm:text-4xl">
            Why Choose Wink Brow Bar
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {USPS.map((usp) => (
            <div key={usp.title} className="flex gap-4">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <div>
                <h3 className="font-bold uppercase tracking-[0.1em] text-champagne">{usp.title}</h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-champagne/70">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
