import Link from "next/link";
import type { Metadata } from "next";
import { SiteFrame } from "../_components/SiteFrame";
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  WhatsappIcon,
  FactoryIcon
} from "../_components/Icons";
import styles from "../_components/page-styles.module.css";
import { createWhatsappLink, siteInfo } from "../siteData";
import { createSeoMetadata } from "../seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact Pritech Engineering",
  description:
    "Contact Pritech Engineering in Ambattur, Chennai for special purpose machines, testing machines, fixtures, tooling, and production engineering enquiries.",
  path: "/contact",
  image: "/facility.png",
  keywords: ["contact Pritech Engineering", "SPM manufacturer Ambattur", "machine builder Chennai"],
});

export default function ContactPage() {
  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
      currentPath="/contact"
      navSection="contact"
    >
      <div className={styles.contactPage}>
        <section className={styles.contactHeroPanel}>
          <div className={styles.contactHeroContent}>
            <p className={styles.eyebrow}>Contact Pritech Engineering</p>
            <h1>Let&apos;s Build the Right Machine for Your Line</h1>
            <p>
              Talk directly with our Ambattur engineering team for SPMs, testing
              machines, fixtures, tooling, and production support requirements.
            </p>
            <div className={styles.contactHeroActions}>
              <Link href={createWhatsappLink()} className={styles.contactPrimaryCta} target="_blank">
                <WhatsappIcon />
                Start WhatsApp Enquiry
              </Link>
              <a href={siteInfo.phoneHref} className={styles.contactSecondaryCta}>
                <PhoneIcon />
                {siteInfo.phone}
              </a>
            </div>
          </div>

          <aside className={styles.contactHeroCard}>
            <span>Fastest Response</span>
            <strong>WhatsApp enquiry</strong>
            <p>Share your component, operation, drawing, or machine requirement.</p>
          </aside>
        </section>

        <section className={styles.contactInfoGrid}>
          <article className={styles.contactInfoCard}>
            <div className={styles.contactInfoIcon}>
              <MapPinIcon />
            </div>
            <div>
              <span>Registered Office</span>
              <h2>Ambattur, Chennai</h2>
              <p>{siteInfo.address}</p>
              <div className={styles.contactMiniNote}>
                <FactoryIcon />
                Ambattur Industrial Estate
              </div>
            </div>
          </article>

          <article className={styles.contactInfoCard}>
            <div className={`${styles.contactInfoIcon} ${styles.contactInfoIconRed}`}>
              <MailIcon />
            </div>
            <div>
              <span>Email Support</span>
              <h2>Send RFQ & Drawings</h2>
              <div className={styles.contactEmailList}>
                {siteInfo.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </div>
              <p>Use email for technical drawings, specifications, and quotation documents.</p>
            </div>
          </article>
        </section>

        <section className={styles.contactProcessPanel}>
          <div>
            <span className={styles.eyebrow}>Response Flow</span>
            <h2>How We Handle Your Enquiry</h2>
            <p>
              Most WhatsApp enquiries are acknowledged within 2 hours during operational
              hours. For detailed SPM projects, we usually share a preliminary technical
              assessment within 48 hours after receiving your RFQ.
            </p>
          </div>

          <div className={styles.contactProcessSteps}>
            <article>
              <strong>01</strong>
              <span>Share Requirement</span>
            </article>
            <article>
              <strong>02</strong>
              <span>Technical Review</span>
            </article>
            <article>
              <strong>03</strong>
              <span>Quote Discussion</span>
            </article>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
