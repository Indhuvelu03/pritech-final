import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";
import { siteInfo } from "../siteData";

export default function LegalDisclosurePage() {
  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Legal Disclosure" },
      ]}
      currentPath="/legal-disclosure"
    >
      <section className={styles.contentCard}>
        <h2>Legal Disclosure</h2>
        <p className={styles.textBlock}>
          Business Name: {siteInfo.name}
          <br />
          Address: {siteInfo.address}
          <br />
          Phone: {siteInfo.phone}
          <br />
          Email: {siteInfo.emails.join(" | ")}
        </p>
      </section>
    </SiteFrame>
  );
}
