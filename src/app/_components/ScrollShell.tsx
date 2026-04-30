"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import styles from "./site-frame.module.css";

export function ScrollShell({
  children,
  shellStyle,
}: {
  children: ReactNode;
  shellStyle?: React.CSSProperties;
}) {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    // Find the mainColumn element inside the pageGrid
    const scrollable = mainEl.querySelector(
      `.${styles.mainColumn}`
    ) as HTMLElement | null;
    if (!scrollable) return;

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = scrollable.scrollTop;

      if (scrollTop > 10 && scrollTop > lastScrollTop) {
        setHeaderHidden(true);
      } else if (scrollTop <= 10) {
        setHeaderHidden(false);
      }

      lastScrollTop = scrollTop;
    };

    scrollable.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollable.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={mainRef}
      className={`${styles.shell} ${headerHidden ? styles.shellHeaderHidden : ""}`}
      style={shellStyle}
    >
      {children}
    </div>
  );
}
