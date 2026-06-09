import ThemeToggle from "../theme-toggle";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-12 px-8" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="max-w-7xl mx-auto flex flex-col flex-wrap md:flex-row items-start md:items-end justify-between gap-4">
        <Link href="/" className="cursor-none">
          <p className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-foreground/80 to-foreground/40 bg-clip-text text-transparent leading-none">
            renzyx.
          </p>
        </Link>
        <div className="flex flex-row items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Renz Arias
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
