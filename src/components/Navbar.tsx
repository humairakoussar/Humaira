import React, { useState } from 'react';
import { PageId, ThemeMode } from '../types';
import { 
  Sparkles, 
  Palette, 
  Github, 
  Menu, 
  X, 
  Search, 
  ChevronDown,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { HUMAIRA_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  theme,
  onThemeChange,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'color-theory', label: 'Color Theory Lab', badge: 'Interactive' },
    { id: 'process', label: 'My Workflow' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const portfolioCategories: { id: PageId; label: string; desc: string; icon: string }[] = [
    { id: 'branding', label: 'Brand Identity & Logos', desc: 'Complete brand systems & typography', icon: '💎' },
    { id: 'illustrations', label: '3D Art & Digital Illustration', desc: 'Characters, 3D suites & vector scenes', icon: '🎨' },
    { id: 'social', label: 'Social & Marketing Graphics', desc: 'Carousels, typographic posters & banners', icon: '✨' },
    { id: 'packaging', label: 'Packaging & Print Design', desc: 'Glass bottles, boxes, menus & dielines', icon: '📦' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPortfolioActive = ['branding', 'illustrations', 'social', 'packaging'].includes(currentPage);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-neutral-200 shadow-xs group-hover:border-pink-400 group-hover:scale-105 transition-all">
              <img 
                src={HUMAIRA_PROFILE.avatarImage} 
                alt="Humaira Kousar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-sans font-bold text-lg sm:text-xl text-neutral-900 tracking-tight block group-hover:text-pink-600 transition-colors leading-tight">
                Humaira Kousar
              </span>
              <span className="block text-[11px] font-medium text-neutral-500 tracking-wider uppercase mt-0.5">
                Graphic Designer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'about'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              About
            </button>

            {/* Portfolio Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isPortfolioActive
                    ? 'bg-pink-50 text-pink-600 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <span>Portfolio Works</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portfolioDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setPortfolioDropdownOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      Design Disciplines (4 Galleries)
                    </div>
                    {portfolioCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleNavClick(cat.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-start gap-3 ${
                          currentPage === cat.id ? 'bg-pink-50 text-pink-700' : 'hover:bg-neutral-50 text-neutral-700'
                        }`}
                      >
                        <span className="text-xl mt-0.5">{cat.icon}</span>
                        <div>
                          <div className="font-semibold text-sm">{cat.label}</div>
                          <div className="text-xs text-neutral-500 font-normal">{cat.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => handleNavClick('skills')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'skills'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => handleNavClick('color-theory')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                currentPage === 'color-theory'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-pink-500" />
              <span>Color Theory</span>
            </button>

            <button
              onClick={() => handleNavClick('process')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'process'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Process
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'services'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('testimonials')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'testimonials'
                  ? 'bg-pink-50 text-pink-600 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Reviews
            </button>
          </nav>

          {/* Right Controls: Search, Theme, GitHub Pages Exporter & CTA */}
          <div className="flex items-center gap-2">
            
            {/* Instant Search */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              title="Search Portfolio (Cmd+K)"
              id="search-open-btn"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Palette Switcher */}
            <div className="hidden sm:flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200/80">
              <button
                onClick={() => onThemeChange('pastel')}
                title="Theme: Creative Pastel"
                className={`w-6 h-6 rounded-full transition-all flex items-center justify-center text-xs ${
                  theme === 'pastel' ? 'bg-pink-500 text-white shadow-sm scale-110' : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                🌸
              </button>
              <button
                onClick={() => onThemeChange('sunset')}
                title="Theme: Sunset Terracotta"
                className={`w-6 h-6 rounded-full transition-all flex items-center justify-center text-xs ${
                  theme === 'sunset' ? 'bg-amber-600 text-white shadow-sm scale-110' : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                🌅
              </button>
              <button
                onClick={() => onThemeChange('midnight')}
                title="Theme: Midnight Creative"
                className={`w-6 h-6 rounded-full transition-all flex items-center justify-center text-xs ${
                  theme === 'midnight' ? 'bg-indigo-900 text-white shadow-sm scale-110' : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                🌙
              </button>
            </div>

            {/* GitHub Profile Button */}
            <a
              href={HUMAIRA_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white shadow-xs transition-all hover:scale-105"
              title="Visit Humaira's GitHub Profile (@humairakoussar)"
              id="github-profile-navbar-btn"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* Primary Hire CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-sm hover:shadow-pink-200 hover:-translate-y-0.5 transition-all"
              id="cta-contact-btn"
            >
              Let's Talk
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 mb-4">
            <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-1">
              Main Pages
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                  currentPage === link.id
                    ? 'bg-pink-50 text-pink-600 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-3 pt-3 py-1">
              Portfolio Galleries
            </div>
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick(cat.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                  currentPage === cat.id
                    ? 'bg-pink-50 text-pink-600 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}

            <div className="pt-3">
              <a
                href={HUMAIRA_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2.5 rounded-xl text-sm font-semibold bg-neutral-900 text-white flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub Profile (@humairakoussar)</span>
                </span>
                <span className="text-xs text-pink-400">Visit ↗</span>
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-3 flex items-center justify-between">
            <span className="text-xs text-neutral-500">Aesthetic Theme</span>
            <div className="flex gap-2">
              <button
                onClick={() => onThemeChange('pastel')}
                className={`px-3 py-1 text-xs rounded-full border ${theme === 'pastel' ? 'bg-pink-500 text-white border-pink-500' : 'bg-neutral-50 text-neutral-700'}`}
              >
                Pastel
              </button>
              <button
                onClick={() => onThemeChange('sunset')}
                className={`px-3 py-1 text-xs rounded-full border ${theme === 'sunset' ? 'bg-amber-600 text-white border-amber-600' : 'bg-neutral-50 text-neutral-700'}`}
              >
                Sunset
              </button>
              <button
                onClick={() => onThemeChange('midnight')}
                className={`px-3 py-1 text-xs rounded-full border ${theme === 'midnight' ? 'bg-indigo-900 text-white border-indigo-900' : 'bg-neutral-50 text-neutral-700'}`}
              >
                Midnight
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
