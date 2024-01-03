import { useEffect } from "react";

export const useDimensions = () => {
  const windowWidth = window.innerWidth;
  const isSmallDevice = window.innerWidth < 1380;
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { windowWidth, isSmallDevice };
};
