import { Card } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Adware',
    definition: 'Software publicitario no deseado que muestra anuncios emergentes o redirecciona el navegador, puede ralentizar el sistema.',
  },
  {
    term: 'Antivirus / Antimalware',
    definition: 'Programa que detecta, elimina y previene software dañino en una computadora.',
  },
  {
    term: 'BIOS',
    definition: 'Sistema básico de entrada/salida que controla el hardware del equipo antes de cargar el sistema operativo.',
  },
  {
    term: 'Componente',
    definition: 'Parte individual del hardware del computador (ej: RAM, disco duro, fuente de poder).',
  },
  {
    term: 'Cortocircuito',
    definition: 'Contacto no deseado entre dos puntos eléctricos que provoca daño o riesgo.',
  },
  {
    term: 'Descarga Electrostática (ESD)',
    definition: 'Corriente eléctrica inesperada que se transfiere al tocar componentes, capaz de dañarlos.',
  },
  {
    term: 'Diagnóstico',
    definition: 'Proceso de identificar fallas o irregularidades en el funcionamiento del computador.',
  },
  {
    term: 'Drivers / Controladores',
    definition: 'Programas que permiten que los componentes de hardware funcionen correctamente con el sistema operativo.',
  },
  {
    term: 'GPU (Tarjeta Gráfica)',
    definition: 'Componente responsable de mostrar video e imágenes.',
  },
  {
    term: 'Hardware',
    definition: 'Componentes físicos de una computadora, como el monitor, teclado, procesador o cables.',
  },
  {
    term: 'HDMI',
    definition: 'Puerto de alta definición multimedia para transmitir video y audio digital de alta calidad.',
  },
  {
    term: 'Malware',
    definition: 'Es un tipo de software malicioso diseñado para dañar, infiltrarse o alterar el funcionamiento de una computadora, dispositivo o red sin el permiso del usuario.',
  },
  {
    term: 'Periférico',
    definition: 'Dispositivo externo que se conecta a la computadora (mouse, teclado, impresora, monitor).',
  },
  {
    term: 'Protección Personal (EPP)',
    definition: 'Elementos de seguridad usados por técnicos como guantes, lentes o mascarillas.',
  },
  {
    term: 'Puertos USB',
    definition: 'Conectores universales que permiten conectar dispositivos externos como mouse, teclado, impresoras o memorias USB.',
  },
  {
    term: 'Punto de Sistema',
    definition: 'Copia de seguridad del estado del sistema operativo que permite restaurar Windows a un momento anterior sin perder archivos personales.',
  },
  {
    term: 'SATA',
    definition: 'Tipo de cable usado para conectar dispositivos como discos duros y unidades lectoras.',
  },
  {
    term: 'SO (Sistema Operativo)',
    definition: 'Software principal que gestiona el hardware y permite ejecutar programas (Windows, Linux, macOS).',
  },
  {
    term: 'Software',
    definition: 'Programas y sistemas que permiten que la computadora funcione, como el sistema operativo o aplicaciones.',
  },
  {
    term: 'VGA',
    definition: 'Puerto analógico tradicional para conectar monitores, usa cable con 15 pines y tornillos de fijación.',
  },
];

export const GlossarySection = () => {
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
              <a href="#home" className="hover:text-primary transition-colors">
                Inicio
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">
              Glosario de Términos
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {glossaryTerms.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all hover:border-primary/50"
            >
              <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-2">
                <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{item.term}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.definition}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
