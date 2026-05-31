import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { LayersIcon, SparkIcon } from "../../../_components/Icons";
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
    const movedCategory = productCategories.find((category) =>
      category.products.some((item) => item.slug === productSlug),
    );

    if (movedCategory) {
      redirect(`/products/${movedCategory.slug}/${productSlug}`);
    }

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
      leftSidebarWidth={260}
    >
      {/* Product name + description bar */}
      <div className={styles.pdpHeader}>
        <div className={styles.pdpHeaderMain}>
          <p className={styles.pdpCategoryTag}>{category.title}</p>
          <h1 className={styles.pdpTitle}>{product.name}</h1>
          <p className={styles.pdpDescription}>{product.description || product.cardDescription}</p>
        </div>
      </div>

      {/* Main content: image + specs + enquiry sidebar */}
      <div className={styles.pdpBody}>
        <div className={styles.pdpMainCol}>
          {/* Product image */}
          <div className={styles.pdpImageBlock}>
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={420}
                className={styles.pdpProductImg}
                priority
              />
            ) : (
              <div className={styles.pdpImagePlaceholder}>
                <LayersIcon />
                <span>Product Image Coming Soon</span>
              </div>
            )}
          </div>

          {/* Specification summary */}
          <section className={styles.pdpSpecSection}>
            <div className={styles.pdpSpecIntro}>
              <h2 className={styles.pdpSectionTitle}>Key Specifications</h2>
              <p className={styles.pdpSpecIntroText}>
                A quick view of the most important production and application details for this machine.
              </p>
            </div>
            <div className={styles.pdpSpecGrid}>
              {product.specs.map(([label, value]) => (
                <article key={label} className={styles.pdpSpecCard}>
                  <span className={styles.pdpSpecCardLabel}>{label}</span>
                  <strong className={styles.pdpSpecCardValue}>{value}</strong>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Enquiry sidebar */}
        <aside className={styles.pdpEnquiryPanel}>
          <div className={styles.pdpEnquiryBox}>
            <h3 className={styles.pdpEnquiryTitle}>Request a Quote</h3>
            <p className={styles.pdpEnquiryText}>
              Speak directly with our engineering team about this product and your requirements.
            </p>
            <a
              href={createWhatsappLink(product.name)}
              className={styles.pdpEnquiryWhatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className={styles.pdpRelatedBox}>
              <h4 className={styles.pdpRelatedTitle}>Other {category.title}</h4>
              <ul className={styles.pdpRelatedList}>
                {relatedProducts.slice(0, 5).map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/products/${category.slug}/${item.slug}`}
                      className={styles.pdpRelatedLink}
                    >
                      <SparkIcon />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </SiteFrame>
  );
}
