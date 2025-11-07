import { useState } from 'react';
import { Navbar } from '@/components/manual/Navbar';
import { Sidebar } from '@/components/manual/Sidebar';
import { Hero } from '@/components/manual/Hero';
import { IntroSection } from '@/components/manual/IntroSection';
import { SafetySection } from '@/components/manual/SafetySection';
import { MaintenanceGuideSection } from '@/components/manual/MaintenanceGuideSection';
import { ScopeSection } from '@/components/manual/ScopeSection';
import { ToolsSection } from '@/components/manual/ToolsSection';
import { CommunityInfoSection } from '@/components/manual/CommunityInfoSection';
import { CommunitySection } from '@/components/manual/CommunitySection';
import { ComponentsSection } from '@/components/manual/ComponentsSection';
import ComponentFunctionsSection from '@/components/manual/ComponentFunctionsSection';
import { TeamSection } from '@/components/manual/TeamSection';
import { Footer } from '@/components/manual/Footer';
import { toast } from 'sonner';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar - Fixed at top */}
      <Navbar onSearch={() => {}} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Off-canvas Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content - Centered */}
      <main className="w-full" role="main">
        <Hero />
        <IntroSection />
        <SafetySection />
        <MaintenanceGuideSection />
        <ScopeSection />
        <ToolsSection />
        <CommunityInfoSection />
        <CommunitySection />
        <ComponentsSection />
        <ComponentFunctionsSection />
        <TeamSection />
        <Footer />
      </main>

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
