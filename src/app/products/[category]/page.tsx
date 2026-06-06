import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { LayersIcon } from "../../_components/Icons";
import { ProductSidebar } from "../../_components/ProductSidebar";
import { SiteFrame } from "../../_components/SiteFrame";
import styles from "../../_components/page-styles.module.css";
import { getCategoryBySlug, productCategories } from "../../siteData";
import { createSeoMetadata } from "../../seo";

type ProductCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return createSeoMetadata({
      title: "Products",
      description:
        "Pritech Engineering product categories for testing machines, special purpose machines, fixtures, tooling, and marking machines.",
      path: `/products/${categorySlug}`,
    });
  }

  return createSeoMetadata({
    title: `${category.title} Manufacturer`,
    description: `${category.summary} Browse ${category.products.length} ${category.title.toLowerCase()} from Pritech Engineering for automotive and industrial production use.`,
    path: `/products/${category.slug}`,
    image: category.products.find((product) => product.image)?.image ?? "/hero-machine.png",
    keywords: [
      category.title,
      `${category.title} Chennai`,
      `${category.title} manufacturer`,
      ...category.products.slice(0, 6).map((product) => product.name),
    ],
  });
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
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
        </div>
      </div>

      {/* Fixture drawing catalogue removed */}

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
