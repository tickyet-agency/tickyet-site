import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  chipClassName?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  chipClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted shadow-sm",
          chipClassName ?? "bg-surface"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>

      <h2 className="mt-6 font-display text-display-md font-semibold tracking-tight text-foreground sm:text-display-lg">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
