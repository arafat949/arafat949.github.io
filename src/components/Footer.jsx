// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter, FaHeart } from 'react-icons/fa6';
import { social, profile } from '../data/portfolioData';

const ICON_MAP = { FaGithub, FaLinkedin, FaFacebook, FaXTwitter };

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      textAlign: 'center',
    }}>
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 24,
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 16,
        }}>
          Arafat
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
          {social.map(s => {
            const Icon = ICON_MAP[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 38, height: 38,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  fontSize: 16,
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
          © {year} {profile.name} — Built with{' '}
          <FaHeart style={{ display: 'inline', color: '#ff6b6b', verticalAlign: -2, fontSize: 11 }} />{' '}
          using React
        </p>

        <p style={{ marginTop: 8, fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <a href="/admin" style={{ color: 'var(--text-muted)' }}>Admin Panel</a>
        </p>
      </div>
    </footer>
  );
}
