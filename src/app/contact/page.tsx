import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";
import { createWhatsappLink, productCategories, siteInfo } from "../siteData";

export default function ContactPage() {
  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
      currentPath="/contact"
    >
      <section className={styles.companyHero}>
        <h1>Contact Us</h1>
        <div className={styles.titleUnderline} />
        <p>
          Contact is intentionally simple. Choose WhatsApp for the fastest response or use
          phone and email for direct coordination.
        </p>
      </section>

      <section className={styles.contentCard}>
        <div className={styles.twoColumn}>
          <article className={styles.contactCard}>
            <h2>{siteInfo.name}</h2>
            <p>B. Kadambaraja</p>
            <p>{siteInfo.address}</p>
            <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
            {siteInfo.emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
          </article>

          <article className={styles.contactCard}>
            <h2>Quick WhatsApp Enquiry</h2>
            <p>Select a product group and continue directly in WhatsApp.</p>
            <div className={styles.contactActionGrid}>
              <a
                href={createWhatsappLink()}
                className={styles.contactAction}
                target="_blank"
                rel="noreferrer"
              >
                General Enquiry
              </a>
              {productCategories.slice(0, 3).map((category, index) => (
                <a
                  key={category.slug}
                  href={createWhatsappLink(category.title)}
                  className={`${styles.contactAction} ${
                    index === 2 ? styles.contactActionAccent : ""
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>
    </SiteFrame>
  );
}
