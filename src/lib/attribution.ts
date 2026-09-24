import { API_BASE_URL, BOOKING_URL, BRAND_ID, CAPTURE_TOKEN } from "@/data/site-config";

// --- Attribution / booking handoff (unchanged behavior) ---

export function getOrCreateVisitorId() {
  const key = "attr_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = "v_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(key, id);
  }
  return id;
}

export const alreadyIdentified = () => sessionStorage.getItem("attr_identified") === "1";
export const markIdentified = () => sessionStorage.setItem("attr_identified", "1");

export async function sendIdentify(email: string) {
  try {
    await fetch(API_BASE_URL + "/api/attribution/identify", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-capture-token": CAPTURE_TOKEN },
      body: JSON.stringify({ brandId: BRAND_ID, visitorId: getOrCreateVisitorId(), email }),
      keepalive: true,
    });
  } catch (err) {
    console.warn("Identify failed", err);
  }
  markIdentified();
}

export function goToBooking(url: string = BOOKING_URL) {
  // One consistent event so an existing tag/GTM container can observe outbound booking clicks
  // without this page claiming a confirmed conversion (Zenoti is cross-domain, no callback).
  window.dispatchEvent(new CustomEvent("wink:booking_continue", { detail: { url } }));
  window.open(url, "_blank", "noopener");
}
