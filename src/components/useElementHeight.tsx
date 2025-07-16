"use client"

import { useEffect, useState } from "react";

const useElementHeight = (
  elRef: React.RefObject<HTMLElement | null>,
  fallback = 250
) => {
  const [height, setHeight] = useState(fallback);

  useEffect(() => {
    if (!elRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(elRef.current);

    return () => observer.disconnect();
  }, [elRef]);

  return height;
};

export default useElementHeight;
