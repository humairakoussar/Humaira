import React from 'react';
import { PageId } from '../types';
import { HUMAIRA_PROFILE } from '../data/portfolioData';
import { 
  Sparkles, 
  Heart, 
  Monitor, 
  Compass, 
  Award, 
  CheckCircle, 
  Github, 
  Linkedin, 
  ArrowRight,
  Palette
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const timeline = [
    {
      year: '2019 - 2021',
      role: 'Fine Arts & Vector Design Foundations',
      company: 'Academy of Visual Communication',
      desc: 'Mastered classical composition, color mixing chemistry, calligraphy, and fundamental digital vector craft in Adobe Illustrator.'
    },
    {
      year: '2021 - 2023',
      role: 'Junior Brand Designer & Production Artist',
      company: 'Studio Luminary & Creative Agency',
      desc: 'Produced full brand identities, social campaigns, print dielines, and retail packaging for 40+ international clients across Europe and North America.'
    },
    {
      year: '2023 - Present',
      role: 'Senior Graphic Designer, Illustrator & Art Strategist',
      company: 'Independent Creative Practice',
      desc: 'Leading holistic visual branding projects, 3D character illustrations, and marketing systems for innovative tech startups, boutique cosmetic lines, and lifestyle publications.'
    }
  ];

  const workstation = [
    { title: 'Drawing Hardware', value: 'Wacom Cintiq Pro 24" & iPad Pro 12.9" with Apple Pencil 2' },
    { title: 'Color Display', value: 'Dual 4K Color-Calibrated Displays (100% sRGB & 99% DCI-P3 gamut)' },
    { title: 'Core Software', value: 'Adobe Creative Cloud 2025 (Illustrator, Photoshop, InDesign, Ae), Figma, Blender' },
    { title: 'Color Books', value: 'Pantone Formula Guide Solid Coated & Uncoated (2024 Edition)' }
  ];

  const coreValues = [
    {
      icon: '💎',
      title: 'Obsessive Vector Precision',
      desc: 'Every bezier curve is mathematically tuned. No accidental anchor points, distorted tangents, or sloppy kerning.'
    },
    {
      icon: '🎨',
      title: 'Intentional Color Harmony',
      desc: 'Color is never an afterthought. We build palettes that evoke specific neuro-emotional triggers and pass WCAG AA standards.'
    },
    {
      icon: '🌱',
      title: 'Eco-Minded Print Production',
      desc: 'Deep knowledge of sustainable soy inks, FSC-certified unbleached stocks, blind embossing, and recyclable foil techniques.'
    },
    {
      icon: '🤝',
      title: 'Collaborative & Transparent',
      desc: 'No creative ego. I listen deeply, explain strategic design decisions clearly, and deliver organized master files.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Meet the Designer</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
          Hi, I'm Humaira Kousar.
        </h1>
        <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
          I am a passionate graphic designer, visual brand strategist, and digital illustrator dedicated to making the visual world more harmonious, functional, and beautiful.
        </p>
      </div>

      {/* Main Bio & Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
            <img 
              src={HUMAIRA_PROFILE.avatarImage} 
              alt="Humaira Kousar" 
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="p-6 rounded-2xl bg-pink-50 border border-pink-200 text-sm space-y-2">
            <div className="font-heading font-bold text-pink-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span>Location & Availability</span>
            </div>
            <p className="text-pink-800">
              Based remotely, working with forward-thinking clients worldwide across USA, UK, Europe, UAE, and Asia.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a 
                href={HUMAIRA_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 bg-white px-3 py-1.5 rounded-full border border-neutral-200 hover:border-neutral-900 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a 
                href={HUMAIRA_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full border border-neutral-200 hover:border-blue-600 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900">
            Designing with Empathy, Logic, and Vibrant Color
          </h2>
          
          <p>
            {HUMAIRA_PROFILE.bio}
          </p>

          <p>
            My creative journey began with traditional drawing, sketching, and watercolor studies. That tactile appreciation for pigment saturation and negative space continues to anchor my digital practice today. In an era saturated with generic templates, I take pride in crafting distinctive brand systems that people remember.
          </p>

          <p>
            Whether designing 3D character avatars with playful clay textures, structuring a 24-page editorial brand guideline, or testing packaging dielines with printers, I focus on the holistic experience. Design is the bridge between what you do and how the world feels about you.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('skills')}
              className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors flex items-center gap-2"
            >
              <span>Explore My Design Toolkit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-pink-50 text-pink-700 font-semibold text-sm hover:bg-pink-100 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Core Design Values */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Design Standards</span>
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mt-1">Core Principles & Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => (
            <div key={val.title} className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <div className="text-3xl">{val.icon}</div>
              <h3 className="font-heading font-bold text-base text-neutral-900">{val.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workstation & Hardware Setup */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-pink-400 uppercase tracking-wider">Behind The Pixels</div>
            <h3 className="font-heading text-2xl font-bold mt-1">Hardware & Color Calibration Setup</h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-neutral-300 border border-white/10">
            Professional Grade Studio
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {workstation.map((item) => (
            <div key={item.title} className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700">
              <div className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-1">{item.title}</div>
              <div className="text-sm font-medium text-neutral-200">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Timeline */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Evolution</span>
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mt-1">My Creative Journey</h2>
        </div>

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="md:w-1/4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-pink-700">
                  {item.year}
                </span>
                <div className="text-xs text-neutral-400 font-medium mt-2">{item.company}</div>
              </div>
              <div className="md:w-3/4 space-y-1">
                <h3 className="font-heading font-bold text-lg text-neutral-900">{item.role}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
