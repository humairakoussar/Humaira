import { ProjectItem, SkillItem, PaletteShowcase, ServicePackage, TestimonialItem } from '../types';

export const HUMAIRA_PROFILE = {
  name: 'Humaira Kousar',
  title: 'Graphic Designer & Visual Brand Strategist',
  tagline: 'Transforming complex ideas into poetic visual brand identities, 3D character illustrations, and high-impact design systems.',
  bio: `Hello! I'm Humaira Kousar, an enthusiastic graphic designer, illustrator, and visual storyteller with over 5 years of professional creative experience. My passion sits at the intersection of intentional color theory, clean typographic hierarchy, and memorable brand identity. Whether crafting bespoke vector logos, designing 3D character illustrations, or building holistic packaging experiences, I obsess over every curve, kerning pair, and hex code to ensure your brand resonates emotionally and performs commercially.`,
  experienceYears: '5+',
  projectsCompleted: '140+',
  satisfiedClients: '98%',
  awardsRecognitions: '12+',
  location: 'Available Worldwide • Remote & On-Site',
  email: 'humairakousar.design@gmail.com',
  github: 'https://github.com/humairakoussar',
  behance: 'https://www.behance.net/humairakoussar',
  dribbble: 'https://dribbble.com/humairakoussar',
  linkedin: 'https://www.linkedin.com/in/humairakoussar',
  instagram: 'https://www.instagram.com/humairakoussar.design',
  avatarImage: '/images/humaira_avatar_1789293107218.jpg',
  designerToolsImage: '/images/designer_3d_tools_1789293124079.jpg',
  brandMockupImage: '/images/brand_identity_mockup_1789293146942.jpg',
  inspirationalBannerImage: '/images/inspirational_banner_1789293173184.jpg',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aura-botanica',
    title: 'Aura Botanica Organics',
    category: 'branding',
    subtitle: 'Holistic Luxury Skincare Identity & Editorial Packaging',
    description: 'A delicate yet enduring visual identity system built around sustainable botanicals, warm terracotta neutrals, and custom serif logotype.',
    fullDescription: 'Aura Botanica required an elevated visual language to transition from boutique pop-up retail into luxury department stores worldwide. We crafted a custom hand-drawn floral emblem, matched with Playfair Display and Plus Jakarta Sans for timeless editorial pacing. Deliverables included amber dropper bottle mockups, foil-stamped unboxing sleeves, and comprehensive brand guidelines.',
    client: 'Aura Botanica Paris & New York',
    year: '2025',
    duration: '6 Weeks',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'InDesign'],
    image: '/images/brand_identity_mockup_1789293146942.jpg',
    palette: [
      { name: 'Warm Terracotta', hex: '#D97757' },
      { name: 'Sage Leaf', hex: '#94A3B8' },
      { name: 'Champagne Linen', hex: '#F7F4EE' },
      { name: 'Deep Espresso', hex: '#2A2421' },
      { name: 'Gilded Brass', hex: '#C69D62' }
    ],
    tags: ['Brand Identity', 'Luxury Packaging', 'Typography System', 'Eco Luxe'],
    metrics: '+210% Retail Shelf Pick Rate & Featured in Vogue Beauty',
    challenge: 'Overcoming the generic minimalist pastel trend while remaining premium and unmistakably organic.',
    solution: 'Engineered a bespoke tactile color system anchored in warm earth minerals, custom embossed typography, and sustainable matte paper stock specs.',
    deliverables: ['Primary & Secondary Marks', '28-Page Brand Manual', 'Cosmetic Glass Mockups', 'Social Launch Assets']
  },
  {
    id: 'luminary-creative-3d',
    title: 'The Digital Creator 3D Suite',
    category: 'illustration',
    subtitle: 'Playful 3D Character & Creative Tool Iconography',
    description: 'Stylized 3D character art celebrating modern creative technologists, featuring floating Adobe Creative Cloud and Figma glyphs.',
    fullDescription: 'Created as the lead campaign artwork for a worldwide creative summit. Features a stylized 3D female designer avatar comfortably immersed in flow state with her laptop, flanked by tactile floating app cubes for Illustrator, Photoshop, Figma, and After Effects.',
    client: 'CreateCon Global Festival',
    year: '2025',
    duration: '4 Weeks',
    tools: ['Blender 3D', 'Adobe Illustrator', 'Photoshop', 'Procreate'],
    image: '/images/designer_3d_tools_1789293124079.jpg',
    palette: [
      { name: 'Cobalt Dream', hex: '#2563EB' },
      { name: 'Adobe Amber', hex: '#F59E0B' },
      { name: 'Figma Purple', hex: '#8B5CF6' },
      { name: 'Coral Glow', hex: '#F43F5E' },
      { name: 'Studio Cream', hex: '#FAF9F6' }
    ],
    tags: ['3D Character', 'Digital Illustration', 'Creative Tools', 'Pop Vibrant'],
    metrics: 'Over 45,000 Event Registrations & Social Impressions',
    challenge: 'Balancing cute toy-like tactile 3D renders with crisp corporate brand recognition.',
    solution: 'Utilized soft clay shaders, rim lighting, and vibrant complementary color pairings to evoke energy, focus, and warmth.',
    deliverables: ['High-Res 8K Key Visuals', 'Vector Icon Set', 'Sticker Packs', 'Animated Intro Overlays']
  },
  {
    id: 'be-you-be-beautiful',
    title: 'Be You, Be Beautiful Campaign',
    category: 'social',
    subtitle: 'Empowering Typographic Poster & Social Media System',
    description: 'A viral lifestyle series centered on feminine empowerment, soft ambient bokeh aesthetics, hand-scripted lettering, and inspiring messages.',
    fullDescription: 'A multi-platform social media campaign developed for a wellness lifestyle magazine. Designed to inspire self-confidence and mindfulness, combining intimate photographic staging with fluid hand-lettered calligraphy ("Be You, Be Beautiful", "Work is life!", "Dream • Believe • Achieve").',
    client: 'Bloom & Grace Lifestyle Collective',
    year: '2024',
    duration: '3 Weeks',
    tools: ['Adobe Photoshop', 'Procreate', 'Illustrator', 'Canva Pro'],
    image: '/images/inspirational_banner_1789293173184.jpg',
    palette: [
      { name: 'Blush Velvet', hex: '#E11D48' },
      { name: 'Rose Quartz', hex: '#FCE7F3' },
      { name: 'Golden Bokeh', hex: '#FDE68A' },
      { name: 'Morning Mist', hex: '#F8FAFC' },
      { name: 'Soft Charcoal', hex: '#334155' }
    ],
    tags: ['Social Media Kit', 'Hand Lettering', 'Campaign Posters', 'Inspirational'],
    metrics: '85,000+ Pinterest Saves & 300% Instagram Follower Surge',
    challenge: 'Creating emotional resonance through subtle typographic layering without cluttering the gentle photographic background.',
    solution: 'Introduced custom script brush strokes in dual-tone magenta and crisp sans-serif supporting subtitles with generous negative space.',
    deliverables: ['12 Instagram Carousel Templates', 'Printable Wall Art (A2)', 'YouTube Banner Suite', 'Quote Graphics Kit']
  },
  {
    id: 'petals-brew-identity',
    title: 'Petal & Brew Artisan Roastery',
    category: 'branding',
    subtitle: 'Floral Coffee House & Bakery Visual Identity',
    description: 'A charming fusion of specialty pour-over coffee craft and French botanical patisserie, rendered in pastel tones.',
    fullDescription: 'Complete branding and packaging for a specialty coffee roaster featuring botanical infusions. Designed custom illustrated coffee bags with biodegradable foil accents, menu stamps, kraft paper pastry boxes, and a whimsical illustrated floral coffee mug emblem.',
    client: 'Petal & Brew London',
    year: '2024',
    duration: '5 Weeks',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    image: '/images/brand_identity_mockup_1789293146942.jpg',
    palette: [
      { name: 'Matcha Cream', hex: '#65A30D' },
      { name: 'Blush Macaron', hex: '#F472B6' },
      { name: 'Roasted Mocha', hex: '#451A03' },
      { name: 'Vanilla Foam', hex: '#FEF9C3' }
    ],
    tags: ['Cafe Branding', 'Packaging', 'Print Menu', 'Stamp Design'],
    metrics: 'Sold Out 1st Coffee Drop in under 72 hours',
    challenge: 'Designing a visual language that felt both cozy artisanal and highly premium.',
    solution: 'Engineered a warm analogous palette of roasted bean brown, warm matcha, and blush petals with tactile kraft paper textures.',
    deliverables: ['Logo Family', 'Coffee Bag Mockups', 'Dine-In & Takeaway Menus', 'Barista Uniform Badges']
  },
  {
    id: 'work-is-life-illustrations',
    title: 'Modern Workstation Chronicles',
    category: 'illustration',
    subtitle: 'Minimalist Editorial Vector Art for Remote Creatives',
    description: 'A cozy, pastel-toned vector art exploration of digital nomad life, coffee rituals, and creative flow states.',
    fullDescription: 'Created as a featured editorial illustration series for remote work publications and tech newsletters. Capturing peaceful work setups, laptops adorned with cute stickers, steaming mugs of matcha, and modern aesthetic lighting.',
    client: 'RemoteDesk Quarterly',
    year: '2024',
    duration: '2 Weeks',
    tools: ['Adobe Illustrator', 'Procreate', 'Figma'],
    image: '/images/designer_3d_tools_1789293124079.jpg',
    palette: [
      { name: 'Dune Sand', hex: '#D7C4B7' },
      { name: 'Warm Terracotta', hex: '#D97757' },
      { name: 'Sage Mint', hex: '#A3B18A' },
      { name: 'Deep Walnut', hex: '#34252F' }
    ],
    tags: ['Vector Illustration', 'Editorial Art', 'Lifestyle', 'Remote Work'],
    metrics: 'Featured on Dribbble Popular & Behance Curated',
    challenge: 'Conveying human emotion and modern coziness with simplified geometric vector contours.',
    solution: 'Applied gentle organic curve bevels, warm grain texture overlays, and dynamic hand-drawn calligraphy accents.',
    deliverables: ['6 Editorial Spot Graphics', 'Vector Wallpaper Pack', 'Notion Cover Templates']
  },
  {
    id: 'velvet-glow-cosmetics',
    title: 'Velvet Glow Mineral Cosmetics',
    category: 'packaging',
    subtitle: 'Sustainable Glass Bottle & Serum Carton Packaging',
    description: 'Minimalist luxury skincare packaging with blind deboss details, frosted amber glass, and clean typographic grids.',
    fullDescription: 'Packaging line created for an all-natural vegan skincare serum brand. The collection focuses on frosted amber glass dropper bottles, recycled FSC-certified embossed paper boxes, and bespoke seal labels.',
    client: 'Velvet Glow Organics Scandinavia',
    year: '2025',
    duration: '4 Weeks',
    tools: ['Adobe Illustrator', 'InDesign', 'Photoshop 3D'],
    image: '/images/brand_identity_mockup_1789293146942.jpg',
    palette: [
      { name: 'Amber Glow', hex: '#B45309' },
      { name: 'Alabaster', hex: '#F8FAFC' },
      { name: 'Obsidian Black', hex: '#0F172A' },
      { name: 'Gold Leaf', hex: '#EAB308' }
    ],
    tags: ['Packaging Design', 'Dielines', '3D Mockup', 'Print Production'],
    metrics: 'Compliant with International EU/FDA Cosmetic Labeling Standards',
    challenge: 'Structuring strict micro-typography ingredient lists while maintaining editorial elegance.',
    solution: 'Designed a clean modular 2-column dieline grid with optical kerning and high-contrast foil accents for key ingredients.',
    deliverables: ['Production Ready Vector Dielines', 'Full CMYK Print Specs', '3D Photorealistic Renders']
  }
];

export const COLOR_PALETTES: PaletteShowcase[] = [
  {
    id: 'palette-rose-violet',
    name: 'Petal & Amethyst Glow',
    type: 'Complementary',
    mood: 'Romantic, Creative, Empowering & Luxe',
    description: 'A harmonious clash between vibrant magenta-rose and deep twilight violet, grounded by serene champagne porcelain.',
    usageAdvice: 'Ideal for creative studio portfolios, cosmetic brands, beauty packaging, and modern lifestyle content.',
    colors: [
      { name: 'Rose Fuchsia', hex: '#E11D48', role: 'Primary Accent / CTA' },
      { name: 'Deep Violet', hex: '#7C3AED', role: 'Secondary Accent' },
      { name: 'Porcelain White', hex: '#FAF8F5', role: 'Dominant Background (60%)', isDarkText: true },
      { name: 'Soft Lavender', hex: '#EDE9FE', role: 'Card / Panel Fill (30%)', isDarkText: true },
      { name: 'Midnight Charcoal', hex: '#1E1B4B', role: 'Typography & High Contrast' }
    ]
  },
  {
    id: 'palette-sunset-terracotta',
    name: 'Tuscan Sunset & Terracotta',
    type: 'Analogous',
    mood: 'Warm, Earthy, Welcoming & Artisanal',
    description: 'Warm earthen hues shifting gently from rich desert terracotta to soft golden wheat and warm espresso.',
    usageAdvice: 'Exceptional for organic cafe identities, artisanal packaging, ceramic studios, and warm editorial publications.',
    colors: [
      { name: 'Sunbaked Terracotta', hex: '#C2410C', role: 'Hero Accent' },
      { name: 'Amber Gold', hex: '#F59E0B', role: 'Warm Spark' },
      { name: 'Oat Milk Cream', hex: '#FDFBF7', role: 'Background Canvas', isDarkText: true },
      { name: 'Sage Leaf', hex: '#65A30D', role: 'Natural Contrast' },
      { name: 'Roasted Bean', hex: '#292524', role: 'Deep Text' }
    ]
  },
  {
    id: 'palette-modern-triadic',
    name: 'Creative Studio Triad',
    type: 'Triadic',
    mood: 'Vibrant, Contemporary, Innovative & Energetic',
    description: 'Three equidistant hues on the color wheel: Electric Blue, Crimson Rose, and Sunshine Ochre balanced carefully.',
    usageAdvice: 'Perfect for dynamic tech branding, creative festivals, youth apparel, and graphic design conference collateral.',
    colors: [
      { name: 'Electric Royal Blue', hex: '#2563EB', role: 'Anchor Element' },
      { name: 'Crimson Rose', hex: '#F43F5E', role: 'Vibrant Focal Point' },
      { name: 'Warm Sun Ochre', hex: '#FBBF24', role: 'Playful Highlight' },
      { name: 'Cloud Studio', hex: '#F8FAFC', role: 'Negative Space Canvas', isDarkText: true },
      { name: 'Slate Indigo', hex: '#0F172A', role: 'Sharp Microtypography' }
    ]
  },
  {
    id: 'palette-monochrome-slate',
    name: 'Minimalist Nordic Monochrome',
    type: 'Monochromatic',
    mood: 'Stark, Sophisticated, Editorial & Timeless',
    description: 'Varying tints, shades, and tones of rich charcoal slate with micro warm-gray undertones to avoid harsh pure blacks.',
    usageAdvice: 'High-end architecture firms, luxury fashion lookbooks, Swiss style typography, and modern digital agencies.',
    colors: [
      { name: 'Pure Ink', hex: '#09090B', role: 'Heavy Display Headlines' },
      { name: 'Graphite', hex: '#27272A', role: 'Subheadings & Borders' },
      { name: 'Muted Zinc', hex: '#71717A', role: 'Supporting Captions' },
      { name: 'Soft Ash', hex: '#F4F4F5', role: 'Card Insets', isDarkText: true },
      { name: 'Crisp Off-White', hex: '#FAFAFA', role: 'Airy Canvas', isDarkText: true }
    ]
  }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: 'Adobe Illustrator',
    category: 'software',
    level: 98,
    icon: 'PenTool',
    experience: '5+ Years',
    description: 'Flawless vector path precision, bezier curve mastery, custom typography glyphs, logo system generation, and complex dielines.',
    popularFor: 'Logos, Vector Art, Packaging Dielines, Brand Assets'
  },
  {
    name: 'Adobe Photoshop',
    category: 'software',
    level: 95,
    icon: 'Layers',
    experience: '5+ Years',
    description: 'High-end photo manipulation, raster compositing, advanced digital painting, texture blending, and photorealistic product mockups.',
    popularFor: 'Retouching, Digital Painting, 3D Mockups, Poster Art'
  },
  {
    name: 'Figma',
    category: 'software',
    level: 92,
    icon: 'Figma',
    experience: '4+ Years',
    description: 'Collaborative UI/UX design systems, auto-layout components, interactive responsive prototypes, and social media master components.',
    popularFor: 'Design Systems, Web UI, Social Templates, Handoff'
  },
  {
    name: 'Adobe InDesign',
    category: 'software',
    level: 90,
    icon: 'BookOpen',
    experience: '4+ Years',
    description: 'Multi-page editorial publications, corporate lookbooks, bleed & CMYK color separation, spot UV separations, and automated master pages.',
    popularFor: 'Brand Books, Magazines, Catalogues, Tri-Folds'
  },
  {
    name: 'Adobe After Effects',
    category: 'software',
    level: 85,
    icon: 'Film',
    experience: '3+ Years',
    description: 'Kinetic typography, animated logo reveals, micro-interactions, Lottie animations, and engaging short-form social video loops.',
    popularFor: 'Motion Logos, Reel Bumper Clips, Kinetic Type'
  },
  {
    name: 'Blender & 3D Clay Rendering',
    category: 'software',
    level: 82,
    icon: 'Box',
    experience: '3+ Years',
    description: 'Tactile 3D character modeling, clay shaders, studio three-point lighting setups, isometric dioramas, and commercial product staging.',
    popularFor: '3D Characters, Isometric Icons, Packaging Stage'
  },
  {
    name: 'Color Theory & Harmonization',
    category: 'theory',
    level: 99,
    icon: 'Palette',
    experience: '5+ Years',
    description: 'Mastery of the 60-30-10 distribution rule, color psychology across cultures, WCAG AAA accessibility contrast, and CMYK/RGB gamut mappings.',
    popularFor: 'Palette Curation, Accessibility, Brand Mood'
  },
  {
    name: 'Typographic Architecture',
    category: 'theory',
    level: 96,
    icon: 'Type',
    experience: '5+ Years',
    description: 'Mathematical scale step ratios (Major Third, Golden Ratio), optical kerning, vertical baseline rhythm, and pairing contrasting serif & sans font families.',
    popularFor: 'Editorial Layout, Hierarchy, Readability'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'starter-brand',
    name: 'Starter Brand Essential',
    badge: 'Fast Launch',
    price: '$450',
    turnaround: '5-7 Days',
    idealFor: 'Startups, influencers, and new small businesses needing an immediate, cohesive identity.',
    description: 'Everything you need to launch with confidence, professional polish, and consistent visual presence.',
    features: [
      'Primary Logo & Secondary Compact Mark',
      'Curated Brand Color Palette (HEX, RGB, CMYK)',
      'Font Pairing & Typographic System Guide',
      'Vector Master Files (SVG, EPS, AI, PDF, PNG)',
      '3 High-Resolution Social Media Launch Graphics',
      'Mini Brand Style Cheat-Sheet (PDF)',
      '2 Rounds of Revisions Included'
    ]
  },
  {
    id: 'complete-identity',
    name: 'Signature Brand Identity System',
    badge: 'Most Popular',
    isPopular: true,
    price: '$1,150',
    turnaround: '2-3 Weeks',
    idealFor: 'Growing companies and established businesses wanting an unforgettable, full-scale brand presence.',
    description: 'A comprehensive brand identity overhaul designed to elevate perceived value and dominate your market.',
    features: [
      'Everything in Starter Brand Kit',
      'Comprehensive 24-Page Brand Guideline Book',
      'Submarks, Monograms, & Custom Brand Patterns',
      'Complete Business Card & Stationery Suite',
      '12 Editable Social Media Templates (Figma & Canva)',
      '3D Photorealistic Packaging / Product Mockups',
      'Animated Logo Reveal Video (After Effects)',
      'Unlimited Revisions During Concept Phase'
    ]
  },
  {
    id: 'creative-retainer',
    name: 'VIP Creative Retainer',
    badge: 'Full Partnership',
    price: '$1,950 /mo',
    turnaround: 'Ongoing Priority (48h Turnaround)',
    idealFor: 'Brands requiring an on-demand dedicated senior graphic designer and illustrator without hiring in-house.',
    description: 'Your dedicated creative partner for ongoing marketing campaigns, bespoke illustrations, and product packaging.',
    features: [
      'Dedicated Weekly Graphic Design & Illustration Hours',
      'Priority 48-Hour Turnaround on Ad-Hoc Requests',
      'Ongoing Social Media Content & Ad Creatives',
      'Packaging Updates & Print Production Management',
      'Direct Slack/WhatsApp Communications Channel',
      'Monthly Creative Strategy & Color Trend Review',
      'All Raw Source Files & Commercial Copyright Ownership'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Elena Rostova',
    role: 'Founder & Creative Director',
    company: 'Aura Botanica Paris',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    quote: 'Humaira has an uncanny intuition for color harmony and tactile luxury. She took our vague concept for a botanical skincare line and turned it into an award-winning identity that retail buyers fell in love with instantly. Her attention to typography kerning and packaging dielines is unmatched.',
    rating: 5,
    projectType: 'Luxury Branding & Packaging',
    date: 'January 2025'
  },
  {
    id: 'test-2',
    clientName: 'Marcus Sterling',
    role: 'Head of Marketing',
    company: 'CreateCon Global',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    quote: 'Humaira designed our 3D character illustrations and creative suite visuals. The campaign generated our highest engagement in conference history! She communicates clearly, delivers ahead of schedule, and brings true artistic soul to commercial work.',
    rating: 5,
    projectType: '3D Illustration & Event Graphics',
    date: 'November 2024'
  },
  {
    id: 'test-3',
    clientName: 'Sophia Lin',
    role: 'Co-Founder',
    company: 'Petal & Brew Roastery',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces',
    quote: 'Working with Humaira was seamless from day one. Our cafe menus and coffee bag illustrations received non-stop compliments from customers. She even provided print-ready bleed files that our local printer said were the cleanest they had ever received!',
    rating: 5,
    projectType: 'Brand Identity & Packaging',
    date: 'August 2024'
  }
];

export const DESIGN_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Creative Brief & Discovery',
    subtitle: 'Uncovering the Core Essence',
    description: 'We begin with an in-depth creative questionnaire examining your brand values, target demographic, competitor landscape, and aesthetic aspirations.',
    deliverable: 'Creative Brief Synthesis & Project Roadmap'
  },
  {
    step: '02',
    title: 'Moodboard & Color Theory Strategy',
    subtitle: 'Visual Direction & Emotional Tuning',
    description: 'I construct curated moodboards exploring typographic pairings, texture references, and custom color harmonies (testing 60-30-10 distribution and accessibility).',
    deliverable: '2 Distinct Aesthetic Directions & Palette Proposals'
  },
  {
    step: '03',
    title: 'Concept Ideation & Vector Crafting',
    subtitle: 'From Sketchpad to Pixel Perfection',
    description: 'Translating concepts into scalable vector logos, custom geometric monograms, or character illustrations. Every curve is mathematically tuned.',
    deliverable: '3 Polished Unique Concepts in Black & White and Full Color'
  },
  {
    step: '04',
    title: 'Collaborative Feedback & Refinement',
    subtitle: 'Fine-Tuning to Absolute Perfection',
    description: 'We test your chosen direction across real-world touchpoints—business cards, packaging dielines, mobile screens, and social banners—incorporating your feedback.',
    deliverable: 'Finalized Design in Photorealistic 3D Mockups'
  },
  {
    step: '05',
    title: 'Production & Master Asset Handoff',
    subtitle: 'Future-Proof Deliverables',
    description: 'You receive an organized Google Drive or ZIP folder packed with all industry-standard files (AI, SVG, EPS, PDF, high-res PNG), plus your complete Brand Style Guide.',
    deliverable: 'Organized Master Asset Kit & Print Specs'
  }
];

export const FAQS = [
  {
    q: 'What formats will I receive for my logo and graphic assets?',
    a: 'You will receive vector master files (.AI, .EPS, .SVG, .PDF) that can scale infinitely from a tiny favicon to a massive highway billboard without losing sharpness, plus web-optimized transparent PNGs and JPEGs in RGB, and print-ready CMYK files with bleeds.'
  },
  {
    q: 'Can this entire portfolio be deployed to GitHub Pages for free?',
    a: 'Yes! This entire website is built to compile cleanly to static HTML, CSS, and JavaScript. You can either deploy directly via GitHub Actions (running npm run build) or download the standalone single-file static HTML bundle from the GitHub Deployment Hub page and push it straight to your repository!'
  },
  {
    q: 'How do revisions work during a branding project?',
    a: 'All packages include built-in revision rounds during the concept and refinement phases. We collaborate closely using clear milestone reviews to make sure you are 100% in love with the final outcome.'
  },
  {
    q: 'Do you create custom illustrations and 3D artwork from scratch?',
    a: 'Yes! Every illustration and 3D character you see in my portfolio is original work. I use Adobe Illustrator, Procreate, Photoshop, and Blender to tailor custom visual assets for each project.'
  }
];
