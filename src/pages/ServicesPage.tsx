import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICE_PACKAGES, FAQS } from '../data/portfolioData';
import { Check, Sparkles, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl text-left">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Invest in Your Brand</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Transparent Services & Design Packages
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          No hidden fees or unexpected invoices. Choose a curated package or retain dedicated senior creative support tailored to your project scope.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {SERVICE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              pkg.isPopular
                ? 'bg-white border-2 border-pink-500 shadow-xl lg:-translate-y-2'
                : 'bg-white border border-neutral-200 shadow-sm hover:shadow-lg'
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-3 left-8">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs ${
                  pkg.isPopular ? 'bg-pink-600 text-white' : 'bg-neutral-900 text-white'
                }`}>
                  {pkg.badge}
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-neutral-900">{pkg.name}</h3>
                <p className="text-xs text-neutral-500 mt-1">{pkg.idealFor}</p>
              </div>

              <div className="pb-4 border-b border-neutral-100">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold text-neutral-900">{pkg.price}</span>
                </div>
                <div className="text-xs text-pink-600 font-semibold mt-1">
                  Turnaround: {pkg.turnaround}
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {pkg.description}
              </p>

              {/* Features list */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Deliverables Included
                </div>
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('contact')}
                className={`w-full py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md hover:shadow-pink-200'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                Select Package
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add-on Creative Services */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-6">
        <div>
          <h3 className="font-heading text-2xl font-bold text-neutral-900">Custom Add-On Creative Services</h3>
          <p className="text-xs text-neutral-500 mt-1">Can be added to any package or commissioned independently.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-1">
            <div className="font-bold text-sm text-neutral-900">3D Character Model</div>
            <div className="text-xs text-pink-600 font-semibold">$350 per character</div>
            <p className="text-xs text-neutral-500">Custom clay shader avatar with studio lighting in Blender.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-1">
            <div className="font-bold text-sm text-neutral-900">Animated Logo Reveal</div>
            <div className="text-xs text-pink-600 font-semibold">$250 per reveal</div>
            <p className="text-xs text-neutral-500">Kinetic After Effects 4K bumper loop with transparency.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-1">
            <div className="font-bold text-sm text-neutral-900">Retail Packaging Dieline</div>
            <div className="text-xs text-pink-600 font-semibold">$300 per carton/bag</div>
            <p className="text-xs text-neutral-500">Production-ready CMYK dieline vector with spot finishes.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-1">
            <div className="font-bold text-sm text-neutral-900">Social Media Bundle</div>
            <div className="text-xs text-pink-600 font-semibold">$220 for 10 templates</div>
            <p className="text-xs text-neutral-500">High-converting carousel and story layouts in Figma/Canva.</p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Answers</span>
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mt-1">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-neutral-900 cursor-pointer"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-pink-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('process')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: Design Process
        </button>
        <button
          onClick={() => onNavigate('testimonials')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next: Client Reviews & Endorsements</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
