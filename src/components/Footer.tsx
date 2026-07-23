import { profile } from '../data/resume'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; GSAP.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
