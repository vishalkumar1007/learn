import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Construction } from 'lucide-react';
import { ThemeContext } from '../../App';

export default function WSL() {
  const { isDark } = useContext(ThemeContext);
  const text = isDark ? '#e8e4e0' : '#2d2a2a';
  const muted = isDark ? '#8c827a' : '#6b6560';
  const green = '#22c55e';
  const greenSoft = isDark ? 'rgba(34,197,94,0.1)' : 'rgba(34,197,94,0.1)';
  const greenBorder = isDark ? 'rgba(34,197,94,0.2)' : 'rgba(34,197,94,0.2)';
  const border = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const surface = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
  
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <header style={{
        padding: '6rem 1.5rem 3rem',
        textAlign: 'center',
        borderBottom: `1px solid ${border}`,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.875rem',
            borderRadius: '9999px',
            background: greenSoft,
            border: `1px solid ${greenBorder}`,
            color: green,
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            marginBottom: '1rem',
          }}>
            <Terminal size={14} />
            WINDOWS SUBSYSTEM FOR LINUX
          </span>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: text,
            marginBottom: '0.75rem',
          }}>
            WSL <span style={{ color: green }}>2</span>
          </h1>

          <p style={{
            color: muted,
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Run Linux natively on Windows. The best of both worlds.
          </p>
        </motion.div>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            padding: '3rem',
            borderRadius: '16px',
            background: surface,
            border: `1px solid ${border}`,
            textAlign: 'center',
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: isDark ? 'rgba(200,185,154,0.1)' : 'rgba(139,115,85,0.1)',
            border: isDark ? '1px solid rgba(200,185,154,0.2)' : '1px solid rgba(139,115,85,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}>
            <Construction size={28} style={{ color: isDark ? '#c8b99a' : '#8b7355' }} />
          </div>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: text,
            marginBottom: '0.75rem',
          }}>
            Coming Soon
          </h2>

          <p style={{
            color: muted,
            fontSize: '0.95rem',
            marginBottom: '1.5rem',
            maxWidth: '400px',
            margin: '0 auto 1.5rem',
          }}>
            We're working on a comprehensive WSL guide. Check back soon!
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.4rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              background: greenSoft,
              border: `1px solid ${greenBorder}`,
              color: green,
            }}>
              Installation
            </span>
            <span style={{
              padding: '0.4rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              border: isDark ? '1px solid rgba(59,130,246,0.2)' : '1px solid rgba(59,130,246,0.15)',
              color: '#3b82f6',
            }}>
              Commands
            </span>
            <span style={{
              padding: '0.4rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              background: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(139,92,246,0.08)',
              border: isDark ? '1px solid rgba(139,92,246,0.2)' : '1px solid rgba(139,92,246,0.15)',
              color: '#8b5cf6',
            }}>
              Docker with WSL2
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
