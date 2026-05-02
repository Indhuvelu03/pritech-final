"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./product-sidebar.module.css";
import { productCategories } from "../siteData";
import { ChevronDownIcon, ChevronRightIcon } from "./Icons";

type ProductSidebarProps = {
  currentCategorySlug: string;
  currentProductSlug?: string;
};

export function ProductSidebar({
  currentCategorySlug,
  currentProductSlug,
}: ProductSidebarProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(currentCategorySlug);

  const toggleCategory = (slug: string) => {
    setOpenCategory(prev => (prev === slug ? null : slug));
  };

  return (
    <div className={styles.sidebarWrap}>
      <div className={styles.header}>Products</div>

      {productCategories.map((category) => {
        const isExpanded = openCategory === category.slug;
        const isPageActive = category.slug === currentCategorySlug;

        return (
          <section key={category.slug} className={styles.categoryBlock}>
            <div
              className={`${styles.categoryTitle} ${isExpanded ? styles.categoryCurrent : ""}`}
              onClick={() => toggleCategory(category.slug)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: isPageActive ? 'var(--brand-blue-deep)' : 'inherit', fontWeight: isPageActive ? '700' : 'inherit' }}>
                  {category.title}
                </span>
                {isPageActive && !isExpanded && (
                  <span style={{ fontSize: '0.65rem', color: 'var(--brand-blue)', marginTop: '2px' }}>Current Section</span>
                )}
              </div>
              <ChevronDownIcon className={styles.categoryArrow} />
            </div>

            {isExpanded ? (
              <div className={styles.productLinks}>
                {category.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${category.slug}/${product.slug}`}
                    className={`${styles.productLink} ${
                      currentProductSlug === product.slug ? styles.productCurrent : ""
                    }`}
                  >
                    <span>{product.name}</span>
                    <ChevronRightIcon className={styles.chevron} />
                  </Link>
                ))}
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
