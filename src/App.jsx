import { useEffect, useState } from 'react'
import './App.css'

const personalInfo = [
  { label: 'Phone', value: '9058193864', href: 'tel:+919058193864', icon: '📞' },
  { label: 'Email', value: 'aqsa.turki786@gmail.com', href: 'mailto:aqsa.turki786@gmail.com', icon: '✉️' },
  { label: 'LinkedIn', value: 'aqsa-hasan', href: 'https://www.linkedin.com/in/aqsa-hasan', icon: '💼' },
  { label: 'Location', value: 'Rampur', href: '#', icon: '📍' },
]

const skills = [
  { name: 'Process Management', icon: '⚙️' },
  { name: 'Customer Support & Issue Resolution', icon: '🛠️' },
  { name: 'Data Entry & Documentation', icon: '📝' },
  { name: 'Team Coordination', icon: '🤝' },
  { name: 'MS Office & ERP Tools', icon: '💻' },
  { name: 'Communication & Interpersonal Skills', icon: '📢' },
]

const education = [
  {
    title: "Bachelor's Degree",
    detail: 'Mohammad Ali Jauhar University Rampur.',
    Course: 'Bachelor Of Computer Application.',
    StrtEnd: '(2023) - (2026)'
  }
]





const stats = [
  { value: '20%', label: 'Efficiency gain' },
  { value: '100%', label: 'Process focus' },
  { value: '24/7', label: 'Operational mindset' },
]

const navItems = [
  { label: 'Personal Info', id: 'personal-info' },
  { label: 'Summary', id: 'summary' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
]

const heroTitle = 'Professional graduate focused on smooth, efficient operations.'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [typedTitle, setTypedTitle] = useState('')

  useEffect(() => {
    let characterIndex = 0
    let deleting = false
    let pauseUntil = 0

    const typeNextCharacter = () => {
      const currentTime = Date.now()

      if (currentTime < pauseUntil) {
        return
      }

      if (!deleting && characterIndex < heroTitle.length) {
        characterIndex += 1
        setTypedTitle(heroTitle.slice(0, characterIndex))
      } else if (!deleting) {
        deleting = true
        pauseUntil = currentTime + 1200
      } else if (characterIndex > 0) {
        characterIndex -= 1
        setTypedTitle(heroTitle.slice(0, characterIndex))
      } else {
        deleting = false
        pauseUntil = currentTime + 350
      }
    }

    const timer = window.setInterval(typeNextCharacter, 70)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-page">
      <div className="heart-background" aria-hidden="true">
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>

      </div>

      <header className="site-header">
        <a className="site-brand" href="#top" aria-label="Aqsa Bi home">
          <span className="site-brand-mark">AB</span>
          <span className="site-brand-copy">
            <strong>Aqsa Bi</strong>
            <small>Operations Support Executive</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#summary">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </nav>

        <div className="header-status">
          <span className="status-dot" />
          <span>Open to opportunities</span>
        </div>

        <button
          type="button"
          className={`menu-button ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

      </header>

      <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <div>
            <p>Aqsa Bi</p>
            <span>Operations Support</span>
          </div>
          <button
            type="button"
            className="menu-close"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <nav className="menu-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>



      <main id="top" className="portfolio-shell">
        <section className="hero panel scroll-reveal">
          <div className="hero-copy">
            <p className="eyebrow">Operation Support Executive</p>
            <h1 className="typewriter-title" aria-label={heroTitle}>
              {typedTitle}
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </h1>
            <p className="lead">
              Dedicated Operation Support Executive with a strong background in
              process coordination, customer support, and day-to-day workflow
              management. Skilled in handling data, documentation, and problem
              resolution to improve business performance.
            </p>

            <div className="cta-row">
              <a href="#personal-info" className="primary-btn">Contact Info</a>
              <a href="#skills" className="secondary-btn">Key Skills</a>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-heart-wrap">
              <div className="heart-burst" aria-hidden="true">
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
              </div>
              <div className="profile-heart">
                <div className="profile-heart-content">
                  <h2>Aqsa Bi</h2>
                  <p>Operations Support Executive</p>
                  <ul>
                    <li>Process Management</li>
                    <li>Documentation & Reporting</li>
                    <li>Client Support & Issue Resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="personal-info" className="info-grid">
          <div className="panel section-block scroll-reveal">
            <div className="section-title">
              <span className="mini-dot" />
              <h3>Personal Information</h3>
            </div>
            <div className="info-list">
              {personalInfo.map((item) => (
                <div key={item.label} className="info-item">
                  <span className="icon-box">{item.icon}</span>
                  <div>
                    <label>{item.label}</label>
                    {item.href === '#' ? (
                      <strong>{item.value}</strong>
                    ) : (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="summary" className="panel section-block summary-block scroll-reveal">
            <div className="section-title">
              <span className="mini-dot" />
              <h3>Professional Summary</h3>
            </div>
            <p>
              Dedicated Operation Support Executive with proven experience in
              streamlining processes, managing day-to-day operations, and
              ensuring smooth workflow across departments. Skilled in
              problem-solving, team coordination, and delivering high-quality
              support to achieve business goals.
            </p>

            <div className="metrics">
              {stats.map((item) => (
                <div key={item.label} className="metric-box">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="panel section-block scroll-reveal">
          <div className="section-title">
            <span className="mini-dot" />
            <h3>Key Skills</h3>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="panel section-block scroll-reveal">
          <div className="section-title">
            <span className="mini-dot" />
            <h3>Education</h3>
          </div>

          <div className="edu-grid">
            {education.map((item) => (
              <div key={item.title} className="edu-card">
                <span className="edu-tag">Academic</span>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
                <p>{item.Course}</p>
                <p>{item.StrtEnd}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="panel section-block scroll-reveal">
          <div className="section-title">
            <span className="mini-dot" />
            <h3>Work Experience</h3>
          </div>

          <div className="experience-card">
            <div className="exp-head">
              <div>
                <span className="exp-role">Operations Support Executive</span>
                <h4>Fresher</h4>
              </div>
            </div>


          </div>
        </section>


      </main>
    </div>
  )
}

export default App
