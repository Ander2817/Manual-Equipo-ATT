import { useState, useEffect } from 'react';
import { Search, Menu, X, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onSearch: (query: string) => void;
  onToggleSidebar: () => void;
}

export const Navbar = ({ onSearch, onToggleSidebar }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Scrollspy - detect active section
      const sections = ['home', 'intro', 'scope', 'community-info', 'community', 'components', 'funciones-componentes', 'team'];
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'intro', label: 'Introducción' },
    { id: 'scope', label: 'Alcance' },
    { id: 'community-info', label: 'Info Comunidad' },
    { id: 'community', label: 'Comunidad' },
    { id: 'components', label: 'Componentes' },
    { id: 'funciones-componentes', label: 'Funciones' },
    { id: 'team', label: 'Equipo' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-card shadow-lg' : 'bg-card/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Book className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="font-bold text-lg text-foreground">Manual Técnico Interactivo</span>
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

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 max-w-xs">
            <Input
              type="search"
              placeholder="Buscar en el manual..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
              aria-label="Buscar en el manual"
            />
            <Button 
              type="submit" 
              size="icon" 
              variant="default"
              aria-label="Ejecutar búsqueda"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};
