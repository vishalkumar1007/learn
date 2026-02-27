import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';

const learningLinks = [
  { path: '/docker', label: 'Docker' },
  { path: '/wsl',    label: 'WSL' },
  { path: '/react',  label: 'React' },
  { path: '/node',   label: 'Node.js' },
];

const socialLinks = [
  { href: '#', label: 'GitHub' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Twitter' },
];

export default function Footer() {
  const { isDark } = useContext(ThemeContext);
  const border = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const bg = isDark ? '#211f1f' : '#f5f4f2';
  const textPrimary = isDark ? '#e8e4e0' : '#2d2a2a';
  const textMuted = isDark ? '#6b6360' : '#6b6560';
  const accent = isDark ? '#c8b99a' : '#8b7355';
  const subtle = isDark ? '#4a4644' : '#a8a29e';

  const linkStyle = {
    textDecoration: 'none',
    fontSize: '0.82rem',
    color: textMuted,
    transition: 'color 0.2s',
  };

  return (
    <footer style={{
      borderTop: `1px solid ${border}`,
      background: bg,
      padding: '3rem 1.5rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '6px',
                background: isDark ? 'rgba(200,185,154,0.1)' : 'rgba(139,115,85,0.1)', 
                border: isDark ? '1px solid rgba(200,185,154,0.18)' : '1px solid rgba(139,115,85,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700, color: accent,
              }}>L</div>
              <span style={{ fontWeight: 600, color: textPrimary, fontSize: '0.9rem' }}>LearnHub</span>
            </Link>
            <p style={{ fontSize: '0.8rem', color: textMuted, lineHeight: 1.6, maxWidth: '200px' }}>
              Learn modern development technologies with interactive tutorials.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: textMuted, marginBottom: '1rem' }}>Notes</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {learningLinks.map(l => (
                <Link
                  key={l.path}
                  to={l.path}
                  style={linkStyle}
                  onMouseOver={e => e.currentTarget.style.color = accent}
                  onMouseOut={e => e.currentTarget.style.color = textMuted}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: textMuted, marginBottom: '1rem' }}>Site</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['About', 'Projects', 'Contact'].map(s => (
                <a
                  key={s}
                  href={`/#${s.toLowerCase()}`}
                  style={linkStyle}
                  onMouseOver={e => e.currentTarget.style.color = accent}
                  onMouseOut={e => e.currentTarget.style.color = textMuted}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: textMuted, marginBottom: '1rem' }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  style={linkStyle}
                  onMouseOver={e => e.currentTarget.style.color = accent}
                  onMouseOut={e => e.currentTarget.style.color = textMuted}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: border,
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <p style={{ fontSize: '0.78rem', color: subtle }}>
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
          <p style={{ fontSize: '0.78rem', color: subtle }}>
            Built with React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
