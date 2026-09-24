import { useBookingFlow } from "@/hooks/use-booking-flow";
import { HeroSection } from "@/components/landing/hero-section";
import { LocationSection } from "@/components/landing/location-section";
import { OfferBanner } from "@/components/landing/offer-banner";
import { ServicesSection } from "@/components/landing/services-section";
import { WhyChooseSection } from "@/components/landing/why-choose-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { StickyMobileCta } from "@/components/landing/sticky-mobile-cta";
import { BookingEmailDialog } from "@/components/landing/booking-email-dialog";
import { PhotoLightboxDialog } from "@/components/landing/photo-lightbox-dialog";
import { VirtualConsultDialog } from "@/components/landing/virtual-consult-dialog";

export function LandingPage() {
  const {
    open,
    setOpen,
    email,
    setEmail,
    sending,
    lightbox,
    setLightbox,
    consultOpen,
    setConsultOpen,
    inputRef,
    openBooking,
    handleBook,
    handleSubmit,
  } = useBookingFlow();

  return (
    <main className="min-h-screen bg-ink font-body text-champagne">
      <HeroSection onBook={handleBook} />
      <LocationSection onBook={handleBook} />
      <OfferBanner onBook={handleBook} />
      <ServicesSection
        onBookService={openBooking}
        onOpenConsult={() => setConsultOpen(true)}
        onViewPhoto={setLightbox}
      />
      <WhyChooseSection />

      {/*
        6. CUSTOMER REVIEWS — intentionally omitted.
        No verified Google/Yelp reviews exist yet for this brand-new Upper East Side
        studio, and reviews from Wink Brow Bar's other NYC locations should not be
        presented as belonging to this address. Once real Upper East Side reviews are
        available (e.g. exported from the Google Business Profile), add a reviews
        array here — for example:

        const REVIEWS = [
          { name: "First name L.", quote: "…", rating: 5 },
        ];

        …and render them in a simple grid using the same card styling as the
        Services section above.
      */}

      <FaqSection />
      <FinalCtaSection onBook={handleBook} />
      <StickyMobileCta onBook={handleBook} />

      <BookingEmailDialog
        open={open}
        email={email}
        onEmailChange={setEmail}
        sending={sending}
        onSubmit={handleSubmit}
        onClose={() => setOpen(false)}
        inputRef={inputRef}
      />

      <PhotoLightboxDialog
        lightbox={lightbox}
        onOpenChange={(next) => !next && setLightbox(null)}
      />

      <VirtualConsultDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </main>
  );
}
