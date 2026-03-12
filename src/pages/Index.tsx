import { useState, useEffect } from 'react';
import { Navbar } from '@/components/manual/Navbar';
import { Sidebar } from '@/components/manual/Sidebar';
import { Hero } from '@/components/manual/Hero';
import { IntroSection } from '@/components/manual/IntroSection';
import { SafetySection } from '@/components/manual/SafetySection';
import { MaintenanceGuideSection } from '@/components/manual/MaintenanceGuideSection';
import { ToolsSection } from '@/components/manual/ToolsSection';
import { CommunityInfoSection } from '@/components/manual/CommunityInfoSection';
import { CommunitySection } from '@/components/manual/CommunitySection';
import { ComponentsSection } from '@/components/manual/ComponentsSection';
import ComponentFunctionsSection from '@/components/manual/ComponentFunctionsSection';
import { CommonIssuesSection } from '@/components/manual/CommonIssuesSection';
import { GlossarySection } from '@/components/manual/GlossarySection';
import { TeamSection } from '@/components/manual/TeamSection';
import { GallerySection } from '@/components/manual/GallerySection';
import { CreditsSection } from '@/components/manual/CreditsSection';
import { Footer } from '@/components/manual/Footer';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onSearch={() => {}} 
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="w-full" role="main">
        <Hero />
        <ScrollReveal><CommunityInfoSection /></ScrollReveal>
        <ScrollReveal direction="right" delay={80}><IntroSection /></ScrollReveal>
        <ScrollReveal><SafetySection /></ScrollReveal>
        <ScrollReveal direction="left" delay={80}><MaintenanceGuideSection /></ScrollReveal>
        <ScrollReveal direction="scale"><ToolsSection /></ScrollReveal>
        <ScrollReveal><CommunitySection /></ScrollReveal>
        <ScrollReveal direction="right"><ComponentsSection /></ScrollReveal>
        <ScrollReveal><ComponentFunctionsSection /></ScrollReveal>
        <ScrollReveal direction="left"><CommonIssuesSection /></ScrollReveal>
        <ScrollReveal direction="scale"><GlossarySection /></ScrollReveal>
        <ScrollReveal><GallerySection /></ScrollReveal>
        <ScrollReveal direction="right"><TeamSection /></ScrollReveal>
        <ScrollReveal><CreditsSection /></ScrollReveal>
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
