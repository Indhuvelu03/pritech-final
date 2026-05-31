"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { companyPages, productCategories, siteInfo } from "../siteData";
import { CloseIcon, MenuIcon, ChevronDownIcon } from "./Icons";
import styles from "./mobile-menu.module.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

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
          <MenuIcon strokeWidth={2.2} />
        </button>

        <Link href="/contact" className={styles.contactBtn} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>

      {isOpen ? (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />

          <aside className={styles.panel} aria-label="Mobile navigation">
            <div className={styles.panelHeader}>
              <Link href="/" className={styles.panelLogo} onClick={() => setIsOpen(false)}>
                <div className={styles.logoBox}>
                  <Image src="/logo.png" alt="Logo" width={32} height={32} className={styles.miniLogo} />
                </div>
                <div className={styles.panelLogoText}>
                  <strong>{siteInfo.name}</strong>
                  <span>{siteInfo.tagline}</span>
                </div>
              </Link>

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
              <div className={styles.primaryLinks}>
                <Link href="/" className={styles.primaryItem} onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/references" className={styles.primaryItem} onClick={() => setIsOpen(false)}>
                  References
                </Link>
                <Link href="/contact" className={styles.primaryItem} onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>

              <section className={styles.group}>
                <button
                  className={styles.groupHeader}
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <p className={styles.groupLabel}>Our Products</p>
                  <ChevronDownIcon 
                    className={`${styles.groupArrow} ${isProductsOpen ? styles.arrowOpen : ""}`} 
                  />
                </button>
                {isProductsOpen && (
                  <div className={styles.productList}>
                    {productCategories.map((category) => (
                      <div key={category.slug} className={styles.categoryGroup}>
                        <button
                          className={styles.categoryHeader}
                          onClick={() => setOpenCategory(openCategory === category.slug ? null : category.slug)}
                        >
                          <span>{category.title}</span>
                          <ChevronDownIcon 
                            className={`${styles.categoryArrow} ${openCategory === category.slug ? styles.arrowOpen : ""}`} 
                          />
                        </button>
                        
                        {openCategory === category.slug && (
                          <div className={styles.subProductList}>
                            <Link
                              href={`/products/${category.slug}`}
                              className={styles.viewAllLink}
                              onClick={() => setIsOpen(false)}
                            >
                              View All {category.title}
                            </Link>
                            {category.products.map((product) => (
                              <Link
                                key={product.slug}
                                href={`/products/${category.slug}/${product.slug}`}
                                className={styles.subProductItem}
                                onClick={() => setIsOpen(false)}
                              >
                                {product.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className={styles.group}>
                <button
                  className={styles.groupHeader}
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                >
                  <p className={styles.groupLabel}>Company Information</p>
                  <ChevronDownIcon 
                    className={`${styles.groupArrow} ${isCompanyOpen ? styles.arrowOpen : ""}`} 
                  />
                </button>
                {isCompanyOpen && (
                  <div className={styles.compactList}>
                    {companyPages.map((page) => (
                      <Link
                        key={page.slug}
                        href={`/company/${page.slug}`}
                        className={styles.compactItem}
                        onClick={() => setIsOpen(false)}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                )}
              </section>

              <div className={styles.panelFooter}>
                <p className={styles.footerLabel}>Quick Contact</p>
                <a href={siteInfo.phoneHref} className={styles.footerContactLink}>
                  {siteInfo.phone}
                </a>
                <div className={styles.footerSocials}>
                  {siteInfo.emails.slice(0, 1).map(email => (
                    <span key={email}>{email}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}
