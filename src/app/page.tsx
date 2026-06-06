import Link from "next/link";
import {
  ClockIcon,
  ComponentIcon,
  FactoryIcon,
  GaugeIcon,
  LayersIcon,
  ShieldIcon,
  SparkIcon,
  TeamIcon,
  WrenchIcon,
} from "./_components/Icons";
import { SiteFrame } from "./_components/SiteFrame";
import styles from "./_components/page-styles.module.css";
import { createWhatsappLink, customers, productCategories } from "./siteData";

const productHooks = [
  {
    title: "Testing Machines",
    text: "Leak, proof, and load validation systems built for repeatable production quality.",
    href: "/products/testing-machines",
    Icon: GaugeIcon,
  },
  {
    title: "Special Purpose Machines",
    text: "Custom SPMs for drilling, grinding, marking, assembly, and controlled operations.",
    href: "/products/special-purpose-machines",
    Icon: FactoryIcon,
  },
  {
    title: "Fixtures & Tooling",
    text: "Production fixtures and tooling components that improve cycle time and repeatability.",
    href: "/products/fixtures-tooling",
    Icon: WrenchIcon,
  },
  {
    title: "Marking Machines",
    text: "Laser and dot-pin marking systems for traceability, identification, and production marking.",
    href: "/products/marking-machines",
    Icon: ComponentIcon,
  },
];

const proofPoints = [
  { value: "150+", label: "Machines built" },
  { value: "14+", label: "Major customers" },
  { value: "2008", label: "Operating since" },
];

const processSteps = [
  {
    title: "Requirement to concept",
    text: "We translate customer process pain-points into practical machine architecture.",
    Icon: SparkIcon,
  },
  {
    title: "Engineering & build",
    text: "Design, machining, fixture development, fabrication, and assembly under one flow.",
    Icon: TeamIcon,
  },
  {
    title: "Testing & delivery",
    text: "Commissioning-ready systems with dependable execution, documentation, and support.",
    Icon: ClockIcon,
  },
];

export default function Home() {
  return (
    <SiteFrame breadcrumbs={[{ label: "Home" }]} currentPath="/" navSection="home">
      <section className={styles.homeHero}>
        <div className={styles.homeHeroGrid}>
          <div className={styles.heroLead}>
            <p className={styles.eyebrow}>Pritech Engineering</p>
            <h1>Precision Machinery. Built for Production.</h1>
            <p className={styles.heroLeadText}>
              Custom testing machines, SPMs, and production tooling engineered 
              for automotive and industrial teams that prioritize shop floor 
              performance and repeatable quality.
            </p>

            <div className={styles.heroButtonRow}>
              <Link href="/products/testing-machines" className={styles.heroPrimary}>
                Browse Product Lines
              </Link>
              <a
                href={createWhatsappLink()}
                className={styles.heroGhost}
                target="_blank"
                rel="noreferrer"
              >
                Discuss Your Requirement
              </a>
            </div>

            <div className={styles.heroStatRow}>
              {proofPoints.map((point) => (
                <div key={point.label} className={styles.heroStat}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualFrameLarge}>
              <img
                src="/hero-machine.png"
                alt="Precision Industrial Testing Machine"
                className={styles.heroImage}
              />
              <div className={styles.visualBadge}>Precision Testing</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productCategoriesSection}>
        <div className={styles.productCategoriesSectionHeader}>
          <p className={styles.eyebrow}>Our Solutions</p>
          <h2>Our Product Categories</h2>
          <p className={styles.sectionDescription}>Specialized machinery solutions for automotive and industrial applications</p>
        </div>

        <div className={styles.productCategoriesGrid}>
          {productHooks.map(({ title, text, href, Icon }) => (
            <Link key={title} href={href} className={styles.productCategoryCard}>
              <div className={styles.productCategoryCardHeader}>
                <div className={styles.productCategoryIconWrap}>
                  <div className={styles.productCategoryIcon}>
                    <Icon />
                  </div>
                  <div className={styles.productCategoryAccent} />
                </div>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
              <span className={styles.productCategoryLink}>View Products -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuredProductsSection}>
        <div className={styles.featuredProductsHeader}>
          <p className={styles.eyebrow}>Our Machines</p>
          <h2>Featured Products</h2>
          <p>Precision-built machines currently deployed across automotive production lines</p>
        </div>

        <div className={styles.featuredProductsGrid}>
          <Link href="/products/testing-machines/air-leak-test-machine" className={styles.featuredProductCard}>
            <div className={styles.featuredProductImage}>
              <img src="/testing machine/Air Leak Testing Machine.jpeg" alt="Air Leak Test Machine" />
            </div>
            <div className={styles.featuredProductInfo}>
              <span className={styles.featuredProductTag}>Testing</span>
              <h3>Air Leak Test Machine</h3>
              <p>Air leak testing for brake master cylinders, callipers, and hydraulic components.</p>
              <span className={styles.featuredProductLink}>View Details -&gt;</span>
            </div>
          </Link>

          <Link href="/products/testing-machines/leak-test-machine" className={styles.featuredProductCard}>
            <div className={styles.featuredProductImage}>
              <img src="/products/leak-test-machine.jpg" alt="Leak Test Machine" />
            </div>
            <div className={styles.featuredProductInfo}>
              <span className={styles.featuredProductTag}>Testing</span>
              <h3>Leak Test Machine</h3>
              <p>Hydraulic and pneumatic leak testing machine for assembled brake components.</p>
              <span className={styles.featuredProductLink}>View Details -&gt;</span>
            </div>
          </Link>

          <Link href="/products/special-purpose-machines/chain-link-machine" className={styles.featuredProductCard}>
            <div className={styles.featuredProductImage}>
              <img src="/general machine/Chain Link Machine.jpeg" alt="Chain Link Machine" />
            </div>
            <div className={styles.featuredProductInfo}>
              <span className={styles.featuredProductTag}>SPM</span>
              <h3>Chain Link Machine</h3>
              <p>Automated joining and pressing of chain links with controlled cycle time.</p>
              <span className={styles.featuredProductLink}>View Details -&gt;</span>
            </div>
          </Link>

          <Link href="/products/special-purpose-machines/cam-nut-loosening-machine" className={styles.featuredProductCard}>
            <div className={styles.featuredProductImage}>
              <img src="/general machine/Cam Nut Loosening Machine.jpeg" alt="Cam Nut Loosening Machine" />
            </div>
            <div className={styles.featuredProductInfo}>
              <span className={styles.featuredProductTag}>SPM</span>
              <h3>Cam Nut Loosening Machine</h3>
              <p>Torque-controlled loosening machine for disassembly operations.</p>
              <span className={styles.featuredProductLink}>View Details -&gt;</span>
            </div>
          </Link>

          <Link href="/products/testing-machines/proof-test-machine" className={styles.featuredProductCard}>
            <div className={styles.featuredProductImage}>
              <img src="/testing machine/proof test machine.jpeg" alt="Proof Test Machine" />
            </div>
            <div className={styles.featuredProductInfo}>
              <span className={styles.featuredProductTag}>Testing</span>
              <h3>Proof Test Machine</h3>
              <p>Load and pressure proof testing for brake shoes and structural automotive parts.</p>
              <span className={styles.featuredProductLink}>View Details -&gt;</span>
            </div>
          </Link>

          <Link href="/products/marking-machines/knuckle-marking-machine" className={styles.featuredProductCard}>
            <div className={styles.featuredProductImage}>
              <img src="/marking machine (laser & DOT pin marking)/knuckle marking machine.jpeg" alt="Knuckle Marking Machine" />
            </div>
            <div className={styles.featuredProductInfo}>
              <span className={styles.featuredProductTag}>Marking</span>
              <h3>Knuckle Marking Machine</h3>
              <p>Dot-peen or stamp marking for steering knuckle traceability.</p>
              <span className={styles.featuredProductLink}>View Details -&gt;</span>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.clientLogosSection}>
        <div className={styles.clientLogosHeader}>
          <p className={styles.eyebrow}>Our Clients</p>
          <h2>Trusted by Industry Leaders</h2>
        </div>
        <div className={styles.clientLogosGrid}>
          {[
            "c1.jpg",
            "c2.jpg",
            "c3.jpg",
            "c4.png",
            "c5.jpg",
            "c6.jpg",
            "c7.jpg",
            "c8.png",
            "c9.jpg",
            "hutson.jpeg",
            "western.jpeg",
          ].map((logo, index) => (
            <div
              key={index}
              className={`${styles.clientLogoItem} ${logo === "c3.jpg" || logo === "c4.png" || logo === "hutson.jpeg" || logo === "western.jpeg" ? styles.clientLogoZoom : ""}`}
            >
              <img src={`/${logo}`} alt={`Client Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Sections below hero - commented out for now

      <section className={styles.homeSignalRow}>
        <article className={styles.signalCard}>
          <span>Complete Build Scope</span>
          <strong>Testing, SPM, fixtures, tooling, handling, and assembly systems.</strong>
        </article>
        <article className={styles.signalCard}>
          <span>Buyer Journey</span>
          <strong>Start from product family, scan machine fit, then move straight to enquiry.</strong>
        </article>
        <article className={styles.signalCard}>
          <span>Manufacturing Focus</span>
          <strong>Designed for OEMs and industrial teams that care about cycle time and repeatability.</strong>
        </article>
      </section>

      <section className={styles.discoveryStrip}>
        <div className={styles.discoveryHeader}>
          <div>
            <p className={styles.eyebrow}>What We Build</p>
            <h2>Start with the machine family you actually need.</h2>
          </div>
          <Link href="/products/testing-machines" className={styles.discoveryLink}>
            View all products
          </Link>
        </div>

        <div className={styles.discoveryGrid}>
          {productHooks.map(({ title, text, href, Icon }) => (
            <Link key={title} href={href} className={styles.discoveryCard}>
              <div className={styles.discoveryIcon}>
                <Icon />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className={styles.discoveryArrow}>{"->"}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.homeSplitSection}>
        <div className={styles.homeSplitLead}>
          <p className={styles.eyebrow}>Built for factories</p>
          <h2>Everything on the page should pull the visitor closer to the right machine.</h2>
          <p>
            Pritech is not a general brochure company. It is a machine-building company.
            So the homepage now emphasizes families, applications, production use, and a
            fast path into product detail.
          </p>
          <Link href="/company/about-pritech" className={styles.detailLink}>
            {"Explore company profile ->"}
          </Link>
        </div>

        <div className={styles.homeSplitStack}>
          {productCategories.map((category) => (
            <article key={category.slug} className={styles.machineMiniCard}>
              <span>{category.title}</span>
              <strong>{category.products.length} products</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.capabilityGrid}>
        <article className={styles.capabilityCard}>
          <span className={styles.capabilityTag}>Custom Machines</span>
          <h3>Special machines for real plant requirements</h3>
          <p>Drilling, grinding, pressing, assembly, marking, testing, and transfer operations.</p>
        </article>
        <article className={styles.capabilityCard}>
          <span className={styles.capabilityTag}>Quality Systems</span>
          <h3>Validation equipment for line-side confidence</h3>
          <p>Leak, proof, force, and pressure-based systems for component verification.</p>
        </article>
        <article className={styles.capabilityCard}>
          <span className={styles.capabilityTag}>Production Support</span>
          <h3>Fixtures and tooling that improve repeatability</h3>
          <p>Work-holding, location, press-fit support, and process-specific tooling solutions.</p>
        </article>
        <article className={styles.capabilityCard}>
          <span className={styles.capabilityTag}>Assembly Flow</span>
          <h3>Handling and assembly systems for faster throughput</h3>
          <p>Lifting, transfer, adhesive application, riveting, and controlled joining solutions.</p>
        </article>
      </section>

      <section className={styles.processBand}>
        <div className={styles.processIntro}>
          <p className={styles.eyebrow}>Execution Flow</p>
          <h2>How a machinery enquiry becomes a delivered system.</h2>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map(({ title, text, Icon }) => (
            <article key={title} className={styles.processCard}>
              <div className={styles.processIcon}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.customerStrip}>
        <div className={styles.sectionPanelHeader}>
          <h2>Trusted by manufacturing leaders</h2>
          <p>Continuous movement across customers, just like a production line.</p>
        </div>

        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {[...customers, ...customers].map((customer, index) => (
              <div key={`${customer}-${index}`} className={styles.marqueeItem}>
                {customer.replace(" India Ltd.", "").replace(" Automotive", "")}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.homeClosing}>
        <div className={styles.homeClosingText}>
          <p className={styles.eyebrow}>Need a machine quote?</p>
          <h2>Share the product or process problem and continue directly on WhatsApp.</h2>
        </div>

        <div className={styles.homeClosingActions}>
          <a
            href={createWhatsappLink("custom machinery requirement")}
            className={styles.contactAction}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Enquiry
          </a>
          <Link href="/products/testing-machines" className={styles.contactActionAccent}>
            Open Product Catalog
          </Link>
        </div>
      </section>

      */}
    </SiteFrame>
  );
}
