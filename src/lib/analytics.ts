declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type GAParams = Record<
  string,
  string | number | boolean | null | undefined
>;

export function track(event: string, params?: GAParams): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params ?? {});
  }
}
