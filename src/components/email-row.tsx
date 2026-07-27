"use client";

import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

export function EmailRow({ email }: { email: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <Link
        href={`mailto:${email}`}
        className="tap-scale inline-flex min-h-10 items-center text-sm font-medium text-muted-foreground transition-[color,scale] duration-150 ease-out underline underline-offset-2 hover:text-foreground"
      >
        {email}
      </Link>
      <CopyButton value={email} />
    </span>
  );
}
