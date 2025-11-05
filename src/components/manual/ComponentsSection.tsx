import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'operativo' | 'mantenimiento' | 'critico';
  lastMaintenance: string;
}

const components: Component[] = [
  // Hardware - Componentes Internos
  {
    id: 'hw-001',
    name: 'Gabinete Lenovo A54',
    category: 'Hardware',
    description: 'Gabinete Lenovo modelo A54, código LKDNBRY',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-002',
    name: 'Memoria RAM Samsung',
    category: 'Hardware',
    description: 'Memoria RAM Samsung 133Mhz',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-003',
    name: 'Disco Duro Seagate',
    category: 'Hardware',
    description: 'Disco Duro Seagate 3160815AS, 149.1GB, Serial: 5RA4JPNV',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-004',
    name: 'Tarjeta Madre Lenovo',
    category: 'Hardware',
    description: 'Tarjeta Madre Lenovo modelo 8705A54',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-005',
    name: 'Unidad CD/DVD Toshiba',
    category: 'Hardware',
    description: 'Unidad Toshiba (TSST) TS-H4a2C 48X, código 41A9629',
    status: 'mantenimiento',
    lastMaintenance: '2024-09-30',
  },
  {
    id: 'hw-006',
    name: 'Fuente de Poder LITEON',
    category: 'Hardware',
    description: 'Fuente de poder LITEON genérica 225W',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-007',
    name: 'Procesador Intel Pentium',
    category: 'Hardware',
    description: 'Procesador Intel Pentium 1.60 Ghz',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-008',
    name: 'Puertos USB Intel ICH7',
    category: 'Hardware',
    description: 'Puertos USB Intel ICH7',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'hw-009',
    name: 'Puertos PCI Intel ICH7',
    category: 'Hardware',
    description: 'Puertos PCI Intel ICH7',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  // Hardware - Periféricos
  {
    id: 'per-001',
    name: 'Monitor Lenovo 9227-AD1',
    category: 'Hardware',
    description: 'Monitor Lenovo modelo 9227-AD1, Serial: V1V5637',
    status: 'mantenimiento',
    lastMaintenance: '2024-10-01',
  },
  {
    id: 'per-002',
    name: 'Teclado Lenovo KU-0225',
    category: 'Hardware',
    description: 'Teclado Lenovo KU-0225, código 0248795',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'per-003',
    name: 'Mouse Lenovo MO28U02',
    category: 'Hardware',
    description: 'Mouse Lenovo MO28U02, código 44C0788018',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  {
    id: 'per-004',
    name: 'Altavoces Lenovo LXB-1203A',
    category: 'Hardware',
    description: 'Altavoces Lenovo LXB-1203A, código 070410',
    status: 'operativo',
    lastMaintenance: '2024-10-15',
  },
  // Software
  {
    id: 'sw-001',
    name: 'Linux Lite 3.8',
    category: 'Software',
    description: 'Sistema Operativo Linux Lite versión 3.8, Licencia Libre',
    status: 'operativo',
    lastMaintenance: '2024-11-01',
  },
  {
    id: 'sw-002',
    name: 'LibreOffice 5.1.6.2',
    category: 'Software',
    description: 'Suite Ofimática LibreOffice versión 5.1.6.2, Licencia Libre',
    status: 'operativo',
    lastMaintenance: '2024-11-01',
  },
  {
    id: 'sw-003',
    name: 'Gzip 1.6',
    category: 'Software',
    description: 'Compresor Gzip versión 1.6, Licencia Libre',
    status: 'operativo',
    lastMaintenance: '2024-11-01',
  },
  {
    id: 'sw-004',
    name: 'PDF Viewer 3.18.2',
    category: 'Software',
    description: 'Adobe Reader PDF Viewer versión 3.18.2, Licencia Libre',
    status: 'operativo',
    lastMaintenance: '2024-11-01',
  },
  {
    id: 'sw-005',
    name: 'Firefox 88.0',
    category: 'Software',
    description: 'Navegador Mozilla Firefox versión 88.0, Licencia Libre',
    status: 'operativo',
    lastMaintenance: '2024-11-01',
  },
  {
    id: 'sw-006',
    name: 'VLC 2.2.2',
    category: 'Software',
    description: 'Reproductor multimedia VLC versión 2.2.2, Licencia Libre',
    status: 'operativo',
    lastMaintenance: '2024-11-01',
  },
];

export const ComponentsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredComponents = useMemo(() => {
    return components.filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getStatusIcon = (status: Component['status']) => {
    switch (status) {
      case 'operativo':
        return <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />;
      case 'mantenimiento':
        return <AlertCircle className="h-5 w-5 text-yellow-500" aria-hidden="true" />;
      case 'critico':
        return <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />;
    }
  };

  const getStatusBadge = (status: Component['status']) => {
    const variants: Record<Component['status'], string> = {
      operativo: 'bg-accent/10 text-accent border-accent/20',
      mantenimiento: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      critico: 'bg-destructive/10 text-destructive border-destructive/20',
    };

    const labels: Record<Component['status'], string> = {
      operativo: 'Operativo',
      mantenimiento: 'En mantenimiento',
      critico: 'Crítico',
    };

    return (
      <Badge variant="outline" className={variants[status]}>
        {labels[status]}
      </Badge>
    );
  };

  const categories = ['all', 'Hardware', 'Software'];

  return (
    <section id="components" className="py-20 bg-gradient-to-b from-background to-secondary/30" role="region" aria-labelledby="components-heading">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">Componentes</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="components-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Componentes del Sistema
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Inventario completo de hardware y software con estado actual y fechas de mantenimiento.
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Buscar por nombre, ID o descripción..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                aria-label="Buscar componentes"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div className="flex gap-2" role="group" aria-label="Filtrar por categoría">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                    aria-pressed={selectedCategory === cat}
                  >
                    {cat === 'all' ? 'Todos' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Mostrando {filteredComponents.length} de {components.length} componentes
          </div>
        </Card>

        {/* Components Table */}
        <Card className="shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-bold">Estado</TableHead>
                  <TableHead className="font-bold">ID</TableHead>
                  <TableHead className="font-bold">Nombre</TableHead>
                  <TableHead className="font-bold">Categoría</TableHead>
                  <TableHead className="font-bold">Descripción</TableHead>
                  <TableHead className="font-bold">Último mantenimiento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((comp) => (
                    <TableRow key={comp.id} className="hover:bg-secondary/30 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(comp.status)}
                          <span className="sr-only">{comp.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{comp.id}</TableCell>
                      <TableCell className="font-semibold">{comp.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{comp.category}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs text-sm text-muted-foreground">
                        {comp.description}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{comp.lastMaintenance}</div>
                          {getStatusBadge(comp.status)}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                      No se encontraron componentes con los filtros aplicados.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Legend */}
        <Card className="p-6 mt-8 shadow-lg">
          <h3 className="font-bold text-foreground mb-4">Leyenda de estados</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <div className="font-medium text-foreground">Operativo</div>
                <div className="text-sm text-muted-foreground">Funcionando correctamente</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500" aria-hidden="true" />
              <div>
                <div className="font-medium text-foreground">En mantenimiento</div>
                <div className="text-sm text-muted-foreground">Requiere intervención programada</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
              <div>
                <div className="font-medium text-foreground">Crítico</div>
                <div className="text-sm text-muted-foreground">Requiere atención inmediata</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
