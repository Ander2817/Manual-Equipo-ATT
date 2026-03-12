import { X, Home, BookOpen, Users, Cpu, CheckSquare, FileText, GraduationCap, Award, Sparkles, Wrench, Shield, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { id: 'community-info', label: 'Información de la comunidad', icon: Users, color: 'from-purple-500 to-pink-500' },
    { id: 'intro', label: 'Introducción', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
    { id: 'safety', label: 'Seguridad', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'maintenance', label: 'Guía de Mantenimiento', icon: Wrench, color: 'from-amber-500 to-yellow-500' },
    { id: 'tools', label: 'Herramientas', icon: Wrench, color: 'from-indigo-500 to-purple-500' },
    { id: 'components', label: 'Componentes', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
    { id: 'common-issues', label: 'Fallas Comunes', icon: CheckSquare, color: 'from-rose-500 to-red-500' },
    { id: 'glossary', label: 'Glosario de términos', icon: FileText, color: 'from-teal-500 to-green-500' },
    { id: 'galeria', label: 'Galería', icon: Camera, color: 'from-pink-500 to-rose-500' },
    { id: 'team', label: 'Equipo', icon: GraduationCap, color: 'from-violet-500 to-purple-500' },
    { id: 'credits', label: 'Créditos y agradecimientos', icon: Award, color: 'from-yellow-500 to-orange-500' },
  ];

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <>
      {/* Overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-card/95 backdrop-blur-xl shadow-2xl shadow-foreground/10 z-50 transform transition-all duration-500 ease-out border-r border-border/50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="complementary"
        aria-label="Navegación lateral"
      >
        {/* Header with gradient */}
        <div className="relative p-5 border-b border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-lg shadow-primary/25">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">Secciones</h2>
                <p className="text-xs text-muted-foreground">Navega por el manual</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Cerrar menú lateral"
              className="hover:bg-destructive/10 hover:text-destructive hover:rotate-90 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-100px)]">
          <nav className="p-4" aria-label="Navegación por secciones">
            <ul className="space-y-1.5">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in-left opacity-0" >
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 hover:bg-secondary/80 group relative overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {/* Hover gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Icon container with gradient */}
                      <div className={`relative p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                      </div>
                      
                      <span className="relative text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                        {item.label}
                      </span>
                      
                      {/* Arrow indicator */}
                      <span className="relative ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground">
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Footer info */}
          <div className="p-4 mt-4 mx-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <span className="font-semibold text-foreground">Manual Técnico v2025</span>
              <br />
              UPTA "Federico Brito Figueroa"
            </p>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};
