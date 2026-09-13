import React from 'react';
import { PageId } from '../types';
import { DESIGN_PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, ArrowRight, CheckCircle2, FileText, Layers, RefreshCw, FolderCheck } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Methodology</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          A Proven 5-Stage Graphic Design Workflow
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Great design is not accidental inspiration; it is a structured, collaborative journey. Here is how I shepherd every project from raw spark to polished commercial brand assets.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-6">
        {DESIGN_PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-xs flex flex-col lg:flex-row lg:items-start justify-between gap-8 hover:shadow-lg transition-all"
          >
            {/* Step Counter */}
            <div className="flex items-center gap-4 lg:w-1/4">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl text-neutral-900/20 group-hover:text-pink-600 transition-colors">
                {step.step}
              </span>
              <div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-pink-50 text-pink-700 uppercase tracking-wider">
                  Stage {idx + 1}
                </span>
                <div className="font-bold text-neutral-400 text-xs mt-1">{step.subtitle}</div>
              </div>
            </div>

            {/* Content description */}
            <div className="lg:w-2/4 space-y-2">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Concrete Deliverable badge */}
            <div className="lg:w-1/4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                Key Milestone Output
              </span>
              <div className="font-semibold text-neutral-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Master Asset Archive Standards */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Delivery Guarantee</span>
            <h3 className="font-heading text-2xl font-bold mt-1">What You Receive in the Master Zip Folder</h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-neutral-300">
            Full Commercial Copyright
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-1">
            <div className="font-bold text-pink-400 uppercase">Vector Originals</div>
            <div className="text-neutral-300">Cleanly grouped, labeled Adobe Illustrator (.AI) and SVG files.</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-1">
            <div className="font-bold text-pink-400 uppercase">Print-Ready Press PDFs</div>
            <div className="text-neutral-300">CMYK 300 DPI with crop marks, bleeds, and spot UV layers.</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-1">
            <div className="font-bold text-pink-400 uppercase">Web & Social Exports</div>
            <div className="text-neutral-300">Transparent 24-bit PNGs, Retina JPEGs, and optimized WebP.</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-1">
            <div className="font-bold text-pink-400 uppercase">Brand Style Manual</div>
            <div className="text-neutral-300">PDF book outlining color codes, typography, and clear-space rules.</div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('color-theory')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: Color Theory Lab
        </button>
        <button
          onClick={() => onNavigate('services')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next: Services & Pricing Packages</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
