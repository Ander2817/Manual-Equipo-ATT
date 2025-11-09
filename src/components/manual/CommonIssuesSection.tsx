import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Search } from 'lucide-react';

interface Issue {
  number: number;
  problem: string;
  causes: string;
  solution: string;
}

const hardwareIssues: Issue[] = [
  {
    number: 1,
    problem: 'El computador no enciende',
    causes: 'Cable desconectado, falla en fuente de poder, botón dañado',
    solution: 'Verificar cable y tomacorriente, probar otro cable, revisar interruptor posterior, si persiste → revisar fuente',
  },
  {
    number: 2,
    problem: 'No hay imagen en el monitor',
    causes: 'Cable de video suelto, RAM mal conectada, monitor apagado',
    solution: 'Revisar y ajustar cables VGA/HDMI, probar otro monitor, retirar y colocar RAM nuevamente',
  },
  {
    number: 3,
    problem: 'Sobrecalentamiento',
    causes: 'Ventiladores con polvo, mala ventilación, pasta térmica seca',
    solution: 'Limpiar ventiladores y rejillas, no bloquear salidas de aire, cambiar pasta térmica (solo técnicos)',
  },
  {
    number: 4,
    problem: 'Puertos USB no funcionan',
    causes: 'Puerto dañado o sucio, cortocircuito, exceso de dispositivos',
    solution: 'Probar otro puerto, limpiar con aire comprimido, desconectar aparatos no necesarios',
  },
  {
    number: 5,
    problem: 'Teclado o mouse no responden',
    causes: 'Cable dañado, puerto defectuoso, dispositivo averiado',
    solution: 'Cambiar puerto, probar con otro equipo, si es inalámbrico cambiar baterías',
  },
  {
    number: 6,
    problem: 'Disco duro no detectado',
    causes: 'Cable SATA suelto, disco dañado, BIOS mal configurado',
    solution: 'Revisar cables de datos y energía, probar otro cable, entrar a BIOS y verificar detección',
  },
  {
    number: 7,
    problem: 'Ruidos extraños en el equipo',
    causes: 'Ventiladores sucios o rozando, disco duro con fallos',
    solution: 'Limpiar ventiladores, ajustar cables que toquen aspas, respaldar datos si el ruido viene del disco',
  },
  {
    number: 8,
    problem: 'Pantalla con líneas o colores extraños',
    causes: 'Cable dañado, tarjeta gráfica fallando, monitor defectuoso',
    solution: 'Probar otro cable o puerto, reiniciar PC, probar monitor diferente; si persiste revisar tarjeta gráfica',
  },
  {
    number: 9,
    problem: 'El PC se reinicia solo',
    causes: 'Calentamiento, fuente dañada, RAM con errores',
    solution: 'Verificar temperatura, limpiar ventiladores, probar otra fuente, retirar y reinsertar módulos RAM',
  },
  {
    number: 10,
    problem: 'No detecta dispositivos (teclado, pendrive, mouse)',
    causes: 'Conectores dañados, polvo, Tarjeta Madre con fallos',
    solution: 'Probar el dispositivo en otro PC, limpiar puerto, usar adaptador o cambiar puerto',
  },
];

const softwareIssues: Issue[] = [
  {
    number: 1,
    problem: 'El computador está muy lento',
    causes: 'Muchos programas al inicio, poca RAM, archivos temporales',
    solution: 'Desinstalar programas no usados, limpiar con herramienta del sistema, desactivar apps de inicio',
  },
  {
    number: 2,
    problem: 'Programas se cierran solos',
    causes: 'Archivos dañados, falta de memoria, versiones incompatibles',
    solution: 'Actualizar programa, cerrar apps en segundo plano, reinstalar el software',
  },
  {
    number: 3,
    problem: 'Virus o malware',
    causes: 'Descargas inseguras, páginas web no confiables',
    solution: 'Analizar con antivirus/antimalware, eliminar amenazas, evitar descargas no seguras',
  },
  {
    number: 4,
    problem: 'No hay conexión a Internet',
    causes: 'Configuración de red, drivers dañados, router fallando',
    solution: 'Reiniciar router, ejecutar solucionador de red, reinstalar driver de red',
  },
  {
    number: 5,
    problem: 'Pantalla azul de Windows (BSOD)',
    causes: 'Drivers incompatibles, errores de hardware, fallo en disco',
    solution: 'Anotar código de error, actualizar drivers, ejecutar chkdsk, comprobar memoria RAM',
  },
  {
    number: 6,
    problem: 'Windows no inicia correctamente',
    causes: 'Archivos de sistema corruptos, actualizaciones fallidas',
    solution: 'Iniciar en modo seguro, usar reparación automática, restaurar punto anterior',
  },
  {
    number: 7,
    problem: 'Disco duro lleno',
    causes: 'Archivos temporales, descargas antiguas, caché de navegador',
    solution: 'Liberar espacio con limpiador de disco, eliminar archivos innecesarios, desinstalar programas',
  },
  {
    number: 8,
    problem: 'Fallos al instalar actualizaciones',
    causes: 'Poco espacio, archivos de Windows corruptos',
    solution: 'Liberar espacio, ejecutar solucionador de problemas, usar herramienta DISM',
  },
  {
    number: 9,
    problem: 'Notificaciones constantes o publicidad',
    causes: 'Adware instalado, extensiones maliciosas de navegador',
    solution: 'Desinstalar programas sospechosos, eliminar extensiones, analizar con antimalware',
  },
  {
    number: 10,
    problem: 'Archivos no se abren o programas no responden',
    causes: 'Falta de recursos, archivos corruptos, programa desactualizado',
    solution: 'Cerrar programas innecesarios, actualizar software, reparar o reinstalar aplicación',
  },
];

export const CommonIssuesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('hardware');

  const filterIssues = (issues: Issue[]) => {
    if (!searchTerm) return issues;
    const term = searchTerm.toLowerCase();
    return issues.filter(
      (issue) =>
        issue.problem.toLowerCase().includes(term) ||
        issue.causes.toLowerCase().includes(term) ||
        issue.solution.toLowerCase().includes(term)
    );
  };

  const filteredHardware = filterIssues(hardwareIssues);
  const filteredSoftware = filterIssues(softwareIssues);

  return (
    <section
      id="common-issues"
      className="py-20 bg-background"
      role="region"
      aria-labelledby="common-issues-heading"
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
              Fallas Comunes
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-12 w-12 text-primary" aria-hidden="true" />
            <h2 id="common-issues-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              Fallas Comunes
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Identifica y soluciona los problemas más frecuentes en hardware y software de computadoras.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Buscar falla, causa o solución..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6"
              aria-label="Buscar fallas comunes"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="text-lg">
              Hardware ({filteredHardware.length})
            </TabsTrigger>
            <TabsTrigger value="software" className="text-lg">
              Software ({filteredSoftware.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="space-y-4">
            {filteredHardware.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No se encontraron resultados para "{searchTerm}"</p>
              </Card>
            ) : (
              filteredHardware.map((issue) => (
                <Card key={issue.number} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold text-lg">
                        {issue.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {issue.problem}
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <span className="font-semibold text-primary">Causas posibles: </span>
                          <span className="text-muted-foreground">{issue.causes}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Solución: </span>
                          <span className="text-muted-foreground">{issue.solution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="software" className="space-y-4">
            {filteredSoftware.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No se encontraron resultados para "{searchTerm}"</p>
              </Card>
            ) : (
              filteredSoftware.map((issue) => (
                <Card key={issue.number} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold text-lg">
                        {issue.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {issue.problem}
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <span className="font-semibold text-primary">Causas posibles: </span>
                          <span className="text-muted-foreground">{issue.causes}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Solución: </span>
                          <span className="text-muted-foreground">{issue.solution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
