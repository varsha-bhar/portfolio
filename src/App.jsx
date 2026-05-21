const featuredProjects = [
  {
    id: 'leaselens',
    title: 'LeaseLens',
    label: 'Featured project',
    year: '2025',
    role: 'Full-stack web app',
    summary: 'A lease review tool that makes dense renter documents easier to understand.',
    details: [
      'Highlights key fees, responsibilities, and risk areas.',
      'Designed for students and first-time renters.',
    ],
    stack: ['JavaScript', 'Web app', 'UX', 'Information design'],
    repoUrl: 'https://github.com/varsha-bhar',
    liveUrl: null,
  },
  {
    id: 'booksharer',
    title: 'BookSharer',
    label: 'Full-stack web app',
    year: '2025',
    role: 'Backend + deployment',
    summary: 'A book-sharing platform with secure accounts, search, and reviews.',
    details: [
      'Built API flows, auth, and protected routes.',
      'Deployed with CI/CD support on Azure.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Azure', 'CI/CD'],
    repoUrl: 'https://github.com/varsha-bhar',
    liveUrl: null,
  },
  {
    id: 'irl-bingo',
    title: 'IRL Bingo',
    label: 'Mobile product',
    year: '2025',
    role: 'iOS + realtime sync',
    summary: 'A multiplayer iOS game with live board updates and shared state.',
    details: [
      'Built in SwiftUI with Firebase sync.',
      'Designed for reliable realtime play.',
    ],
    stack: ['Swift', 'SwiftUI', 'Firebase', 'MVVM', 'RBAC'],
    repoUrl: 'https://github.com/varsha-bhar',
    liveUrl: null,
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracking App',
    label: 'Personal productivity',
    year: '2024',
    role: 'Frontend + API integration',
    summary: 'A habit tracker with secure sign-in and saved progress.',
    details: [
      'Built with React, Node.js, and Firebase.',
      'Focused on a clean daily tracking experience.',
    ],
    stack: ['React', 'Node.js', 'Firebase', 'REST APIs', 'Authentication'],
    repoUrl: 'https://github.com/varsha-bhar',
    liveUrl: null,
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

const principles = [
  'Keep it clear.',
  'Build with intention.',
  'Make it useful.',
]

const roleInterests = [
  'Software engineering',
  'Data and analytics',
  'AI and machine learning',
]

const coreTech = [
  'Python',
  'Java',
  'JavaScript',
  'React',
  'Node.js',
  'SQL',
  'Firebase',
  'Azure',
]

function App() {
  return (
    <div className="page-shell">
      <div className="grid-glow grid-glow-left" />
      <div className="grid-glow grid-glow-right" />
      <div className="grid-overlay" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            VB
          </span>
          <span>Varsha Bharath</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · full-stack · data</p>
            <h1>Building thoughtful software with a clean, product-focused approach.</h1>
            <p className="lede">
              I&apos;m Varsha Bharath, an Informatics student at the University
              of Washington interested in software engineering, data, and
              product development.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
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
              <a
                href="https://github.com/varsha-bhar"
                target="_blank"
                rel="noreferrer"
              >
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

          <aside className="hero-panel">
            <div className="panel-card intro-card">
              <div className="panel-kicker">
                <span className="panel-label">Currently</span>
                <span className="status-pill">Open to internships and early-career roles</span>
              </div>
              <h3>Clean builds. Thoughtful details.</h3>
              <p>
                I like building products that feel polished, useful, and easy
                to navigate.
              </p>
            </div>

            <div className="hero-strips hero-panel-strips">
              <article className="strip-card">
                <span className="panel-label">Role interests</span>
                <ul className="compact-list">
                  {roleInterests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="strip-card">
                <span className="panel-label">Core stack</span>
                <div className="tag-row">
                  {coreTech.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </aside>
        </section>

        <section className="section reveal" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects with room to browse, scan, and open quickly.</h2>
          </div>

          <div className="projects-layout">
            <aside className="projects-sidebar">
              <div className="sidebar-card">
                <span className="panel-label">Jump to a project</span>
                <div className="project-index" role="list">
                  {featuredProjects.map((project, index) => (
                    <a className="project-index-item" href={`#${project.id}`} key={project.id}>
                      <span className="project-index-order">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <strong>{project.title}</strong>
                        <small>{project.role}</small>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="project-stack">
              {featuredProjects.map((project) => (
                <article className="project-card" id={project.id} key={project.title}>
                  <div className="project-topline">
                    <span>{project.label}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="project-intro">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-role">{project.role}</p>
                    </div>

                    <div className="project-actions">
                      <a
                        className="project-link project-link-primary"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View repo
                      </a>
                      {project.liveUrl ? (
                        <a
                          className="project-link"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open site
                        </a>
                      ) : (
                        <span className="project-link project-link-disabled">
                          Site link available on request
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="project-summary">{project.summary}</p>

                  <ul className="project-points">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section two-column reveal" id="experience">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Experience</p>
            <h2>Engineering, teaching, and community work.</h2>
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

        <section className="section split-panel reveal" id="about">
          <article className="essay-card">
            <p className="eyebrow">About</p>
            <h2>I like building software that feels clear and well-made.</h2>
            <p>
              My background spans web development, mobile apps, backend systems,
              and product-facing work. I care about thoughtful execution and a
              strong user experience.
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

        <section className="cta reveal" id="contact">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>I&apos;m looking for internships and early-career roles in software engineering and data.</h2>
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
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
