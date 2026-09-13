import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowRight, Sparkles, Layers, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BrandingPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const BrandingPage: React.FC<BrandingPageProps> = ({ onNavigate, onSelectProject }) => {
  const brandingProjects = PROJECTS.filter(p => p.category === 'branding');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (e: React.MouseEvent, hex: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    confetti({ particleCount: 20, spread: 35, origin: { y: 0.6 } });
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Portfolio Gallery 01</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Brand Identity & Logo Systems
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Comprehensive visual identities engineered to endure. From bespoke typography and vector marks to holistic brand guideline manuals and corporate stationery.
        </p>
      </div>

      {/* Brand Design Philosophy Strip */}
      <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span> 1. Vector Scalability
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Every logo mark is built on mathematical grids in Adobe Illustrator to scale smoothly from 16px favicons to billboard displays.
          </p>
        </div>
        <div>
          <div className="font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> 2. Color Psychology
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Harmonized palettes tested across RGB, CMYK, and Pantone matching systems for perfect physical and digital color consistency.
          </p>
        </div>
        <div>
          <div className="font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span> 3. Guideline Manuals
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Detailed 20+ page Brand Books outlining clear space rules, typography pairings, minimum sizes, and improper usage warnings.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-12">
        {brandingProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Visual Preview */}
            <div className={`lg:col-span-6 relative aspect-video lg:aspect-auto overflow-hidden bg-neutral-100 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-neutral-900 shadow-sm">
                  {project.client}
                </span>
              </div>
            </div>

            {/* Info and Palette */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span className="text-pink-600 font-semibold">{project.metrics}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-500 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Palette swatches with copy */}
              <div className="pt-4 border-t border-neutral-100 space-y-2">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Color Strategy</span>
                  <span className="text-[10px] text-neutral-400 font-normal">Click swatch to copy HEX</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.palette.map((color) => (
                    <button
                      key={color.hex}
                      onClick={(e) => handleCopyHex(e, color.hex)}
                      className="px-2.5 py-1.5 rounded-lg border border-neutral-200 hover:border-pink-400 bg-neutral-50 flex items-center gap-2 text-xs font-mono transition-all"
                      title={`Copy ${color.name} (${color.hex})`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs" 
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-neutral-700">{color.hex}</span>
                      {copiedHex === color.hex && (
                        <Check className="w-3 h-3 text-emerald-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Full Case Study & Deliverables <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('home')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Back to Home
        </button>
        <button
          onClick={() => onNavigate('illustrations')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next Gallery: 3D Art & Illustrations</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
