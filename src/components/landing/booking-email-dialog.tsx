import { X } from "lucide-react";
import type { RefObject } from "react";
import { Button } from "@/components/ui/button";

export function BookingEmailDialog({
  open,
  email,
  onEmailChange,
  sending,
  onSubmit,
  onClose,
  inputRef,
}: {
  open: boolean;
  email: string;
  onEmailChange: (value: string) => void;
  sending: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <Button
        aria-label="Close"
        onClick={onClose}
        variant="ghost"
        className="absolute inset-0 h-full w-full rounded-none bg-ink/80 p-0 hover:bg-ink/80"
      />
      <form
        onSubmit={onSubmit}
        className="relative w-full max-w-xl bg-card px-7 pb-10 pt-12 text-center shadow-2xl md:px-14 md:pb-14 md:pt-14"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 text-muted-foreground hover:bg-transparent hover:text-foreground md:right-5 md:top-5"
        >
          <X />
        </Button>
        <h2
          id="booking-title"
          className="font-editorial text-4xl font-normal text-foreground md:text-5xl"
        >
          Before you book
        </h2>
        <p className="mt-8 text-xl text-muted-foreground md:text-2xl">Welcome!</p>
        <p className="mx-auto mt-9 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-2xl">
          Enter your email to continue.
          <br />
          Already booked? Use your booking email.
          <br />
          New here? This email will be used for your future bookings.
        </p>
        <input
          ref={inputRef}
          id="bookingEmailInput"
          type="email"
          required
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="you@example.com"
          className="mt-10 h-16 w-full rounded-md border border-input bg-transparent px-5 text-lg text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none md:h-20 md:text-2xl"
        />
        <Button
          id="bookingEmailSubmit"
          type="submit"
          disabled={sending}
          className="mt-5 h-16 w-full rounded-md bg-foreground px-6 text-lg font-normal text-background shadow-none hover:bg-foreground/85 md:h-20 md:text-2xl"
        >
          {sending ? "One moment…" : "Continue to booking"}
        </Button>
      </form>
    </div>
  );
}
