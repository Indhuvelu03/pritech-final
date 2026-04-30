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
  return (
    <div className={styles.sidebarWrap}>
      <div className={styles.header}>Products</div>

      {productCategories.map((category) => {
        const isCurrentCategory = category.slug === currentCategorySlug;

        return (
          <section key={category.slug} className={styles.categoryBlock}>
            <Link
              href={`/products/${category.slug}`}
              className={`${styles.categoryTitle} ${isCurrentCategory ? styles.categoryCurrent : ""}`}
            >
              <span>{category.title}</span>
              <ChevronDownIcon className={styles.categoryArrow} />
            </Link>

            {isCurrentCategory ? (
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
