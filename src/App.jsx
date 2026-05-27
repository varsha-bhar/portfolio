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

// Temporarily hidden UX work.
// const uxProjects = [
//   {
//     id: 'leaselens-prototype',
//     title: 'LeaseLens Prototype',
//     label: 'UX case study',
//     summary: 'An interactive Figma prototype for a lease-reading experience that helps renters scan complicated documents with more confidence.',
//     stack: ['Figma', 'Prototyping', 'UX Research', 'Interaction Design'],
//     liveHref: 'https://www.figma.com/proto/SKcSkoKPvpQRkaui9jmSfw/Lease-Lens-MVP-Prototype?node-id=92-165&p=f&t=KWbajxaGNIaeSeDE-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A165',
//     repoHref: 'https://github.com/varsha-bhar',
//   },
// ]

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
    date: 'Apr 2025 - Jan 2026',
    detail: 'Supported students through grading, office hours, and course coordination.',
  },
  {
    role: 'Director of Student Engagement',
    org: 'Women in Informatics',
    date: 'Mar 2025 - Present',
    detail: 'Plan events and build partnerships for the Women in Informatics community.',
  },
  {
    role: 'First Year Representative',
    org: 'Informatics Undergraduate Association (IUGA)',
    date: 'Sep 2023 - Jun 2024',
    detail: 'Represented first-year students and supported community programming for Informatics undergraduates.',
  },
  {
    role: 'Research-Outreach Intern',
    org: 'Cledge',
    date: 'Mar 2022 - Feb 2023',
    detail: 'Supported research, outreach, and early product exploration work.',
  },
]

const contactItems = [
  {
    label: 'Email',
    href: 'mailto:varsha.bharath@gmail.com',
    external: false,
    icon: (
      <svg className="icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z" />
        <path d="m3 8 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/varsha-bhar',
    external: true,
    icon: (
      <svg className="icon-fill" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.25a8.75 8.75 0 0 0-2.77 17.05c.44.08.6-.19.6-.42v-1.64c-2.43.53-2.95-1.03-2.95-1.03-.4-1-.97-1.26-.97-1.26-.8-.55.06-.54.06-.54.88.06 1.34.9 1.34.9.79 1.33 2.06.95 2.56.72.08-.57.31-.95.57-1.16-1.94-.22-3.98-.97-3.98-4.33 0-.96.35-1.75.9-2.37-.09-.22-.39-1.11.09-2.32 0 0 .74-.24 2.42.9A8.3 8.3 0 0 1 12 7.5c.74 0 1.49.1 2.18.3 1.68-1.14 2.42-.9 2.42-.9.48 1.21.18 2.1.09 2.32.56.62.9 1.41.9 2.37 0 3.37-2.04 4.1-3.98 4.32.32.28.61.84.61 1.7v2.52c0 .24.16.51.6.42A8.75 8.75 0 0 0 12 3.25Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/varshabharath',
    external: true,
    icon: (
      <svg className="icon-fill" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.85 8.5A1.35 1.35 0 1 0 6.84 5.8a1.35 1.35 0 0 0 0 2.7Z" />
        <path d="M5.65 9.9h2.4v7.7h-2.4Z" />
        <path d="M9.95 9.9h2.3v1.05h.03c.32-.6 1.1-1.24 2.27-1.24 2.42 0 2.87 1.6 2.87 3.68v4.21h-2.4v-3.73c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.79h-2.4Z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'tel:4255297999',
    external: false,
    icon: (
      <svg className="icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.25 4.5h2.2a1 1 0 0 1 .98.8l.6 3a1 1 0 0 1-.29.93l-1.46 1.42a13.05 13.05 0 0 0 4.07 4.07l1.42-1.46a1 1 0 0 1 .93-.29l3 .6a1 1 0 0 1 .8.98v2.2a1 1 0 0 1-.9 1A14.75 14.75 0 0 1 5.5 5.4a1 1 0 0 1 .99-.9Z" />
      </svg>
    ),
  },
]

const pages = [
  { key: 'home', label: 'Home', href: '#/' },
  { key: 'projects', label: 'Projects', href: '#/projects' },
  { key: 'experience', label: 'Experience', href: '#/experience' },
]

const heroTitle = 'Software engineer building useful products.'

function TypingText({ text, speed = 42 }) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setTypedText(text)
      return undefined
    }

    setTypedText('')

    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setTypedText(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => window.clearInterval(interval)
  }, [speed, text])

  return <span className="typing-title">{typedText}</span>
}

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
        {normalizedPage === 'experience' ? <ExperiencePage /> : null}
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
            <h1>
              <TypingText text={heroTitle} />
            </h1>
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
              {contactItems.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  title={item.label}
                >
                  <span className="hero-link-icon">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-large" />
          <div className="hero-orbit hero-orbit-small" />
          <div className="hero-particle hero-particle-one" />
          <div className="hero-particle hero-particle-two" />
          <div className="hero-particle hero-particle-three" />

          <div className="hero-panel hero-panel-core">
            <span className="panel-label">Now building</span>
            <strong>Interfaces that feel clear, fast, and human.</strong>
          </div>

          <div className="hero-panel hero-panel-floating hero-panel-a">
            <span>Full-stack</span>
          </div>
          <div className="hero-panel hero-panel-floating hero-panel-b">
            <span>Data-driven</span>
          </div>
          <div className="hero-panel hero-panel-floating hero-panel-c">
            <span>Product-minded</span>
          </div>
        </div>
      </section>

    </>
  )
}

function ProjectsPage() {
  return (
    <section className="section section-page reveal">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>
          <TypingText text="Projects" speed={75} />
        </h2>
      </div>
      <ShowcaseGrid items={featuredProjects} />
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
        {experience.map((item, index) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="timeline-copy">
              <div className="timeline-meta">
                <span className="timeline-org">{item.org}</span>
                <span className="timeline-date">{item.date}</span>
              </div>

              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
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
