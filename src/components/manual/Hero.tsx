import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpen, Sparkles, Share2, Printer, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-maintenance.jpg';
import { TypewriterText } from '@/components/effects/TypewriterText';
import { FloatingIcons } from '@/components/effects/FloatingIcons';
import { ParticleField } from '@/components/effects/ParticleField';
import { useParallax } from '@/hooks/useParallax';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const parallaxOffset = useParallax(0.3);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowTypewriter(true), 500);
  }, []);

  const scrollToIntro = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Manual Técnico Interactivo - UPTA',
          text: 'Guía completa para el mantenimiento de equipos',
          url: window.location.href,
        });
      } catch (err) {
        setShowShareMenu(!showShareMenu);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  }, [showShareMenu]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      role="banner"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={heroImage}
          alt="Taller de mantenimiento técnico profesional"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent animate-pulse" />
      </div>

      {/* Particle field effect */}
      <ParticleField count={40} color="rgb(255, 255, 255)" className="z-5 opacity-40" />

      {/* Floating tech icons */}
      <FloatingIcons />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
              boxShadow: '0 0 10px rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-4 animate-bounce-slow shadow-lg">
            <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" aria-hidden="true" />
            <BookOpen className="h-5 w-5 text-white" aria-hidden="true" />
            <span className="text-sm text-white font-semibold tracking-wide">Versión 2025 - Actualizado</span>
          </div>

          {/* Title with typewriter effect */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {showTypewriter ? (
              <TypewriterText 
                text="Manual Técnico Interactivo" 
                speed={60}
                className="animate-text-glow"
              />
            ) : (
              <span className="opacity-0">Manual Técnico Interactivo</span>
            )}
          </h1>

          <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Guía completa para el mantenimiento preventivo y correctivo de equipos e instalaciones comunitarias
          </p>

          {/* Stats row */}
          <div className={`flex flex-wrap justify-center gap-8 py-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { number: '8+', label: 'Secciones' },
              { number: '50+', label: 'Herramientas' },
              { number: '100%', label: 'Interactivo' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white animate-text-glow">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Button
              size="lg"
              onClick={scrollToIntro}
              className="group bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:shadow-white/30 transition-all text-lg px-8 py-6 hover:scale-105 font-semibold"
            >
              Comenzar a explorar
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.print()}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md text-lg px-8 py-6 hover:scale-105 hover:border-white/50 transition-all font-semibold"
            >
              <Printer className="mr-2 h-5 w-5" />
              Imprimir
            </Button>

            {/* Share button */}
            <div className="relative">
              <Button
                size="lg"
                variant="outline"
                onClick={handleShare}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md text-lg px-6 py-6 hover:scale-105 transition-all"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              
              {showShareMenu && (
                <div className="absolute top-full mt-2 right-0 bg-card/95 backdrop-blur-md rounded-lg shadow-xl border border-border p-2 min-w-[150px] animate-fade-in z-50">
                  <button
                    onClick={copyLink}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Copiar enlace
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/60 text-xs tracking-[0.3em] uppercase animate-pulse font-medium">Desplázate</span>
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white transition-colors backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/90 rounded-full animate-scroll-indicator shadow-lg shadow-white/30" />
        </div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 rounded-full bg-white/50 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
