import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Shield, Wrench, CheckCircle2, AlertTriangle } from 'lucide-react';
import maintenanceExternal from '@/assets/maintenance-external.jpg';
import maintenanceInternal1 from '@/assets/maintenance-internal-1.jpg';
import maintenanceInternal2 from '@/assets/maintenance-internal-2.jpg';
import maintenanceComponents from '@/assets/maintenance-components.png';
import maintenanceOptimization from '@/assets/maintenance-optimization.jpg';
import maintenanceTesting from '@/assets/maintenance-testing.jpg';
import maintenanceDiagnosis from '@/assets/maintenance-diagnosis.jpg';
import maintenanceHardware from '@/assets/maintenance-hardware.jpg';
import maintenanceWindows from '@/assets/maintenance-windows.jpg';
import maintenanceRepair from '@/assets/maintenance-repair.jpg';
import maintenanceFinal from '@/assets/maintenance-final.jpg';

export const MaintenanceGuideSection = () => {
  const [activeTab, setActiveTab] = useState('preventivo');

  const preventiveSteps = [
    {
      number: 1,
      title: 'Inspección Visual del Equipo',
      description: 'Revisar el estado físico del gabinete, conexiones, cables y puertos USB. Confirmar que no falten tornillos o tapas.',
      image: null
    },
    {
      number: 2,
      title: 'Limpieza Externa',
      description: 'Pasar un paño de microfibra por el monitor, teclado y mouse. Evitar líquidos directamente sobre el equipo.',
      image: maintenanceExternal
    },
    {
      number: 3,
      title: 'Limpieza Interna',
      description: 'Se debe realizar con aire comprimido, brochas, equipo apagado y desconectado. Quitar polvo del ventilador, fuente de poder y disipador. Verificar correcto flujo de aire.',
      image: maintenanceInternal1,
      secondaryImage: maintenanceInternal2
    },
    {
      number: 4,
      title: 'Revisión de Componentes Internos',
      description: 'Confirmar que RAM, cables SATA y tarjetas estén bien conectadas. Revisar estado del disco (sin ruidos extraños o sectores dañados).',
      image: maintenanceComponents,
      components: [
        { name: 'Motherboard', desc: 'Tarjeta Madre' },
        { name: 'CPU', desc: 'Procesador' },
        { name: 'RAM', desc: 'Memoria' },
        { name: 'GPU', desc: 'Tarjeta de vídeo' }
      ]
    },
    {
      number: 5,
      title: 'Optimización del Sistema',
      description: 'Eliminar archivos temporales y programas innecesarios. Actualizar sistema operativo y controladores. Ejecutar antivirus o antimalware.',
      image: maintenanceOptimization
    },
    {
      number: 6,
      title: 'Pruebas de Funcionamiento',
      description: 'Encender el equipo y comprobar sonido, cámara, USB, internet, programas básicos.',
      image: maintenanceTesting
    }
  ];

  const correctiveSteps = [
    {
      number: 1,
      title: 'Diagnóstico del Problema',
      description: 'Preguntar qué falló y cuándo ocurrió. Identificar si el fallo es de hardware o software.',
      image: maintenanceDiagnosis,
      issues: [
        'No enciende',
        'Se reinicia solo',
        'Va muy lento',
        'Pantalla sin señal',
        'No reconoce dispositivos'
      ]
    },
    {
      number: 2,
      title: 'Comprobación del Hardware',
      description: 'Probar fuente de poder, RAM, cables, disco duro y periféricos. Reemplazar la pieza dañada si es necesario.',
      image: maintenanceHardware
    },
    {
      number: 3,
      title: 'Revisión de Software',
      description: 'Analizar virus o archivos corruptos. Reparar sistema operativo, controladores o archivos dañados. Si es necesario, formatear y reinstalar el sistema.',
      image: maintenanceWindows
    },
    {
      number: 4,
      title: 'Corrección Aplicada',
      description: 'Registrar qué se cambió o reparó. Etiquetar piezas reemplazadas con fecha.',
      image: maintenanceRepair
    },
    {
      number: 5,
      title: 'Pruebas Finales',
      description: 'Verificar que la solución funciona. Probar rendimiento, conexión, audio, video, programas y puertos.',
      image: maintenanceFinal
    }
  ];

  return (
    <section 
      id="maintenance-guide" 
      className="py-20 bg-gradient-to-b from-secondary/30 to-background" 
      role="region" 
      aria-labelledby="maintenance-guide-heading"
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Guía para el Mantenimiento</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="maintenance-guide-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Guía para el Mantenimiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Procedimientos detallados paso a paso para realizar mantenimiento preventivo y correctivo en computadoras
          </p>
        </div>

        {/* Interactive Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1">
            <TabsTrigger 
              value="preventivo" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Shield className="h-5 w-5" />
              <div className="text-left">
                <div className="font-bold">Mantenimiento Preventivo</div>
                <div className="text-xs opacity-80">Evitar fallas antes de que ocurran</div>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="correctivo"
              className="flex items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Wrench className="h-5 w-5" />
              <div className="text-left">
                <div className="font-bold">Mantenimiento Correctivo</div>
                <div className="text-xs opacity-80">Reparar equipos con fallas</div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Preventive Maintenance Content */}
          <TabsContent value="preventivo" className="space-y-8">
            {/* Objective Card */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">✅ Objetivo</h3>
                  <p className="text-muted-foreground">
                    Mantener el equipo limpio, organizado y funcionando correctamente para evitar fallas futuras.
                  </p>
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <p className="text-sm font-medium text-foreground">📅 Frecuencia Recomendada</p>
                    <p className="text-sm text-muted-foreground">Realizar cada 3 a 6 meses</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">🔧 Pasos del Mantenimiento Preventivo</h3>
              {preventiveSteps.map((step) => (
                <Card key={step.number} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                          {step.number}
                        </div>
                        <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {step.components && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {step.components.map((comp, idx) => (
                            <div key={idx} className="text-sm p-2 bg-secondary rounded">
                              <span className="font-semibold text-foreground">{comp.name}:</span>{' '}
                              <span className="text-muted-foreground">{comp.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {(step.image || step.secondaryImage) && (
                      <div className="relative bg-secondary">
                        {step.image && (
                          <img
                            src={step.image}
                            alt={`Ilustración de ${step.title}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                        {step.secondaryImage && (
                          <img
                            src={step.secondaryImage}
                            alt={`Ilustración adicional de ${step.title}`}
                            className="absolute bottom-4 right-4 w-32 h-32 object-cover rounded-lg border-2 border-background shadow-lg"
                            loading="lazy"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Corrective Maintenance Content */}
          <TabsContent value="correctivo" className="space-y-8">
            {/* Objective Card */}
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">🎯 Objetivo</h3>
                  <p className="text-muted-foreground">
                    Solucionar fallas o problemas que impiden el funcionamiento normal del equipo.
                  </p>
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-2">📍 Se realiza cuando el equipo presenta fallas como:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['No enciende', 'Se reinicia solo', 'Va muy lento', 'Pantalla sin señal', 'No reconoce dispositivos'].map((issue, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">🔍 Pasos del Mantenimiento Correctivo</h3>
              {correctiveSteps.map((step) => (
                <Card key={step.number} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col justify-center order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive text-destructive-foreground font-bold text-lg">
                          {step.number}
                        </div>
                        <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {step.issues && (
                        <div className="space-y-2 mt-2">
                          <p className="text-sm font-semibold text-foreground">Problemas comunes detectados:</p>
                          <ul className="space-y-1">
                            {step.issues.map((issue, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <AlertTriangle className="h-3 w-3 text-destructive" />
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {step.image && (
                      <div className="relative bg-secondary order-1 md:order-2">
                        <img
                          src={step.image}
                          alt={`Ilustración de ${step.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};