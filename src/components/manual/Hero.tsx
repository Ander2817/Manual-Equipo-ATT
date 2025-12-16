import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpen, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-maintenance.jpg';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToIntro = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      role="banner"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Taller de mantenimiento técnico profesional"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/80" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 animate-bounce-slow">
            <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" aria-hidden="true" />
            <BookOpen className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-sm text-white font-medium">Versión 2025 - Actualizado</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-text-glow">
            Manual Técnico Interactivo
          </h1>

          <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Guía completa para el mantenimiento preventivo y correctivo de equipos e instalaciones comunitarias
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Button
              size="lg"
              onClick={scrollToIntro}
              className="group bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:shadow-white/25 transition-all text-lg px-8 py-6 hover:scale-105"
            >
              Comenzar a explorar
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.print()}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 hover:scale-105 hover:border-white/50 transition-all"
            >
              Descargar PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase animate-pulse">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white transition-colors">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};
