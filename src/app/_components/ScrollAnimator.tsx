"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = [
  "section",
  "article",
  "[class*='Card']",
  "[class*='Section']",
  "[class*='Header']",
  "[class*='Block']",
  "[class*='Box']",
  "[class*='Panel']",
].join(",");

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scrollRoot = document.querySelector<HTMLElement>("[data-scroll-root]");
    const scope = scrollRoot ?? document;
    const elements = Array.from(scope.querySelectorAll<HTMLElement>(revealSelector))
      .filter((element) => !element.closest("[data-no-scroll-reveal]"));

    elements.forEach((element, index) => {
      element.dataset.scrollReveal = "pending";
      element.style.setProperty("--scroll-reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.dataset.scrollReveal = "visible";
            observer.unobserve(target);
          }
        });
      },
      {
        root: scrollRoot,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.18,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
