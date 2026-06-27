import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/site-config";

const { footer } = siteConfig;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 md:py-20">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          {/* Brand column */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          {/* Link columns from site-config */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: copyright */}
        <div className="mt-14 border-t border-border pt-6">
          <p className="text-center text-xs text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
