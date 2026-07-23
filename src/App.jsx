import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import './App.css'

const Scene3D = lazy(() => import('./Scene3D'))

const LINKS = {
  email: 'hemanth.sunkari@gmail.com',
  github: 'https://github.com/hemanth145',
  linkedin: 'https://linkedin.com/in/sai-babu-s-318b4634b',
  resume: '/resume.pdf',
}

const NAV_ITEMS = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

const ROLES = ['Software Engineer', 'Backend Developer', 'Cloud & Kafka Enthusiast']

const MARQUEE_WORDS = [
  'JAVA',
  'SPRING BOOT',
  'APACHE KAFKA',
  'AWS',
  'DOCKER',
  'KUBERNETES',
  'REACT',
  'MICROSERVICES',
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.toLowerCase())

const SKILLS = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'PHP'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (EKS, EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['Spring Boot', 'Spring Security', 'React', 'Redux', 'Apache Kafka', 'LangChain', 'Ollama', 'REST APIs', 'JDBC', 'Bootstrap'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'NoSQL'],
  },
  {
    label: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'Distributed Systems', 'Microservices', 'Agile / Scrum'],
  },
  {
    label: 'AI & Data',
    items: ['Machine Learning', 'Pandas', 'NumPy', 'PyTorch', 'Transformers', 'Tableau', 'GenAI tools'],
  },
]

const EXPERIENCE = [
  {
    company: 'Coder Version',
    role: 'Software Engineer',
    period: 'Feb 2025 – Present',
    location: null,
    bullets: [
      'Designed and developed scalable, event-driven microservices using Java and Spring Boot, architecting resilient distributed systems capable of handling high-volume financial data processing.',
      'Built and maintained Apache Kafka producers and consumers for asynchronous, real-time event streaming, enabling fault-tolerant and cost-effective data flow between decoupled services.',
      'Integrated secure RESTful APIs with Spring Security, ensuring seamless and authenticated communication across microservices in a large-scale distributed environment.',
      'Containerized applications with Docker and authored Kubernetes deployment manifests; managed orchestration on AWS EKS, significantly improving system scalability, reliability, and operational excellence.',
      'Optimized complex SQL queries and performed performance tuning to ensure data integrity, accelerate business intelligence reporting, and reduce latency in production systems.',
      'Practiced CI/CD principles across the full software delivery lifecycle and participated in code reviews, on-call operations, and production monitoring to uphold engineering standards.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst Trainee',
    period: 'Aug 2021 – Dec 2022',
    location: 'Chennai, India',
    bullets: [
      'Contributed to multiple projects using Java, Python, JavaScript, and C to develop data-driven solutions, applying object-oriented design principles and best practices.',
      'Designed and maintained relational databases ensuring efficient data storage, integrity, and analytics readiness to support cross-functional reporting needs.',
      'Collaborated with cross-disciplinary teams to analyze operational data, identify trends, and deliver actionable insights that improved project timelines and stakeholder decisions.',
      'Enhanced system efficiency by developing scalable solutions and applying statistical methods to validate results, demonstrating strong problem-solving and analytical skills.',
    ],
  },
]

const PROJECTS = [
  {
    name: 'Real-Time Face Recognition & Attendance System',
    stack: ['Python', 'Dlib', 'OpenCV'],
    bullets: [
      'Designed and deployed a real-time face recognition system, integrating facial landmark detection, histogram equalization, and Adaboost/Haar cascade tracking for high accuracy.',
      'Optimized system performance for real-time execution via multithreading and memory-efficient data handling; validated across diverse camera environments for production-grade reliability.',
      'Documented system architecture, algorithms, and deployment procedures to support maintainability and future scalability.',
    ],
  },
  {
    name: 'EduConnect Admission Hub',
    stack: ['JSP', 'MySQL', 'HTML/CSS/JS'],
    bullets: [
      'Architected and built a full-stack college admission web platform using JSP for server-side logic, MySQL for persistent storage, and HTML/CSS/JavaScript for a responsive front-end UX.',
      'Engineered form-submission pipelines, database schema design, and cross-browser rendering to ensure data integrity and seamless user interactions.',
    ],
  },
  {
    name: 'Local AI Chatbot CLI',
    stack: ['Python', 'LangChain', 'Ollama', 'PyTorch'],
    bullets: [
      'Built a local CLI chatbot using on-device LLM models (Gemma 3.1B, Gemma 4), enabling private, low-latency conversational AI with no cloud dependency.',
      'Diagnosed and fixed environment issues including a corrupted UTF-16-encoded requirements.txt causing pip install failures and a Windows console encoding crash on emoji output; patched both with sys.stdout.reconfigure(encoding="utf-8").',
      'Configured a Python virtual environment and installed PyTorch and transformers dependencies for seamless local model execution.',
    ],
  },
]

const CERTIFICATIONS = [
  'Google IT Automation with Python — Coursera',
  'Web Design for Everybody: Basics of Web Development & Coding — Coursera',
  'Google IT Support Professional Certificate — Coursera',
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function useTypewriter(words, reduced, { typingSpeed = 70, deletingSpeed = 40, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return undefined

    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return undefined
    }

    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, reduced, typingSpeed, deletingSpeed, pause])

  if (reduced) return words[0]
  return words[index].substring(0, subIndex)
}

function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function NavLink({ item, active, onClick }) {
  return (
    <a href={`#${item.toLowerCase()}`} className={`nav-link ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="nav-link-track">
        <span className="nav-link-face">{item}</span>
        <span className="nav-link-face" aria-hidden="true">
          {item}
        </span>
      </span>
    </a>
  )
}

function Marquee({ words }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => (
          <span className="marquee-item" key={`${word}-${i}`}>
            {word}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const reducedMotion = usePrefersReducedMotion()
  const typedRole = useTypewriter(ROLES, reducedMotion)
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          SHS
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item}
              item={item}
              active={activeSection === item.toLowerCase()}
              onClick={closeMenu}
            />
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow">
            <span className="glow-blob blob-1" />
          </div>
          <div className="avatar-3d-wrap">
            <Suspense fallback={null}>
              <Scene3D reducedMotion={reducedMotion} />
            </Suspense>
          </div>
          <p className="eyebrow">
            {typedRole}
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </p>
          <h1>Sai Hemanth Babu Sunkari</h1>
          <p className="hero-summary">
            I build secure, scalable microservices in Java/Spring Boot and event-driven
            systems with Apache Kafka, deployed via Docker/Kubernetes on AWS. I care about
            reliable distributed systems, clean architecture, and production stability.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>
              Get in touch
            </a>
            <a className="btn" href={LINKS.resume} target="_blank" rel="noreferrer">
              Download Résumé
            </a>
            <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="hero-location">Denton, Texas, United States</p>
        </section>

        <Marquee words={MARQUEE_WORDS} />

        <section id="about" className="section">
          <Reveal as="h2" className="section-title">
            About
          </Reveal>
          <Reveal as="p" className="about-text" delay={80}>
            Software Engineer with hands-on experience building secure, scalable
            microservices in Java/Spring Boot and event-driven systems with Apache Kafka,
            deployed via Docker/Kubernetes on AWS (EKS, EC2, S3, Lambda). Strong grounding
            in the Software Development Life Cycle (SDLC), including design, application
            development, code reviews, testing, CI/CD, and production support/on-call for
            operational stability. Comfortable troubleshooting complex distributed-system
            issues and tuning SQL for reliability and performance; experienced documenting
            architecture and deployment procedures and leveraging GenAI tools for faster
            iteration while validating outputs through peer review and self-review.
          </Reveal>
        </section>

        <section id="skills" className="section">
          <Reveal as="h2" className="section-title">
            Skills
          </Reveal>
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <Reveal as="div" className="skill-card" key={group.label} delay={i * 60}>
                <h3>{group.label}</h3>
                <ul className="pill-list">
                  {group.items.map((item, pi) => (
                    <li className="pill" key={item} style={{ '--i': pi }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <Reveal as="h2" className="section-title">
            Experience
          </Reveal>
          <div className="timeline">
            {EXPERIENCE.map((job, i) => (
              <Reveal as="article" className="timeline-item" key={job.company} delay={i * 80}>
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>
                  <p className="timeline-period">{job.period}</p>
                </div>
                <ul>
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <Reveal as="h2" className="section-title">
            Projects
          </Reveal>
          <div className="projects-list">
            {PROJECTS.map((project, i) => (
              <Reveal as="article" className="project-row" key={project.name} delay={i * 80}>
                <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="project-row-body">
                  <h3>{project.name}</h3>
                  <p className="project-row-label">Tools and features</p>
                  <ul className="pill-list">
                    {project.stack.map((t, ti) => (
                      <li className="pill pill-accent" key={t} style={{ '--i': ti }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-row-bullets">
                    {project.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <Reveal as="h2" className="section-title">
            Education
          </Reveal>
          <Reveal as="div" className="education-card">
            <div>
              <h3>University of North Texas</h3>
              <p className="timeline-company">Master of Science, Computer Science · GPA 3.45</p>
            </div>
            <p className="timeline-period">Jan 2023 – Dec 2024</p>
          </Reveal>

          <Reveal as="h2" className="section-title certifications-title">
            Certifications
          </Reveal>
          <ul className="cert-list">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 60}>
                {c}
              </Reveal>
            ))}
          </ul>
        </section>

        <section id="contact" className="section contact">
          <Reveal as="h2" className="section-title">
            Let's work together
          </Reveal>
          <Reveal as="p" className="about-text" delay={80}>
            I'm open to new opportunities and interesting problems. The fastest way to
            reach me is email.
          </Reveal>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
            <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sai Hemanth Babu Sunkari. Built with React &amp; Vite.</p>
      </footer>
    </>
  )
}

export default App
