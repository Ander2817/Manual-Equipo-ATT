import { Book, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-card to-card/80 border-t relative overflow-hidden" role="contentinfo">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="text-center mb-8">
          {/* About */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative">
                <Book className="h-8 w-8 text-primary" aria-hidden="true" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 animate-pulse" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Manual Técnico</span>
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
                    className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-105 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all animate-bounce-slow"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center space-y-2">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2025 Manual Técnico Interactivo. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Desarrollado con <Heart className="h-3 w-3 text-red-500 animate-pulse" /> para la comunidad técnica
          </p>
          <p className="text-xs text-muted-foreground">
            UPTA "Federico Brito Figueroa" - La Victoria
          </p>
        </div>
      </div>
    </footer>
  );
};
