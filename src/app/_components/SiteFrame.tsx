import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  companyPages,
  createWhatsappLink,
  customers,
  productCategories,
  siteInfo,
  siteNavigationLinks,
} from "../siteData";
import { ChevronDownIcon } from "./Icons";
import { MobileMenu } from "./MobileMenu";
import { ScrollAnimator } from "./ScrollAnimator";
import { ScrollShell } from "./ScrollShell";
import styles from "./site-frame.module.css";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SiteFrameProps = {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  leftSidebar?: ReactNode;
  leftSidebarWidth?: number;
  navSection?: "home" | "products" | "company" | "references" | "contact";
  currentPath?: string;
};

function isCurrentLink(currentPath: string | undefined, href: string) {
  if (!currentPath) {
    return false;
  }

  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

function MainNavigation({
  currentPath,
  navSection,
}: Pick<SiteFrameProps, "currentPath" | "navSection">) {
  return (
    <div className={styles.navWrap}>
      <nav className={styles.navBar} aria-label="Primary">
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={`${styles.navLink} ${navSection === "home" ? styles.navCurrent : ""}`}
            >
              Home
            </Link>
          </li>

          <li className={styles.navItem}>
            <button
              type="button"
              className={`${styles.dropdownToggle} ${navSection === "products" ? styles.navCurrent : ""}`}
              aria-label="Products menu"
            >
              Products <ChevronDownIcon className={styles.caret} />
            </button>
            <div className={styles.dropdown}>
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className={
                    isCurrentLink(currentPath, `/products/${category.slug}`)
                      ? styles.dropdownCurrent
                      : ""
                  }
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </li>

          <li className={styles.navItem}>
            <button
              type="button"
              className={`${styles.dropdownToggle} ${navSection === "company" ? styles.navCurrent : ""}`}
              aria-label="Company menu"
            >
              Company <ChevronDownIcon className={styles.caret} />
            </button>
            <div className={styles.dropdown}>
              {companyPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/company/${page.slug}`}
                  className={
                    isCurrentLink(currentPath, `/company/${page.slug}`)
                      ? styles.dropdownCurrent
                      : ""
                  }
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </li>

          <li className={styles.navItem}>
            <Link
              href="/references"
              className={`${styles.navLink} ${navSection === "references" ? styles.navCurrent : ""}`}
            >
              References
            </Link>
          </li>
        </ul>

        <div className={styles.navAction}>
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
}

function RightSidebar({ currentPath }: { currentPath?: string }) {
  return (
    <div className={styles.rightSidebarInner}>
      <section className={styles.sidebarBlock}>
        <div className={styles.sidebarTitle}>Site Navigation</div>
        <div className={styles.sidebarList}>
          {siteNavigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isCurrentLink(currentPath, item.href) ? styles.sidebarListCurrent : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.sidebarBlock}>
        <div className={styles.sidebarTitle}>Contact Us</div>
        <div className={styles.sidebarBody}>
          <strong>{siteInfo.phone}</strong>
          {siteInfo.emails.map((email) => (
            <a key={email} href={`mailto:${email}`}>
              {email}
            </a>
          ))}

          <a
            href={createWhatsappLink()}
            className={styles.sideButtonAccent}
            target="_blank"
            rel="noreferrer"
          >
            &gt;&gt; Enquire Now
          </a>
        </div>
      </section>

      <section className={styles.sidebarBlock}>
        <div className={styles.sidebarTitle}>Our Clients</div>
        <div className={styles.sidebarBody}>
          <p>{customers.slice(0, 7).join(" · ")}</p>
        </div>
      </section>
    </div>
  );
}

export function SiteFrame({
  breadcrumbs,
  children,
  leftSidebar,
  leftSidebarWidth = 0,
  navSection,
  currentPath,
}: SiteFrameProps) {
  return (
    <ScrollShell shellStyle={{ ["--left-width" as string]: `${leftSidebarWidth}px` }}>
      <ScrollAnimator />
      <div className={styles.stickyHeaderWrap}>
        <header className={styles.header}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="Pritech Engineering Logo"
              width={80}
              height={80}
              className={styles.logoImage}
            />
            <div>
              <p className={styles.brand}>{siteInfo.name}</p>
              <p className={styles.tagline}>{siteInfo.tagline}</p>
            </div>
          </Link>

          <div className={styles.headerInfo}>
            <a href={siteInfo.phoneHref} className={styles.headerPhone}>
              {siteInfo.phone}
            </a>
            <div className={styles.headerInfoRow}>
              {siteInfo.emails.map((email, index) => (
                <span key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                  {index < siteInfo.emails.length - 1 ? " | " : ""}
                </span>
              ))}
            </div>
            <div className={styles.headerInfoRow}>{siteInfo.address}</div>
          </div>
        </header>

        <MainNavigation currentPath={currentPath} navSection={navSection} />
        <MobileMenu />
      </div>

      <div className={styles.breadcrumbWrap}>
        <div className={styles.breadcrumb}>
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`}>
              {item.href && index < breadcrumbs.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <strong>{item.label}</strong>
              )}
              {index < breadcrumbs.length - 1 ? " > " : ""}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.pageGrid}>
        {leftSidebar ? (
          <aside className={styles.leftSidebar} aria-label="Section navigation">
            <div className={styles.leftSidebarInner}>{leftSidebar}</div>
          </aside>
        ) : (
          <div />
        )}

        <main className={styles.mainColumn} data-scroll-root>
          <div className={styles.mainInner}>{children}</div>
          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <span>(c) 2024 Pritech Engineering. All rights reserved.</span>
              <div className={styles.footerLinks}>
                <Link href="/">Home</Link>
                <Link href="/company/about-pritech">About Us</Link>
                <Link href="/products/testing-machines">Products</Link>
                <Link href="/references">References</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </footer>
        </main>

        <aside className={styles.rightSidebar} aria-label="Site sidebar">
          <RightSidebar currentPath={currentPath} />
        </aside>
      </div>

    </ScrollShell>
  );
}
