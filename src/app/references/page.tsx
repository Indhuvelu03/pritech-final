import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";
import { customers, references } from "../siteData";

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
      <section className={styles.companyHero}>
        <h1>References</h1>
        <div className={styles.titleUnderline} />
        <p>
          Pritech Engineering has successfully delivered special purpose machines,
          fixtures, and manufacturing solutions to leading automotive and industrial
          organizations.
        </p>
      </section>

      <section className={styles.catalogInfoGrid}>
        <article className={styles.catalogLeadCard}>
          <h2>Execution references, not generic claims</h2>
          <p>
            This page is now positioned as proof of delivery across machine categories,
            customer types, and production applications.
          </p>
        </article>
        <article className={styles.catalogLeadCard}>
          <h2>Quick buyer validation</h2>
          <p>
            Visitors can see which companies, machine types, and solution segments align
            with their own manufacturing context.
          </p>
        </article>
      </section>

      <section className={styles.referenceIntroBand}>
        <div className={styles.referenceIntroLead}>
          <p className={styles.eyebrow}>Proof of Delivery</p>
          <h2>References should help buyers validate fit quickly.</h2>
          <p>
            This page now prioritizes customer proof, machine context, and a clearer scan
            path across project types instead of a plain data dump.
          </p>
        </div>
        <div className={styles.referenceStats}>
          <div>
            <strong>{references.length}</strong>
            <span>Listed project references</span>
          </div>
          <div>
            <strong>{customers.length}+</strong>
            <span>Recognized customer names</span>
          </div>
        </div>
      </section>

      <section className={styles.customerStrip}>
        <div className={styles.sectionPanelHeader}>
          <h2>Customer Names In Motion</h2>
          <p>Industrial trust should feel active, not static.</p>
        </div>
        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {[...customers, ...customers].map((customer, index) => (
              <div key={`${customer}-ref-${index}`} className={styles.marqueeItem}>
                {customer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contentCard}>
        <h2>Selected Project References</h2>
        <div className={styles.referenceTable}>
          <div className={styles.referenceHead}>
            <span>Sl. No</span>
            <span>Customer</span>
            <span>Machine / Project</span>
            <span>Segment</span>
          </div>
          {references.map(([customer, machine, segment], index) => (
            <div key={`${customer}-${machine}`} className={styles.referenceBodyRow}>
              <span>{index + 1}</span>
              <span>{customer}</span>
              <span>{machine}</span>
              <span>{segment}</span>
            </div>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
