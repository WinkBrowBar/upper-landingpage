import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionEyebrow } from "@/components/landing/shared/section-eyebrow";
import { FAQS } from "@/data/services-data";

export function FaqSection() {
  return (
    // 8. FAQ
    <section className="bg-ink px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`} className="border-champagne/15">
              <AccordionTrigger className="text-left text-base font-bold tracking-[0.1em] text-champagne hover:text-primary hover:no-underline [&>svg]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-light leading-relaxed text-champagne/70">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
