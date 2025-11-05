import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Mail, Linkedin, Phone } from 'lucide-react';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  expertise: string[];
  achievements: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Carlos Rodríguez',
    role: 'Ingeniero Jefe de Mantenimiento',
    bio: 'Especialista en sistemas electromecánicos con 15 años de experiencia en mantenimiento industrial y de instalaciones.',
    image: teamMember1,
    email: 'carlos.rodriguez@maintenance.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/carlosrodriguez',
    expertise: ['Sistemas eléctricos', 'Automatización', 'Gestión de proyectos', 'Seguridad industrial'],
    achievements: [
      'Certificación en Gestión de Mantenimiento (CMM)',
      'Implementó sistema predictivo que redujo paradas en 40%',
      'Líder de proyecto de modernización de instalaciones',
    ],
  },
  {
    id: 'member-2',
    name: 'María González',
    role: 'Especialista en Sistemas Digitales',
    bio: 'Experta en IoT y sistemas de monitoreo remoto. Coordinadora de capacitaciones técnicas para el equipo.',
    image: teamMember2,
    email: 'maria.gonzalez@maintenance.com',
    phone: '+1 (555) 234-5678',
    linkedin: 'linkedin.com/in/mariagonzalez',
    expertise: ['Internet de las Cosas', 'Análisis de datos', 'Software CMMS', 'Capacitación técnica'],
    achievements: [
      'Certificación en Industria 4.0 y mantenimiento predictivo',
      'Desarrollo de dashboard de monitoreo en tiempo real',
      'Capacitó a más de 100 técnicos en nuevas tecnologías',
    ],
  },
  {
    id: 'member-3',
    name: 'Luis Fernández',
    role: 'Coordinador de Operaciones',
    bio: 'Responsable de la planificación y ejecución de rutinas de mantenimiento. Especialista en logística y gestión de equipos.',
    image: teamMember3,
    email: 'luis.fernandez@maintenance.com',
    phone: '+1 (555) 345-6789',
    linkedin: 'linkedin.com/in/luisfernandez',
    expertise: ['Planificación de mantenimiento', 'Gestión de inventarios', 'Control de calidad', 'Optimización de procesos'],
    achievements: [
      'Certificación Lean Six Sigma Green Belt',
      'Optimizó tiempo de respuesta en 35%',
      'Implementó sistema de inventario just-in-time',
    ],
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
            Conoce a los profesionales que crearon y mantienen este manual técnico interactivo.
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
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-2">
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
                  <button
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `tel:${member.phone}`;
                    }}
                    aria-label={`Llamar a ${member.name}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://${member.linkedin}`, '_blank');
                    }}
                    aria-label={`Ver perfil de LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
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
                  <div className="flex items-start gap-6 mb-4">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <DialogTitle className="text-2xl mb-1">{selectedMember.name}</DialogTitle>
                      <DialogDescription className="text-primary font-medium text-lg">
                        {selectedMember.role}
                      </DialogDescription>
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
                    <div className="space-y-2">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                      >
                        <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span className="text-sm text-foreground group-hover:text-primary">
                          {selectedMember.email}
                        </span>
                      </a>
                      <a
                        href={`tel:${selectedMember.phone}`}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                      >
                        <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span className="text-sm text-foreground group-hover:text-primary">
                          {selectedMember.phone}
                        </span>
                      </a>
                      <a
                        href={`https://${selectedMember.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                      >
                        <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span className="text-sm text-foreground group-hover:text-primary">
                          {selectedMember.linkedin}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Áreas de experiencia</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Logros destacados</h4>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
