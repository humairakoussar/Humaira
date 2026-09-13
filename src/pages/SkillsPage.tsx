import React, { useState } from 'react';
import { PageId } from '../types';
import { SKILLS_LIST, HUMAIRA_PROFILE } from '../data/portfolioData';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Palette, 
  Layers, 
  Cpu, 
  Sliders, 
  Code2,
  Box
} from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'software' | 'theory'>('all');

  const filteredSkills = SKILLS_LIST.filter(s => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Technical Mastery</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Creative Software Suite & Design Disciplines
          </h1>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            A comprehensive overview of my software mastery, design theory proficiencies, and technical output capabilities honed over 5+ years of commercial practice.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center bg-neutral-100 p-1.5 rounded-2xl border border-neutral-200 self-start">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'software' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Creative Software
          </button>
          <button
            onClick={() => setFilter('theory')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'theory' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Design Theory
          </button>
        </div>
      </div>

      {/* Hero Visual Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pink-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Fidelity Workflows</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">
            From Raw Vector Splines to 3D Clay Characters
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            I don't rely on preset filters or generic AI templates. Every graphic asset, color palette, and packaging dieline is built systematically from scratch to ensure true brand originality.
          </p>
        </div>

        <div className="w-48 sm:w-56 shrink-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
          <img 
            src={HUMAIRA_PROFILE.designerToolsImage} 
            alt="Designer 3D Suite" 
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.name}
            className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-lg">
                  {skill.experience}
                </span>
                <span className="font-heading font-extrabold text-sm text-neutral-800">
                  {skill.level}% Proficiency
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-1">
                {skill.name}
              </h3>

              <div className="w-full bg-neutral-100 rounded-full h-2 mb-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-rose-600 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {skill.description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                Primary Applications
              </div>
              <div className="text-xs font-semibold text-neutral-800">
                {skill.popularFor}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Formats & Deliverables Breakdown */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
        <h3 className="font-heading text-2xl font-bold text-neutral-900">
          Professional Deliverables & Production Standards
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-2">
            <h4 className="font-bold text-base text-neutral-900">Vector Master Formats</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Native Adobe Illustrator (.AI), Scalable Vector Graphics (.SVG), Encapsulated PostScript (.EPS), and vector PDF for infinite scalability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-2">
            <h4 className="font-bold text-base text-neutral-900">Web & Screen Optimization</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Transparent 24-bit PNGs, progressive JPEGs, WebP, SVG icons, and Figma UI component libraries tuned for 4K Retina displays.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-2">
            <h4 className="font-bold text-base text-neutral-900">Press & Print Production</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              CMYK color spaces, 300+ DPI resolution, 3mm/0.125" standard bleeds, crop marks, spot Pantone codes, and foil/UV layers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-sm shadow-md hover:shadow-pink-200 transition-all cursor-pointer"
        >
          Hire Me For Your Next Design Project
        </button>
      </div>

    </div>
  );
};
