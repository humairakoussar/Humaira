import React, { useState } from 'react';
import { PageId } from '../types';
import { HUMAIRA_PROFILE } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Sparkles, 
  Clock, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Identity System',
    budget: '$1,000 - $2,500',
    timeline: 'Within 3-4 Weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HUMAIRA_PROFILE.email);
    setCopiedEmail(true);
    confetti({ particleCount: 20, spread: 35, origin: { y: 0.7 } });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Start a Collaboration</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Let's Create Something Extraordinary
        </h1>
        <p className="text-base text-neutral-600 mt-3 leading-relaxed">
          Whether you need a complete ground-up brand identity, custom 3D illustrations, or packaging design, I would love to hear about your vision. Fill out the brief estimator below or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Contact Info & Social Connections */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="p-8 rounded-3xl bg-neutral-900 text-white space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500">
                <img 
                  src={HUMAIRA_PROFILE.avatarImage} 
                  alt="Humaira Kousar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Humaira Kousar</div>
                <div className="text-xs text-pink-400 font-medium">Graphic Designer & Illustrator</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              I reply to all project inquiries within 24 business hours. If you need an NDA signed prior to discussion, feel free to mention it in your message.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800 border border-neutral-700">
                <div className="flex items-center gap-2 text-xs text-neutral-300 truncate">
                  <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="truncate">{HUMAIRA_PROFILE.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 p-1.5 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-neutral-200 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Response Time: Typically within 12 - 24 hours</span>
              </div>
            </div>

            {/* Social Network Connections */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                Official Profiles & Repositories
              </div>
              <div className="space-y-2 text-xs">
                <a
                  href={HUMAIRA_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-neutral-400" />
                    <span>GitHub: @humairakoussar</span>
                  </span>
                  <span className="text-[10px] text-pink-400 font-bold">Visit →</span>
                </a>

                <a
                  href={HUMAIRA_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-[10px] text-pink-400 font-bold">Connect →</span>
                </a>

                <a
                  href={HUMAIRA_PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram: @humairakoussar.design</span>
                  </span>
                  <span className="text-[10px] text-pink-400 font-bold">Follow →</span>
                </a>
              </div>
            </div>

          </div>

          <div className="p-6 rounded-3xl bg-neutral-900 text-white border border-neutral-800 text-sm space-y-3">
            <h4 className="font-heading font-bold text-white flex items-center gap-2">
              <Github className="w-4 h-4 text-pink-400" />
              <span>Humaira's GitHub Profile</span>
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Explore public design projects, UI design systems, and code contributions directly on GitHub.
            </p>
            <a
              href={HUMAIRA_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 bg-white hover:bg-neutral-100 px-4 py-2 rounded-full transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Visit @humairakoussar ↗</span>
            </a>
          </div>

        </div>

        {/* Right: Interactive Project Brief Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-neutral-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold">{formData.name}</span>. Humaira will review your project brief and reply to <span className="font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-neutral-900">Project Brief & Estimator</h3>
                  <p className="text-xs text-neutral-500 mt-1">Tell me about your goals, timeline, and deliverables.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Service Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-neutral-200 focus:border-pink-500 text-sm outline-none bg-white"
                    >
                      <option>Brand Identity System</option>
                      <option>3D Character Illustration</option>
                      <option>Packaging & Print Design</option>
                      <option>Social Media Creatives</option>
                      <option>Color Strategy Consultation</option>
                      <option>Full Creative Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-neutral-200 focus:border-pink-500 text-sm outline-none bg-white"
                    >
                      <option>$450 - $1,000</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-neutral-200 focus:border-pink-500 text-sm outline-none bg-white"
                    >
                      <option>Within 1-2 Weeks</option>
                      <option>Within 3-4 Weeks</option>
                      <option>1-2 Months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Project Details & Vision
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your company, what you are trying to accomplish, any specific visual references or color palettes you like..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm shadow-md hover:shadow-pink-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Brief</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
