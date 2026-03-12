import { useState, useMemo, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface GlossaryTerm {
  term: string;
  definition: string;
}

const glossaryTerms: GlossaryTerm[] = [
  { term: 'Adware', definition: 'Software publicitario no deseado que muestra anuncios emergentes o redirecciona el navegador, puede ralentizar el sistema.' },
  { term: 'Antivirus / Antimalware', definition: 'Programa que detecta, elimina y previene software dañino en una computadora.' },
  { term: 'BIOS', definition: 'Sistema básico de entrada/salida que controla el hardware del equipo antes de cargar el sistema operativo.' },
  { term: 'Componente', definition: 'Parte individual del hardware del computador (ej: RAM, disco duro, fuente de poder).' },
  { term: 'Cortocircuito', definition: 'Contacto no deseado entre dos puntos eléctricos que provoca daño o riesgo.' },
  { term: 'Descarga Electrostática (ESD)', definition: 'Corriente eléctrica inesperada que se transfiere al tocar componentes, capaz de dañarlos.' },
  { term: 'Diagnóstico', definition: 'Proceso de identificar fallas o irregularidades en el funcionamiento del computador.' },
  { term: 'Drivers / Controladores', definition: 'Programas que permiten que los componentes de hardware funcionen correctamente con el sistema operativo.' },
  { term: 'GPU (Tarjeta Gráfica)', definition: 'Componente responsable de mostrar video e imágenes.' },
  { term: 'Hardware', definition: 'Componentes físicos de una computadora, como el monitor, teclado, procesador o cables.' },
  { term: 'HDMI', definition: 'Puerto de alta definición multimedia para transmitir video y audio digital de alta calidad.' },
  { term: 'Malware', definition: 'Es un tipo de software malicioso diseñado para dañar, infiltrarse o alterar el funcionamiento de una computadora, dispositivo o red sin el permiso del usuario.' },
  { term: 'Periférico', definition: 'Dispositivo externo que se conecta a la computadora (mouse, teclado, impresora, monitor).' },
  { term: 'Protección Personal (EPP)', definition: 'Elementos de seguridad usados por técnicos como guantes, lentes o mascarillas.' },
  { term: 'Puertos USB', definition: 'Conectores universales que permiten conectar dispositivos externos como mouse, teclado, impresoras o memorias USB.' },
  { term: 'Punto de Sistema', definition: 'Copia de seguridad del estado del sistema operativo que permite restaurar Windows a un momento anterior sin perder archivos personales.' },
  { term: 'SATA', definition: 'Tipo de cable usado para conectar dispositivos como discos duros y unidades lectoras.' },
  { term: 'SO (Sistema Operativo)', definition: 'Software principal que gestiona el hardware y permite ejecutar programas (Windows, Linux, macOS).' },
  { term: 'Software', definition: 'Programas y sistemas que permiten que la computadora funcione, como el sistema operativo o aplicaciones.' },
  { term: 'VGA', definition: 'Puerto analógico tradicional para conectar monitores, usa cable con 15 pines y tornillos de fijación.' },
];

export const GlossarySection = () => {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const filtered = glossaryTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase())
    );
    const groups: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((t) => {
      const letter = t.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(t);
    });
    return groups;
  }, [search]);

  const allLetters = useMemo(() => {
    const letters = new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()));
    return Array.from(letters).sort();
  }, []);

  const availableLetters = Object.keys(groupedTerms).sort();

  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    sectionRefs.current[letter]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const highlightMatch = (text: string) => {
    if (!search) return text;
    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/25 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <section
      id="glossary"
      className="py-20 bg-gradient-to-b from-secondary/30 to-background"
      role="region"
      aria-labelledby="glossary-heading"
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">Inicio</a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Glosario de Términos</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-12 w-12 text-primary" aria-hidden="true" />
            <h2 id="glossary-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              Glosario de Términos
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Definiciones claras de los conceptos técnicos más importantes relacionados con el mantenimiento de computadoras.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Buscar término o palabra clave..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveLetter(null); }}
              className="pl-10 pr-10 h-12 text-base bg-card/80 backdrop-blur-sm border-border/50 focus:border-primary/50 rounded-xl"
            />
            {search && (
              <button
                onClick={() => { setSearch(''); setActiveLetter(null); }}
                className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Letter Index */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10 max-w-3xl mx-auto">
          {allLetters.map((letter) => {
            const isAvailable = availableLetters.includes(letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => isAvailable && scrollToLetter(letter)}
                disabled={!isAvailable}
                className={`
                  w-9 h-9 rounded-lg text-sm font-bold transition-all duration-300
                  ${isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                    : isAvailable
                      ? 'bg-card border border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-md'
                      : 'bg-muted/30 text-muted-foreground/40 cursor-not-allowed'
                  }
                `}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        {search && (
          <p className="text-center text-sm text-muted-foreground mb-6 animate-fade-in">
            {Object.values(groupedTerms).flat().length} resultado(s) encontrado(s)
          </p>
        )}

        {/* Grouped Terms */}
        {availableLetters.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No se encontraron términos para "{search}"</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto space-y-10">
            {availableLetters.map((letter) => (
              <div
                key={letter}
                ref={(el) => { sectionRefs.current[letter] = el; }}
                className="scroll-mt-24"
              >
                {/* Letter Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-2xl shadow-lg shadow-primary/20">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  <span className="text-xs text-muted-foreground">
                    {groupedTerms[letter].length} término(s)
                  </span>
                </div>

                {/* Terms Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedTerms[letter].map((item, index) => (
                    <Card
                      key={item.term}
                      className="glossary-card p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 group"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <h3 className="text-base font-bold text-primary mb-2 flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        <span>{highlightMatch(item.term)}</span>
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlightMatch(item.definition)}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .glossary-card {
          animation: glossaryFadeIn 0.4s ease-out both;
        }
        @keyframes glossaryFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};
