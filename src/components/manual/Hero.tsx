import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpen, Sparkles, Share2, Printer, ExternalLink, Play, Zap } from 'lucide-react';
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
        
        {/* Multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/20" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/30 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent" />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Particle field effect */}
      <ParticleField count={50} color="rgb(255, 255, 255)" className="z-5 opacity-50" />

      {/* Floating tech icons */}
      <FloatingIcons />

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-[15%] w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-[20%] w-32 h-32 bg-white/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
              boxShadow: '0 0 15px rgba(255,255,255,0.4)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-5xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6 animate-bounce-slow shadow-2xl">
            <div className="relative">
              <Zap className="h-5 w-5 text-yellow-300" aria-hidden="true" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping" />
            </div>
            <BookOpen className="h-5 w-5 text-white/90" aria-hidden="true" />
            <span className="text-sm text-white font-semibold tracking-wide">Versión 2025 • Completamente Actualizado</span>
            <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
          </div>

          {/* Title with typewriter effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            {showTypewriter ? (
              <TypewriterText 
                text="Manual Técnico Interactivo" 
                speed={50}
                className="drop-shadow-2xl"
              />
            ) : (
              <span className="opacity-0">Manual Técnico Interactivo</span>
            )}
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Guía completa para el Mantenimiento Preventivo y Correctivo de equipos e instalaciones comunitarias
          </p>

          {/* Stats row - Enhanced */}
          <div className={`flex flex-wrap justify-center gap-6 md:gap-12 py-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { number: '8+', label: 'Secciones', icon: BookOpen },
              { number: '50+', label: 'Herramientas', icon: Sparkles },
              { number: '100%', label: 'Interactivo', icon: Zap },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{stat.number}</span>
                  </div>
                </div>
                <div className="text-sm text-white/60 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons - Enhanced */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Button
              size="lg"
              onClick={scrollToIntro}
              className="group bg-white text-primary hover:bg-white/95 shadow-2xl shadow-white/20 hover:shadow-white/40 transition-all text-lg px-10 py-7 hover:scale-105 font-bold rounded-2xl"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Comenzar a explorar
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.print()}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-xl text-base px-8 py-6 hover:scale-105 hover:border-white/50 transition-all font-semibold rounded-xl"
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
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-xl px-6 py-6 hover:scale-105 transition-all rounded-xl"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              
              {showShareMenu && (
                <div className="absolute top-full mt-3 right-0 bg-card/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 p-2 min-w-[160px] animate-scale-in z-50">
                  <button
                    onClick={copyLink}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary rounded-lg transition-all hover:scale-[1.02]"
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-white/50 text-xs tracking-[0.4em] uppercase animate-pulse font-medium">Desplázate</span>
        <div className="relative">
          <div className="w-8 h-14 border-2 border-white/40 rounded-full flex items-start justify-center p-2 hover:border-white/70 transition-colors backdrop-blur-sm">
            <div className="w-2 h-5 bg-white/80 rounded-full animate-scroll-indicator shadow-lg shadow-white/30" />
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse-ring" />
        </div>
        <div className="flex gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
