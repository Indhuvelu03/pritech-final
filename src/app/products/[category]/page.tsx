import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
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
  if (categorySlug === "handling-assembly") {
    redirect("/products/special-purpose-machines");
  }
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
      leftSidebarWidth={260}
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

      {category.slug === "fixtures-tooling" ? (
        <section className={styles.fixtureCatalogueCard}>
          <div>
            <p className={styles.eyebrow}>Client Drawing Catalogue</p>
            <h2>Fixture Drawing Portfolio</h2>
            <p>
              View the complete Pritech fixture drawing reference PDF, including VMC fixtures,
              rotary fixtures, bush pressing fixtures, pneumatic fixtures, and related tooling examples.
            </p>
          </div>
          <a
            href="/docs/fixture-drawing-a822.pdf"
            className={styles.fixtureCatalogueBtn}
            target="_blank"
            rel="noreferrer"
          >
            Open PDF Catalogue
          </a>
        </section>
      ) : null}

      {/* Product listing */}
      <div className={styles.catProductList}>
        {category.products.map((product) => (
          <article key={product.slug} className={styles.catProductCard}>
            <div className={styles.catProductThumb}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 720px) 100vw, 280px"
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
