import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/resume'
import '../styles/experience.css'

export default function Experience() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="section" ref={scope}>
      <div className="container">
        <p className="section-label reveal">Experience</p>
        <h2 className="section-title reveal">Where I've worked</h2>

        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item reveal" key={job.company}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>
                  <span className="pill">{job.period}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
