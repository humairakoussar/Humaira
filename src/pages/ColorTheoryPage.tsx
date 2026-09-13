import React, { useState } from 'react';
import { PageId, PaletteShowcase } from '../types';
import { COLOR_PALETTES } from '../data/portfolioData';
import { 
  Palette, 
  Sparkles, 
  Check, 
  Copy, 
  Sliders, 
  Eye, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ColorTheoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const ColorTheoryPage: React.FC<ColorTheoryPageProps> = ({ onNavigate }) => {
  const [selectedPalette, setSelectedPalette] = useState<PaletteShowcase>(COLOR_PALETTES[0]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [interactiveRuleStep, setInteractiveRuleStep] = useState<'60' | '30' | '10'>('60');

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    confetti({
      particleCount: 20,
      spread: 30,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const psychologyMap = [
    {
      color: 'Fuchsia & Rose Pink',
      hex: '#E11D48',
      meaning: 'Empathy, Passion, Playful Confidence & Vibrancy',
      applications: 'Beauty, lifestyle, creator tools, youth culture, confectionery'
    },
    {
      color: 'Electric Royal Blue',
      hex: '#2563EB',
      meaning: 'Clarity, Digital Authority, Trust & Focus',
      applications: 'Tech platforms, SaaS, finance, healthcare, professional architecture'
    },
    {
      color: 'Twilight Violet & Amethyst',
      hex: '#7C3AED',
      meaning: 'Luxury, Imagination, Mystery & Creative Mastery',
      applications: 'Creative agencies, high-end perfumery, web3, experimental studios'
    },
    {
      color: 'Sunbaked Terracotta & Amber',
      hex: '#C2410C',
      meaning: 'Warmth, Earthiness, Hospitality & Comfort',
      applications: 'Specialty coffee, organic culinary, artisanal goods, ceramic arts'
    },
    {
      color: 'Botanical Sage & Moss',
      hex: '#65A30D',
      meaning: 'Vitality, Sustainability, Harmony & Renewal',
      applications: 'Eco packaging, holistic wellness, organic cosmetics, slow fashion'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider flex items-center gap-1.5">
          <Palette className="w-4 h-4" />
          <span>Interactive Creative Lab</span>
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          The Science & Art of Color Theory
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Color is not merely aesthetic decoration—it is immediate non-verbal communication. Explore how I engineer harmonic palettes using mathematical distribution rules, psychological resonance, and accessibility standards.
        </p>
      </div>

      {/* Interactive Palette Selector & Harmony Explorer */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-neutral-900">
              Curated Harmonic Palettes
            </h2>
            <p className="text-xs text-neutral-500">Select a palette to inspect its color hierarchy and design application.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {COLOR_PALETTES.map((pal) => (
              <button
                key={pal.id}
                onClick={() => setSelectedPalette(pal)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedPalette.id === pal.id
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-pink-300'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pal.colors[0].hex }} />
                <span>{pal.name}</span>
                <span className="text-[10px] opacity-70">({pal.type})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Palette Deep Dive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-md space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-700">
                  {selectedPalette.type} Harmony
                </span>
                <span className="text-xs text-neutral-500 font-medium">{selectedPalette.mood}</span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold text-neutral-900 mt-2">
                {selectedPalette.name}
              </h3>
              <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
                {selectedPalette.description}
              </p>
            </div>

            <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-xl border border-neutral-200 md:max-w-xs">
              <span className="font-bold text-neutral-800 block mb-0.5">Recommended Usage:</span>
              {selectedPalette.usageAdvice}
            </div>
          </div>

          {/* Color Chips Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {selectedPalette.colors.map((c) => (
              <div
                key={c.hex}
                onClick={() => handleCopyColor(c.hex)}
                className="group relative rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all cursor-pointer bg-white"
              >
                {/* Color Block */}
                <div 
                  className="h-28 w-full p-3 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="flex justify-end">
                    {copiedColor === c.hex ? (
                      <span className="bg-black/80 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                        <Check className="w-3 h-3 text-emerald-400" /> Copied!
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white p-1 rounded-md">
                        <Copy className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-3 bg-white space-y-1">
                  <div className="font-bold text-xs text-neutral-900 truncate">{c.name}</div>
                  <div className="text-[11px] font-mono text-pink-600 font-bold">{c.hex}</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">{c.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Micro-simulation: 60-30-10 Rule Visualizer */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-heading font-bold text-base text-neutral-900 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-pink-500" />
                  <span>The 60-30-10 Distribution Rule in Action</span>
                </h4>
                <p className="text-xs text-neutral-500">
                  Graphic design hierarchy is achieved by distributing colors in a 60% dominant base, 30% structural secondary, and 10% vibrant focal accent ratio.
                </p>
              </div>

              <div className="flex gap-1.5">
                <button
                  onClick={() => setInteractiveRuleStep('60')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                    interactiveRuleStep === '60' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-700 border'
                  }`}
                >
                  60% Dominant
                </button>
                <button
                  onClick={() => setInteractiveRuleStep('30')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                    interactiveRuleStep === '30' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-700 border'
                  }`}
                >
                  30% Structure
                </button>
                <button
                  onClick={() => setInteractiveRuleStep('10')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                    interactiveRuleStep === '10' ? 'bg-pink-600 text-white' : 'bg-white text-neutral-700 border'
                  }`}
                >
                  10% Accent
                </button>
              </div>
            </div>

            {/* Simulated mini layout */}
            <div 
              className="p-6 rounded-xl border transition-all duration-300 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ 
                backgroundColor: selectedPalette.colors[2]?.hex || '#FAF8F5',
                borderColor: selectedPalette.colors[3]?.hex || '#EDE9FE' 
              }}
            >
              <div className="space-y-2 max-w-sm">
                <span 
                  className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: selectedPalette.colors[3]?.hex || '#EDE9FE',
                    color: selectedPalette.colors[4]?.hex || '#1E1B4B'
                  }}
                >
                  {interactiveRuleStep === '60' && 'Base Canvas (60%)'}
                  {interactiveRuleStep === '30' && 'Card & Surface (30%)'}
                  {interactiveRuleStep === '10' && 'Focal Accent CTA (10%)'}
                </span>
                <h5 
                  className="font-heading font-bold text-lg"
                  style={{ color: selectedPalette.colors[4]?.hex || '#1E1B4B' }}
                >
                  Balanced Contrast & Optical Hierarchy
                </h5>
                <p 
                  className="text-xs leading-relaxed"
                  style={{ color: selectedPalette.colors[4]?.hex || '#1E1B4B', opacity: 0.8 }}
                >
                  Notice how the eyes naturally gravitate toward the 10% accent button, while the 60% canvas provides comfortable negative space.
                </p>
              </div>

              <button
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                style={{ backgroundColor: selectedPalette.colors[0]?.hex || '#E11D48' }}
              >
                10% Accent Call-to-Action
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Psychology of Color Chart */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Neurological Perception</span>
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mt-1">
            Psychology of Color in Commercial Branding
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            How human minds subconsciously interpret color frequencies across branding and consumer packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {psychologyMap.map((item) => (
            <div key={item.color} className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full shadow-xs border border-black/10" style={{ backgroundColor: item.hex }} />
                <h3 className="font-heading font-bold text-base text-neutral-900">{item.color}</h3>
              </div>

              <div>
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Subconscious Meaning</div>
                <p className="text-xs font-semibold text-neutral-800 mt-0.5">{item.meaning}</p>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Proven Applications</div>
                <p className="text-xs text-neutral-600 mt-0.5">{item.applications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WCAG Accessibility & Color Gamut Standards */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
            <div>
              <h3 className="font-heading text-2xl font-bold">WCAG AA / AAA Accessibility & Color Contrast</h3>
              <p className="text-xs text-neutral-400">Ensuring readability for every eye across all lighting conditions.</p>
            </div>
          </div>
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            100% Contrast Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-2">
            <h4 className="font-bold text-neutral-200">Contrast Ratio Standards</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Body text requires at least 4.5:1 contrast against backgrounds, and bold headlines require at least 3:1. My palettes consistently hit 7:1+ ratios.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-2">
            <h4 className="font-bold text-neutral-200">Color-Blind Simulation</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Checked via Protanopia, Deuteranopia, and Tritanopia digital filters so important user actions never rely on color alone without typographic shape cues.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-2">
            <h4 className="font-bold text-neutral-200">Gamut Translation</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every RGB digital screen color is mathematically paired with corresponding CMYK and Pantone PMS formulas to prevent dull print surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('packaging')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: Packaging & Print Design
        </button>
        <button
          onClick={() => onNavigate('process')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next: 5-Stage Design Workflow</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
