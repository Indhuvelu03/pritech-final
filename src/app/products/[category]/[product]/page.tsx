import Link from "next/link";
import { notFound } from "next/navigation";
import { GaugeIcon, SparkIcon, WrenchIcon } from "../../../_components/Icons";
import { ProductSidebar } from "../../../_components/ProductSidebar";
import { SiteFrame } from "../../../_components/SiteFrame";
import styles from "../../../_components/page-styles.module.css";
import {
  createWhatsappLink,
  getProductBySlug,
  productCategories,
} from "../../../siteData";

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      product: product.slug,
    })),
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const productEntry = getProductBySlug(categorySlug, productSlug);

  if (!productEntry) {
    notFound();
  }

  const { category, product } = productEntry;
  const relatedProducts = category.products.filter((item) => item.slug !== product.slug);

  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products/testing-machines" },
        { label: category.title, href: `/products/${category.slug}` },
        { label: product.name },
      ]}
      currentPath={`/products/${category.slug}/${product.slug}`}
      navSection="products"
      leftSidebar={
        <ProductSidebar
          currentCategorySlug={category.slug}
          currentProductSlug={product.slug}
        />
      }
      leftSidebarWidth={224}
    >
      <section className={styles.catalogHero}>
        <div>
          <p className={styles.eyebrow}>Product Detail</p>
          <h1 className={styles.productLayoutTitle}>{product.name}</h1>
          <div className={styles.titleUnderline} />
          <p className={styles.catalogHeroText}>{product.cardDescription}</p>
        </div>

        <div className={styles.catalogHeroMeta}>
          <div>
            <strong>{category.title}</strong>
            <span>Category</span>
          </div>
          <div>
            <strong>{product.specs.length}</strong>
            <span>Specification points</span>
          </div>
          <div>
            <strong>Direct</strong>
            <span>WhatsApp enquiry available</span>
          </div>
        </div>
      </section>

      <section className={styles.catalogInfoGrid}>
        <article className={styles.catalogLeadCard}>
          <div className={styles.discoveryIcon}>
            <GaugeIcon />
          </div>
          <h2>Designed for buyer clarity</h2>
          <p>
            Key application, method, industry, and customer-fit details are surfaced first
            so users can qualify the machine quickly.
          </p>
        </article>
        <article className={styles.catalogLeadCard}>
          <div className={styles.discoveryIcon}>
            <SparkIcon />
          </div>
          <h2>Direct-to-enquiry flow</h2>
          <p>
            Once the product fits the requirement, the page leads directly into a simple
            WhatsApp enquiry instead of sending the visitor into a long contact process.
          </p>
        </article>
      </section>

      <section className={styles.detailPanel}>
        <div className={styles.detailMedia}>
          <div className={styles.sectionIcon}>
            <WrenchIcon />
          </div>
        </div>
        <div>
          <p className={styles.detailDescription}>{product.description}</p>

          <div className={styles.productSpecPills}>
            {product.specs.slice(0, 3).map(([label, value]) => (
              <span key={`${product.slug}-pill-${label}`}>
                {label}: {value}
              </span>
            ))}
          </div>

          <table className={styles.specTable}>
            <tbody>
              {product.specs.map(([label, value]) => (
                <tr key={`${product.slug}-${label}`}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <a
            href={createWhatsappLink(product.name)}
            className={styles.detailCta}
            target="_blank"
            rel="noreferrer"
          >
            Enquire About This Product
          </a>
        </div>
      </section>

      <p className={styles.subtleLabel}>Other {category.title}</p>
      <div className={styles.relatedGrid}>
        {relatedProducts.slice(0, 4).map((item) => (
          <Link
            key={item.slug}
            href={`/products/${category.slug}/${item.slug}`}
            className={styles.relatedCard}
          >
            <span className={styles.relatedIcon}>
              <SparkIcon />
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </SiteFrame>
  );
}
