import { useEffect, useState } from 'react'

const featuredProjects = [
  {
    id: 'leaselens',
    title: 'LeaseLens',
    label: 'Web app',
    summary: 'A lease review web app that helps renters understand dense lease language faster.',
    stack: ['JavaScript', 'Web App', 'UX', 'Information Design'],
    liveHref: 'https://risha-ashwin.github.io/Capstone---Lease-Lens/',
    repoHref: 'https://github.com/risha-ashwin/Capstone---Lease-Lens',
    imageSrc: '/leaselens-preview.png',
  },
  {
    id: 'booksharer',
    title: 'BookSharer',
    label: 'Full-stack app',
    summary: 'A book-sharing platform with secure accounts, search, and reviews.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Azure', 'CI/CD'],
    liveHref: 'https://booksharer.onrender.com',
    repoHref: 'https://github.com/varsha-bhar/booksharer',
    imageSrc: '/booksharer-preview.png',
  },
  {
    id: 'irl-bingo',
    title: 'IRL Bingo',
    label: 'iOS app',
    summary: 'A multiplayer iOS game with live board updates and shared state.',
    stack: ['Swift', 'SwiftUI', 'Firebase', 'MVVM', 'RBAC'],
    liveHref: null,
    repoHref: 'https://github.com/varsha-bhar',
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    label: 'Productivity app',
    summary: 'A habit tracker with secure sign-in and saved progress.',
    stack: ['React', 'Node.js', 'Firebase', 'REST APIs', 'Authentication'],
    liveHref: null,
    repoHref: 'https://github.com/varsha-bhar',
  },
]

const uxProjects = [
  {
    id: 'leaselens-prototype',
    title: 'LeaseLens Prototype',
    label: 'UX case study',
    summary: 'An interactive Figma prototype for a lease-reading experience that helps renters scan complicated documents with more confidence.',
    stack: ['Figma', 'Prototyping', 'UX Research', 'Interaction Design'],
    liveHref: 'https://www.figma.com/proto/SKcSkoKPvpQRkaui9jmSfw/Lease-Lens-MVP-Prototype?node-id=92-165&p=f&t=KWbajxaGNIaeSeDE-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A165',
    repoHref: 'https://github.com/varsha-bhar',
  },
]

const experience = [
  {
    role: 'Software & Artificial Intelligence Engineering Intern',
    org: 'USAFacts',
    date: 'Jun 2026 - Sep 2026',
    detail: 'Incoming AI & SWE intern building MCP-powered interfaces for government data and AI insights.',
  },
  {
    role: 'AI Engineering Intern',
    org: 'SeaWolf AI',
    date: 'Jun 2025 - Sep 2025',
    detail: 'Worked on backend logic, evaluation, and testing for internal AI systems.',
  },
  {
    role: 'FIN205 Teaching Assistant',
    org: 'University of Washington',
    date: 'Apr 2025 - Present',
    detail: 'Supported students through grading, office hours, and course coordination.',
  },
  {
    role: 'Director of Student Engagement',
    org: 'Women in Informatics',
    date: 'Mar 2025 - Present',
    detail: 'Plan events and build partnerships for the Women in Informatics community.',
  },
  {
    role: 'Research-Outreach Intern',
    org: 'Cledge',
    date: 'Mar 2022 - Feb 2023',
    detail: 'Supported research, outreach, and early product exploration work.',
  },
]

const principles = ['Keep it clear.', 'Build with intention.', 'Make it useful.']

const pages = [
  { key: 'home', label: 'Home', href: '#/' },
  { key: 'projects', label: 'Projects', href: '#/projects' },
  { key: 'ux', label: 'UX', href: '#/ux' },
  { key: 'experience', label: 'Experience', href: '#/experience' },
  { key: 'contact', label: 'Contact', href: '#/contact' },
]

function readRoute() {
  const hash = window.location.hash || '#/'
  const route = hash.replace(/^#\/?/, '').split('/')[0]
  return route || 'home'
}

function App() {
  const [page, setPage] = useState(readRoute)

  useEffect(() => {
    const onHashChange = () => setPage(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const normalizedPage = pages.some((item) => item.key === page) ? page : 'home'

  return (
    <div className="page-shell">
      <div className="grid-glow grid-glow-left" />
      <div className="grid-glow grid-glow-right" />
      <div className="grid-overlay" />

      <header className="topbar">
        <a className="brand" href="#/">
          <span className="brand-mark" aria-hidden="true">
            VB
          </span>
          <span>Varsha Bharath</span>
        </a>

        <nav className="topnav" aria-label="Primary">
          {pages.map((item) => (
            <a
              className={normalizedPage === item.key ? 'is-active' : undefined}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {normalizedPage === 'home' ? <HomePage /> : null}
        {normalizedPage === 'projects' ? <ProjectsPage /> : null}
        {normalizedPage === 'ux' ? <UxPage /> : null}
        {normalizedPage === 'experience' ? <ExperiencePage /> : null}
        {normalizedPage === 'contact' ? <ContactPage /> : null}
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero reveal">
        <div className="hero-copy">
          <div className="hero-heading-block">
            <p className="eyebrow">Software engineer · full-stack · data</p>
            <h1>Software engineer building useful products.</h1>
          </div>

          <div className="hero-meta">
            <p className="lede">
              I&apos;m Varsha Bharath, an Informatics student at the University
              of Washington interested in software engineering, data, and
              product development.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#/projects">
                Explore projects
              </a>
              <a
                className="button button-secondary"
                href="/Varsha-Bharath-Resume-2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="hero-links">
              <a href="mailto:varsha.bharath@gmail.com">varsha.bharath@gmail.com</a>
              <a href="tel:4255297999">425-529-7999</a>
              <a href="https://github.com/varsha-bhar" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/varshabharath"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section split-panel reveal">
        <article className="essay-card">
          <p className="eyebrow">About</p>
          <h2>About me</h2>
          <p>
            My background spans web development, mobile apps, backend systems,
            and product work. I care about strong execution and simple user
            experiences.
          </p>
        </article>

        <article className="principles-card">
          <p className="eyebrow">Working principles</p>
          <ul className="principles-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}

function ProjectsPage() {
  return (
    <section className="section section-page reveal">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
      </div>
      <ShowcaseGrid items={featuredProjects} />
    </section>
  )
}

function UxPage() {
  return (
    <section className="section section-page reveal">
      <div className="section-heading">
        <p className="eyebrow">UX projects</p>
        <h2>UX work</h2>
      </div>
      <ShowcaseGrid items={uxProjects} />
    </section>
  )
}

function ExperiencePage() {
  return (
    <section className="section section-page reveal">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-meta">
              <span>{item.org}</span>
              <span>{item.date}</span>
            </div>
            <h3>{item.role}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="section section-page reveal">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Open to software engineering and data roles.</h2>
      </div>

      <section className="cta contact-page-card">
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:varsha.bharath@gmail.com">
            Email me
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/varsha-bhar"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <a
            className="button button-secondary"
            href="https://linkedin.com/in/varshabharath"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:varsha.bharath@gmail.com">varsha.bharath@gmail.com</a>
          <a href="tel:4255297999">425-529-7999</a>
        </div>
      </section>
    </section>
  )
}

function ShowcaseGrid({ items }) {
  return (
    <div className="showcase-grid">
      {items.map((project) => (
        <article
          className={`showcase-card${project.liveHref ? '' : ' showcase-card-static'}`}
          id={project.id}
          key={project.title}
        >
          {project.liveHref ? (
            <a
              className="showcase-card-link"
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
            >
              <ShowcaseMedia project={project} />

              <div className="showcase-copy">
                <div className="project-topline">
                  <span>{project.label}</span>
                </div>
                <div className="showcase-title-row">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="showcase-footer">
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    className="showcase-cta"
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </a>
          ) : (
            <>
              <ShowcaseMedia project={project} />

              <div className="showcase-copy">
                <div className="project-topline">
                  <span>{project.label}</span>
                </div>
                <div className="showcase-title-row">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="showcase-footer">
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    className="showcase-cta"
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  )
}

function ShowcaseMedia({ project }) {
  if (project.imageSrc) {
    return (
      <div className={`showcase-media showcase-media-${project.id}`}>
        <img
          className="showcase-media-image"
          src={project.imageSrc}
          alt={`${project.title} preview`}
        />
      </div>
    )
  }

  return (
    <div className={`showcase-media showcase-media-${project.id}`}>
      <div className="showcase-screen showcase-screen-main">
        <span className="showcase-chip">{project.label}</span>
        <strong>{project.title}</strong>
      </div>
      <div className="showcase-screen showcase-screen-float showcase-screen-float-left" />
      <div className="showcase-screen showcase-screen-float showcase-screen-float-right" />
    </div>
  )
}

export default App
