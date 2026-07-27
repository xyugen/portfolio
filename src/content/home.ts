export interface SiteLink {
  label: string;
  href: string;
  external: boolean;
}

export const EMAIL = "ariasjorymrenz@gmail.com";
export const EYEBROW = "Software Engineer";
export const HEADLINE = `Hi, I’m Renz.`;
export const BIO =
  "I’m an engineer based in the Philippines who builds across web, mobile, and AI, from the interface someone touches every day to the system quietly doing the work behind it";

export const links: SiteLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ariasjorymrenz", external: true },
  { label: "GitHub", href: "https://github.com/xyugen", external: true },
  { label: "Resume", href: "/JorymAriasRESUME_LATEST.pdf", external: false },
];
