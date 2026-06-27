import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  chipClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  chipClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted",
          chipClassName ?? "bg-white"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>

      <h2 className="mt-5 font-display text-display-md font-semibold tracking-tight text-secondary">
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
