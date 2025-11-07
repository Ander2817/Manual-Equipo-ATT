import { Book } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {/* About */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Book className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-bold text-lg text-foreground">Manual Técnico</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Guía interactiva para el mantenimiento preventivo y correctivo de equipos e instalaciones.
              Desarrollada por profesionales para la comunidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navegación rápida</h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Introducción', href: '#intro' },
                { label: 'Info Comunidad', href: '#community-info' },
                { label: 'Componentes', href: '#components' },
                { label: 'Glosario', href: '#glossary' },
                { label: 'Equipo', href: '#team' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Manual Técnico Interactivo. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Desarrollado con dedicación para la comunidad técnica
          </p>
        </div>
      </div>
    </footer>
  );
};
