import { useReveal } from '../hooks/useReveal'
import { education, profile } from '../data/resume'
import '../styles/about.css'

export default function About() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="section" ref={scope}>
      <div className="container">
        <p className="section-label reveal">About</p>
        <h2 className="section-title reveal">A little about me</h2>

        <div className="about-grid">
          <p className="about-summary reveal">{profile.summary}</p>

          <div className="about-card reveal">
            <p className="about-card-label">Education</p>
            <p className="about-card-title">{education.degree}</p>
            <p className="about-card-sub">{education.school}</p>
            <div className="about-card-meta">
              <span>{education.period}</span>
              <span>GPA {education.gpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
