import { Card } from '@/components/ui/card';
import { School, Target, Eye, History } from 'lucide-react';
import welcomeImage from '@/assets/community-welcome.jpg';
import logoImage from '@/assets/community-logo.jpg';

export const CommunityInfoSection = () => {
  return (
    <section id="community-info" className="py-20 bg-gradient-to-b from-secondary/30 to-background" role="region" aria-labelledby="community-info-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Información de la Comunidad</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="community-info-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Información de la Comunidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce la historia, visión y misión de la Unidad Educativa Nacional "Vicente Emilio Sojo"
          </p>
        </div>

        {/* Welcome Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-xl">
            <img
              src={welcomeImage}
              alt="Bienvenidos a la U.E.N Vicente Emilio Sojo"
              className="w-full h-auto"
            />
          </Card>
        </div>

        {/* Description Section */}
        <Card className="p-8 mb-12 shadow-lg max-w-5xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <School className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                La Unidad Educativa Nacional "Vicente Emilio Sojo" está ubicada en la urbanización La Mora, 
                avenida 1 cruce con avenida 2, en La Victoria, estado Aragua. Es una institución pública 
                perteneciente a la Parroquia Castor Nieves Ríos, orientada a la formación integral de 
                adolescentes en el nivel de educación media diversificada. Su enfoque principal es brindar 
                educación de calidad, preparándolos para su ingreso a la educación superior, destacando en 
                especialidades como Ciencias. Su nombre rinde homenaje al músico venezolano Vicente Emilio Sojo, 
                figura representativa del patrimonio cultural del país.
              </p>
            </div>
          </div>
        </Card>

        {/* Logo and Historical Review */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Logo Card */}
          <Card className="p-6 shadow-lg flex items-center justify-center">
            <img
              src={logoImage}
              alt="Logo C.E.N Vicente Emilio Sojo 1987"
              className="w-full max-w-sm h-auto"
            />
          </Card>

          {/* Historical Review */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <History className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Reseña Histórica</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
                En septiembre de 1987 se crea la ESCUELA BÁSICA NACIONAL VICENTE EMILIO SOJO (III etapa), 
                por decisión del Ministerio de Educación, en el marco de la conmemoración del centenario 
                del Nacimiento de insigne músico venezolano Don Vicente Emilio Sojo, reconocido como 
                "Maestro de Maestros". Siendo para ese entonces Jefe de la Zona Educativa del Estado Aragua 
                la Profesora Ybelise Manzano de Parodi y como Jefe de personal el profesor Alcides Chirino.
              </p>
              <p>
                La escuela como tal inicia sus actividades administrativas, con la organización funcional 
                e inscripción de estudiantes el 16 de septiembre y las pedagógicas el 1 de octubre de 1987 
                en el turno de la tarde en los espacios de la ya existente "E.B.N MIGUEL ANGEL ALVAREZ" 
                del sector La Mora 1.
              </p>
              <p>
                Durante 4 años sobrevinieron conflictos en lo pedagógico y académico hasta que la docente 
                Sub Directora Licenciada María Cardozo junto con representantes, estudiantes, obreros y 
                docentes lograron conquistar un lote de terreno, donde construiría la planta física del liceo.
              </p>
              <p>
                Finalmente, en 1994, el Gobernador Carlos Talante funda el liceo. En consecuencia en 
                diciembre de 1994 se muda la E.B.N. Vicente Emilio Sojo, al logro de su meta: su sede propia.
              </p>
            </div>
          </Card>
        </div>


        {/* Vision and Mission */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Eye className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify">
              La U.E.N "Vicente Emilio Sojo" asume como visión institucional el llegar a ser una Institución 
              educativa innovadora vinculada a la familia y a la comunidad que aporta a la sociedad un modelo 
              de educación integral dirigido a las niñas, niños y adolescentes basada en el desarrollo ético, 
              académico, tecnológico deportivo y socio-cultural de los mismos.
            </p>
          </Card>

          {/* Mission */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Target className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify">
              La U.E.N "Vicente Emilio Sojo" tiene como misión institucional formar de manera integral a 
              las niñas, niños y adolescentes de la comunidad basándose en los principios de solidaridad, 
              responsabilidad, participación, igualdad y respeto por los Derechos Humanos y en la 
              construcción de una cultura democrática, así como propiciar un proceso de enseñanza-aprendizaje 
              interactivo creativo, reflexivo y constructivo en un ambiente de respeto, armonía, compañerismo, 
              amor y responsabilidad que permita la obtención de aprendizajes significativos y el desarrollo 
              de aptitudes y talentos de todos(as) los y las estudiantes de forma integral.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
