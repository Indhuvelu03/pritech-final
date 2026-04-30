"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { companyPages, productCategories } from "../siteData";
import { CloseIcon, MenuIcon } from "./Icons";
import styles from "./mobile-menu.module.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.mobileBar}>
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <MenuIcon />
          Menu
        </button>

        <Link href="/contact" className={styles.accentItem}>
          Contact
        </Link>
      </div>

      {isOpen ? (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />

          <aside className={styles.panel} aria-label="Mobile navigation">
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                <strong>Navigation</strong>
                <span>Browse pages, company info, and products</span>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className={styles.panelBody}>
              <section className={styles.group}>
                <p className={styles.groupLabel}>Main</p>
                <div className={styles.list}>
                  <Link href="/" className={styles.item} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link href="/references" className={styles.item} onClick={() => setIsOpen(false)}>
                    References
                  </Link>
                  <Link href="/contact" className={styles.accentItem} onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </div>
              </section>

              <section className={styles.group}>
                <p className={styles.groupLabel}>Company</p>
                <div className={styles.list}>
                  {companyPages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/company/${page.slug}`}
                      className={`${styles.item} ${styles.subItem}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              </section>

              <section className={styles.group}>
                <p className={styles.groupLabel}>Products</p>
                <div className={styles.list}>
                  {productCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/products/${category.slug}`}
                      className={`${styles.item} ${styles.subItem}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}
