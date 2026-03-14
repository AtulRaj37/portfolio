import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'Work Experience',
    role: 'Research Intern',
    org: 'DRDO — Defence Research & Development Organisation',
    period: '2024',
    tags: ['Quantum Computing', 'Research', 'Advanced Tech'],
    description:
      "Worked on advanced technology research at one of India's premier defence R&D organisations. Explored quantum computing concepts and gained exposure to cutting-edge innovations, strengthening my ability to work in high-stakes, research-driven environments.",
    accent: 'blue',
    number: '01',
  },
  {
    type: 'Leadership',
    role: 'President',
    org: 'Club Innova — NIST University',
    period: '2023 – Present',
    tags: ['Leadership', 'Event Management', 'Cultural Projects'],
    description:
      'Lead the multicultural club at NIST University, organising creative and cultural events that bring students together. Responsible for project planning, team coordination, and fostering an inclusive environment that celebrates diverse talents.',
    accent: 'purple',
    number: '02',
  },
  {
    type: 'Achievement',
    role: 'NCC C-Certificate',
    org: 'National Cadet Corps',
    period: '2022 – 2023',
    tags: ['Discipline', 'Leadership', 'National Service'],
    description:
      'Completed the NCC C-Certificate programme — the highest level NCC certification — demonstrating strong discipline, teamwork, and leadership. The experience instilled a sense of national responsibility and resilience.',
    accent: 'teal',
    number: '03',
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
    number: '04',
  },
];

const accentMap = {
  blue: {
    glow:   'hover:shadow-[0_0_50px_-8px_rgba(96,165,250,0.35)]',
    border: 'hover:border-blue-400/50',
    tag:    'bg-blue-400/10 text-blue-400 border-blue-400/20',
    badge:  'text-blue-400 bg-blue-400/10',
    dot:    'bg-blue-400',
    num:    'text-blue-400/20',
    line:   'from-blue-400/70 via-blue-400/20 to-transparent',
  },
  purple: {
    glow:   'hover:shadow-[0_0_50px_-8px_rgba(192,132,252,0.35)]',
    border: 'hover:border-purple-400/50',
    tag:    'bg-purple-400/10 text-purple-400 border-purple-400/20',
    badge:  'text-purple-400 bg-purple-400/10',
    dot:    'bg-purple-400',
    num:    'text-purple-400/20',
    line:   'from-purple-400/70 via-purple-400/20 to-transparent',
  },
  teal: {
    glow:   'hover:shadow-[0_0_50px_-8px_rgba(45,212,191,0.35)]',
    border: 'hover:border-teal-400/50',
    tag:    'bg-teal-400/10 text-teal-400 border-teal-400/20',
    badge:  'text-teal-400 bg-teal-400/10',
    dot:    'bg-teal-400',
    num:    'text-teal-400/20',
    line:   'from-teal-400/70 via-teal-400/20 to-transparent',
  },
  green: {
    glow:   'hover:shadow-[0_0_50px_-8px_rgba(74,222,128,0.35)]',
    border: 'hover:border-green-400/50',
    tag:    'bg-green-400/10 text-green-400 border-green-400/20',
    badge:  'text-green-400 bg-green-400/10',
    dot:    'bg-green-400',
    num:    'text-green-400/20',
    line:   'from-green-400/70 via-green-400/20 to-transparent',
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white">

      {/* ── DESKTOP: Parallax banner ─────────────────────── */}
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

      {/* ── MOBILE: coding gif + heading ─────────────────── */}
      <div className="sm1:block md:hidden relative overflow-hidden">
        <img src="/media/images/coding2.gif" alt="coding" className="w-full object-cover opacity-50" style={{ maxHeight: '220px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end px-5 pb-6">
          <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-1">Career &amp; Achievements</div>
          <h2 className="font-extrabold tracking-tighter text-white text-5xl font-change2 leading-none">Experience</h2>
        </div>
      </div>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="w-4/5 m-auto py-10">
        <div className="h-px bg-white/10 w-full" />
      </div>

      {/* ── Premium 2-col cards grid ───────────────────────── */}
      <div className="w-4/5 m-auto pb-28">
        <div className="grid sm1:grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => {
            const a = accentMap[exp.accent];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
                className={`
                  relative group rounded-2xl overflow-hidden
                  bg-white/[0.03] backdrop-blur-sm
                  border border-white/10 ${a.border}
                  transition-all duration-500 ${a.glow}
                  cursor-default
                `}
              >
                {/* Top gradient accent line */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${a.line}`} />

                <div className="p-7">
                  {/* Large ghost number */}
                  <div className={`absolute top-3 right-5 text-[6rem] font-extrabold font-change2 leading-none select-none pointer-events-none ${a.num} transition-transform duration-500 group-hover:scale-105`}>
                    {exp.number}
                  </div>

                  {/* Type badge */}
                  <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${a.badge} mb-5`}>
                    {exp.type}
                  </span>

                  {/* Role */}
                  <h3 className="text-2xl font-extrabold text-white leading-tight mb-1 tracking-tight">{exp.role}</h3>

                  {/* Org + period */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span className="text-white/40 text-xs leading-relaxed">{exp.org}</span>
                    <span className="text-[10px] text-white/35 font-mono border border-white/10 rounded-full px-2.5 py-1 whitespace-nowrap flex-shrink-0 mt-0.5">
                      {exp.period}
                    </span>
                  </div>

                  {/* Accent divider */}
                  <div className={`h-px bg-gradient-to-r ${a.line} mb-5`} />

                  {/* Description */}
                  <p className="text-sm text-white/55 leading-relaxed mb-6">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className={`text-[11px] font-medium px-3 py-1 rounded-full border ${a.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner glow blob on hover */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${a.dot}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
