import { MapPin, Heart, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CreditsSection = () => {
  return (
    <section id="credits" className="py-16 px-4 bg-secondary/30" role="region" aria-label="Créditos y agradecimientos">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Créditos y Agradecimientos
        </h2>

        <div className="space-y-8">
          {/* Ubicación */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-primary" />
                Ubicación de la UPTA "Federico Brito Figueroa"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">Sede La Victoria:</p>
                <p className="text-muted-foreground">
                  Sede Principal: Avenida Universidad s/n, al lado del Comando de la FAN.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Agradecimientos */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                Agradecimientos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Agradecemos enormemente a Dios por llevarnos por el camino del bien y lograr nuestros sueños de graduarnos con todo lo que nos proponemos en este futuro.
              </p>
              
              <p className="text-foreground leading-relaxed">
                También agradecemos a las personas más valiosas de nuestras vidas, que son nuestros padres y maestros, quienes nos han ayudado y apoyado en todo momento, moral y emocionalmente a cada uno de nosotros, y por darnos la oportunidad de vivir y conocer nuevas etapas inolvidables para todos nosotros como el grupo de Informática, trayecto 1, sección 2.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-semibold mb-4">
                  Asimismo, extendemos un agradecimiento especial a:
                </p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Nuestra profesora de proyecto, <strong>Karlis Zambrano</strong>, que nos ha guiado y apoyado en la realización de este manual.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Nuestro profesor tutor, <strong>Elías Vargas</strong>, que nos ha ayudado enormemente con las correcciones de nuestro proyecto.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      El profesor <strong>Jackson Pérez</strong>, por enseñarnos las herramientas a usar y la estructura del manual.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      La profesora <strong>Elizabeth Duarte</strong>, por sus orientaciones y recomendaciones en la realización de este manual.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cita */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg italic text-foreground mb-2">
                    "La educación es el arma más poderosa que puedes usar para cambiar el mundo."
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    — Nelson Mandela
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
