import { useState } from 'react';
import { Wrench, Search, Shield, Hammer, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Importar imágenes
import toolsAssembly1 from '@/assets/tools-screwdriver-new.jpg';
import toolsAssembly2 from '@/assets/tools-antistatic-new.jpg';
import toolsAssembly3 from '@/assets/tools-software-new.jpg';
import toolsDiagnostic1 from '@/assets/tools-hardware-tester-new.jpg';
import toolsDiagnostic2 from '@/assets/tools-cleaning-new.jpg';
import toolsDiagnostic3 from '@/assets/tools-diagnostic-3.jpg';
import toolsPreventive1 from '@/assets/tools-multimeter-new.jpg';
import toolsPreventive2 from '@/assets/tools-blower-new.jpg';
import toolsPreventive3 from '@/assets/tools-desoldering-new.jpg';
import toolsCorrective1 from '@/assets/tools-alcohol-new.jpg';
import toolsCorrective2 from '@/assets/tools-corrective-2.jpg';
import toolsCorrective3 from '@/assets/tools-corrective-3.jpg';
import toolsChemical1 from '@/assets/tools-solder-new.jpg';
import toolsChemical2 from '@/assets/tools-thermal-paste-new.jpg';

const toolCategories = [
  {
    id: 'ensamblaje',
    title: 'Ensamblaje',
    icon: Wrench,
    color: 'from-blue-500 to-cyan-500',
    description: 'Herramientas utilizadas para ensamblar y desensamblar todas las partes del equipo de cómputo.',
    tools: [
      {
        name: 'Destornillador',
        description: 'Herramienta esencial para apretar o aflojar tornillos. Incluye varios tipos: Phillips, plano trapezoidal, Pozidriv y Allen, cada uno diseñado para diferentes tipos de tornillos.',
        image: toolsAssembly1
      },
      {
        name: 'Pulsera Antiestática',
        description: 'Dispositivo de seguridad que se ajusta a la muñeca y se conecta a tierra para mantenerte libre de energía estática, protegiendo los componentes sensibles del equipo.',
        image: toolsAssembly2
      },
      {
        name: 'Kit de Tornillos y Herramientas',
        description: 'Conjunto completo que incluye separador de tornillos para organización, imán para recuperar tornillos en lugares difíciles, pinzas para manipular componentes pequeños y alfombrilla antiestática.',
        image: toolsAssembly3
      }
    ]
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico',
    icon: Search,
    color: 'from-purple-500 to-pink-500',
    description: 'Herramientas que permiten identificar el origen de fallas o problemas en computadoras, tanto a nivel de hardware como software.',
    tools: [
      {
        name: 'Herramientas de Software',
        description: 'Programas especializados como Speccy (información del sistema), CrystalDiskInfo (estado de discos), Antivirus (detección de malware) y Windows Memory Diagnostic (prueba de RAM).',
        image: toolsDiagnostic1
      },
      {
        name: 'Probadores de Hardware',
        description: 'Dispositivos como probadores de puertos USB, cables de red y tomas corrientes que permiten verificar rápidamente el funcionamiento de conexiones y componentes físicos.',
        image: toolsDiagnostic2
      },
      {
        name: 'Antivirus Profesionales',
        description: 'Software de protección como Norton, Avira, Kaspersky, Avast y Malwarebytes que detectan y eliminan amenazas, ideal para diagnosticar problemas de rendimiento causados por malware.',
        image: toolsDiagnostic3
      }
    ]
  },
  {
    id: 'preventivo',
    title: 'Preventivo',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    description: 'Herramientas utilizadas para prevenir el surgimiento de averías mediante mantenimiento regular y cuidado preventivo.',
    tools: [
      {
        name: 'Herramientas de Limpieza',
        description: 'Incluyen linterna para inspección visual, brocha para limpieza interna, sopladora para eliminar polvo de forma segura, trapo antiestático, cepillo suave y borrador nata para limpiar RAM.',
        image: toolsPreventive1
      },
      {
        name: 'Multímetro Digital',
        description: 'Instrumento de medición que permite verificar voltaje, corriente y resistencia, crucial para diagnosticar y prevenir problemas eléctricos en componentes del PC.',
        image: toolsPreventive2
      },
      {
        name: 'Sopladora y Limpieza',
        description: 'Herramienta especializada para eliminar polvo de manera segura y eficiente de componentes internos como ventiladores, disipadores y ranuras de expansión sin dañarlos.',
        image: toolsPreventive3
      }
    ]
  },
  {
    id: 'correctivo',
    title: 'Correctivo',
    icon: Hammer,
    color: 'from-orange-500 to-red-500',
    description: 'Herramientas especializadas con capacidad de reparar componentes del equipo que presenten fallas o defectos.',
    tools: [
      {
        name: 'Removedor de Soldadura',
        description: 'Herramienta que permite retirar la soldadura de estaño fundida de una placa base, facilitando la extracción y sustitución de componentes electrónicos dañados o defectuosos.',
        image: toolsCorrective1
      },
      {
        name: 'Pela Cables',
        description: 'Instrumento de precisión para retirar de manera segura la cubierta protectora de cables eléctricos sin dañar los conductores internos de cobre, esencial para reparaciones.',
        image: toolsCorrective2
      },
      {
        name: 'Cautín',
        description: 'Herramienta fundamental para realizar reparaciones a nivel de componente electrónico mediante la aplicación precisa de soldadura, permitiendo reparar conexiones y componentes.',
        image: toolsCorrective3
      }
    ]
  },
  {
    id: 'quimicos',
    title: 'Productos Químicos',
    icon: Droplets,
    color: 'from-indigo-500 to-purple-500',
    description: 'Productos químicos especializados que complementan el mantenimiento necesario para mantener el equipo en óptimas condiciones.',
    tools: [
      {
        name: 'Alcohol Isopropílico',
        description: 'Solvente de limpieza seguro y eficaz para componentes electrónicos. Se evapora rápidamente sin dejar residuos, ideal para limpiar circuitos, memorias y conectores.',
        image: toolsChemical1
      },
      {
        name: 'Estaño para Soldar',
        description: 'Material fundamental para crear conexiones eléctricas estables y uniones mecánicas seguras entre componentes electrónicos y la placa base durante reparaciones.',
        image: toolsChemical2
      },
      {
        name: 'Pasta Térmica',
        description: 'Compuesto especializado que mejora la transferencia de calor entre el procesador (CPU) o tarjeta gráfica (GPU) y su disipador, evitando sobrecalentamiento.'
      }
    ]
  }
];

export const ToolsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('ensamblaje');

  return (
    <section id="tools" className="py-16 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Herramientas para Mantenimiento de PC
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El mantenimiento efectivo de equipos de cómputo requiere herramientas especializadas para cada tipo de intervención. 
            Desde el ensamblaje básico hasta reparaciones avanzadas, cada herramienta cumple una función específica que garantiza 
            un trabajo seguro, eficiente y profesional. Conoce las herramientas esenciales organizadas por su aplicación.
          </p>
        </div>

        {/* Interactive Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto p-2 bg-muted/50">
            {toolCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:text-white data-[state=active]:shadow-lg flex flex-col items-center gap-2 py-4 px-2"
                  style={{
                    backgroundImage: selectedCategory === category.id ? `linear-gradient(135deg, var(--${category.color}))` : 'none'
                  }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {toolCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8 space-y-6">
              {/* Category Description */}
              <Card className="border-2 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tools Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                {category.tools.map((tool, index) => (
                  <AccordionItem
                    key={index}
                    value={`tool-${index}`}
                    className="border-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${category.color}`} />
                        <span className="text-lg font-semibold text-foreground">
                          {tool.name}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6 pt-4">
                        {/* Image */}
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="relative w-full h-64 object-cover rounded-xl shadow-lg border-2 border-border/50"
                          />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col justify-center space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`} />
                              <h4 className="text-lg font-bold text-foreground">Descripción</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-4">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ToolsSection;
