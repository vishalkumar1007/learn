import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, Terminal, ArrowRight, BookMarked, Code2, Sparkles } from 'lucide-react';
import { ThemeContext } from '../../App';

const topics = [
  {
    id: 'docker',
    icon: Container,
    title: 'Docker',
    description: 'Master containerization. Package, ship, and run applications consistently across environments.',
    color: '#3b82f6',
    path: '/docker',
    tags: ['Containers', 'Images', 'Dockerfile'],
  },
  {
    id: 'wsl',
    icon: Terminal,
    title: 'WSL',
    description: 'Run Linux on Windows. Get the best of both worlds for development.',
    color: '#22c55e',
    path: '/wsl',
    tags: ['Linux', 'Windows', 'Kernel'],
  }
];

const features = [
  {
    icon: BookMarked,
    title: 'Structured Learning',
    description: 'Follow step-by-step guides from basics to advanced concepts.',
  },
  {
    icon: Code2,
    title: 'Practical Examples',
    description: 'Learn by doing with real-world code examples and projects.',
  },
  {
    icon: Sparkles,
    title: 'Modern Tech',
    description: 'Stay current with the latest tools and best practices.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const { isDark } = useContext(ThemeContext);
  
  const bg = isDark ? 'rgba(33,31,31,0.85)' : 'rgba(245,244,242,0.85)';
  const textPrimary = isDark ? '#e8e4e0' : '#2d2a2a';
  const textMuted = isDark ? '#8c827a' : '#6b6560';
  const accent = isDark ? '#c8b99a' : '#8b7355';
  const accentMuted = isDark ? 'rgba(200,185,154,0.1)' : 'rgba(139,115,85,0.1)';
  const accentBorder = isDark ? 'rgba(200,185,154,0.2)' : 'rgba(139,115,85,0.2)';
  const cardBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const cardBgHover = isDark ? 'rgba(200,185,154,0.04)' : 'rgba(139,115,85,0.04)';
  const cardBorderHover = isDark ? 'rgba(200,185,154,0.25)' : 'rgba(139,115,85,0.25)';
  const btnBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const btnBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const subtleBorder = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '8rem 1.5rem 6rem',
        overflow: 'hidden',
      }}>
        {/* Subtle background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: isDark ? 'radial-gradient(ellipse at top, rgba(200,185,154,0.08) 0%, transparent 60%)' : 'radial-gradient(ellipse at top, rgba(139,115,85,0.1) 0%, transparent 60%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              background: accentMuted,
              border: `1px solid ${accentBorder}`,
              color: accent,
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
            }}
          >
            <Sparkles size={14} />
            <span>My Collection Of Learning</span>
          </motion.div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            color: textPrimary,
          }}>
            Feel The
            <br />
            <span style={{ color: accent }}>Technology</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: textMuted,
            marginBottom: '2.5rem',
            maxWidth: '540px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            The collection is designed the way i learn - i make it live becuause may be it help you also .
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/docker"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '10px',
                background: accent,
                color: isDark ? '#211f1f' : '#f5f4f2',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              Start Learning
              <ArrowRight size={18} />
            </Link>
            <a
              href="#topics"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '10px',
                background: btnBg,
                border: `1px solid ${btnBorder}`,
                color: textPrimary,
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              Browse Topics
            </a>
          </div>
        </motion.div>
      </section>

      {/* Topics Section */}
      <section id="topics" style={{ padding: '4rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
              color: textPrimary,
            }}>
              Explore <span style={{ color: accent }}>Topics</span>
            </h2>
            <p style={{ color: textMuted, maxWidth: '400px', margin: '0 auto' }}>
              Choose a topic to start your learning journey.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <motion.div key={topic.id} variants={item}>
                  <Link
                    to={topic.path}
                    style={{
                      display: 'block',
                      padding: '1.75rem',
                      borderRadius: '16px',
                      background: cardBg,
                      border: `1px solid ${cardBorder}`,
                      textDecoration: 'none',
                      transition: 'all 0.25s',
                      height: '100%',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.borderColor = cardBorderHover;
                      e.currentTarget.style.background = cardBgHover;
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.borderColor = cardBorder;
                      e.currentTarget.style.background = cardBg;
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: topic.color + '15',
                      border: topic.color + '25',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <Icon size={24} style={{ color: topic.color }} />
                    </div>

                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      color: textPrimary,
                    }}>
                      {topic.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: textMuted,
                      marginBottom: '1rem',
                      lineHeight: 1.6,
                    }}>
                      {topic.description}
                    </p>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {topic.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: '0.25rem 0.6rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            background: btnBg,
                            color: textMuted,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '4rem 1.5rem 6rem',
        background: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
        borderTop: `1px solid ${subtleBorder}`,
        borderBottom: `1px solid ${subtleBorder}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
              color: textPrimary,
            }}>
              Why <span style={{ color: accent }}>Learn Here</span>
            </h2>
            <p style={{ color: textMuted, maxWidth: '400px', margin: '0 auto' }}>
              Focused on practical knowledge you can apply immediately.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    padding: '1.75rem',
                    borderRadius: '16px',
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: accentMuted,
                    border: `1px solid ${accentBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: textPrimary,
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: textMuted, lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
