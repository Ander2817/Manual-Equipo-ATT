import { Card } from '@/components/ui/card';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const safetyRules = [
  {
    number: 1,
    title: 'Desconectar el equipo antes de trabajar',
    description: 'Siempre apagar y desconectar el computador de la corriente eléctrica antes de abrir el gabinete o manipular componentes.',
    objective: 'Prevenir descargas eléctricas y proteger tanto al técnico como al equipo de daños por corriente eléctrica.'
  },
  {
    number: 2,
    title: 'Evitar trabajar con electricidad estática',
    description: 'Usar pulsera antiestática o descargar la estática tocando una superficie metálica antes de tocar los componentes internos.',
    objective: 'La electricidad estática puede dañar irreparablemente los componentes electrónicos sensibles.'
  },
  {
    number: 3,
    title: 'No trabajar en ambientes húmedos',
    description: 'La humedad puede generar cortocircuitos y dañar los componentes.',
    objective: 'Evitar cortocircuitos y la oxidación de componentes electrónicos que pueden causar fallos permanentes.'
  },
  {
    number: 4,
    title: 'No usar limpiadores domésticos',
    description: 'Nunca aplicar limpiadores para vidrios, cloro o desengrasantes sobre equipos electrónicos.',
    objective: 'Los químicos domésticos pueden corroer circuitos, dejar residuos conductivos y dañar plásticos y recubrimientos.'
  },
  {
    number: 5,
    title: 'Utilizar herramientas adecuadas',
    description: 'Usar destornilladores imantados, brochas suaves, aire comprimido y alcohol isopropílico. No usar objetos metálicos filosos o improvisados.',
    objective: 'Prevenir daños físicos a los componentes, cortocircuitos y garantizar una limpieza efectiva y segura.'
  },
  {
    number: 6,
    title: 'Evitar tocar circuitos directamente con los dedos',
    description: 'La grasa natural de las manos daña contactos eléctricos y componentes delicados.',
    objective: 'Prevenir la transferencia de aceites y residuos que pueden causar mal contacto y corrosión a largo plazo.'
  },
  {
    number: 7,
    title: 'No realizar mantenimiento con el equipo encendido',
    description: 'Cualquier limpieza, revisión interna o conexión debe hacerse con el dispositivo totalmente apagado.',
    objetivo: 'Eliminar el riesgo de cortocircuitos, descargas eléctricas y daños a componentes por manipulación en caliente.'
  },
  {
    number: 8,
    title: 'Mantener cables ordenados para evitar tropiezos o tirones',
    description: 'Un tirón accidental puede dañar puertos, cables y el equipo.',
    objective: 'Prevenir accidentes físicos para el técnico y daños mecánicos al equipo por tirones o caídas.'
  },
  {
    number: 9,
    title: 'No forzar piezas',
    description: 'Si algo no encaja o no sale, revisar antes de aplicar fuerza. Podría romperse.',
    objective: 'Evitar roturas de componentes, conectores y soportes que pueden inutilizar el equipo o dificultar reparaciones futuras.'
  },
  {
    number: 10,
    title: 'Usar protección personal cuando sea necesario',
    description: 'Guantes antiestáticos, lentes protectores y mascarilla si se usa aire comprimido (para polvo acumulado).',
    objective: 'Proteger al técnico de partículas en suspensión, sustancias químicas y descargas estáticas durante el mantenimiento.'
  }
];

export const SafetySection = () => {
  return (
    <section id="safety" className="py-20 bg-secondary/30" role="region" aria-labelledby="safety-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Normas de Seguridad</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="h-12 w-12 text-primary" aria-hidden="true" />
            <h2 id="safety-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              Normas de Seguridad
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Las normas de seguridad son fundamentales para proteger tanto al técnico como al equipo durante el proceso de mantenimiento. 
            El cumplimiento de estas normas previene accidentes, daños a los componentes electrónicos y garantiza un trabajo profesional y eficiente. 
            Cada norma tiene un propósito específico que contribuye a la integridad del equipo y la seguridad del operador.
          </p>
        </div>

        {/* Alert Card */}
        <Card className="mb-12 p-6 bg-destructive/10 border-destructive/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Advertencia Importante</h3>
              <p className="text-muted-foreground">
                El incumplimiento de estas normas puede resultar en lesiones personales, daños irreparables al equipo, 
                pérdida de datos y anulación de garantías. Siempre siga estas directrices rigurosamente.
              </p>
            </div>
          </div>
        </Card>

        {/* Safety Rules Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {safetyRules.map((rule) => (
            <Card key={rule.number} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{rule.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {rule.description}
                  </p>
                  {rule.objective && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs text-primary font-medium mb-1">
                        Objetivo:
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {rule.objective}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Compromiso con la Seguridad</h3>
              <p className="text-muted-foreground">
                La seguridad es una responsabilidad compartida. Cada técnico debe conocer, comprender y aplicar 
                estas normas en todo momento. Un mantenimiento seguro es un mantenimiento exitoso.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};