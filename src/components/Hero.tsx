import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/resume'
import '../styles/hero.css'

export default function Hero() {
  const scope = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-title span', { opacity: 0, y: 60, stagger: 0.08, duration: 0.9 }, '-=0.3')
        .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from('.hero-social a', { opacity: 0, y: 20, stagger: 0.08, duration: 0.6 }, '-=0.5')
    }, scope)

    return () => ctx.revert()
  }, [])

  const words = ['Software', 'Engineer', 'building', 'reliable', 'distributed', 'systems.']

  return (
    <section id="top" className="hero" ref={scope}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-eyebrow">Hi, I'm {profile.name.split(' ')[0]} {profile.name.split(' ')[1]} 👋</p>
        <h1 className="hero-title">
          {words.map((w, i) => (
            <span key={i}>{w}&nbsp;</span>
          ))}
        </h1>
        <p className="hero-subtitle">
          I design and ship secure, event-driven microservices with Java, Spring Boot &amp; Kafka —
          deployed on AWS with Docker and Kubernetes. Based in {profile.location}.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#contact">
            Let's talk
          </a>
          <a className="btn btn-outline" href="#projects">
            View my work
          </a>
        </div>

        <div className="hero-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <FiArrowDown />
      </a>
    </section>
  )
}
