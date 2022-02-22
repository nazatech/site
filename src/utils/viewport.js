const isBrowser = typeof window !== "undefined";

export const isMobile = isBrowser
  ? window?.matchMedia(`(max-width: 768px)`)?.matches
  : false;
export const isTablet = isBrowser
  ? window?.matchMedia(`(min-width: 768px) and (max-width: 1023px)`).matches
  : false;
export const isDesktop = isBrowser
  ? window?.matchMedia(`(min-width: 1024px)`)?.matches
  : false;
