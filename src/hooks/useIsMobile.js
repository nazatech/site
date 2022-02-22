const isBrowser = typeof window !== "undefined";

const useIsMobile = (mobileScreenSize = 768) => {
  const mediaListener = isBrowser
    ? window?.matchMedia(`(max-width: ${mobileScreenSize}px)`)
    : {};

  const isMobile = mediaListener?.matches;

  return isMobile;
};

export default useIsMobile;
