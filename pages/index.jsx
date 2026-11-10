import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "@/src/components/Contact";
import styles from "@/styles/Portfolio.module.css";

const projects = [
  {
    name: "Smyrna Soccer",
    category: "Community application",
    description:
      "A team communication app with channel-based conversations, messaging, and member presence. Built with Next.js and Supabase.",
    image: "smyrnasoccer.png",
    live: "https://smyrnasoccer.com",
    source: "https://github.com/fassiliss/sunday-soccer",
  },
  {
    name: "Ajora Kitchen",
    category: "Restaurant website",
    description:
      "A responsive restaurant website that brings Ethiopian cuisine, menu browsing, and restaurant information into one clear experience.",
    image: "ajorakitchen.png",
    live: "https://www.ajorakitchen.org",
    source: "https://github.com/fassiliss/ajorakitchen-nextjs",
  },
  {
    name: "AutoShop",
    category: "Vehicle discovery",
    description:
      "A Next.js dealership website with a browsable vehicle inventory and dedicated vehicle pages, designed for desktop and mobile.",
    image: "car-shop.png",
    live: "https://car-shop-nextjs-chi.vercel.app",
    source: "https://github.com/fassiliss/car-shop-nextjs",
  },
];
const capabilities = [
  {
    number: "01",
    title: "Full-stack development",
    text: "Connecting usable interfaces to the data and workflows behind them.",
    skills: [
      "React & Next.js",
      "JavaScript & TypeScript",
      "Node.js & REST APIs",
      "PostgreSQL & Supabase",
    ],
  },
  {
    number: "02",
    title: "Application security",
    text: "Building access boundaries into application logic and database policies.",
    skills: [
      "Authentication & onboarding",
      "Role-based authorization",
      "Row-level security",
      "Signed webhook verification",
    ],
  },
  {
    number: "03",
    title: "Cloud security",
    text: "A focus on identity, configuration, and responsible handling of cloud credentials.",
    skills: [
      "Server-only secrets",
      "Cloud identity & access",
      "Environment configuration",
      "Launch readiness & recovery planning",
    ],
  },
];

export default function Index() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    try {
      setDark(localStorage.getItem("portfolio-theme") !== "light");
    } catch {}
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {}
  }
  return (
    <div className={styles.site} data-theme={dark ? "dark" : "light"}>
      <Head>
        <title>Fassil Tsegaye | Full-Stack Development & Security</title>
        <meta
          name="description"
          content="Fassil Tsegaye — full-stack developer focused on cybersecurity and cloud security. Explore SecureCycle Technologies, selected projects, and credentials."
        />
        <meta
          property="og:title"
          content="Fassil Tsegaye | Full-Stack Development & Security"
        />
        <meta
          property="og:description"
          content="Full-stack development with a focus on cybersecurity and cloud security. Featuring SecureCycle Technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fassiltsegaye.com" />
        <link rel="canonical" href="https://www.fassiltsegaye.com" />
      </Head>
      <a className={styles.skip} href="#home">
        Skip to content
      </a>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a
            className={styles.brand}
            href="#home"
            aria-label="Fassil Tsegaye, home"
          >
            <span className={styles.monogram}>
              FT<span>.</span>
            </span>
            <span>Fassil Tsegaye</span>
          </a>
          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document.getElementById("menu-toggle").focus();
              }
            }}
          >
            {[
              ["#featured", "Featured project"],
              ["#portfolio", "Work"],
              ["#services", "Capabilities"],
              ["#about", "About"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className={styles.navActions}>
            <button
              className={styles.themeButton}
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
            </button>
            <button
              id="menu-toggle"
              className={styles.menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section
          id="home"
          tabIndex={-1}
          className={`${styles.wrap} ${styles.hero}`}
          aria-labelledby="hero-title"
        >
          <div>
            <p className={styles.eyebrow}>
              Developer / Security-minded builder
            </p>
            <h1 id="hero-title">
              Full-stack development.
              <br />
              <span>Security at the core.</span>
            </h1>
            <p className={styles.intro}>
              I’m Fassil Tsegaye, a full-stack developer focused on
              cybersecurity and cloud security. I build web applications with
              thoughtful interfaces, connected workflows, and deliberate access
              controls.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#featured">
                Explore SecureCycle <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.secondary} href="#contact">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className={styles.heroLocation}>
              Based in Smyrna, Tennessee <span aria-hidden="true">·</span> Open
              to opportunities
            </p>
          </div>
          <aside className={styles.heroAside} aria-label="Current focus">
            <span className={styles.asideLabel}>THE INTERSECTION</span>
            <div className={styles.intersection}>
              <span>Build.</span>
              <span>Protect.</span>
              <span>Connect.</span>
            </div>
            <div className={styles.asideFooter}>
              <span className={styles.dot} /> Full-stack × Cybersecurity × Cloud
            </div>
          </aside>
        </section>
        <section
          id="featured"
          className={`${styles.wrap} ${styles.section}`}
          aria-labelledby="featured-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 / Featured case study</p>
            <span className={styles.muted}>
              Real-world workflows. Explicit access boundaries.
            </span>
          </div>
          <article className={styles.caseStudy}>
            <div className={styles.caseTop}>
              <div>
                <span className={styles.status}>
                  <span className={styles.dot} /> In development
                </span>
                <h2 id="featured-title">
                  SecureCycle
                  <br />
                  Technologies<span className={styles.accent}>.</span>
                </h2>
                <p className={styles.caseLead}>
                  Connecting IT asset recovery, customer access, and internal
                  operations.
                </p>
              </div>
              <div className={styles.caseContext}>
                <p className={styles.eyebrow}>The problem</p>
                <p>
                  IT asset recovery involves pickup requests, equipment
                  handling, and sensitive records. Customers and internal teams
                  need connected workflows with access appropriate to their
                  role.
                </p>
                <p className={styles.eyebrow}>My role / Full-stack developer</p>
                <p>
                  I’m developing the public intake experience, customer portal,
                  and internal operations application, with authentication and
                  authorization across these areas.
                </p>
              </div>
            </div>
            <div className={styles.architecture}>
              <div className={styles.architectureLabel}>
                <span>System design</span>
                <span>Next.js · TypeScript · Supabase</span>
              </div>
              <ol className={styles.flow} aria-label="SecureCycle workflow">
                <li>
                  <span>01</span>
                  <strong>Public intake</strong>
                  <small>Pickup requests</small>
                </li>
                <li>
                  <span>02</span>
                  <strong>Customer portal</strong>
                  <small>Authenticated access</small>
                </li>
                <li>
                  <span>03</span>
                  <strong>Internal operations</strong>
                  <small>Role-based workflows</small>
                </li>
                <li>
                  <span>04</span>
                  <strong>Data layer</strong>
                  <small>Supabase / PostgreSQL</small>
                </li>
              </ol>
              <p>
                Next.js handles the application experience; Supabase supports
                identity and data. Server-side permission checks and database
                row-level policies define access boundaries.
              </p>
            </div>
            <div className={styles.caseDetails}>
              <div>
                <h3>Implemented in the codebase</h3>
                <ul className={styles.checkList}>
                  <li>Public pickup intake and customer onboarding flows.</li>
                  <li>
                    Internal role permissions and assigned-technician access
                    checks.
                  </li>
                  <li>
                    Asset processing and certificate workflows documented in the
                    repository.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Security considerations</h3>
                <ul className={styles.checkList}>
                  <li>
                    Active-account checks and database row-level policies.
                  </li>
                  <li>
                    Server-only credentials and conservative response headers.
                  </li>
                  <li>Signed webhooks for Stripe test invoice payments.</li>
                </ul>
              </div>
            </div>
            <div className={styles.caseNote}>
              <strong>Current stage</strong>
              <p>
                Implementation is ongoing. Stripe payments are test-mode only.
                Production configuration, backup and recovery planning, and
                end-to-end launch checks remain launch requirements.
              </p>
              <a href="#contact">
                Ask about the project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </section>
        <section
          id="portfolio"
          className={`${styles.wrap} ${styles.section}`}
          aria-labelledby="work-title"
        >
          <p className={styles.eyebrow}>02 / Selected work</p>
          <div className={styles.titleRow}>
            <h2 id="work-title">Built for different needs.</h2>
            <a
              className={styles.textLink}
              href="https://github.com/fassiliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article key={project.name} className={styles.project}>
                <div className={styles.projectImage}>
                  <Image
                    src={`/assets/images/portfolio/${project.image}`}
                    alt={`${project.name} website preview`}
                    width={400}
                    height={300}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.projectBody}>
                  <p className={styles.eyebrow}>{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectLinks}>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      Visit site <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source on GitHub`}
                    >
                      Source <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="services"
          className={`${styles.wrap} ${styles.section}`}
          aria-labelledby="capabilities-title"
        >
          <p className={styles.eyebrow}>03 / Capabilities</p>
          <h2 id="capabilities-title">From interface to access control.</h2>
          <div className={styles.capabilities}>
            {capabilities.map((item) => (
              <article key={item.number}>
                <span className={styles.capNumber}>{item.number} /</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className={`${styles.wrap} ${styles.section} ${styles.about}`}
          aria-labelledby="about-title"
        >
          <div className={styles.portrait}>
            <Image
              src="/assets/images/author/pf1.png"
              alt="Fassil Tsegaye"
              width={687}
              height={1031}
              sizes="(max-width: 700px) 85vw, 340px"
            />
            <span>Fassil Tsegaye / Smyrna, TN</span>
          </div>
          <div>
            <p className={styles.eyebrow}>04 / About & credentials</p>
            <h2 id="about-title">
              A developer’s perspective.
              <br />A security mindset.
            </h2>
            <p className={styles.aboutText}>
              My background is in full-stack web development, working across
              responsive interfaces, APIs, authentication, and databases. I’m
              bringing that experience into a deeper focus on cybersecurity and
              cloud security.
            </p>
            <p className={styles.aboutText}>
              SecureCycle brings these interests together: useful software, real
              operational workflows, and careful decisions about who can access
              and change data.
            </p>
            <div
              className={styles.credentials}
              aria-label="Earned certifications"
            >
              <div>
                <span>CompTIA</span>
                <strong>Security+</strong>
                <small>Earned certification</small>
              </div>
              <div>
                <span>ISC2</span>
                <strong>Certified in Cybersecurity (CC)</strong>
                <small>Earned certification</small>
              </div>
            </div>
            <a className={styles.textLink} href="/resume.pdf" download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <footer className={`${styles.wrap} ${styles.footer}`}>
        <a className={styles.brand} href="#home">
          FT<span className={styles.accent}>.</span>
        </a>
        <p>© {new Date().getFullYear()} Fassil Tsegaye</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
