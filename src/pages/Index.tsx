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

      {/* Layout with Sidebar */}
      <div className="flex">
        {/* Sidebar - Only visible on large screens by default */}
        <div className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Navegación lateral">
          <div className="fixed top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <Sidebar isOpen={true} onClose={() => {}} />
          </div>
        </div>

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
