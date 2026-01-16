"use client"
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    "small" | "medium" | "large" | "very-large"
  >("small");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 500) {
        setScreenSize("small");
      } else if (width >= 500 && width < 768) {
        setScreenSize("medium");
      } else if (width >= 700 && width < 1024) {
        setScreenSize("large");
      } else {
        setScreenSize("very-large");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
