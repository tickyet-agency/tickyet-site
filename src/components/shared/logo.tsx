import { Check } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <Check className="h-[18px] w-[18px] text-secondary" strokeWidth={3} />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-secondary">
        TICKYET
      </span>
    </span>
  );
}
