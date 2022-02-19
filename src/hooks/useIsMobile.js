import { useEffect, useState } from "react";

const useIsMobile = (mobileScreenSize = 768) => {
  if (typeof window.matchMedia !== "function") {
    throw Error("matchMedia not supported by browser!");
  }

  const mediaListener = window.matchMedia(`(max-width: ${mobileScreenSize}px)`);
  const [isMobile, setIsMobile] = useState(mediaListener.matches);

  const checkIsMobile = (event) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    // try catch used to fallback for browser compatibility
    try {
      mediaListener.addEventListener("change", checkIsMobile);
    } catch {
      mediaListener.addListener(checkIsMobile);
    }

    return () => {
      try {
        mediaListener.removeEventListener("change", checkIsMobile);
      } catch {
        mediaListener.removeListener(checkIsMobile);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile;
};

export default useIsMobile;
