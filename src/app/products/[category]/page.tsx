import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LayersIcon } from "../../_components/Icons";
import { ProductSidebar } from "../../_components/ProductSidebar";
import { SiteFrame } from "../../_components/SiteFrame";
import styles from "../../_components/page-styles.module.css";
import { getCategoryBySlug, productCategories } from "../../siteData";

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/testing-machines" },
        { label: category.title },
      ]}
      currentPath={`/products/${category.slug}`}
      navSection="products"
      leftSidebar={<ProductSidebar currentCategorySlug={category.slug} />}
      leftSidebarWidth={224}
    >
      {/* Category header bar — compact, no hero */}
      <div className={styles.catPageHeader}>
        <div className={styles.catPageHeaderText}>
          <h1 className={styles.catPageTitle}>{category.title}</h1>
          <p className={styles.catPageSummary}>{category.summary}</p>
        </div>
        <div className={styles.catPageMeta}>
          <span className={styles.catPageMetaBadge}>{category.products.length} Models</span>
          <span className={styles.catPageMetaBadge}>OEM Available</span>
        </div>
      </div>

      {/* Product listing */}
      <div className={styles.catProductList}>
        {category.products.map((product) => (
          <article key={product.slug} className={styles.catProductCard}>
            <div className={styles.catProductThumb}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={240}
                  className={styles.catProductImage}
                />
              ) : (
                <div className={styles.catProductPlaceholder}>
                  <LayersIcon />
                  <span>Image Coming Soon</span>
                </div>
              )}
            </div>

            <div className={styles.catProductContent}>
              <h2 className={styles.catProductName}>{product.name}</h2>
              <p className={styles.catProductDesc}>{product.cardDescription}</p>
              
              <div className={styles.catSpecRow}>
                {product.specs.slice(0, 3).map(([label, value]) => (
                  <div key={label} className={styles.catSpecChip}>
                    <span className={styles.catSpecChipLabel}>{label}</span>
                    <span className={styles.catSpecChipVal}>{value}</span>
                  </div>
                ))}
              </div>

              <div className={styles.catProductFooter}>
                <Link
                  href={`/products/${category.slug}/${product.slug}`}
                  className={styles.catViewBtn}
                >
                  View Machine Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteFrame>
  );
}
