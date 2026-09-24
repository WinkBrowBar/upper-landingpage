import {
  categoryLink,
  serviceLink,
  STREET_ADDRESS,
  CROSS_STREETS,
  FULL_ADDRESS,
  PHONE_DISPLAY,
} from "@/data/site-config";

export interface ServiceItem {
  title: string;
  description: string;
  badge?: string;
  image?: string;
  bookingUrl?: string;
  // Not a Zenoti service — opens the studio's LeadConnector booking widget instead.
  embed?: boolean;
  callTel?: string;
  callLabel?: string;
}

export interface ServiceCategory {
  title: string;
  badge?: string;
  description: string;
  services: ServiceItem[];
}

// Every category below mirrors a real Zenoti category, with each service deep-linking
// to its own booking page where Zenoti has an ID. Where a service has no dedicated ID yet
// (Brow Trim, Virtual Consultant), we fall back to the closest working booking path
// instead of linking to nothing.
const BROW_SHAPING_CATEGORY_URL = categoryLink("02b37c3a-a623-446a-a966-21ffc612362e");

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Brow Shaping",
    badge: "New clients · $35",
    description:
      "Five ways to shape and refine your brows — from precision threading to a quick tweeze, plus a virtual consult if you're not sure where to start.",
    services: [
      {
        title: "Signature Brow Threading",
        description:
          "Precision, hair-by-hair shaping with the traditional threading technique for clean, natural lines.",
        bookingUrl: serviceLink("eaff55ac-a7a7-4c39-a048-106a0a715c51"),
        image: "/images/services/signature-brow-threading.jpg",
      },
      {
        title: "Brow Waxing",
        description:
          "Fast, precise shaping with warm wax to lift stray hairs and define a clean brow line.",
        bookingUrl: serviceLink("25feb2c1-fa4d-4d32-9b29-4c4d163dcf98"),
      },
      {
        title: "Tweeze & Trim",
        description:
          "A quick touch-up between fuller services — tweezing and trimming to keep brows polished.",
        bookingUrl: serviceLink("fe011360-9e31-491b-ad45-ad036a1b25c1"),
      },
      {
        title: "Brow Trim",
        description: "Light trimming of longer brow hairs for a neat, groomed finish.",
        // No dedicated service ID yet in Zenoti — route to the Brow Shaping category page.
        bookingUrl: BROW_SHAPING_CATEGORY_URL,
      },
      {
        title: "Virtual Consultant",
        badge: "Free",
        description:
          "Not sure which brow service is right for you? Book a free virtual consultation with a Wink specialist before you book in person.",
        // Not a Zenoti service — opens the studio's LeadConnector booking widget instead.
        embed: true,
      },
    ],
  },
  {
    title: "Brow Tinting & Lightening",
    description:
      "Semi-permanent color and lightening options that fill in sparse areas and add definition between shaping visits.",
    services: [
      {
        title: "Classic Brow Tint",
        description: "Semi-permanent color that adds depth and dimension to natural brow hair.",
        bookingUrl: serviceLink("437ea8ec-7db4-4bf9-9427-878dde0080b4"),
        image: "/images/services/brow-tint.jpg",
      },
      {
        title: "Classic Lash Tint",
        description: "Darkens natural lashes for definition without mascara.",
        bookingUrl: serviceLink("24e2ce73-7f6c-4131-9fb7-cf5784e7dbe8"),
      },
      {
        title: "Premium Brow Tint",
        description: "A longer-lasting, richer version of our classic brow tint.",
        bookingUrl: serviceLink("4500af63-1310-4061-abab-bb5012d3d60a"),
      },
      {
        title: "Hybrid Brow Stain",
        description: "A blended tint-and-stain technique for a soft, gradient brow color.",
        bookingUrl: serviceLink("e883e5a9-ee1a-423d-9f6f-05753f259821"),
      },
      {
        title: "Premium Lash Tint",
        description: "A longer-lasting, richer version of our classic lash tint.",
        bookingUrl: serviceLink("8c5c0a78-5332-440a-950f-7767c3430f51"),
      },
      {
        title: "Brow Lightening",
        description:
          "Lightens brow hair for a softer color, ideal after a dye job or for a natural look.",
        bookingUrl: serviceLink("d7ffd255-598c-4e09-900f-feff8da81f77"),
      },
    ],
  },
  {
    title: "Brow Laminations & Lash Lifting",
    description:
      "Keratin treatments that set brow and lash hairs in place for a fuller, longer-lasting groomed look.",
    services: [
      {
        title: "Keratin Brow Lamination + Classic Tint + Shape",
        description: "Our full brow treatment — lamination, tint, and shaping in one visit.",
        bookingUrl: serviceLink("12618246-930e-45b7-bbc6-d7e6701b685e"),
      },
      {
        title: "Keratin Brow Lamination",
        description:
          "Sets brow hairs in a smooth, uniform direction for a fuller, groomed look that lasts for weeks.",
        bookingUrl: serviceLink("d1a716e7-da3d-4baf-8aa3-54d7ca32a57e"),
        image: "/images/services/keratin-brow-lamination.jpg",
      },
      {
        title: "Keratin Lash Lift",
        description:
          "Lifts and curls natural lashes at the root for an open-eyed look, no mascara needed.",
        bookingUrl: serviceLink("c4a1cee6-a474-4d27-9c63-a7a18787ccbd"),
      },
      {
        title: "Keratin Lash Lift + Tint",
        description:
          "Lifts and defines your natural lashes, with an added tint for a fuller, darker look.",
        bookingUrl: serviceLink("4c19a875-0953-41cf-a21c-089ab6e34620"),
        image: "/images/services/lash-lift-tint.jpg",
      },
      {
        title: "Premium Lash Lift + Tint",
        description: "A longer-lasting, richer version of our classic lash lift + tint.",
        bookingUrl: serviceLink("65ccab0d-bb05-48b4-a43e-02e65d08f77b"),
      },
    ],
  },
  {
    title: "Revital-Eyes Treatments",
    description:
      "Lymphatic drainage and calming care to refresh and de-puff the delicate eye area.",
    services: [
      {
        title: "Revital-Eyes Lymphatic Facial Massage",
        description:
          "A gentle massage technique that encourages lymphatic drainage around the eye area.",
        bookingUrl: serviceLink("488ba927-8bc4-451d-b4e8-a82ff09a74ca"),
      },
      {
        title: "Revital-Eyes Calming Treatment",
        description: "A soothing treatment designed to calm and refresh tired, puffy eyes.",
        bookingUrl: serviceLink("459a8ecb-a0e4-458f-9692-4590cfef6149"),
      },
    ],
  },
];

export const USPS = [
  {
    title: "The Brow & Eye Zone Experts",
    description:
      "Specialized in brow threading, shaping, lamination, tinting, lash lift, and eye-zone care — not a general nail or hair salon add-on.",
  },
  {
    title: "Convenient Upper East Side Location",
    description: `Right on ${STREET_ADDRESS}, ${CROSS_STREETS.toLowerCase()} — easy to reach before work, on a lunch break, or after.`,
  },
  {
    title: "Multiple Services, One Visit",
    description:
      "Brows, lashes, and eye-zone treatments are all available in a single appointment.",
  },
  {
    title: "Easy Online Booking",
    description:
      "Book your appointment online in a couple of minutes, or call our client services line directly.",
  },
  {
    title: "New Location, Same Standards",
    description:
      "Our Upper East Side studio just opened, bringing Wink Brow Bar's technique and service to E 60th Street.",
  },
];

export const FAQS = [
  {
    q: "Where is the Upper East Side Wink Brow Bar location?",
    a: `Wink Brow Bar Upper East Side is located at ${FULL_ADDRESS}, ${CROSS_STREETS.toLowerCase()}.`,
  },
  {
    q: "Is the $35 Brow Shaping offer for new clients?",
    a: "Yes. The $35 Brow Shaping offer is for new clients only, and it's available for a limited time. Mention the offer when you book.",
  },
  {
    q: "What brow services are available at this location?",
    a: "Brow threading, brow shaping, brow lamination, brow tinting, lash services, and eye-zone treatments are all available at the Upper East Side studio.",
  },
  {
    q: "How can I book an appointment?",
    a: `You can book online any time using the "Book Your Appointment" button on this page, or call our client services team at ${PHONE_DISPLAY}.`,
  },
  {
    q: "Do I need an appointment, or are walk-ins accepted?",
    a: "Appointments are recommended to guarantee your preferred time and technician. Call the studio to check same-day availability.",
  },
];
