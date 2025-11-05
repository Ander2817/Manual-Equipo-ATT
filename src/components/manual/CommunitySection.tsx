import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, Mail, MessageSquare, HelpCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

export const CommunitySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'El nombre no puede exceder 100 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    } else if (formData.email.length > 255) {
      newErrors.email = 'El correo no puede exceder 255 caracteres';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    } else if (formData.subject.trim().length > 200) {
      newErrors.subject = 'El asunto no puede exceder 200 caracteres';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'El mensaje no puede exceder 1000 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      toast.success('Mensaje enviado', {
        description: 'Gracias por contactarnos. Responderemos pronto.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } else {
      toast.error('Error en el formulario', {
        description: 'Por favor, corrige los errores indicados.',
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const faqs = [
    {
      question: '¿Quién puede usar este manual?',
      answer: 'Este manual está diseñado para técnicos de mantenimiento, supervisores, personal de facilidades y cualquier miembro de la comunidad interesado en aprender sobre mantenimiento básico y preventivo.',
    },
    {
      question: '¿Cómo puedo participar en las actividades de mantenimiento?',
      answer: 'Puedes participar asistiendo a las capacitaciones programadas, reportando problemas o anomalías, y siguiendo los procedimientos establecidos en este manual. Contacta al equipo coordinador para más información.',
    },
    {
      question: '¿Con qué frecuencia se actualiza el manual?',
      answer: 'El manual se revisa y actualiza trimestralmente o cuando hay cambios significativos en equipos, procedimientos o normativas de seguridad.',
    },
    {
      question: '¿Dónde puedo obtener capacitación adicional?',
      answer: 'El equipo desarrollador ofrece sesiones de capacitación mensuales. También puedes solicitar capacitación específica a través del formulario de contacto o durante las reuniones comunitarias.',
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
            Espacio dedicado a la participación comunitaria, preguntas frecuentes y contacto directo con el equipo.
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

        {/* Contact Form */}
        <Card className="p-8 mt-8 max-w-3xl mx-auto shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Contáctanos</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            ¿Tienes preguntas, sugerencias o necesitas asistencia? Completa el formulario y nos pondremos en contacto contigo.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  maxLength={100}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="tu@correo.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  maxLength={255}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Asunto *</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                placeholder="Motivo de tu consulta"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                maxLength={200}
              />
              {errors.subject && (
                <p id="subject-error" className="text-sm text-destructive" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                maxLength={1000}
              />
              <div className="flex justify-between">
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive" role="alert">
                    {errors.message}
                  </p>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {formData.message.length}/1000 caracteres
                  </span>
                )}
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto">
              <Send className="mr-2 h-4 w-4" aria-hidden="true" />
              Enviar mensaje
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
