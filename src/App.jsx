const featuredProjects = [
  {
    title: 'LeaseLens',
    label: 'AI-powered lease analysis',
    year: '2025',
    summary:
      'Designed an information tool that turns dense lease agreements into clear, actionable insights for students and first-time renters.',
    impact: [
      'Surfaced rent terms, fees, penalties, and responsibilities hidden in long legal documents',
      'Used AI to generate summaries, highlight risks, and answer user questions in plain language',
      'Reduced the effort required to interpret leases and helped users make more informed signing decisions',
    ],
    stack: ['AI', 'Information design', 'UX research', 'Web application'],
  },
  {
    title: 'AI Input Routing System',
    label: 'SeaWolf AI internship',
    year: '2025',
    summary:
      'Built Python-based routing, telemetry, and evaluation workflows for AI systems serving 100+ users.',
    impact: [
      'Reduced clarification cycles by 65%',
      'Improved response performance by 30%',
      'Lowered failure rates by 15% through edge-case testing',
    ],
    stack: ['Python', 'AI evaluation', 'Telemetry', 'Performance testing'],
  },
  {
    title: 'BookSharer',
    label: 'Full-stack web app',
    year: '2025',
    summary:
      'Designed and shipped a web app for book discovery, reviews, and user management with secure REST APIs.',
    impact: [
      'Session-based authentication and RBAC-protected routes',
      'MongoDB query optimization improved retrieval latency by 25%',
      'Azure deployment with CI/CD for more reliable releases',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Azure'],
  },
  {
    title: 'IRL Bingo',
    label: 'Mobile product',
    year: '2025',
    summary:
      'Built a real-time multiplayer iOS app focused on live board updates, shared gameplay, and scalable state sync.',
    impact: [
      'Firebase-backed synchronization across active users',
      'Event-driven state management for consistent live updates',
      'Secure data models with role-based access control',
    ],
    stack: ['Swift', 'SwiftUI', 'Firebase', 'MVVM'],
  },
  {
    title: 'Habit Tracking App',
    label: 'Personal productivity',
    year: '2024',
    summary:
      'Created a full-stack habit tracker with authentication, user persistence, and a responsive front end.',
    impact: [
      'React front end paired with Node.js REST APIs',
      'Firebase auth and secure backend persistence',
      'Built around everyday task completion and accountability',
    ],
    stack: ['React', 'Node.js', 'Firebase', 'REST APIs'],
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
  'Design with implementation in mind, so ideas survive contact with real constraints.',
  'Use research, testing, and clear metrics to shape decisions instead of guessing.',
  'Build products that feel thoughtful for users and legible for the teams maintaining them.',
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
            <p className="eyebrow">Product, UX, and engineering portfolio</p>
            <h1>
              I build digital experiences that are technically sharp,
              human-centered, and ready for the real world.
            </h1>
            <p className="lede">
              I&apos;m Varsha Bharath, an Informatics student at the University
              of Washington with minors in Business, Data Science, and Applied
              Mathematics. My work sits at the intersection of product
              thinking, AI systems, and full-stack development.
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
              <a
                href="https://linkedin.com/in/varshabharath"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.notion.so/varsha-portfolio/Varsha-Bharath-UX-Portfolio-30a957ee4dc580d9aea7fc5d15750b6e"
                target="_blank"
                rel="noreferrer"
              >
                Previous portfolio
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-card intro-card">
              <span className="panel-label">Currently focused on</span>
              <ul>
                <li>AI system quality, evaluation, and reliability</li>
                <li>Full-stack product development</li>
                <li>Student community building and event strategy</li>
              </ul>
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
              A hybrid background in product thinking, systems design, and
              engineering execution.
            </p>
          </div>
          <div>
            <span className="band-label">How I work</span>
            <p>
              I like structured problem-solving, measurable outcomes, and
              experiences that still feel warm and intuitive for users.
            </p>
          </div>
          <div>
            <span className="band-label">What I care about</span>
            <p>
              Responsible AI, accessible products, and tools that genuinely
              help people make progress.
            </p>
          </div>
        </section>

        <section className="section reveal" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects shaped by systems thinking and product clarity.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-header">
                  <span>{project.label}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <ul className="impact-list">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
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
        </section>

        <section className="section two-column reveal" id="experience">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Experience</p>
            <h2>From AI reliability work to teaching and student leadership.</h2>
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
            <h2>
              I&apos;m interested in the space where insight, interface, and
              infrastructure meet.
            </h2>
            <p>
              My background started with teaching, outreach, and research, then
              expanded into web development, databases, mobile apps, and AI
              systems. That mix makes me especially excited by roles where I
              can think through the user journey while still being close to the
              implementation details.
            </p>
            <p>
              I care about products that are well-structured under the hood,
              intuitive on the surface, and grounded in actual user needs.
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
            I&apos;m especially interested in internships and early-career roles
            across product, UX engineering, software, and AI-focused teams.
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
              href="https://linkedin.com/in/varshabharath"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
