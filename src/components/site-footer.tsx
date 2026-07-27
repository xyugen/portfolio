"use client";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-muted-foreground/15 py-6">
      <div
        className="mx-auto flex w-full max-w-3xl items-center justify-between px-16"
      >
        <p className="font-mono text-xs text-muted-foreground">
          Signal&rsquo;s still resolving.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Renz Arias
        </p>
      </div>
    </footer>
  );
}
