import Link from "next/link";
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
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Phone</span>
                  <a href={siteInfo.phoneHref} style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-blue-deep)', textDecoration: 'none', marginTop: '4px' }}>
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
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Location</span>
                <p style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '8px', fontWeight: 500 }}>
                  {siteInfo.address}
                </p>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--brand-blue)', fontSize: '0.85rem', fontWeight: 600 }}>
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
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Email Support</span>
                  <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
                    {siteInfo.emails.map(email => (
                      <a key={email} href={`mailto:${email}`} style={{ color: 'var(--brand-red)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  For technical drawings and RFQs, please use our email channels for documentation transfer.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.aboutSection} style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', marginTop: '40px' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <span className={styles.eyebrow}>Response Guarantee</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '12px 0' }}>How We Work</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              Most WhatsApp enquiries are acknowledged within 2 hours during operational hours (9:00 AM - 7:00 PM). 
              For detailed SPM projects, we typically provide a preliminary technical assessment within 48 hours of receiving your RFQ.
            </p>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
