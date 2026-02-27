import { useContext } from 'react';
import { ThemeContext } from '../../App';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar />
      <main style={{ paddingTop: '10px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
