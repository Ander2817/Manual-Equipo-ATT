import { useState, useEffect } from 'react';
import { Menu, Book, Moon, Sun, Sparkles, ChevronDown } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-card/90 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border/50' 
          : 'bg-card/60 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
      
      {/* Scroll Progress Indicator - Enhanced */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-150 shadow-glow" 
           style={{ width: `${scrollProgress}%` }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              aria-label="Abrir menú de navegación"
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 hover:rotate-3"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={logoUpta} 
                alt="Logo UPTA Federico Brito Figueroa" 
                className="relative h-11 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <Book className="relative h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
            </div>
            
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground tracking-tight">
                Manual Técnico
              </span>
              <span className="hidden md:inline text-lg text-muted-foreground font-normal ml-1">
                Interactivo
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Hover shine effect */}
                {activeSection !== link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                )}
                
                {/* Active indicator dot */}
                {activeSection === link.id && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full" />
                )}
              </a>
            ))}
            
            {/* Dark Mode Toggle - Enhanced */}
            <div className="ml-3 pl-3 border-l border-border/50">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleDarkMode}
                className="relative hover:scale-110 transition-all duration-300 hover:bg-transparent group"
                aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                {isDarkMode ? (
                  <Sun className="relative h-5 w-5 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)] transition-all group-hover:rotate-90 duration-500" />
                ) : (
                  <Moon className="relative h-5 w-5 text-primary transition-all group-hover:-rotate-12 duration-300" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Dark Mode Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="hover:scale-110 transition-all duration-300"
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
