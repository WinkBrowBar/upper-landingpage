// --- Booking (Zenoti) ---

export const BOOKING_URL =
  "https://winkbrowbar.zenoti.com/webstoreNew/services/188b010f-a060-4ba9-a5c0-56ffb4339479";

// Zenoti deep links (Upper East Side center). Service = one service page, category = a service group.
export const ZENOTI_ORG = "https://winkbrowbar.zenoti.com/webstoreNew";
export const UES_CENTER_ID = "188b010f-a060-4ba9-a5c0-56ffb4339479";
export const serviceLink = (serviceId: string) =>
  `${ZENOTI_ORG}/services/${UES_CENTER_ID}?serviceid=${serviceId}`;
export const categoryLink = (categoryId: string) =>
  `${ZENOTI_ORG}/${UES_CENTER_ID}?CategoryId=${categoryId}`;

// --- Attribution API ---

export const API_BASE_URL = "https://api.winkbrowbar.com/".replace(/\/+$/, ""); // trailing slash-safe
export const BRAND_ID = "6a61cca755da7f7407aec92e";
export const CAPTURE_TOKEN = "b8e2ba1a84ad1d8194bcf902d63a5eac5ec435d7cd8f04a4";

// --- Verified location details (from client-supplied storefront signage / brief) ---

export const STREET_ADDRESS = "244 E 60th Street";
export const CITY_STATE_ZIP = "New York, NY 10022";
export const CROSS_STREETS = "Between 2nd & 3rd Avenue";
export const FULL_ADDRESS = `${STREET_ADDRESS}, ${CITY_STATE_ZIP}`;
export const PHONE_DISPLAY = "917.352.3440";
export const PHONE_TEL = "+19173523440";

export const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  FULL_ADDRESS,
)}&output=embed`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  FULL_ADDRESS,
)}`;

export const CANONICAL_URL = "https://winkbrowbar.com/upper-east-side";

// Images live in /public/images so they ship with the repo (no external asset host needed).
export const STOREFRONT_SRC = "/images/storefront.jpg";
// White Wink logo. Local copy is preferred; falls back to the Wink CDN if the file isn't saved yet.
export const LOGO_LOCAL =
  "https://winkbrowbar.com/cdn/shop/files/wink-white.svg?v=1778762033&width=160";
export const LOGO_CDN =
  "https://winkbrowbar.com/cdn/shop/files/wink-white.svg?v=1778762033&width=160";
