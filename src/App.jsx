const featuredProjects = [
  {
    title: 'LeaseLens',
    label: 'Featured project',
    year: '2025',
    role: 'AI + full-stack product build',
    problem:
      'Lease agreements bury rent terms, fees, penalties, and responsibilities in long blocks of legal text.',
    solution:
      'Built a web app that parses lease content, summarizes key clauses, flags risk, and answers renter questions in plain language.',
    outcome:
      'Turned a slow manual review process into a faster decision tool for students and first-time renters.',
    stack: ['JavaScript', 'AI', 'Web app', 'UX research', 'Information design'],
  },
  {
    title: 'AI Input Routing System',
    label: 'SeaWolf AI internship',
    year: '2025',
    role: 'Python + AI systems',
    problem:
      'The system was losing time to repeated clarification loops and had limited visibility into failures and latency.',
    solution:
      'Built Python routing logic, telemetry, logging, and evaluation workflows to improve request handling and monitoring.',
    outcome:
      'Reduced clarification cycles by 65%, improved response performance by 30%, and lowered failure rates by 15% through targeted edge-case testing.',
    stack: ['Python', 'AI evaluation', 'Telemetry', 'Logging APIs', 'Performance testing'],
  },
  {
    title: 'BookSharer',
    label: 'Full-stack web app',
    year: '2025',
    role: 'Backend + deployment',
    problem:
      'The product needed secure user accounts, searchable book data, and reliable review flows in one system.',
    solution:
      'Built REST APIs, session-based authentication, RBAC-protected routes, and optimized MongoDB queries for core app flows.',
    outcome:
      'Improved average query latency by 25% and shipped the app through Azure-based CI/CD.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Azure', 'CI/CD'],
  },
  {
    title: 'IRL Bingo',
    label: 'Mobile product',
    year: '2025',
    role: 'iOS + realtime sync',
    problem:
      'The app needed live shared game state, reliable board updates, and secure access across concurrent users.',
    solution:
      'Built a SwiftUI client with Firebase synchronization, event-driven state updates, and role-based access control.',
    outcome:
      'Delivered consistent live updates across players without losing shared state integrity.',
    stack: ['Swift', 'SwiftUI', 'Firebase', 'MVVM', 'RBAC'],
  },
  {
    title: 'Habit Tracking App',
    label: 'Personal productivity',
    year: '2024',
    role: 'Frontend + API integration',
    problem:
      'Users needed a simple way to track recurring habits with secure accounts and persistent progress.',
    solution:
      'Built a React front end backed by Node.js APIs, Firebase authentication, and persistent user data storage.',
    outcome:
      'Shipped a responsive habit tracker with secure login and reliable cross-session data persistence.',
    stack: ['React', 'Node.js', 'Firebase', 'REST APIs', 'Authentication'],
  },
]

const experience = [
  {
    role: 'Artificial Intelligence Engineering Intern',
    org: 'SeaWolf AI',
    date: 'Jun 2025 - Sep 2025',
    detail:
      'Focused on AI input routing, telemetry, model-output evaluation, and edge-case testing under simulated traffic.',
  },
  {
    role: 'FIN205 Teaching Assistant',
    org: 'University of Washington',
    date: 'Apr 2025 - Present',
    detail:
      'Support 100+ students by grading assignments and case studies, running office hours, and coordinating with faculty.',
  },
  {
    role: 'Director of Student Engagement',
    org: 'Women in Informatics',
    date: 'Mar 2025 - Present',
    detail:
      'Lead quarterly events for a 1,000+ student community and build industry partnerships with companies like Deloitte, Adobe, and Microsoft.',
  },
  {
    role: 'Research-Outreach Intern',
    org: 'Cledge',
    date: 'Mar 2022 - Feb 2023',
    detail:
      'Researched college admissions trends, compiled seminar data for an AI chatbot, and observed UI/UX and AI research workflows.',
  },
]

const principles = [
  'Start with the constraint, then design the system around it.',
  'Use testing, metrics, and iteration instead of assumptions.',
  'Keep the product simple for users and maintainable for the team.',
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
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />

      <header className="topbar">
        <a className="brand" href="#home">
          Varsha Bharath
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">Technical portfolio</p>
            <h1>Software engineer focused on AI, data, and full-stack systems.</h1>
            <p className="lede">
              I&apos;m Varsha Bharath, an Informatics student at the University
              of Washington with minors in Business, Data Science, and Applied
              Mathematics. I&apos;m interested in software engineering, data,
              and AI roles, especially where the work involves building systems
              that help people make better decisions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work
              </a>
              <a
                className="button button-secondary"
                href="/Varsha-Bharath-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download resume
              </a>
            </div>

            <div className="hero-links">
              <a href="mailto:varsha.bharath@gmail.com">
                varsha.bharath@gmail.com
              </a>
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

            <div className="hero-strips">
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
          </div>

          <aside className="hero-panel">
            <div className="panel-card intro-card">
              <span className="panel-label">Strongest project</span>
              <h3>LeaseLens</h3>
              <p>
                A lease analysis tool that surfaces fees, obligations, and risk
                before a renter signs.
              </p>
              <div className="tag-row">
                <span className="tag">AI</span>
                <span className="tag">Information design</span>
                <span className="tag">Web application</span>
              </div>
            </div>

            <div className="metrics-grid">
              <article className="metric-card">
                <strong>65%</strong>
                <span>fewer clarification cycles from AI routing work</span>
              </article>
              <article className="metric-card">
                <strong>30%</strong>
                <span>response performance improvement</span>
              </article>
              <article className="metric-card">
                <strong>1,000+</strong>
                <span>students served through Women in Informatics</span>
              </article>
              <article className="metric-card">
                <strong>100+</strong>
                <span>students supported as a teaching assistant</span>
              </article>
            </div>
          </aside>
        </section>

        <section className="impact-band reveal">
          <div>
            <span className="band-label">What I bring</span>
            <p>
              Experience across backend systems, AI workflows, and user-facing applications.
            </p>
          </div>
          <div>
            <span className="band-label">How I frame projects</span>
            <p>
              I write about projects in terms of the problem, the implementation, and the result.
            </p>
          </div>
          <div>
            <span className="band-label">What I care about</span>
            <p>
              Clear systems, responsible AI, and products that make information easier to use.
            </p>
          </div>
        </section>

        <section className="section reveal" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects framed around the problem, the build, and the outcome.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-header">
                  <span>{project.label}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>

                <div className="project-story">
                  <div>
                    <span className="story-label">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span className="story-label">Solution</span>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <span className="story-label">Outcome</span>
                    <p>{project.outcome}</p>
                  </div>
                </div>

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
        </section>

        <section className="section two-column reveal" id="experience">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Experience</p>
            <h2>AI systems, teaching, leadership, and product-focused engineering work.</h2>
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
            <h2>I want to build software at the intersection of SWE, data, and AI.</h2>
            <p>
              My background started in teaching, outreach, and research, then
              expanded into web development, databases, mobile apps, and AI
              systems. I like technical work where I can build the system and
              stay close to the reason it needs to exist.
            </p>
            <p>
              I&apos;m especially interested in products that turn messy or
              technical information into something clear enough to act on.
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
          <h2>
            I&apos;m looking for internships and early-career roles in software engineering, data, and AI.
          </h2>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:varsha.bharath@gmail.com"
            >
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
