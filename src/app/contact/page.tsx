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
      <div className={styles.aboutMinimalLayout}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutEditorialLead}>
            <p className={styles.eyebrow}>Connect With Us</p>
            <h1 style={{ maxWidth: 'none' }}>Operational Support</h1>
            <div className={styles.titleUnderline} />
            <p className={styles.aboutEditorialIntro}>
              Direct coordination for machine building, fixtures, and technical production support. 
              Our team in Ambattur is ready to discuss your manufacturing requirements.
            </p>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutFocusBand} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Direct Communication */}
            <article className={styles.aboutFocusCard} style={{ minHeight: 'auto', padding: '32px' }}>
              <div className={styles.aboutFocusHeading}>
                <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconGreen}`}>
                  <PhoneIcon />
                </span>
                <h3 style={{ color: 'var(--foreground)' }}>Direct Line</h3>
              </div>
              <div style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
                <div>
                  <span style={{ fontSize: 'var(--type-label)', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Phone</span>
                  <a href={siteInfo.phoneHref} style={{ display: 'block', fontSize: '1.34rem', fontWeight: 700, color: 'var(--brand-blue-deep)', textDecoration: 'none', marginTop: '4px' }}>
                    {siteInfo.phone}
                  </a>
                </div>
                <Link 
                  href={createWhatsappLink()} 
                  className={styles.pdpEnquiryWhatsapp} 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}
                  target="_blank"
                >
                  <WhatsappIcon style={{ width: '18px', height: '18px' }} />
                  WhatsApp Enquiry
                </Link>
              </div>
            </article>

            {/* Registered Office */}
            <article className={styles.aboutFocusCard} style={{ minHeight: 'auto', padding: '32px' }}>
              <div className={styles.aboutFocusHeading}>
                <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconGold}`}>
                  <MapPinIcon />
                </span>
                <h3 style={{ color: 'var(--foreground)' }}>Registered Office</h3>
              </div>
              <div style={{ marginTop: '20px' }}>
                <span style={{ fontSize: 'var(--type-label)', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Location</span>
                <p style={{ color: 'var(--foreground)', fontSize: 'var(--type-body)', lineHeight: '1.8', marginTop: '8px', fontWeight: 500 }}>
                  {siteInfo.address}
                </p>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--brand-blue)', fontSize: 'var(--type-small)', fontWeight: 600 }}>
                  <FactoryIcon style={{ width: '16px', height: '16px' }} />
                  Ambattur Industrial Estate
                </div>
              </div>
            </article>

            {/* Digital Channels */}
            <article className={styles.aboutFocusCard} style={{ minHeight: 'auto', padding: '32px' }}>
              <div className={styles.aboutFocusHeading}>
                <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconRed}`}>
                  <MailIcon />
                </span>
                <h3 style={{ color: 'var(--foreground)' }}>Digital Channels</h3>
              </div>
              <div style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
                <div>
                  <span style={{ fontSize: 'var(--type-label)', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Email Support</span>
                  <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
                    {siteInfo.emails.map(email => (
                      <a key={email} href={`mailto:${email}`} style={{ color: 'var(--brand-red)', fontWeight: 600, fontSize: 'var(--type-body)', textDecoration: 'none' }}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 'var(--type-small)', color: 'var(--text-muted)', lineHeight: '1.75', margin: 0 }}>
                  For technical drawings and RFQs, please use our email channels for documentation transfer.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.aboutSection} style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', marginTop: '40px' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <span className={styles.eyebrow}>Response Guarantee</span>
            <h2 style={{ fontSize: 'var(--type-section-title)', fontWeight: 700, margin: '12px 0', lineHeight: 1.18 }}>How We Work</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--type-body-lg)', lineHeight: '1.85' }}>
              Most WhatsApp enquiries are acknowledged within 2 hours during operational hours (9:00 AM - 7:00 PM). 
              For detailed SPM projects, we typically provide a preliminary technical assessment within 48 hours of receiving your RFQ.
            </p>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
