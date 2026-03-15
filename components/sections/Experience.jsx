import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'Work Experience',
    role: 'Research Intern',
    org: 'DRDO — Defence Research & Development Organisation',
    period: '2025',
    tags: ['Quantum Computing', 'Research', 'Advanced Tech'],
    description:
      "Worked on advanced technology research at one of India's premier defence R&D organisations. Explored quantum computing concepts and gained exposure to cutting-edge innovations, strengthening my ability to work in high-stakes, research-driven environments.",
    accent: 'blue',
    number: '01',
    icon: '🔬',
  },
  {
    type: 'National Achievement',
    role: 'AIR 504 — NDA Examination',
    org: 'National Defence Academy · 147th Course',
    period: '2022',
    tags: ['NDA', 'AIR 504', 'National Exam', 'Defence'],
    description:
      'Secured All India Rank 504 in the prestigious National Defence Academy (NDA) written examination for the 147th course — a highly competitive national-level exam conducted by UPSC, clearing it from a pool of hundreds of thousands of candidates.',
    accent: 'orange',
    number: '02',
    icon: '🎖️',
  },
  {
    type: 'Leadership',
    role: 'President',
    org: 'Club Innova — NIST University',
    period: '2024 – Present',
    tags: ['Leadership', 'Event Management', 'Cultural Projects'],
    description:
      'Lead the multicultural club at NIST University, organising creative and cultural events that bring students together. Responsible for project planning, team coordination, and fostering an inclusive environment that celebrates diverse talents.',
    accent: 'purple',
    number: '03',
    icon: '🎭',
  },
  {
    type: 'Achievement',
    role: 'NCC Cadet — A, B & C Certificate',
    org: 'National Cadet Corps',
    period: '2020 – 2023',
    tags: ['A Certificate', 'B Certificate', 'C Certificate', 'Discipline', 'Leadership'],
    description:
      'Served as an NCC cadet for 3 years, successfully completing all three levels of NCC certification — A, B, and C. The C-Certificate is the highest NCC qualification awarded by UPSC-panelled assessment. This journey built deep discipline, military awareness, national pride, and leadership character.',
    accent: 'teal',
    number: '04',
    icon: '🏅',
  },
  {
    type: 'Sports',
    role: 'Vice Captain',
    org: 'School Cricket Team',
    period: '2019 – 2021',
    tags: ['Cricket', 'Teamwork', 'Strategy'],
    description:
      'Served as Vice Captain of the school cricket team, leading from the field with strategic thinking and motivating teammates. This role taught me how to manage pressure, build team morale, and make quick decisions.',
    accent: 'green',
    number: '05',
    icon: '🏏',
  },
];

const accentMap = {
  blue: {
    glow:       'hover:shadow-[0_8px_50px_-10px_rgba(96,165,250,0.4)]',
    border:     'hover:border-blue-400/50',
    topLine:    'from-blue-400 via-blue-300/40 to-transparent',
    tag:        'bg-blue-400/10 text-blue-400 border-blue-400/20',
    badge:      'text-blue-400 bg-blue-400/10 border-blue-400/20',
    dot:        'bg-blue-400',
    num:        'text-blue-400/10',
    iconBg:     'bg-blue-400/10 border-blue-400/20',
    iconText:   'text-blue-400',
  },
  orange: {
    glow:       'hover:shadow-[0_8px_50px_-10px_rgba(251,146,60,0.4)]',
    border:     'hover:border-orange-400/50',
    topLine:    'from-orange-400 via-orange-300/40 to-transparent',
    tag:        'bg-orange-400/10 text-orange-400 border-orange-400/20',
    badge:      'text-orange-400 bg-orange-400/10 border-orange-400/20',
    dot:        'bg-orange-400',
    num:        'text-orange-400/10',
    iconBg:     'bg-orange-400/10 border-orange-400/20',
    iconText:   'text-orange-400',
  },
  purple: {
    glow:       'hover:shadow-[0_8px_50px_-10px_rgba(192,132,252,0.4)]',
    border:     'hover:border-purple-400/50',
    topLine:    'from-purple-400 via-purple-300/40 to-transparent',
    tag:        'bg-purple-400/10 text-purple-400 border-purple-400/20',
    badge:      'text-purple-400 bg-purple-400/10 border-purple-400/20',
    dot:        'bg-purple-400',
    num:        'text-purple-400/10',
    iconBg:     'bg-purple-400/10 border-purple-400/20',
    iconText:   'text-purple-400',
  },
  teal: {
    glow:       'hover:shadow-[0_8px_50px_-10px_rgba(45,212,191,0.4)]',
    border:     'hover:border-teal-400/50',
    topLine:    'from-teal-400 via-teal-300/40 to-transparent',
    tag:        'bg-teal-400/10 text-teal-400 border-teal-400/20',
    badge:      'text-teal-400 bg-teal-400/10 border-teal-400/20',
    dot:        'bg-teal-400',
    num:        'text-teal-400/10',
    iconBg:     'bg-teal-400/10 border-teal-400/20',
    iconText:   'text-teal-400',
  },
  green: {
    glow:       'hover:shadow-[0_8px_50px_-10px_rgba(74,222,128,0.4)]',
    border:     'hover:border-green-400/50',
    topLine:    'from-green-400 via-green-300/40 to-transparent',
    tag:        'bg-green-400/10 text-green-400 border-green-400/20',
    badge:      'text-green-400 bg-green-400/10 border-green-400/20',
    dot:        'bg-green-400',
    num:        'text-green-400/10',
    iconBg:     'bg-green-400/10 border-green-400/20',
    iconText:   'text-green-400',
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white">

      {/* ── DESKTOP: Parallax banner ─────────────────────────────── */}
      <div
        className="sm1:hidden md:flex items-end justify-between px-20 py-28 bg-fixed bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/media/images/parallax.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10">
          <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-3">Career &amp; Achievements</div>
          <h2 className="font-extrabold tracking-tighter text-white md:text-7xl lg:text-8xl font-change2 leading-none drop-shadow-[0_2px_24px_rgba(0,0,0,1)]">
            Experience
          </h2>
        </div>
        <div className="relative z-10 text-right max-w-xs">
          <p className="text-white/60 text-sm leading-relaxed">
            Building skills across research, leadership, and sport — every role shaped who I am as a developer and a person.
          </p>
        </div>
      </div>

      {/* ── MOBILE: coding gif + heading ─────────────────────────── */}
      <div className="sm1:block md:hidden relative overflow-hidden">
        <img src="/media/images/coding2.gif" alt="coding" className="w-full object-cover opacity-50" style={{ maxHeight: '220px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end px-5 pb-6">
          <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-1">Career &amp; Achievements</div>
          <h2 className="font-extrabold tracking-tighter text-white text-5xl font-change2 leading-none">Experience</h2>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────── */}
      <div className="w-4/5 m-auto pt-12 pb-6">
        <div className="h-px bg-white/8 w-full" />
      </div>

      {/* ── Premium Cards Grid ──────────────────────────────────────── */}
      <div className="w-4/5 m-auto pb-28">
        <div className="grid sm1:grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp, i) => {
            const a = accentMap[exp.accent];
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-40px' }}
                className={`
                  relative group rounded-2xl overflow-hidden
                  bg-[#0a0a0a] border border-white/[0.07] ${a.border}
                  transition-all duration-500 ${a.glow}
                  cursor-default
                `}
              >
                {/* Top accent gradient line */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${a.topLine}`} />

                {/* Ghost number watermark */}
                <div className={`absolute -bottom-2 -right-2 text-[7rem] font-extrabold font-change2 leading-none select-none pointer-events-none ${a.num} transition-transform duration-500 group-hover:scale-105`}>
                  {exp.number}
                </div>

                <div className="p-6 relative z-10">
                  {/* Header: icon + type badge + period */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icon pill */}
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-xl flex-shrink-0 ${a.iconBg}`}>
                        {exp.icon}
                      </div>
                      {/* Type badge */}
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${a.badge}`}>
                        {exp.type}
                      </span>
                    </div>
                    {/* Period */}
                    <span className="text-[10px] text-white/25 font-mono border border-white/8 rounded-full px-2.5 py-1 whitespace-nowrap flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight mb-1">{exp.role}</h3>

                  {/* Org */}
                  <div className="text-white/35 text-xs mb-4">{exp.org}</div>

                  {/* Accent line divider */}
                  <div className={`h-px bg-gradient-to-r ${a.topLine} mb-4`} />

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed mb-5">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${a.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover corner glow */}
                <div className={`absolute -bottom-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 ${a.dot}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
