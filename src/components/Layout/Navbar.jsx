import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Container, Terminal } from 'lucide-react';
import { ThemeContext } from '../../App';

const learningLinks = [
  { path: '/docker', label: 'Docker', icon: Container },
  { path: '/wsl', label: 'WSL', icon: Terminal },
];

const navLinks = [
  { path: 'https://vishalkumar1007.github.io', label: 'My Portfolio' }
];

export default function Navbar() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isLearningPage = learningLinks.some(l => location.pathname === l.path);

  const bg = isDark ? 'rgba(33, 31, 31, 0.28)' : 'rgba(245, 244, 242, 0.15)';
  const border = isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)';
  const textPrimary = isDark ? '#e8e4e0' : '#2d2a2a';
  const textMuted = isDark ? '#9a8f85' : '#6b6560';
  const accent = isDark ? '#c8b99a' : '#8b7355';
  const accentMuted = isDark ? 'rgba(200,185,154,0.12)' : 'rgba(139,115,85,0.12)';
  const accentBorder = isDark ? 'rgba(200,185,154,0.2)' : 'rgba(139,115,85,0.2)';
  const bgLight = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const borderLight = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bgMenu = isDark ? 'rgba(33,31,31,0.97)' : 'rgba(245,244,242,0.97)';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: bg,
      backdropFilter: 'blur(14px)',
      borderBottom: border,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: accentMuted,
              border: `1px solid ${accentBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontWeight: 700, color: accent,
            }}>
              V
            </div>
            <span style={{ fontWeight: 600, color: textPrimary, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
              Learn
            </span>
          </Link>

          <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '2rem' , maxWidth: '700px', flex: 1, justifyContent: 'center' , overflowX: 'auto', paddingBottom: '4px' , scrollbarWidth: 'none' }}>
            {isLearningPage && learningLinks.map(l => {
              const Icon = l.icon;
              return (
                <Link
                  key={l.path}
                  to={l.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    color: location.pathname === l.path ? accent : textMuted,
                    transition: 'color 0.2s',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}
                  onMouseOver={e => e.currentTarget.style.color = textPrimary}
                  onMouseOut={e => e.currentTarget.style.color = location.pathname === l.path ? accent : textMuted}
                >
                  <Icon size={16} />
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setIsDark(!isDark)}
              style={{
                padding: '0.45rem', borderRadius: '6px',
                background: bgLight,
                border: `1px solid ${borderLight}`,
                color: textMuted, cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = accentBorder; e.currentTarget.style.color = accent; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = borderLight; e.currentTarget.style.color = textMuted; }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: isMobile ? 'flex' : 'none',
                background: 'none', border: 'none', cursor: 'pointer',
                color: textMuted, fontSize: '1.2rem', padding: '0.25rem',
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: bgMenu,
              borderTop: border,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map(link => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem', borderRadius: '8px',
                    fontSize: '0.9rem', color: textMuted, textDecoration: 'none',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = bgLight; e.currentTarget.style.color = textPrimary; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = textMuted; }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ borderTop: border, marginTop: '0.5rem', paddingTop: '0.75rem' }}>
                {learningLinks.map(l => {
                  const Icon = l.icon;
                  return (
                    <Link
                      key={l.path}
                      to={l.path}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        padding: '0.65rem 1rem', borderRadius: '8px',
                        fontSize: '0.85rem', color: textMuted, textDecoration: 'none',
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        transition: 'background 0.15s, color 0.15s',
                      }}
                      onMouseOver={e => { e.currentTarget.style.background = bgLight; e.currentTarget.style.color = textPrimary; }}
                      onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = textMuted; }}
                    >
                      <Icon size={18} />
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
