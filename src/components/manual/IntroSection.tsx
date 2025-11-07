import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Shield, Wrench, AlertCircle } from 'lucide-react';

export const IntroSection = () => {
  const maintenanceTypes = [
    {
      id: 'preventivo',
      title: 'Mantenimiento Preventivo',
      icon: Shield,
      description: 'Acciones planificadas para evitar fallas antes de que ocurran.',
      details: 'El mantenimiento preventivo incluye inspecciones regulares, lubricación, ajustes y reemplazo de componentes según calendario. Ayuda a extender la vida útil de los equipos y reducir costos a largo plazo.',
      benefits: ['Reduce paradas inesperadas', 'Aumenta vida útil', 'Mejora seguridad', 'Optimiza costos'],
    },
    {
      id: 'correctivo',
      title: 'Mantenimiento Correctivo',
      icon: Wrench,
      description: 'Reparaciones realizadas después de detectar una falla o avería.',
      details: 'Este tipo de mantenimiento se aplica cuando un equipo ya ha fallado. Incluye diagnóstico del problema, reparación o reemplazo de componentes dañados y pruebas de funcionamiento.',
      benefits: ['Restaura funcionalidad', 'Soluciona problemas inmediatos', 'Aprende de fallas', 'Actualiza registros'],
    },
  ];

  return (
    <section id="intro" className="py-20 bg-background" role="region" aria-labelledby="intro-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Introducción</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="intro-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Qué es el mantenimiento?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            El mantenimiento es el conjunto de acciones necesarias para conservar o restablecer un equipo 
            o instalación en condiciones óptimas de funcionamiento, seguridad y eficiencia.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <AlertCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Importancia del Mantenimiento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un programa de mantenimiento bien estructurado garantiza la continuidad operativa, 
                prolonga la vida útil de los activos, reduce costos operativos y, lo más importante, 
                protege la seguridad de las personas que utilizan las instalaciones.
              </p>
            </div>
          </div>
        </Card>

        {/* Accordion for Maintenance Types */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Tipos de Mantenimiento
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {maintenanceTypes.map((type) => {
              const Icon = type.icon;
              return (
                <AccordionItem key={type.id} value={type.id} className="border rounded-lg bg-card shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
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
                          {type.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
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
