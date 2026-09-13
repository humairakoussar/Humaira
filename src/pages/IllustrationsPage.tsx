import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, HUMAIRA_PROFILE } from '../data/portfolioData';
import { Sparkles, ArrowRight, Layers, Box, Check, Copy, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';

interface IllustrationsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const IllustrationsPage: React.FC<IllustrationsPageProps> = ({ onNavigate, onSelectProject }) => {
  const illustrationProjects = PROJECTS.filter(p => p.category === 'illustration');
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
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Portfolio Gallery 02</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          3D Character Art & Digital Illustration
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Tactile 3D character avatars, creative software suite icons, and cozy vector editorial scenes that bring warmth, personality, and human joy to digital brands.
        </p>
      </div>

      {/* Featured 3D Showcase Banner */}
      <div className="rounded-3xl bg-gradient-to-tr from-blue-700 via-indigo-700 to-purple-800 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/20">
            Lead Campaign Artwork
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            The Digital Creator 3D Suite
          </h2>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            Crafted with soft clay shaders, custom studio rim lighting, and floating Adobe / Figma app iconography. Celebrating modern digital creators in a playful, welcoming aesthetic.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold">Blender 3D Modeling</span>
            <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold">Subsurface Clay Shaders</span>
            <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold">Adobe Creative Cloud Icons</span>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 bg-neutral-900">
            <img 
              src={HUMAIRA_PROFILE.designerToolsImage} 
              alt="Humaira Kousar 3D Character Suite" 
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Illustration Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {illustrationProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
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

              <div className="p-6 sm:p-7 space-y-3">
                <div className="text-xs text-neutral-400 font-medium">
                  {project.year} • {project.duration} • <span className="text-pink-600 font-semibold">{project.metrics}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-neutral-900 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-500 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Color Swatches */}
            <div className="p-6 sm:p-7 pt-0">
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-neutral-400 font-medium">Palette:</span>
                  <div className="flex gap-1">
                    {project.palette.map((c) => (
                      <button
                        key={c.hex}
                        onClick={(e) => handleCopyHex(e, c.hex)}
                        className="w-5 h-5 rounded-full border border-black/10 transition-transform hover:scale-110 relative"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name}: ${c.hex}`}
                      />
                    ))}
                  </div>
                </div>

                <span className="text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('branding')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: Brand Identity
        </button>
        <button
          onClick={() => onNavigate('social')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next Gallery: Social Media & Marketing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
