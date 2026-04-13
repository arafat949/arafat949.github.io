// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('hero');
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['hero', 'skills', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar__inner">
          <a className="navbar__logo" href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero'); }}>
            Arafat
          </a>

          <div className="navbar__links">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                className={`navbar__link ${active === link.href.replace('#','') ? 'active' : ''}`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="navbar__cta">
            <button className="navbar__hire" onClick={() => scrollTo('#contact')}>
              Hire Me
            </button>
            <button
              className={`navbar__menu-btn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              className={`navbar__link ${active === link.href.replace('#','') ? 'active' : ''}`}
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button className="navbar__hire" style={{ marginTop: 16 }} onClick={() => scrollTo('#contact')}>
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}
