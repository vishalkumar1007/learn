import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Docker from './pages/docker/docker';
import WSL from './pages/WSL/WSL';

export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docker" element={<Docker />} />
            <Route path="/wsl" element={<WSL />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
