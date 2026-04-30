import Link from "next/link";
import { notFound } from "next/navigation";
import { GaugeIcon, LayersIcon, WrenchIcon } from "../../_components/Icons";
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
      <section className={styles.catalogHero}>
        <div>
          <p className={styles.eyebrow}>Product Family</p>
          <h1 className={styles.productLayoutTitle}>{category.title}</h1>
          <div className={styles.titleUnderline} />
          <p className={styles.catalogHeroText}>{category.summary}</p>
        </div>

        <div className={styles.catalogHeroMeta}>
          <div>
            <strong>{category.products.length}</strong>
            <span>Product models</span>
          </div>
          <div>
            <strong>Custom</strong>
            <span>Manufactured to requirement</span>
          </div>
          <div>
            <strong>OEM</strong>
            <span>Application-focused engineering</span>
          </div>
        </div>
      </section>

      <section className={styles.catalogInfoGrid}>
        <article className={styles.catalogLeadCard}>
          <div className={styles.discoveryIcon}>
            <GaugeIcon />
          </div>
          <h2>Fast route to machine details</h2>
          <p>
            This category page is now focused on helping buyers scan machines quickly,
            compare what is available, and move directly into product-level enquiry.
          </p>
        </article>

        <article className={styles.catalogLeadCard}>
          <div className={styles.discoveryIcon}>
            <WrenchIcon />
          </div>
          <h2>Made for production use</h2>
          <p>
            Every machine family is organized around real manufacturing operations rather
            than generic marketing text, so users can identify fit faster.
          </p>
        </article>
      </section>

      <section className={styles.catalogSpotlight}>
        <div className={styles.catalogSpotlightLead}>
          <p className={styles.eyebrow}>Category Overview</p>
          <h2>Choose the machine based on application, not guesswork.</h2>
          <p>
            Each product below is presented as a direct route to its detail page so users
            can qualify function, fit, and enquiry intent much faster.
          </p>
        </div>
        <div className={styles.catalogSpotlightList}>
          <div className={styles.catalogSpotlightItem}>Production-ready machine options</div>
          <div className={styles.catalogSpotlightItem}>Clear route to specs and enquiry</div>
          <div className={styles.catalogSpotlightItem}>Organized by real manufacturing need</div>
        </div>
      </section>

      <section className={styles.categoryShelf}>
        {category.products.map((product, index) => (
          <article
            key={product.slug}
            className={`${styles.productListCard} ${index === 0 ? styles.productCardActive : ""}`}
          >
            <div className={styles.productListVisual}>
              <div className={styles.sectionIcon}>
                <LayersIcon />
              </div>
            </div>
            <div className={styles.productListBody}>
              <h3>{product.name}</h3>
              <p>{product.cardDescription}</p>
              <div className={styles.productSpecPills}>
                {product.specs.slice(0, 2).map(([label, value]) => (
                  <span key={`${product.slug}-${label}`}>
                    {label}: {value}
                  </span>
                ))}
              </div>
              <Link
                href={`/products/${category.slug}/${product.slug}`}
                className={styles.detailLink}
              >
                {"View Details ->"}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
