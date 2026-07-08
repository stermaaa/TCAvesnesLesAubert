"use client";

import { useEffect, useRef, useState } from "react";

type ApparitionAuScrollProps = {
  children: React.ReactNode;
  className?: string;
};

/** Fait apparaître son contenu (fondu + légère montée) une seule fois, au scroll. */
export function ApparitionAuScroll({
  children,
  className,
}: ApparitionAuScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`apparition ${visible ? "apparition-visible" : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
