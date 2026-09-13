import React from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, HUMAIRA_PROFILE } from '../data/portfolioData';
import { ArrowRight, Sparkles, Box, Check, FileCheck, Layers } from 'lucide-react';

interface PackagingPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const PackagingPage: React.FC<PackagingPageProps> = ({ onNavigate, onSelectProject }) => {
  const packagingProjects = PROJECTS.filter(p => p.category === 'packaging' || p.tags.includes('Packaging'));

  const printSpecs = [
    { label: 'Color Separation', value: 'CMYK + Spot Pantone (PMS) ink matching' },
    { label: 'Standard Bleed', value: '3mm (Europe) / 0.125 inch (North America)' },
    { label: 'Resolution Threshold', value: 'Strict 300+ DPI minimum raster assets' },
    { label: 'Special Finishes', value: 'Vector dieline layers for Foil Stamping, Spot UV, Blind Deboss, & Die-Cuts' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Portfolio Gallery 04</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Packaging & Print Production
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Tactile unboxing experiences engineered for retail shelves and physical customer delight. From glass dropper bottles and kraft pouches to editorial lookbooks and embossed business cards.
        </p>
      </div>

      {/* Hero Packaging Feature */}
      <div className="rounded-3xl overflow-hidden border border-neutral-200/90 shadow-lg bg-white grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 aspect-video lg:aspect-auto overflow-hidden bg-neutral-100">
          <img 
            src={HUMAIRA_PROFILE.brandMockupImage} 
            alt="Luxury Brand Packaging Mockup" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              Sustainable Luxury
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900">
              Aura Botanica & Velvet Glow Glassware
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Designed with frosted amber apothecary glass, gold foil debossing, and minimal typography hierarchy. Each dieline was tested across multiple carton prototype iterations to guarantee structural integrity and zero unboxing friction.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Zero-waste FSC-certified recycled cardstock specifications</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>FDA & EU cosmetic compliance micro-typography ingredient grids</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>3D photorealistic lighting renders for retail pre-orders</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectProject(PROJECTS[0])}
            className="w-full py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
          >
            <span>Open Packaging Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Production & Dieline Engineering Checklist */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-pink-100 text-pink-700">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-neutral-900">
              Print Dieline Engineering Standards
            </h3>
            <p className="text-xs text-neutral-500">How I guarantee flawless results when your files go to press.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {printSpecs.map((spec) => (
            <div key={spec.label} className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-1">
              <div className="text-xs font-bold text-pink-600 uppercase tracking-wider">{spec.label}</div>
              <div className="text-xs text-neutral-700 font-medium leading-relaxed">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('social')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: Social Media
        </button>
        <button
          onClick={() => onNavigate('color-theory')}
          className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold text-sm hover:bg-pink-500 transition-colors flex items-center gap-2"
        >
          <span>Next: Interactive Color Theory Lab</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
