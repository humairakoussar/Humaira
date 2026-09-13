import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  Calendar, 
  Clock, 
  Check, 
  Copy, 
  Layers, 
  Sparkles,
  ExternalLink,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!project) return null;

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col border border-neutral-200">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 capitalize">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-medium">Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-neutral-600 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm bg-neutral-100 max-h-[420px]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 text-sm">
            <div>
              <span className="text-xs text-neutral-400 font-medium block">Client</span>
              <span className="font-semibold text-neutral-800">{project.client}</span>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-medium block">Timeline</span>
              <span className="font-semibold text-neutral-800">{project.duration} ({project.year})</span>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-medium block">Role</span>
              <span className="font-semibold text-neutral-800">Lead Visual Designer</span>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-medium block">Impact Metric</span>
              <span className="font-semibold text-pink-600">{project.metrics || 'High Engagement'}</span>
            </div>
          </div>

          {/* Full Narrative */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-neutral-900">Project Overview</h4>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenge & Solution (if present) */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenge && (
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">The Creative Challenge</div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">The Strategic Solution</div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Color Theory System Swatches */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span>Color Theory & Harmonic Swatches</span>
                <span className="text-xs font-normal text-neutral-500">(Click to copy HEX)</span>
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {project.palette.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => handleCopyColor(color.hex)}
                  className="group text-left p-2.5 rounded-xl border border-neutral-200 hover:border-pink-400 hover:shadow-md transition-all bg-white"
                >
                  <div 
                    className="w-full h-12 rounded-lg mb-2 shadow-inner border border-black/5 flex items-center justify-center text-xs font-mono font-bold"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedHex === color.hex && (
                      <span className="bg-black/70 text-white px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-400" /> Copied
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-xs text-neutral-800 truncate">{color.name}</div>
                  <div className="text-[11px] font-mono text-neutral-400 group-hover:text-pink-600 flex items-center justify-between">
                    <span>{color.hex}</span>
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Software Tools Used */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">Software & Disciplines</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">
                  {tool}
                </span>
              ))}
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables List */}
          {project.deliverables && (
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Final Deliverables Package</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
          <div className="text-xs text-neutral-500">
            Have a project like this in mind?
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
