import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, HUMAIRA_PROFILE } from '../data/portfolioData';
import { ArrowRight, Sparkles, Heart, Share2, Instagram, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SocialMediaPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onNavigate, onSelectProject }) => {
  const socialProjects = PROJECTS.filter(p => p.category === 'social');
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
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Portfolio Gallery 03</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Social Media & Marketing Graphics
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          High-conversion Instagram carousels, inspirational typographic posters, YouTube channel banners, and viral aesthetic graphics designed to stop the thumb and inspire connection.
        </p>
      </div>

      {/* Hero Inspirational Banner Feature */}
      <div className="rounded-3xl overflow-hidden border border-neutral-200/90 shadow-lg bg-white">
        <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-pink-50">
          <img 
            src={HUMAIRA_PROFILE.inspirationalBannerImage} 
            alt="Be You Be Beautiful Campaign" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="p-6 sm:p-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-700">
              Featured Campaign: Bloom & Grace Collective
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              85,000+ Saves on Pinterest
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Be You, Be Beautiful — Confident • Strong • Happy
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            A serene, heart-centered campaign blending delicate pink silk bows, soft morning windowsill ambiance, and empowering hand-drawn typography. Engineered to communicate self-worth, motivation, and aesthetic mindfulness.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">1080x1920 Story Templates</span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">1080x1350 Portrait Carousels</span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">YouTube 2560x1440 Banner Suite</span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">Printable A2 Wall Art</span>
          </div>
        </div>
      </div>

      {/* Social Format Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg">
            <Instagram className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-neutral-900">Seamless Instagram Carousels</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Multi-slide storytelling formats where visual elements bleed across swipe boundaries, boosting dwell time and algorithmic saves by over 140%.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-neutral-900">Hand-Lettered Quotes</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Custom expressive calligraphy and brush strokes tailored to motivational quotes, brand mantras, and promotional holiday campaigns.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-neutral-900">Figma & Canva Master Kits</h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Fully editable templates with structured text autolayout and image placeholders so internal marketing teams can create on-brand posts in seconds.
          </p>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('illustrations')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: 3D Art & Illustrations
        </button>
        <button
          onClick={() => onNavigate('packaging')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next Gallery: Packaging & Print Design</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
