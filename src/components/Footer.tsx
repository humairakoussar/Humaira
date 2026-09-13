import React from 'react';
import { PageId } from '../types';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUp, 
  Heart,
  Palette,
  Sparkles
} from 'lucide-react';
import { HUMAIRA_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Bio & Persona */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500">
                <img 
                  src={HUMAIRA_PROFILE.avatarImage} 
                  alt="Humaira Kousar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-sans font-bold text-white text-lg tracking-tight">Humaira Kousar</div>
                <div className="text-xs text-pink-400 font-medium">Graphic Designer & Visual Brand Strategist</div>
              </div>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed pr-6">
              Specialized in holistic brand identities, 3D character illustrations, and packaging systems powered by color theory harmony and vector precision.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={HUMAIRA_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={HUMAIRA_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={HUMAIRA_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${HUMAIRA_PROFILE.email}`}
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Portfolio Galleries */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Portfolio Galleries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('branding')}
                  className="hover:text-pink-400 transition-colors text-left"
                >
                  Brand Identity & Logos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('illustrations')}
                  className="hover:text-pink-400 transition-colors text-left"
                >
                  3D & Vector Illustrations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('social')}
                  className="hover:text-pink-400 transition-colors text-left"
                >
                  Social Media & Posters
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('packaging')}
                  className="hover:text-pink-400 transition-colors text-left"
                >
                  Packaging & Print Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('color-theory')}
                  className="hover:text-pink-400 transition-colors text-left flex items-center gap-1.5 text-pink-400"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Color Theory Lab</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Exploration & About */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-pink-400 transition-colors">
                  About My Journey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-pink-400 transition-colors">
                  Creative Software Suite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-pink-400 transition-colors">
                  5-Step Design Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-pink-400 transition-colors">
                  Pricing Packages & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-pink-400 transition-colors">
                  Client Endorsements
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: GitHub Official Profile */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Github className="w-4 h-4 text-pink-500" />
              <span>GitHub Profile</span>
            </h4>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              Explore open-source creative projects, portfolio repositories, and design asset code by Humaira Kousar.
            </p>
            <a
              href={HUMAIRA_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-3 py-2.5 text-xs font-semibold rounded-xl bg-white text-neutral-950 hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>@humairakoussar ↗</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Humaira Kousar. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>and color theory harmony.</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={HUMAIRA_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub: @humairakoussar
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
