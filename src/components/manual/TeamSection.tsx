import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Mail } from 'lucide-react';
import teamJhoander from '@/assets/team-jhoander.jpg';
import teamJohan from '@/assets/team-johan.jpg';
import teamFelipe from '@/assets/team-felipe.jpg';

interface TeamMember {
  id: string;
  name: string;
  bio: string;
  image: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'jhoander',
    name: 'Jhoander Adrian',
    bio: 'Estudiante de la UPTA "Federico Brito Figueroa", Cursante del PNF Informática, específicamente en el trayecto 1, en la sección 2. Apasionado por la programación y el estudio, prefiere la realización o revisión de códigos, antes que el mantenimiento de computadores.',
    image: teamJhoander,
    email: 'jhoanderalejandroadrianmarcano@gmail.com',
  },
  {
    id: 'johan',
    name: 'Johan Toledo',
    bio: 'Estudiante de la UPTA "Federico Brito Figueroa", Cursante del PNF Informática, específicamente en el trayecto 1, en la sección 2. Apasionado por la escritura, la lectura y la programación, prefiere la realización o revisión de códigos, antes que el mantenimiento de computadores.',
    image: teamJohan,
    email: 'johantoledo31261229tiadmimf@gmail.com',
  },
  {
    id: 'felipe',
    name: 'Felipe Tovar',
    bio: 'Estudiante de la UPTA "Federico Brito Figueroa", Cursante del PNF Informática, específicamente en el trayecto 1, en la sección 2. Apasionado por la programación y la calistenia, prefiere realizar chequeos internos y mantenimientos a las computadores, antes que realizar o analizar códigos.',
    image: teamFelipe,
    email: 'felipealfredotovar@gmail.com',
  },
];

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 bg-background" role="region" aria-labelledby="team-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Equipo</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="team-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Equipo Desarrollador
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce a los estudiantes que diseñaron este manual técnico interactivo.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
              aria-label={`Ver perfil completo de ${member.name}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-secondary flex items-center justify-center p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover object-center group-hover:scale-110 transition-transform duration-300 shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">{member.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center">
                  <button
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `mailto:${member.email}`;
                    }}
                    aria-label={`Enviar email a ${member.name}`}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Member Detail Modal */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-32 h-32 rounded-full object-cover object-center"
                    />
                    <div className="text-center">
                      <DialogTitle className="text-2xl mb-2">{selectedMember.name}</DialogTitle>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Bio */}
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Acerca de</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Contacto</h4>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                    >
                      <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="text-sm text-foreground group-hover:text-primary">
                        {selectedMember.email}
                      </span>
                    </a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
