"use client";
import { track } from "@/lib/analytics";

export default function TrackLink(props: {
  href: string;
  className?: string;
  children: React.ReactNode;
  event: string;
  params?: Record<string, any>;
  target?: string;
}) {
  const { href, className, children, event, params, target } = props;
  return (
    <a
      href={href}
      className={className}
      target={target}
      onClick={() => track(event, params)}
    >
      {children}
    </a>
  );
}
