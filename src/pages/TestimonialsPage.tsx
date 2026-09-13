import React from 'react';
import { PageId } from '../types';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, ArrowRight, CheckCircle, Award } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Reputation & Trust</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Client Reviews & Endorsements
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          The true measure of graphic design is the lasting commercial value it brings to the clients who trust my vision. Here is what creative directors, startup founders, and brand owners say about working together.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs text-center space-y-1">
          <div className="font-heading text-3xl font-extrabold text-pink-600">5.0 / 5.0</div>
          <div className="text-xs font-semibold text-neutral-800">Average Client Rating</div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs text-center space-y-1">
          <div className="font-heading text-3xl font-extrabold text-neutral-900">100%</div>
          <div className="text-xs font-semibold text-neutral-800">On-Time Delivery Rate</div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs text-center space-y-1">
          <div className="font-heading text-3xl font-extrabold text-neutral-900">92%</div>
          <div className="text-xs font-semibold text-neutral-800">Repeat Client & Referral Rate</div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs text-center space-y-1">
          <div className="font-heading text-3xl font-extrabold text-pink-600">140+</div>
          <div className="text-xs font-semibold text-neutral-800">Completed Projects</div>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full">
                  {t.projectType}
                </span>
              </div>

              <Quote className="w-8 h-8 text-neutral-200" />

              <p className="text-sm text-neutral-700 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <img
                src={t.avatar}
                alt={t.clientName}
                className="w-11 h-11 rounded-full object-cover border border-neutral-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-heading font-bold text-sm text-neutral-900">{t.clientName}</div>
                <div className="text-xs text-neutral-500">{t.role}, {t.company}</div>
                <div className="text-[10px] text-neutral-400">{t.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
        <button
          onClick={() => onNavigate('services')}
          className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
        >
          ← Previous: Pricing Packages
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <span>Next: Contact & Project Inquiry</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
