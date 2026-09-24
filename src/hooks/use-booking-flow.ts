import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/data/site-config";
import { alreadyIdentified, goToBooking, sendIdentify } from "@/lib/attribution";

export interface LightboxState {
  src: string;
  alt: string;
}

export function useBookingFlow() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [pendingUrl, setPendingUrl] = useState(BOOKING_URL);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [consultOpen, setConsultOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Opens the email popup first (once per session), then sends the visitor to `url`.
  function openBooking(url: string) {
    if (alreadyIdentified()) {
      goToBooking(url);
      return;
    }
    setPendingUrl(url);
    setOpen(true);
  }

  // Generic "Book" buttons → Upper East Side services page.
  function handleBook() {
    openBooking(BOOKING_URL);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    setSending(true);
    await sendIdentify(value);
    setSending(false);
    setOpen(false);
    goToBooking(pendingUrl);
  }

  return {
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
  };
}
