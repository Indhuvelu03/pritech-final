"use client";

import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    // Find the mainColumn element inside the pageGrid
    const scrollable = mainEl.querySelector(
      `.${styles.mainColumn}`
    ) as HTMLElement | null;
    if (!scrollable) return;

    let lastScrollTop = 0;
    let lastToggleScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = scrollable.scrollTop;
      const delta = scrollTop - lastScrollTop;
      const distanceFromToggle = Math.abs(scrollTop - lastToggleScrollTop);

      if (scrollTop <= 12) {
        setHeaderHidden(false);
        lastToggleScrollTop = scrollTop;
      } else if (delta > 8 && scrollTop > 90 && distanceFromToggle > 32) {
        setHeaderHidden(true);
        lastToggleScrollTop = scrollTop;
      } else if (delta < -8 && distanceFromToggle > 32) {
        setHeaderHidden(false);
        lastToggleScrollTop = scrollTop;
      }

      lastScrollTop = scrollTop;
    };

    scrollable.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollable.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const scrollable = mainEl.querySelector(
      `.${styles.mainColumn}`
    ) as HTMLElement | null;
    if (!scrollable) return;

    setHeaderHidden(false);
    scrollable.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

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
