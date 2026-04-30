import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  AwardIcon,
  ClockIcon,
  HandshakeIcon,
  ShieldIcon,
  TeamIcon,
  WrenchIcon,
} from "../../_components/Icons";
import { SiteFrame } from "../../_components/SiteFrame";
import styles from "../../_components/page-styles.module.css";
import {
  companyPages,
  customers,
  facilityList,
  getCompanyPageBySlug,
  milestones,
} from "../../siteData";

export function generateStaticParams() {
  return companyPages.map((page) => ({ slug: page.slug }));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCompanyPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <SiteFrame
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: page.title },
      ]}
      currentPath={`/company/${slug}`}
      navSection="company"
    >
      {slug === "about-pritech" ? (
        <div className={styles.aboutMinimalLayout}>
          <section className={styles.aboutSection}>
            <div className={styles.aboutEditorialSplit}>
              <div className={styles.aboutEditorialLead}>
                <p className={styles.eyebrow}>Company Profile</p>
                <h1>Precision Built for Production</h1>
                <div className={styles.titleUnderline} />
                <p className={styles.aboutEditorialIntro}>
                  Engineering excellence since 2008, building practical machinery
                  solutions for automotive and industrial manufacturing teams.
                </p>
                <p className={styles.aboutEditorialText}>
                  Pritech Engineering operates from Ambattur, Chennai with a focused
                  approach to special purpose machines, fixtures, tooling, and
                  production support systems.
                </p>
                <Link
                  href="/products/testing-machines"
                  className={styles.aboutProfileCta}
                >
                  Explore Products
                </Link>
              </div>

              <aside className={styles.aboutEditorialPanel}>
                <div className={styles.aboutProfileTable}>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <TeamIcon />
                    </span>
                    <span>Owner</span>
                    <strong>Kadambaraja. B</strong>
                  </div>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <ShieldIcon />
                    </span>
                    <span>Ownership</span>
                    <strong>Proprietor</strong>
                  </div>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <ClockIcon />
                    </span>
                    <span>Location</span>
                    <strong>Ambattur, Chennai</strong>
                  </div>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <WrenchIcon />
                    </span>
                    <span>Total Land</span>
                    <strong>2400 sq.ft</strong>
                  </div>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <WrenchIcon />
                    </span>
                    <span>Built-up Area</span>
                    <strong>1000 sq.ft</strong>
                  </div>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <TeamIcon />
                    </span>
                    <span>Total Staff</span>
                    <strong>19 Members</strong>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className={styles.aboutSection}>
            <div className={styles.aboutExecutiveGrid}>
              <div className={styles.aboutExecutiveContent}>
                <h2>Executive Summary</h2>
                <div className={styles.aboutExecutiveLine} />
                <p>
                  <strong>B. Kadambaraja</strong> is the Proprietor of Pritech Engineering,
                  bringing over 20 years of engineering experience across production,
                  machinery, and manufacturing execution.
                </p>
                <p>
                  Before establishing Pritech Engineering in 2008, he spent 12 years at
                  Redema Customized Machine Tools and contributed to the development of
                  more than 150 special purpose machines for leading automotive manufacturers.
                </p>
                <p>
                  His leadership continues to focus on practical engineering, reliable
                  execution, and long-term customer value on the production floor.
                </p>
              </div>

              <aside className={styles.aboutExecutiveCard}>
                <div className={styles.aboutExecutiveImageWrap}>
                  <Image
                    src="/logo.png"
                    alt="Pritech Engineering logo"
                    width={220}
                    height={220}
                    className={styles.aboutExecutiveLogo}
                  />
                </div>
                <strong>B. Kadambaraja</strong>
                <span className={styles.aboutExecutiveBadge}>Founder &amp; Proprietor</span>
              </aside>
            </div>
          </section>

          <section className={styles.aboutSection}>
            <div className={`${styles.aboutCardHeader} ${styles.aboutCardHeaderCentered}`}>
              <span className={`${styles.aboutCardEyebrow} ${styles.aboutCardEyebrowAccent}`}>
                Strategic Focus
              </span>
              <h2>Strategic Focus</h2>
              <p>
                The business is built around practical engineering, quality-led execution,
                and dependable delivery for production-focused customers.
              </p>
            </div>

            <div className={styles.aboutFocusBand}>
              <article className={styles.aboutFocusCard}>
                <div>
                  <div className={styles.aboutFocusHeading}>
                    <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconGold}`}>
                      <AwardIcon />
                    </span>
                    <h3>Quality-first execution</h3>
                  </div>
                  <p>Engineering standards built to support dependable production output.</p>
                </div>
              </article>
              <article className={styles.aboutFocusCard}>
                <div>
                  <div className={styles.aboutFocusHeading}>
                    <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconBlue}`}>
                      <HandshakeIcon />
                    </span>
                    <h3>Customer trust</h3>
                  </div>
                  <p>Long-term relationships strengthened through reliable project delivery.</p>
                </div>
              </article>
              <article className={styles.aboutFocusCard}>
                <div>
                  <div className={styles.aboutFocusHeading}>
                    <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconRed}`}>
                      <ClockIcon />
                    </span>
                    <h3>Timely delivery</h3>
                  </div>
                  <p>Execution aligned with customer schedules and production commitments.</p>
                </div>
              </article>
              <article className={styles.aboutFocusCard}>
                <div>
                  <div className={styles.aboutFocusHeading}>
                    <span className={`${styles.aboutFocusIcon} ${styles.aboutFocusIconGreen}`}>
                      <ShieldIcon />
                    </span>
                    <h3>Cost-effective engineering</h3>
                  </div>
                  <p>Practical solutions designed to create value without unnecessary complexity.</p>
                </div>
              </article>
            </div>

            <div className={styles.aboutVisionMission}>
              <div className={`${styles.aboutVmBlock} ${styles.aboutVmVision} ${styles.aboutVmBlockSharp}`}>
                <h3>Vision</h3>
                <p>
                  To be a preferred auto components supplier with a turnover target of
                  Rs.10 crores through sustained quality and customer trust.
                </p>
              </div>
              <div className={`${styles.aboutVmBlock} ${styles.aboutVmMission} ${styles.aboutVmBlockSharp}`}>
                <h3>Mission</h3>
                <p>
                  Add value to customers by providing innovative, quality-focused, timely,
                  and cost-effective engineering solutions and services.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          <section className={styles.companyHero}>
            <h1>{page.title}</h1>
            <div className={styles.titleUnderline} />
            <p>{page.intro}</p>
          </section>

          <section className={styles.catalogInfoGrid}>
            <article className={styles.catalogLeadCard}>
              <div className={styles.discoveryIcon}>
                <TeamIcon />
              </div>
              <h2>Company built around execution</h2>
              <p>
                These company pages now focus on operational credibility, engineering
                capability, and production fit instead of generic filler content.
              </p>
            </article>
            <article className={styles.catalogLeadCard}>
              <div className={styles.discoveryIcon}>
                <ShieldIcon />
              </div>
              <h2>Manufacturing-first presentation</h2>
              <p>
                The information is grouped so visitors can understand leadership, facility,
                milestones, and customer trust much faster.
              </p>
            </article>
          </section>

          <section className={styles.companyHighlightStrip}>
            <div className={styles.companyHighlightCard}>
              <span>Engineering mindset</span>
              <strong>Capability presented through execution, not filler content.</strong>
            </div>
            <div className={styles.companyHighlightCard}>
              <span>Factory context</span>
              <strong>Built around machine building, tooling support, and customer delivery.</strong>
            </div>
            <div className={styles.companyHighlightCard}>
              <span>Buyer confidence</span>
              <strong>Clearer sections for leadership, milestones, facility, and customers.</strong>
            </div>
          </section>
        </>
      )}

      {slug === "our-facility" ? (
        <>
          <section className={styles.contentCard}>
            <h2>Manufacturing Facility</h2>
            <div className={styles.facilityGrid}>
              {facilityList.map((item) => (
                <div key={item} className={styles.facilityCard}>
                  <span className={styles.facilityBullet} />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.contentCard}>
            <h2>What This Supports</h2>
            <div className={styles.processGrid}>
              <article className={styles.processCard}>
                <div className={styles.processIcon}>
                  <ShieldIcon />
                </div>
                <h3>Fixture Manufacturing</h3>
                <p>Supports precise work-holding, drilling, and machining workflows.</p>
              </article>
              <article className={styles.processCard}>
                <div className={styles.processIcon}>
                  <TeamIcon />
                </div>
                <h3>SPM Development</h3>
                <p>Enables custom machine build stages from fabrication through assembly.</p>
              </article>
              <article className={styles.processCard}>
                <div className={styles.processIcon}>
                  <ClockIcon />
                </div>
                <h3>Faster Turnaround</h3>
                <p>Consolidated capability helps reduce coordination delay across operations.</p>
              </article>
            </div>
          </section>
        </>
      ) : null}

      {slug === "milestones" ? (
        <section className={styles.contentCard}>
          <h2>Key Milestones</h2>
          <div className={styles.timeline}>
            {milestones.map(([year, text]) => (
              <div key={year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{year}</span>
                <div className={styles.textBlock}>{text}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {slug === "our-customers" ? (
        <>
          <section className={styles.customerStrip}>
            <div className={styles.sectionPanelHeader}>
              <h2>Customer Network</h2>
              <p>Trusted by OEMs, suppliers, and industrial manufacturing partners.</p>
            </div>
            <div className={styles.marqueeWrap}>
              <div className={styles.marqueeTrack}>
                {[...customers, ...customers].map((customer, index) => (
                  <div key={`${customer}-${index}`} className={styles.marqueeItem}>
                    {customer}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.contentCard}>
            <h2>Customer Base</h2>
            <div className={styles.customerGrid}>
              {customers.map((customer) => (
                <div key={customer} className={styles.facilityCard}>
                  <strong>{customer}</strong>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </SiteFrame>
  );
}
