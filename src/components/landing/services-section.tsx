import { Phone, ChevronRight, Maximize2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionEyebrow } from "@/components/landing/shared/section-eyebrow";
import { SERVICE_CATEGORIES } from "@/data/services-data";
import type { LightboxState } from "@/hooks/use-booking-flow";

export function ServicesSection({
  onBookService,
  onOpenConsult,
  onViewPhoto,
}: {
  onBookService: (url: string) => void;
  onOpenConsult: () => void;
  onViewPhoto: (photo: LightboxState) => void;
}) {
  return (
    // 4. SERVICES
    <section className="bg-ink px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-primary sm:text-4xl">
            Brow &amp; Beauty Services on Upper East Side
          </h2>
        </div>

        <Accordion type="multiple" className="mt-12 space-y-4">
          {SERVICE_CATEGORIES.map((category, i) => (
            <AccordionItem
              key={category.title}
              value={`category-${i}`}
              className="overflow-hidden rounded-[3px] border border-champagne/15 bg-ink-soft transition-colors hover:border-primary/60 data-[state=open]:border-primary/60"
            >
              <AccordionTrigger className="p-6 hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary">
                <div className="text-left">
                  <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-champagne">
                    {category.title}
                  </h3>
                  {category.badge && (
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-primary">
                      {category.badge}
                    </p>
                  )}
                  <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-champagne/70">
                    {category.description}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="grid gap-6 border-t border-champagne/10 p-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((item) => (
                    <div
                      key={item.title}
                      className="flex h-full flex-col overflow-hidden rounded-[3px] border border-champagne/15 bg-ink transition-colors hover:border-primary/60"
                    >
                      {item.image && (
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={`Before and after ${item.title.toLowerCase()} at Wink Brow Bar`}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                            <span className="flex-1 bg-black/45 px-3 py-1">Before</span>
                            <span className="flex-1 bg-primary/80 px-3 py-1 text-right text-ink">
                              After
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              onViewPhoto({
                                src: item.image!,
                                alt: `Before and after ${item.title.toLowerCase()} at Wink Brow Bar`,
                              })
                            }
                            aria-label={`View larger photo of ${item.title}`}
                            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-champagne transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            <Maximize2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      )}
                      <div className="flex h-full flex-col p-6">
                        <h4 className="text-lg font-bold uppercase tracking-[0.1em] text-champagne">
                          {item.title}
                        </h4>
                        {item.badge && (
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-primary">
                            {item.badge}
                          </p>
                        )}
                        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-champagne/70">
                          {item.description}
                        </p>

                        {item.bookingUrl ? (
                          <button
                            type="button"
                            onClick={() => onBookService(item.bookingUrl!)}
                            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-[3px] border border-primary/70 text-xs font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            Book Now
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        ) : item.embed ? (
                          <button
                            type="button"
                            onClick={onOpenConsult}
                            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-[3px] border border-primary/70 text-xs font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            Book Free Consult
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        ) : item.callTel ? (
                          <a
                            href={`tel:${item.callTel}`}
                            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-[3px] border border-champagne/40 text-xs font-bold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-primary hover:text-primary"
                          >
                            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                            Call {item.callLabel}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
