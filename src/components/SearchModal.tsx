import React, { useState, useMemo } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, COLOR_PALETTES, SKILLS_LIST, SERVICE_PACKAGES, HUMAIRA_PROFILE } from '../data/portfolioData';
import { Search, X, ArrowRight, Palette, Layers, Sparkles, Github } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();

    const matchedProjects = PROJECTS.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tools.some(t => t.toLowerCase().includes(q)) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
    );

    const matchedSkills = SKILLS_LIST.filter(
      s => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );

    const matchedPalettes = COLOR_PALETTES.filter(
      pal =>
        pal.name.toLowerCase().includes(q) ||
        pal.type.toLowerCase().includes(q) ||
        pal.mood.toLowerCase().includes(q)
    );

    const matchedPackages = SERVICE_PACKAGES.filter(
      pkg => pkg.name.toLowerCase().includes(q) || pkg.description.toLowerCase().includes(q)
    );

    return {
      projects: matchedProjects,
      skills: matchedSkills,
      palettes: matchedPalettes,
      packages: matchedPackages
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-neutral-200 gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects, color theory, tools (Illustrator, 3D), packaging, pricing..."
            className="w-full text-base bg-transparent outline-none text-neutral-800 placeholder-neutral-400 font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {!query.trim() ? (
            <div className="space-y-4">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                Quick Jump Suggestions
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                <button
                  onClick={() => {
                    onNavigate('color-theory');
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-neutral-200 text-left hover:border-pink-400 hover:bg-pink-50/50 transition-all flex items-center gap-2"
                >
                  <Palette className="w-4 h-4 text-pink-500" />
                  <span className="font-semibold text-neutral-700">Color Theory</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('branding');
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-neutral-200 text-left hover:border-pink-400 hover:bg-pink-50/50 transition-all flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-pink-500" />
                  <span className="font-semibold text-neutral-700">Brand Identity</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('illustrations');
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-neutral-200 text-left hover:border-pink-400 hover:bg-pink-50/50 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span className="font-semibold text-neutral-700">3D Illustrations</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('services');
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-neutral-200 text-left hover:border-pink-400 hover:bg-pink-50/50 transition-all flex items-center gap-2"
                >
                  <span className="text-base">💼</span>
                  <span className="font-semibold text-neutral-700">Pricing Packages</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('skills');
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-neutral-200 text-left hover:border-pink-400 hover:bg-pink-50/50 transition-all flex items-center gap-2"
                >
                  <span className="text-base">⚡</span>
                  <span className="font-semibold text-neutral-700">Adobe & Tools</span>
                </button>
                <a
                  href={HUMAIRA_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="p-3 rounded-xl border border-neutral-200 text-left hover:border-neutral-900 hover:bg-neutral-50 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-neutral-900" />
                  <span className="font-semibold text-neutral-700">GitHub Profile</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Projects */}
              {filteredResults && filteredResults.projects.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Case Studies & Projects ({filteredResults.projects.length})
                  </div>
                  <div className="space-y-2">
                    {filteredResults.projects.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectProject(p);
                          onClose();
                        }}
                        className="w-full p-3 rounded-xl hover:bg-neutral-100 flex items-center justify-between text-left transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-10 h-10 rounded-lg object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="font-semibold text-sm text-neutral-800 group-hover:text-pink-600">
                              {p.title}
                            </div>
                            <div className="text-xs text-neutral-500">{p.subtitle}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Palettes */}
              {filteredResults && filteredResults.palettes.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Color Palettes ({filteredResults.palettes.length})
                  </div>
                  <div className="space-y-2">
                    {filteredResults.palettes.map(pal => (
                      <button
                        key={pal.id}
                        onClick={() => {
                          onNavigate('color-theory');
                          onClose();
                        }}
                        className="w-full p-3 rounded-xl hover:bg-neutral-100 flex items-center justify-between text-left transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-sm text-neutral-800">{pal.name}</div>
                          <div className="text-xs text-neutral-500">{pal.mood}</div>
                        </div>
                        <div className="flex gap-1">
                          {pal.colors.slice(0, 4).map(c => (
                            <span
                              key={c.hex}
                              className="w-4 h-4 rounded-full border border-black/10"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {filteredResults && filteredResults.skills.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Skills & Software ({filteredResults.skills.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredResults.skills.map(s => (
                      <button
                        key={s.name}
                        onClick={() => {
                          onNavigate('skills');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl border border-neutral-200 text-left hover:border-pink-300 transition-colors"
                      >
                        <div className="font-semibold text-xs text-neutral-800">{s.name}</div>
                        <div className="text-[11px] text-neutral-500 truncate">{s.popularFor}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state */}
              {filteredResults &&
                filteredResults.projects.length === 0 &&
                filteredResults.palettes.length === 0 &&
                filteredResults.skills.length === 0 &&
                filteredResults.packages.length === 0 && (
                  <div className="py-8 text-center text-neutral-400 text-sm">
                    No matching results found for "{query}". Try "Branding", "3D", "Illustrator", or "Packaging".
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
