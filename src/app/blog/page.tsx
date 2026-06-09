import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="relative flex flex-col items-center gap-6 text-center">
        {/* Glow */}
        <div
          className="absolute w-[400px] h-[300px] rounded-full pointer-events-none animate-glow-breathe"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(43,127,255,0.1), transparent)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight text-gradient-accent">
          Blog
        </h1>
        <p className="relative text-lg text-muted-foreground max-w-md">
          Coming soon. I&apos;ll be writing about engineering, design, and the
          tools I use to build things.
        </p>
        <Link
          href="/"
          className="relative text-sm text-accent-electric hover:underline transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
}
