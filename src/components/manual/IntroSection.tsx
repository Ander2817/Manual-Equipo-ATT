import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Shield, Wrench, AlertCircle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const IntroSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  const maintenanceTypes = [
    {
      id: 'preventivo',
      title: 'Mantenimiento Preventivo',
      icon: Shield,
      description: 'Acciones planificadas para evitar fallas antes de que ocurran.',
      details: 'El Mantenimiento Preventivo incluye inspecciones regulares, lubricación, ajustes y reemplazo de componentes según calendario. Ayuda a extender la vida útil de los equipos y reducir costos a largo plazo.',
      benefits: ['Reduce paradas inesperadas', 'Aumenta vida útil', 'Mejora seguridad', 'Optimiza costos'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'correctivo',
      title: 'Mantenimiento Correctivo',
      icon: Wrench,
      description: 'Reparaciones realizadas después de detectar una falla o avería.',
      details: 'Este tipo de Mantenimiento se aplica cuando un equipo ya ha fallado. Incluye diagnóstico del problema, reparación o reemplazo de componentes dañados y pruebas de funcionamiento.',
      benefits: ['Restaura funcionalidad', 'Soluciona problemas inmediatos', 'Aprende de fallas', 'Actualiza registros'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden" role="region" aria-labelledby="intro-heading">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Introducción</li>
          </ol>
        </nav>

        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Fundamentos esenciales</span>
          </div>
          <h2 id="intro-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            ¿Qué es el mantenimiento?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            El Mantenimiento es el conjunto de acciones necesarias para conservar o restablecer un equipo 
            o instalación en condiciones óptimas de funcionamiento, seguridad y eficiencia.
          </p>
        </div>

        {/* Main Content Card */}
        <div
          ref={cardRef}
          className={`transition-all duration-700 delay-200 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Card className="p-8 mb-12 shadow-lg border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl animate-glow-pulse">
                <AlertCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Importancia del Mantenimiento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un programa de Mantenimiento bien estructurado garantiza la continuidad operativa, 
                  prolonga la vida útil de los activos, reduce costos operativos y, lo más importante, 
                  protege la seguridad de las personas que utilizan las instalaciones.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Accordion for Maintenance Types */}
        <div 
          ref={accordionRef}
          className={`max-w-4xl mx-auto transition-all duration-700 delay-400 ${accordionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Tipos de Mantenimiento
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {maintenanceTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <AccordionItem 
                  key={type.id} 
                  value={type.id} 
                  className="border rounded-xl bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 bg-gradient-to-br ${type.color} rounded-lg shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-foreground">{type.title}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 pt-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {type.details}
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Beneficios principales:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground group">
                              <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${type.color} group-hover:scale-150 transition-transform`} aria-hidden="true" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
