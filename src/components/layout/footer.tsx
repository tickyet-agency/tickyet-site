import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/site-config";

const { footer } = siteConfig;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 md:py-24">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 pr-8">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
            <div className="mt-8 flex gap-4">
              <a href="mailto:hello@tickyet.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                hello@tickyet.com
              </a>
            </div>
          </div>

          {/* Link columns from site-config */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-muted transition-colors hover:text-primary"
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
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted">{footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
