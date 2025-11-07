import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, HelpCircle } from 'lucide-react';

export const CommunitySection = () => {
  const faqs = [
    {
      question: '¿Quién puede usar este manual?',
      answer: 'Este manual está diseñado para técnicos de mantenimiento, supervisores, personal de facilidades y cualquier miembro de la comunidad interesado en aprender sobre mantenimiento básico y preventivo.',
    },
    {
      question: '¿Qué hago en caso de emergencia?',
      answer: 'En caso de emergencia, sigue el protocolo de seguridad: asegura el área, reporta inmediatamente al coordinador de mantenimiento y no intentes reparaciones sin la debida autorización y equipo de protección.',
    },
  ];

  return (
    <section id="community" className="py-20 bg-background" role="region" aria-labelledby="community-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Comunidad</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="community-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Información a la Comunidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Espacio dedicado a la participación comunitaria y preguntas frecuentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* For Whom Section */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">¿Para Quién es Esta Guía?</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Este manual técnico interactivo ha sido desarrollado para:
              </p>
              <ul className="space-y-3">
                {[
                  'Personal técnico y de mantenimiento',
                  'Supervisores de instalaciones',
                  'Miembros de la comunidad interesados en aprender',
                  'Estudiantes de carreras técnicas',
                  'Coordinadores de proyectos comunitarios',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed pt-4">
                No se requiere experiencia técnica previa para las secciones introductorias. 
                Los procedimientos más avanzados incluyen instrucciones paso a paso.
              </p>
            </div>
          </Card>

          {/* FAQ Section */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Preguntas Frecuentes</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

      </div>
    </section>
  );
};
