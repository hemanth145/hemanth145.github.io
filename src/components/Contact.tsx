import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/resume'
import '../styles/contact.css'

export default function Contact() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="section contact" ref={scope}>
      <div className="container">
        <p className="section-label reveal">Contact</p>
        <h2 className="section-title reveal">Let's build something together</h2>
        <p className="contact-lead reveal">
          I'm open to new opportunities and always happy to talk about distributed systems,
          Java/Spring, or GenAI tooling. Reach out — I usually reply within a day.
        </p>

        <div className="contact-grid reveal">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <FiMail />
            <div>
              <p className="contact-card-label">Email</p>
              <p className="contact-card-value">{profile.email}</p>
            </div>
            <FiArrowUpRight className="contact-card-arrow" />
          </a>

          <a className="contact-card" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
            <FiPhone />
            <div>
              <p className="contact-card-label">Phone</p>
              <p className="contact-card-value">{profile.phone}</p>
            </div>
            <FiArrowUpRight className="contact-card-arrow" />
          </a>

          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
            <div>
              <p className="contact-card-label">LinkedIn</p>
              <p className="contact-card-value">sai-babu-s-318b4634b</p>
            </div>
            <FiArrowUpRight className="contact-card-arrow" />
          </a>

          <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub />
            <div>
              <p className="contact-card-label">GitHub</p>
              <p className="contact-card-value">hemanth145</p>
            </div>
            <FiArrowUpRight className="contact-card-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
