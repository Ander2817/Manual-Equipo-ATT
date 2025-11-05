import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2, Circle, Printer } from 'lucide-react';
import { toast } from 'sonner';

interface Step {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

const initialSteps: Step[] = [
  {
    id: 'step-1',
    title: 'Inspección Visual Inicial',
    description: 'Revisar el estado general de equipos e instalaciones. Identificar desgastes visibles, fugas, o daños evidentes.',
    duration: '30 min',
    completed: false,
  },
  {
    id: 'step-2',
    title: 'Verificación de Sistemas Eléctricos',
    description: 'Revisar conexiones, cables, interruptores y protecciones eléctricas. Medir voltajes y corrientes.',
    duration: '45 min',
    completed: false,
  },
  {
    id: 'step-3',
    title: 'Lubricación y Limpieza',
    description: 'Aplicar lubricantes en puntos críticos. Limpiar filtros, rejillas y componentes externos.',
    duration: '60 min',
    completed: false,
  },
  {
    id: 'step-4',
    title: 'Ajustes y Calibración',
    description: 'Ajustar tensiones, alineaciones y calibrar instrumentos de medición según especificaciones.',
    duration: '45 min',
    completed: false,
  },
  {
    id: 'step-5',
    title: 'Pruebas de Funcionamiento',
    description: 'Realizar pruebas operativas para verificar el correcto funcionamiento de todos los sistemas.',
    duration: '30 min',
    completed: false,
  },
  {
    id: 'step-6',
    title: 'Documentación y Registro',
    description: 'Completar fichas de mantenimiento, actualizar historial y generar reporte de actividades realizadas.',
    duration: '20 min',
    completed: false,
  },
];

export const ScopeSection = () => {
  const [steps, setSteps] = useState<Step[]>(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('maintenance-progress');
    return saved ? JSON.parse(saved) : initialSteps;
  });

  useEffect(() => {
    // Save to localStorage whenever steps change
    localStorage.setItem('maintenance-progress', JSON.stringify(steps));
  }, [steps]);

  const toggleStep = (stepId: string) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
    toast.success('Progreso actualizado', {
      description: 'Tu avance ha sido guardado automáticamente.',
    });
  };

  const resetProgress = () => {
    setSteps(initialSteps);
    localStorage.removeItem('maintenance-progress');
    toast.info('Progreso reiniciado', {
      description: 'Todos los pasos han sido marcados como pendientes.',
    });
  };

  const handlePrint = () => {
    window.print();
    toast.success('Vista de impresión', {
      description: 'Preparando documento para imprimir...',
    });
  };

  const completedCount = steps.filter((s) => s.completed).length;
  const progressPercentage = (completedCount / steps.length) * 100;

  return (
    <section id="scope" className="py-20 bg-gradient-to-b from-background to-secondary/30" role="region" aria-labelledby="scope-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Alcance</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="scope-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            El Mantenimiento que Haremos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Plan de trabajo estructurado con pasos claros y medibles. Guarda tu progreso mientras avanzas.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Progreso General
              </h3>
              <p className="text-muted-foreground mb-4">
                {completedCount} de {steps.length} pasos completados
              </p>
              <div className="w-full bg-secondary rounded-full h-4 overflow-hidden">
                <div
                  className="bg-accent h-full transition-all duration-500 flex items-center justify-end pr-2"
                  style={{ width: `${progressPercentage}%` }}
                  role="progressbar"
                  aria-valuenow={progressPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {progressPercentage > 10 && (
                    <span className="text-xs font-bold text-white">
                      {Math.round(progressPercentage)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handlePrint} variant="outline">
                <Printer className="mr-2 h-4 w-4" aria-hidden="true" />
                Imprimir
              </Button>
              <Button onClick={resetProgress} variant="outline">
                Reiniciar progreso
              </Button>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" aria-hidden="true" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex items-start gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card
                      className={`p-6 ml-16 md:ml-0 transition-all hover:shadow-lg cursor-pointer ${
                        step.completed ? 'border-accent bg-accent/5' : ''
                      }`}
                      onClick={() => toggleStep(step.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleStep(step.id);
                        }
                      }}
                      aria-pressed={step.completed}
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={step.completed}
                          onCheckedChange={() => toggleStep(step.id)}
                          className="mt-1"
                          aria-label={`Marcar "${step.title}" como ${step.completed ? 'pendiente' : 'completado'}`}
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className={`text-lg font-bold ${step.completed ? 'text-accent' : 'text-foreground'}`}>
                              Paso {index + 1}: {step.title}
                            </h3>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                          {step.completed && (
                            <div className="flex items-center gap-2 mt-3 text-accent">
                              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                              <span className="text-sm font-medium">Completado</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
