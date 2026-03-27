import { Camera, Play } from 'lucide-react';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { SectionAnchor } from '@/components/ui/section-anchor';
import useScrollAnimation from '@/hooks/useScrollAnimation';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.webp';

const galleryItems = [
  { src: gallery1, alt: 'Equipos Lenovo preparados para Mantenimiento', description: 'Equipos de escritorio Lenovo listos para ser intervenidos sobre las mesas de trabajo.' },
  { src: gallery2, alt: 'Gabinetes abiertos mostrando componentes internos', description: 'Los gabinetes fueron abiertos para inspeccionar y limpiar los componentes internos.' },
  { src: gallery3, alt: 'Estudiante realizando Mantenimiento Preventivo', description: 'Estudiante desmontando componentes para realizar limpieza interna del equipo.' },
  { src: gallery4, alt: 'Revisión detallada de hardware interno', description: 'Revisión minuciosa de los cables y conexiones internas del computador.' },
  { src: gallery5, alt: 'Estudiante manipulando componentes del PC', description: 'Trabajo práctico de desmontaje y verificación de la fuente de poder y ventiladores.' },
  { src: gallery6, alt: 'Instalación de Windows 7 Ultimate', description: 'Proceso de instalación del sistema operativo Windows 7 Ultimate en uno de los equipos.' },
  { src: gallery7, alt: 'Estudiante configurando el sistema operativo', description: 'Configuración inicial del sistema operativo después de la instalación.' },
  { src: gallery8, alt: 'Conexión del cableado de los equipos', description: 'Estudiante organizando y conectando el cableado de alimentación y datos.' },
  { src: gallery9, alt: 'Estudiante trabajando en el laboratorio', description: 'Sesión de trabajo en el laboratorio de informática durante el Mantenimiento.' },
];

export const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galeria" className="py-16 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center gap-3 mb-8 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Camera className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Galería del Mantenimiento</h2>
          <SectionAnchor id="galeria" />
        </div>

        <p className={`text-muted-foreground mb-10 max-w-3xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Registro fotográfico y en video del proceso de Mantenimiento Preventivo y Correctivo realizado a los equipos del laboratorio de informática.
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group/card rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              <div className="relative overflow-hidden">
                <ImageLightbox
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className={`rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
          <div className="flex items-center gap-2 p-4 border-b border-border">
            <Play className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Video del proceso de mantenimiento</h3>
          </div>
          <div className="p-4">
            <video
              controls
              className="w-full max-h-[500px] rounded-lg bg-black"
              preload="metadata"
            >
              <source src="/videos/gallery-video.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
            <p className="text-sm text-muted-foreground mt-3">
              Registro en video del proceso completo de mantenimiento preventivo y correctivo realizado en el laboratorio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
