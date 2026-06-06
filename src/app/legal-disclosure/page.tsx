import type { Metadata } from "next";
import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";
import { createSeoMetadata } from "../seo";
import { siteInfo } from "../siteData";

export const metadata: Metadata = createSeoMetadata({
  title: "Legal Disclosure",
  description:
    "Legal and business contact details for Pritech Engineering, Ambattur, Chennai.",
  path: "/legal-disclosure",
});

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
