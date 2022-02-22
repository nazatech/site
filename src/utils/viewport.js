export const isMobile = window?.matchMedia(`(max-width: 768px)`)?.matches;
export const isTablet = window?.matchMedia(
  `(min-width: 768px) and (max-width: 1023px)`
).matches;
export const isDesktop = window?.matchMedia(`(min-width: 1024px)`)?.matches;
