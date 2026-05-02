import Image from "next/image";
import Link from "next/link";
import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";
import { references } from "../siteData";

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
              <Image
                src="/hero-machine.png"
                alt="Industrial Machine"
                width={600}
                height={320}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "320px",
                  objectFit: "cover",
                  borderRadius: "0",
                  border: "1px solid var(--border)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                }}
              />
            </aside>
          </div>
        </section>

        <section className={styles.aboutSection} style={{ marginTop: '40px' }}>
          <p className={styles.eyebrow}>Detailed Track Record</p>
          <h2 style={{ fontSize: "1.6rem", color: "var(--foreground)", marginBottom: "32px", fontWeight: "700" }}>
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

        <section className={styles.aboutSection} style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '60px', marginTop: '60px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className={styles.eyebrow}>Technical Excellence</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '12px 0' }}>Quality Commitment</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              Each reference listed represents a partnership built on technical precision and production-oriented results. 
              We maintain long-term relationships with our clients by providing continuous support and iterative improvements to their manufacturing workflows.
            </p>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
