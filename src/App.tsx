/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ThemeMode, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { BrandingPage } from './pages/BrandingPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { PackagingPage } from './pages/PackagingPage';
import { ColorTheoryPage } from './pages/ColorTheoryPage';
import { ProcessPage } from './pages/ProcessPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [theme, setTheme] = useState<ThemeMode>('pastel');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Keyboard shortcut Cmd+K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Theme styling classes
  const getThemeWrapperClass = () => {
    switch (theme) {
      case 'sunset':
        return 'bg-[#fcfaf6] text-stone-800';
      case 'midnight':
        return 'bg-[#0b0f19] text-neutral-100 dark-theme';
      case 'minimal':
        return 'bg-[#ffffff] text-neutral-900';
      case 'pastel':
      default:
        return 'bg-[#faf8f5] text-neutral-800';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${getThemeWrapperClass()}`}>
      {/* Main Responsive Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeChange={setTheme}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectProject={setActiveProject} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'skills' && (
          <SkillsPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'branding' && (
          <BrandingPage 
            onNavigate={handleNavigate} 
            onSelectProject={setActiveProject} 
          />
        )}
        {currentPage === 'illustrations' && (
          <IllustrationsPage 
            onNavigate={handleNavigate} 
            onSelectProject={setActiveProject} 
          />
        )}
        {currentPage === 'social' && (
          <SocialMediaPage 
            onNavigate={handleNavigate} 
            onSelectProject={setActiveProject} 
          />
        )}
        {currentPage === 'packaging' && (
          <PackagingPage 
            onNavigate={handleNavigate} 
            onSelectProject={setActiveProject} 
          />
        )}
        {currentPage === 'color-theory' && (
          <ColorTheoryPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'process' && (
          <ProcessPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'testimonials' && (
          <TestimonialsPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectProject={setActiveProject}
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
