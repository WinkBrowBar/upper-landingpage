import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BookButton({
  onClick,
  className,
  children = "Book Your Appointment",
}: {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "h-12 rounded-[3px] bg-primary px-8 text-xs font-bold uppercase tracking-[0.1em] text-primary-foreground shadow-none hover:bg-primary/90",
        className,
      )}
    >
      {children}
    </Button>
  );
}
