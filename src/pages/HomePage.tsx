import React from 'react';
import { PageId, ProjectItem } from '../types';
import { HUMAIRA_PROFILE, PROJECTS, COLOR_PALETTES } from '../data/portfolioData';
import { 
  Sparkles, 
  ArrowRight, 
  Palette, 
  Layers, 
  CheckCircle2, 
  Github, 
  Heart,
  Star,
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-pink-200/40 via-purple-200/30 to-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200/70 text-pink-700 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                <span>Visual Identity • 3D Characters • Color Strategy</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1]">
                Crafting visual brands with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-amber-600">poetic color</span> and mathematical precision.
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                I am <span className="font-semibold text-neutral-900">Humaira Kousar</span>—a graphic designer and visual brand strategist. I shape memorable identities, high-converting marketing collateral, and stylized 3D illustrations rooted in intentional color theory.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('branding')}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold text-sm shadow-md hover:shadow-pink-200 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                  id="hero-explore-works"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('color-theory')}
                  className="px-5 py-3.5 rounded-full bg-white border border-neutral-300 text-neutral-800 font-semibold text-sm hover:border-pink-500 hover:text-pink-600 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Palette className="w-4 h-4 text-pink-500" />
                  <span>Color Theory Lab</span>
                </button>

                <a
                  href={HUMAIRA_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 shadow-xs hover:shadow-md transition-all flex items-center gap-2 hover:scale-105"
                  title="Visit Humaira's GitHub Profile (@humairakoussar)"
                  id="hero-github-profile-btn"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200/80 max-w-lg">
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">5+</div>
                  <div className="text-xs text-neutral-500 font-medium mt-0.5">Years Experience</div>
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-pink-600">140+</div>
                  <div className="text-xs text-neutral-500 font-medium mt-0.5">Projects Delivered</div>
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">98%</div>
                  <div className="text-xs text-neutral-500 font-medium mt-0.5">Client Satisfaction</div>
                </div>
              </div>

            </div>

            {/* Right: Designer Portrait & Floating Accents */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Main Portrait Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-square">
                  <img 
                    src={HUMAIRA_PROFILE.avatarImage} 
                    alt="Humaira Kousar Graphic Designer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-heading font-bold text-lg">Humaira Kousar</div>
                    <div className="text-xs text-neutral-200">Graphic Designer & 3D Illustrator</div>
                  </div>
                </div>

                {/* Floating Badge 1: Available for Work */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-neutral-200 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100" />
                  <span className="text-xs font-bold text-neutral-800">Open for Commissions</span>
                </div>

                {/* Floating Badge 2: Software Mastery */}
                <div className="absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-200 text-xs">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5 mb-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>Design Toolkit</span>
                  </div>
                  <div className="flex gap-1.5 text-xs font-semibold text-neutral-700">
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">Ai</span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">Ps</span>
                    <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">Figma</span>
                    <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">Ae</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Software Marquee / Tech Stacks */}
      <section className="border-y border-neutral-200/80 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider shrink-0">
              Mastered Software & Design Tools
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-neutral-600 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-1.5 hover:text-amber-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Adobe Illustrator
              </span>
              <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Adobe Photoshop
              </span>
              <span className="flex items-center gap-1.5 hover:text-purple-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Figma Systems
              </span>
              <span className="flex items-center gap-1.5 hover:text-rose-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span> Adobe InDesign
              </span>
              <span className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> After Effects
              </span>
              <span className="flex items-center gap-1.5 hover:text-orange-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> Blender 3D
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Curated Portfolio</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-1">
              Featured Case Studies & Visual Projects
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              Explore recent branding systems, 3D character illustrations, and marketing creative campaigns.
            </p>
          </div>
          <button
            onClick={() => onNavigate('branding')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors group cursor-pointer"
          >
            <span>View All 10+ Sections</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-neutral-800 shadow-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-medium mb-1">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 group-hover:text-pink-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Color Palette preview dots */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-neutral-400 font-medium">Palette:</span>
                    <div className="flex -space-x-1">
                      {project.palette.map((c) => (
                        <div
                          key={c.hex}
                          className="w-5 h-5 rounded-full border-2 border-white shadow-xs"
                          style={{ backgroundColor: c.hex }}
                          title={`${c.name}: ${c.hex}`}
                        />
                      ))}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-pink-600 group-hover:underline flex items-center gap-1">
                    Case Study Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Theory Interactive Preview Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-neutral-800">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold border border-pink-500/30">
                <Palette className="w-3.5 h-3.5" />
                <span>The Science & Poetry of Color</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight">
                Mastering Color Theory for Maximum Emotional Impact
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Every hue triggers a physiological response. I utilize the mathematical 60-30-10 distribution rule, complementary tension, and strict WCAG accessibility to craft unforgettable brand moods.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('color-theory')}
                  className="px-5 py-3 rounded-full bg-pink-600 text-white font-semibold text-xs sm:text-sm hover:bg-pink-500 transition-colors shadow-sm flex items-center gap-2"
                >
                  <span>Open Interactive Color Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                Active Harmony: Petal & Amethyst Glow
              </div>
              <div className="grid grid-cols-5 gap-2">
                {COLOR_PALETTES[0].colors.map((c) => (
                  <div key={c.hex} className="text-center">
                    <div 
                      className="w-full h-14 rounded-xl mb-1.5 shadow-sm border border-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="text-[10px] font-mono text-neutral-300">{c.hex}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-300 italic">
                "Color is the keyboard, the eyes are the hammers, the soul is the piano with many strings."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* GitHub Profile Highlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider">
              <Github className="w-4 h-4" />
              <span>Open Source & Creative Code</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-neutral-900">
              Explore Humaira's Work on GitHub
            </h3>
            <p className="text-sm text-neutral-600 max-w-2xl">
              Check out design system tokens, vector libraries, front-end creative experiments, and portfolio repositories directly on my public profile <code className="bg-neutral-100 text-pink-600 px-2 py-0.5 rounded font-mono text-xs">@humairakoussar</code>.
            </p>
          </div>
          <a
            href={HUMAIRA_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm transition-all flex items-center gap-2.5 shadow-sm hover:scale-105"
            id="homepage-github-link-btn"
          >
            <Github className="w-4 h-4 text-white" />
            <span>Visit @humairakoussar ↗</span>
          </a>
        </div>
      </section>

      {/* Quick CTA Bottom */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Ready to bring your brand vision to life?
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
          From full brand guidelines to bespoke 3D illustrations, let's craft something unforgettable together.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-sm shadow-md hover:shadow-pink-200 hover:-translate-y-0.5 transition-all"
          >
            Start a Conversation
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-sm transition-all"
          >
            View Pricing Packages
          </button>
        </div>
      </section>

    </div>
  );
};
