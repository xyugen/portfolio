"use client";

import { IconArrowOutward, IconFileDocument } from "@/assets/icons";
import { motion, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/kinetic-headline";

import Link from "next/link";
import { EmailRow } from "@/components/email-row";
import { links, EMAIL, EYEBROW, HEADLINE, BIO } from "@/content/home";
import { SiteFooter } from "@/components/site-footer";

const linkIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  LinkedIn: IconArrowOutward,
  GitHub: IconArrowOutward,
  Resume: IconFileDocument,
};

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-12 px-4 md:py-32 md:px-16 bg-white dark:bg-black sm:items-start">
        <div className="space-y-3">
          <div>
            <motion.p
              className="flex items-center font-mono text-muted-foreground"
              initial={reduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {EYEBROW}
            </motion.p>

            <KineticHeadline text={HEADLINE} />
          </div>

          <motion.p
            className="text-xl"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {BIO}
          </motion.p>

          <motion.div
            className="flex flex-row space-x-6 flex-wrap"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((link) => {
              const Icon = linkIcons[link.label];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="tap-scale group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-muted-foreground transition-[color,scale] duration-150 ease-out hover:text-foreground"
                >
                  {link.label}
                  {Icon && (
                    <Icon className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </Link>
              );
            })}

            <EmailRow email={EMAIL} />
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
