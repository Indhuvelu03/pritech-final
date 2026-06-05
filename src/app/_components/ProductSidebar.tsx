"use client";

import { useEffect, useState, KeyboardEvent, MouseEvent } from "react";
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

  useEffect(() => {
    setOpenCategory(currentCategorySlug);
  }, [currentCategorySlug]);

  return (
    <div className={styles.sidebarWrap}>
      <div className={styles.header}>Products</div>

      {productCategories.map((category) => {
        const isExpanded = openCategory === category.slug;
        const isPageActive = category.slug === currentCategorySlug;

        return (
          <section key={category.slug} className={styles.categoryBlock}>
            <Link
              href={`/products/${category.slug}`}
              className={`${styles.categoryTitle} ${
                isPageActive ? styles.categoryActive : ""
              } ${isExpanded ? styles.categoryExpanded : ""}`}
            >
              <span className={styles.categoryText}>
                <span>{category.title}</span>
                {isPageActive && !isExpanded && (
                  <span className={styles.currentLabel}>Current section</span>
                )}
              </span>
              <ChevronDownIcon
                className={styles.categoryArrow}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenCategory(isExpanded ? null : category.slug);
                }}
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenCategory(isExpanded ? null : category.slug);
                  }
                }}
              />
            </Link>

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
