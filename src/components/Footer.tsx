export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Register', href: '#register' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">
              Ibadan Builders, Talent <span>& Creators</span> Meetup
            </div>
            <div className="footer-brand-desc">
              Presented by Oyo Talent Tribe × Talenxify. Bridging the gap between Technical Talent and Storytelling.
            </div>
          </div>
          <nav className="footer-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2027 Oyo Talent Tribe × Talenxify. All rights reserved.</p>
          <span className="footer-event-detail">
            Saturday, 23rd May 2027 · 12:00 PM – 5:00 PM WAT · NOTZERO Innovation Hub, Ibadan
          </span>
        </div>
      </div>
    </footer>
  )
}
