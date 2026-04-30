import { SiteFrame } from "../_components/SiteFrame";
import styles from "../_components/page-styles.module.css";

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
      ]}
      currentPath="/privacy-policy"
    >
      <section className={styles.contentCard}>
        <h2>Privacy Policy</h2>
        <p className={styles.textBlock}>
          Pritech Engineering uses contact details shared through phone, email, or WhatsApp
          only for responding to business enquiries, quotations, support discussions, and
          related project communication. We do not use this information for unrelated
          marketing activities.
        </p>
      </section>
    </SiteFrame>
  );
}
