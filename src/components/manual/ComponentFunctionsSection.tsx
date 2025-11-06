import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, Info } from "lucide-react";
import gabinetteImg from "@/assets/component-gabinete.jpg";
import ramImg from "@/assets/component-ram.jpg";
import hddImg from "@/assets/component-hdd.jpg";
import psuImg from "@/assets/component-psu.jpg";
import cpuImg from "@/assets/component-cpu.jpg";
import motherboardImg from "@/assets/component-motherboard.jpg";
import monitorImg from "@/assets/component-monitor.jpg";
import keyboardImg from "@/assets/component-keyboard.jpg";
import mouseImg from "@/assets/component-mouse.jpg";

interface ComponentInfo {
  id: string;
  name: string;
  image: string;
  description: string;
  commonFailures: string[];
}

const internalComponents: ComponentInfo[] = [
  {
    id: "gabinete",
    name: "Gabinete",
    image: gabinetteImg,
    description: "Es la estructura que alberga y protege los componentes internos esenciales, como la placa base, el procesador, la memoria, el disco duro y la fuente de alimentación.",
    commonFailures: [
      "Golpes o abolladuras que dificultan cerrar o abrir la tapa.",
      "Mala ventilación por acumulación de polvo o mala ubicación (causa sobrecalentamiento)."
    ]
  },
  {
    id: "memoria-ram",
    name: "Memoria RAM",
    image: ramImg,
    description: "Es la memoria que almacena de forma temporal los programas y datos que estás usando activamente, para que puedas acceder a ellos rápidamente sin tener que buscarlos en el disco duro.",
    commonFailures: [
      "La PC se reinicia sola o muestra pantallazos azules (Blue Screen).",
      "La computadora no arranca o emite pitidos al encender (falla de módulos)."
    ]
  },
  {
    id: "disco-duro",
    name: "Disco Duro",
    image: hddImg,
    description: "Un disco duro es un dispositivo de almacenamiento de datos que guarda información como fotos, documentos y programas.",
    commonFailures: [
      "Archivos o programas tardan mucho en abrir o se congela el sistema constantemente.",
      "Sonidos extraños como 'clic-clic' (indica daño físico interno)."
    ]
  },
  {
    id: "fuente-poder",
    name: "Fuente de Poder",
    image: psuImg,
    description: "La fuente de poder toma la energía de la pared y la convierte en la cantidad y tipo exacto de energía que cada parte de la computadora necesita.",
    commonFailures: [
      "El computador no enciende o se apaga de repente.",
      "Olor a quemado o ruido extraño del ventilador de la fuente."
    ]
  },
  {
    id: "procesador",
    name: "Procesador (CPU)",
    image: cpuImg,
    description: "El procesador es el cerebro de una computadora; es el componente principal que ejecuta instrucciones, realiza cálculos y coordina las funciones de otros componentes de hardware.",
    commonFailures: [
      "Sobrecalentamiento (ventilador muy ruidoso y se pone lenta).",
      "Fallas en el rendimiento: programas se cierran o tardan en procesar tareas."
    ]
  },
  {
    id: "tarjeta-madre",
    name: "Tarjeta Madre",
    image: motherboardImg,
    description: "La tarjeta madre es el circuito principal de una computadora, funcionando como su 'sistema nervioso' o columna vertebral. Su propósito es conectar e integrar todos los demás componentes del PC (procesador, memoria, almacenamiento, etc.).",
    commonFailures: [
      "No reconoce dispositivos como RAM, teclado o disco duro.",
      "Capacitores hinchados o con fuga, causando reinicios o apagados."
    ]
  }
];

const externalComponents: ComponentInfo[] = [
  {
    id: "monitor",
    name: "Monitor",
    image: monitorImg,
    description: "El monitor es un dispositivo que se usa para mostrar información visual como imágenes y texto.",
    commonFailures: [
      "Pantalla negra o sin señal aunque la PC esté encendida.",
      "Colores distorsionados o líneas horizontales/verticales."
    ]
  },
  {
    id: "teclado",
    name: "Teclado",
    image: keyboardImg,
    description: "Es un dispositivo que permite escribir texto y comandos mediante la pulsación de teclas.",
    commonFailures: [
      "Algunas teclas no funcionan o quedan pegadas.",
      "Escribe caracteres incorrectos o múltiples al presionar una tecla."
    ]
  },
  {
    id: "mouse",
    name: "Mouse o Ratón",
    image: mouseImg,
    description: "Un mouse es un dispositivo que se utiliza para controlar el puntero del cursor en la pantalla de una computadora y ejecutar acciones como hacer clic y arrastrar.",
    commonFailures: [
      "El puntero se mueve solo o no responde al movimiento.",
      "Clic izquierdo o derecho no funciona correctamente."
    ]
  }
];

const ComponentCard = ({ component }: { component: ComponentInfo }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={component.image} 
          alt={component.name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{component.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="description">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                <span className="font-medium">Descripción</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground leading-relaxed">
                {component.description}
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="failures">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <span className="font-medium">Fallas Comunes</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-muted-foreground">
                {component.commonFailures.map((failure, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span className="flex-1">{failure}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const ComponentFunctionsSection = () => {
  return (
    <section id="funciones-componentes" className="py-12 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funciones de los Componentes</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce en detalle cada componente de tu computadora, sus funciones principales y las fallas más comunes que pueden presentarse.
          </p>
        </div>

        <Tabs defaultValue="internal" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="internal" className="text-base">
              Componentes Internos
            </TabsTrigger>
            <TabsTrigger value="external" className="text-base">
              Componentes Externos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="internal" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internalComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="external" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComponentFunctionsSection;