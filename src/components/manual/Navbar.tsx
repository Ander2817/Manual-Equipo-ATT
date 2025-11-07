import { useState, useEffect } from 'react';
import { Menu, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onSearch: (query: string) => void;
  onToggleSidebar: () => void;
}

export const Navbar = ({ onSearch, onToggleSidebar }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Scrollspy - detect active section
      const sections = ['home', 'intro', 'community-info', 'components', 'glossary', 'team'];
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
    { id: 'intro', label: 'Introducción' },
    { id: 'community-info', label: 'Info de la comunidad' },
    { id: 'components', label: 'Componentes' },
    { id: 'glossary', label: 'Glosario de términos' },
    { id: 'team', label: 'Equipo' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled ? 'bg-card shadow-lg' : 'bg-card/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              aria-label="Abrir menú de navegación"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Book className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="font-bold text-lg text-foreground hidden sm:inline">Manual Técnico Interactivo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
