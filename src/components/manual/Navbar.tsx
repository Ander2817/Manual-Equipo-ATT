import { useState, useEffect } from 'react';
import { Menu, Book, Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoUpta from '@/assets/logo-upta.png';

interface NavbarProps {
  onSearch: (query: string) => void;
  onToggleSidebar: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar = ({ onSearch, onToggleSidebar, isDarkMode, onToggleDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Scrollspy - detect active section
      const sections = ['home', 'community-info', 'intro', 'components', 'glossary', 'team', 'credits'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'community-info', label: 'Info de la comunidad' },
    { id: 'intro', label: 'Introducción' },
    { id: 'components', label: 'Componentes' },
    { id: 'glossary', label: 'Glosario de términos' },
    { id: 'team', label: 'Equipo' },
    { id: 'credits', label: 'Créditos' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-card/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-150" 
           style={{ width: `${scrollProgress}%` }} />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              aria-label="Abrir menú de navegación"
              className="hover:bg-primary/10 hover:scale-110 transition-all"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <img 
              src={logoUpta} 
              alt="Logo UPTA Federico Brito Figueroa" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform"
            />
            <div className="relative">
              <Book className="h-6 w-6 text-primary" aria-hidden="true" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Manual Técnico Interactivo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  activeSection === link.id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'text-foreground hover:bg-secondary hover:scale-105'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection !== link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                )}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="ml-2 hover:scale-110 transition-all hover:rotate-12"
              aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>
          </div>

          {/* Mobile Dark Mode Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="hover:scale-110 transition-all"
              aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
