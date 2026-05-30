import { Footer } from '../components/Footer.jsx';
import { Navbar } from '../components/Navbar.jsx';
import { useTheme } from '../hooks/useTheme.js';

export function MainLayout({ children }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-hidden bg-radial-grid">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
