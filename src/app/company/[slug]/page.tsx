import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AwardIcon,
  ClockIcon,
  FactoryIcon,
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
import { createSeoMetadata } from "../../seo";

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return companyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompanyPageBySlug(slug);

  if (!page) {
    return createSeoMetadata({
      title: "Company",
      description: "Pritech Engineering company information.",
      path: `/company/${slug}`,
    });
  }

  return createSeoMetadata({
    title: page.title,
    description: page.intro,
    path: `/company/${page.slug}`,
    image: page.slug === "our-facility" ? "/facility.png" : page.slug === "milestones" ? "/milestone.png" : "/logo.png",
    keywords: [page.title, "Pritech Engineering company", "SPM manufacturer Chennai"],
  });
}

export default async function CompanyPage({ params }: CompanyPageProps) {
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
                    <span>CEO</span>
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
                      <ShieldIcon />
                    </span>
                    <span>Total Area</span>
                    <strong>1000 sq.ft</strong>
                  </div>
                  <div className={styles.aboutProfileRow}>
                    <span className={styles.aboutProfileRowIcon}>
                      <TeamIcon />
                    </span>
                    <span>Total Staff</span>
                    <strong>6 Members</strong>
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
                  bringing over 25+ years of engineering experience across production,
                  machinery, and manufacturing execution.
                </p>
                <p>
                  Before establishing Pritech Engineering in 2008, he spent 12 years at
                  Redema Customized Machine Tools and contributed to the development of
                  more than 75 special purpose machines for leading automotive manufacturers.
                </p>
                <p>
                  His leadership continues to focus on practical engineering, reliable
                  execution, and long-term customer value on the production floor.
                </p>
              </div>

              <aside className={styles.aboutExecutiveCard}>
                <div className={styles.aboutExecutiveImageWrap}>
                  <Image
                    src="/owner.png"
                    alt="B. Kadambaraja"
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
              <span className={styles.eyebrow}>
                Strategic Focus
              </span>
              <h2>Engineering Excellence</h2>
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
                  <div className={styles.aboutFocusCardContent}>
                    <p>Execution aligned with customer schedules and production commitments.</p>
                  </div>
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
              <div className={`${styles.aboutVmBlock} ${styles.aboutVmVision}`}>
                <div className={styles.aboutVmHeader}>
                  <div className={styles.vmIconWrapper}>
                    <AwardIcon />
                  </div>
                  <h3>Vision</h3>
                </div>
                <p>
                  To become the trusted engineering partner for manufacturing teams by
                  delivering precision-built machinery that drives industrial progress.
                </p>
              </div>
              <div className={`${styles.aboutVmBlock} ${styles.aboutVmMission}`}>
                <div className={styles.aboutVmHeader}>
                  <div className={styles.vmIconWrapper}>
                    <ShieldIcon />
                  </div>
                  <h3>Mission</h3>
                </div>
                <p>
                  To empower production facilities with robust, custom-engineered solutions
                  that enhance operational efficiency and deliver enduring value.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className={styles.aboutMinimalLayout}>
          <section className={styles.aboutSection}>
            <div className={styles.aboutEditorialSplit}>
              <div className={styles.aboutEditorialLead}>
                <p className={styles.eyebrow}>
                  {slug === "our-facility" ? "Production Capability" : 
                   slug === "milestones" ? "Company Journey" : "Industry Trust"}
                </p>
                <h1>{page.title}</h1>
                <div className={styles.titleUnderline} />
                <p className={styles.aboutEditorialIntro}>{page.intro}</p>
                <Link href="/products/testing-machines" className={styles.aboutProfileCta}>
                  Explore Products
                </Link>
              </div>
              <aside className={styles.aboutEditorialPanel}>
                <div className={styles.aboutEditorialImageFrame}>
                <Image
                  src={slug === "our-facility" ? "/facility.png?v=20260531" : 
                       slug === "milestones" ? "/milestone.png?v=20260531" : "/logo.png"}
                  alt={page.title}
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                  unoptimized={slug === "our-facility" || slug === "milestones"}
                  className={`${styles.aboutEditorialImage} ${slug === "our-customers" ? styles.aboutEditorialLogoImage : ""}`}
                />
                </div>
              </aside>
            </div>
          </section>
        </div>
      )}

      {slug === "our-facility" ? (
        <div className={styles.aboutMinimalLayout} style={{ marginTop: "0" }}>
          <section className={styles.aboutSection} style={{ textAlign: 'center' }}>
            <p className={styles.eyebrow}>Our Capability</p>
            <h2 style={{ marginBottom: "12px" }}>Machinery & Infrastructure</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--type-body-lg)', maxWidth: '70ch', margin: '0 auto 40px', lineHeight: '1.85' }}>
              A fully equipped production facility in Ambattur, Chennai, optimized for precision 
              machining, custom SPM fabrication, and large-scale manufacturing support.
            </p>
            <div className={styles.facilityGrid}>
              {facilityList.map((item) => {
                const [name, qty] = item.split(' - ');
                return (
                  <div key={item} className={styles.facilityCard}>
                    <div className={styles.facilityIconWrap}>
                      <FactoryIcon style={{ width: '22px', height: '22px' }} />
                    </div>
                    <div className={styles.facilityItemContent}>
                      <span className={styles.facilityItemName}>{name}</span>
                      {qty && <span className={styles.facilityItemQty}>{qty}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className={styles.aboutSection}>
            <div className={styles.processGrid} style={{ gap: '24px' }}>
              <article className={styles.facilityCard} style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '32px', gap: '20px' }}>
                <div className={styles.facilityIconWrap}>
                  <ShieldIcon style={{ width: '22px', height: '22px' }} />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--type-card-title)', fontWeight: 700 }}>Fixture Manufacturing</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', margin: 0, fontSize: 'var(--type-body)' }}>Supports precise work-holding, drilling, and machining workflows.</p>
                </div>
              </article>
              <article className={styles.facilityCard} style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '32px', gap: '20px' }}>
                <div className={styles.facilityIconWrap}>
                  <TeamIcon style={{ width: '22px', height: '22px' }} />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--type-card-title)', fontWeight: 700 }}>SPM Development</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', margin: 0, fontSize: 'var(--type-body)' }}>Enables custom machine build stages from fabrication through assembly.</p>
                </div>
              </article>
              <article className={styles.facilityCard} style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '32px', gap: '20px' }}>
                <div className={styles.facilityIconWrap}>
                  <ClockIcon style={{ width: '22px', height: '22px' }} />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--type-card-title)', fontWeight: 700 }}>Faster Turnaround</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', margin: 0, fontSize: 'var(--type-body)' }}>Consolidated capability helps reduce coordination delay across operations.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      ) : null}

      {slug === "milestones" ? (
        <div className={styles.aboutMinimalLayout} style={{ marginTop: "0" }}>
          <section className={styles.aboutSection}>
            <h2>Historical Timeline</h2>
            <div style={{ position: 'relative', marginTop: '40px', paddingLeft: '20px' }}>
              <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'var(--border)', opacity: '0.5' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {milestones.map(([year, text]) => (
                  <div key={year} style={{ position: 'relative' }}>
                    <div style={{ 
                      position: 'absolute', 
                      left: '-26px', 
                      top: '12px', 
                      width: '12px', 
                      height: '12px', 
                      background: 'var(--brand-blue)', 
                      borderRadius: '50%',
                      border: '3px solid var(--background)'
                    }} />
                    <div style={{ 
                      background: 'var(--surface)', 
                      padding: '28px', 
                      borderRadius: '0', 
                      border: '1px solid var(--border)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      maxWidth: '600px'
                    }}>
                      <span style={{ 
                        display: 'inline-block', 
                        background: 'var(--brand-blue-deep)', 
                        color: 'white', 
                        padding: '4px 12px', 
                        borderRadius: '0', 
                        fontSize: 'var(--type-small)', 
                        fontWeight: '700',
                        marginBottom: '12px'
                      }}>
                        {year}
                      </span>
                      <p style={{ margin: '0', fontSize: 'var(--type-body-lg)', lineHeight: '1.75', color: 'var(--foreground)', fontWeight: '500' }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : null}

      {/* {slug === "our-customers" ? (
        <div className={styles.aboutMinimalLayout} style={{ marginTop: "0" }}>
          <section className={styles.aboutSection}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {customers.map((customer, idx) => {
                const industrialImages = [
                  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1565172326111-09efdec31f4a?q=80&w=600&auto=format&fit=crop"
                ];
                const imgUrl = industrialImages[idx % industrialImages.length];
                
                return (
                  <div key={customer} className="customer-card-item" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '160px', position: 'relative', background: 'var(--surface-soft)' }}>
                      <Image 
                        src={imgUrl} 
                        alt={customer} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                      />
                      <div style={{ 
                        position: 'absolute', 
                        inset: '0', 
                        background: 'linear-gradient(to bottom, rgba(23, 52, 85, 0.4), rgba(23, 52, 85, 0.8))',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '20px'
                      }}>
                        <strong style={{ color: 'white', fontSize: '1.2rem' }}>{customer}</strong>
                      </div>
                    </div>
                    <div style={{ padding: '24px', flex: '1' }}>
                      <div style={{ marginBottom: '16px' }}>
                        <span style={{ 
                          fontSize: '0.7rem', 
                          fontWeight: '700', 
                          textTransform: 'uppercase', 
                          color: 'var(--brand-blue)', 
                          letterSpacing: '0.05em' 
                        }}>
                          Partnership Focus
                        </span>
                        <p style={{ margin: '4px 0 0', color: 'var(--foreground)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                          Strategic manufacturing support and precision engineering solutions for large-scale production.
                        </p>
                      </div>
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                          Key Solutions Provided:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {['SPMs', 'Fixtures', 'Automation'].map(tag => (
                            <span key={tag} style={{ 
                              fontSize: '0.7rem', 
                              background: 'var(--surface-soft)', 
                              padding: '4px 10px', 
                              borderRadius: '4px', 
                              border: '1px solid var(--border)',
                              color: 'var(--brand-blue-deep)',
                              fontWeight: '600'
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      ) : null} */}
    </SiteFrame>
  );
}
