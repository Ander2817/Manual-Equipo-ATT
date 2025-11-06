import { X, Home, Info, CheckSquare, Users, Cpu, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'intro', label: '¿Qué es el mantenimiento?', icon: Info },
    { id: 'scope', label: 'El mantenimiento que haremos', icon: CheckSquare },
    { id: 'community-info', label: 'Información de la comunidad', icon: Info },
    { id: 'community', label: 'Información a la comunidad', icon: Users },
    { id: 'components', label: 'Componentes', icon: Cpu },
    { id: 'funciones-componentes', label: 'Funciones de los componentes', icon: Cpu },
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
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
        role="complementary"
        aria-label="Navegación lateral"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg text-foreground">Secciones</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
            aria-label="Cerrar menú lateral"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

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
      </aside>
    </>
  );
};
