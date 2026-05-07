export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Sponsors', href: '#sponsors' },
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
              By Oyo Talent Tribe - A community of Tech Talent in Oyo State.
            </div>
          </div>
          <nav className="footer-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Oyo Talent Tribe × Talenxify. All rights reserved.</p>
          <span className="footer-event-detail">
            Saturday, 23rd May 2026 · 11:00 AM WAT · NOTZERO Innovation Hub, Akobo Ibadan
          </span>
        </div>
      </div>
    </footer>
  )
}
