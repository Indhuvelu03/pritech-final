import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";
import { clientLogos, references } from "../siteData";
import { createSeoMetadata } from "../seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Project References & Client Track Record",
  description:
    "Explore Pritech Engineering project references across special purpose machines, fixtures, brake systems, testing fixtures, and automotive manufacturing support.",
  path: "/references",
  image: "/refernce.png",
  keywords: ["Pritech references", "SPM project references", "automotive machinery clients"],
});

export default function ReferencesPage() {
  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "References" },
      ]}
      currentPath="/references"
      navSection="references"
    >
      <div className={styles.aboutMinimalLayout}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutEditorialSplit}>
            <div className={styles.aboutEditorialLead}>
              <p className={styles.eyebrow}>Our Track Record</p>
              <h1 style={{ maxWidth: "none" }}>Project References</h1>
              <p className={styles.aboutEditorialIntro}>
                A proven track record of delivering special purpose machines,
                fixtures, and manufacturing solutions to leading automotive and industrial
                organizations.
              </p>
              <Link href="/products/testing-machines" className={styles.aboutProfileCta}>
                Explore Products
              </Link>
            </div>

            <aside className={styles.aboutEditorialPanel}>
              <div className={styles.aboutEditorialImageFrame}>
              <Image
                src="/refernce.png?v=20260531"
                alt="Trusted clients reference graphic"
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
                unoptimized
                className={styles.aboutEditorialImage}
              />
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.aboutSection} style={{ marginTop: '40px' }}>
          <p className={styles.eyebrow}>Detailed Track Record</p>
          <h2 style={{ fontSize: "var(--type-section-title)", color: "var(--foreground)", marginBottom: "32px", fontWeight: "700", lineHeight: "1.18" }}>
            Operational Portfolio
          </h2>
          
          <div className={styles.referenceTable}>
            <div className={styles.referenceHead}>
              <span className={styles.referenceId}>#</span>
              <span>Customer</span>
              <span>Solution Delivered</span>
              <span className={styles.referenceSectorHide}>Sector</span>
            </div>
            <div className={styles.referenceBody}>
              {references.map((ref, idx) => (
                <div key={idx} className={styles.referenceBodyRow}>
                  <span className={styles.referenceId}>{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className={styles.referenceCustomer}>{ref[0]}</span>
                  <span className={styles.referenceSolution}>{ref[1]}</span>
                  <span className={styles.referenceSector}>{ref[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.clientLogosSection}>
          <div className={styles.clientLogosHeader}>
            <p className={styles.eyebrow}>Our Clients</p>
            <h2>Trusted by Industry Leaders</h2>
          </div>
          <div className={styles.clientLogosGrid}>
            {clientLogos.map((logo, index) => (
              <div key={logo} className={styles.clientLogoItem}>
                <img src={`/${logo}`} alt={`Client Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection} style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '60px', marginTop: '60px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className={styles.eyebrow}>Technical Excellence</span>
            <h2 style={{ fontSize: 'var(--type-section-title)', fontWeight: 700, margin: '12px 0', lineHeight: '1.2' }}>Quality Commitment</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--type-body-lg)', lineHeight: '1.85' }}>
              Each reference listed represents a partnership built on technical precision and production-oriented results. 
              We maintain long-term relationships with our clients by providing continuous support and iterative improvements to their manufacturing workflows.
            </p>
            {/* Fixture drawing PDF CTA removed */}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
