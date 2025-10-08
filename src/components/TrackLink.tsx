"use client";

import { track, type GAParams } from "@/lib/analytics";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  event: string;
  params?: GAParams;
  target?: string;
  rel?: string;
};

export default function TrackLink({
  href,
  className,
  children,
  event,
  params,
  target,
  rel,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => track(event, params)}
    >
      {children}
    </a>
  );
}
