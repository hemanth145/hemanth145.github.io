import { FiArrowUpRight } from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/resume'
import '../styles/projects.css'

export default function Projects() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="section" ref={scope}>
      <div className="container">
        <p className="section-label reveal">Projects</p>
        <h2 className="section-title reveal">Things I've built</h2>

        <div className="project-grid">
          {projects.map((project) => {
            const content = (
              <>
                <div className="project-card-head">
                  <h3>{project.title}</h3>
                  {project.link && <FiArrowUpRight className="project-card-link-icon" />}
                </div>
                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                  {project.link && (
                    <span className="pill pill-live">{project.linkLabel ?? 'Live demo'}</span>
                  )}
                </div>
              </>
            )

            return project.link ? (
              <a
                className="project-card reveal"
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <article className="project-card reveal" key={project.title}>
                {content}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
