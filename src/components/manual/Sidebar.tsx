import { X, Home, Info, CheckSquare, Users, Cpu, UserCheck, Wrench, ShieldCheck, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'intro', label: '¿Qué es el mantenimiento?', icon: Info },
    { id: 'safety', label: 'Normas de Seguridad', icon: ShieldCheck },
    { id: 'maintenance-guide', label: 'Guía para el Mantenimiento', icon: Wrench },
    { id: 'tools', label: 'Herramientas para Mantenimiento', icon: Wrench },
    { id: 'community-info', label: 'Información de la comunidad', icon: Info },
    { id: 'community', label: 'Información a la comunidad', icon: Users },
    { id: 'components', label: 'Componentes', icon: Cpu },
    { id: 'funciones-componentes', label: 'Funciones de los componentes', icon: Cpu },
    { id: 'glossary', label: 'Glosario de Términos', icon: BookOpen },
    { id: 'team', label: 'Equipo desarrollador', icon: UserCheck },
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
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="complementary"
        aria-label="Navegación lateral"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg text-foreground">Secciones</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Cerrar menú lateral"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-80px)]">
          <nav className="p-4" aria-label="Navegación por secciones">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors hover:bg-secondary group"
                    >
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary" aria-hidden="true" />
                      <span className="text-sm text-foreground group-hover:text-foreground">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
};
