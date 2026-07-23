import Marquee from 'react-fast-marquee'
import { useReveal } from '../hooks/useReveal'
import { certifications, marqueeSkills, skillGroups } from '../data/resume'
import '../styles/skills.css'

export default function Skills() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="section skills" ref={scope}>
      <div className="marquee-wrap reveal">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {marqueeSkills.map((skill) => (
            <span className="marquee-item" key={skill}>
              {skill}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-title reveal">What I work with</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skills-group reveal" key={group.label}>
              <p className="skills-group-label">{group.label}</p>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certs reveal">
          <p className="skills-group-label">Certifications</p>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
