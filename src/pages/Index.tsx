import { useState } from 'react';
import { Navbar } from '@/components/manual/Navbar';
import { Sidebar } from '@/components/manual/Sidebar';
import { Hero } from '@/components/manual/Hero';
import { IntroSection } from '@/components/manual/IntroSection';
import { ScopeSection } from '@/components/manual/ScopeSection';
import { CommunitySection } from '@/components/manual/CommunitySection';
import { ComponentsSection } from '@/components/manual/ComponentsSection';
import { TeamSection } from '@/components/manual/TeamSection';
import { Footer } from '@/components/manual/Footer';
import { toast } from 'sonner';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast.info('Búsqueda realizada', {
        description: `Buscando: "${query}"`,
      });
      // In a real implementation, this would filter content or navigate to search results
      console.log('Searching for:', query);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar - Fixed at top */}
      <Navbar onSearch={handleSearch} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Desktop Sidebar Toggle Button */}
      <button
        onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
        className="hidden lg:flex fixed top-20 left-4 z-40 p-2 bg-card border rounded-lg shadow-lg hover:bg-secondary transition-colors"
        aria-label={desktopSidebarOpen ? "Ocultar menú lateral" : "Mostrar menú lateral"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Layout with Sidebar */}
      <div className="flex">
        {/* Desktop Sidebar - Collapsible */}
        {desktopSidebarOpen && (
          <div className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Navegación lateral">
            <div className="fixed top-16 h-[calc(100vh-4rem)] overflow-y-auto">
              <Sidebar isOpen={true} onClose={() => {}} />
            </div>
          </div>
        )}

        {/* Mobile Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 pt-16" role="main">
          <Hero />
          <IntroSection />
          <ScopeSection />
          <CommunitySection />
          <ComponentsSection />
          <TeamSection />
          <Footer />
        </main>
      </div>

      {/* Print Styles - Hidden from screen view */}
      <style>{`
        @media print {
          nav[role="navigation"],
          aside[role="complementary"],
          footer[role="contentinfo"],
          button {
            display: none !important;
          }
          
          main {
            padding-top: 0 !important;
          }
          
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          h2 {
            page-break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
