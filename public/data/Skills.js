// Base path for colour SVG icons
const C = '/media/skills/skills%20colour';

// Marquee skills — auto-derived from all categories below (colour SVGs)
// (defined after SkillCategories, see bottom of file)

// Categorised grid — full list from screenshot
export const SkillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'C', url: `${C}/C.svg` },
      { name: 'Java', url: `${C}/Java.svg` },
      { name: 'Python', url: `${C}/Python.svg` },
      { name: 'JavaScript', url: `${C}/Javascript.svg` },
      { name: 'TypeScript', url: `${C}/Typescript.svg` },
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React', url: `${C}/React.svg` },
      { name: 'Next.js', url: `${C}/NextJs.svg` },
      { name: 'Node.js', url: `${C}/Node.svg` },
      { name: 'Redux', url: `${C}/Redux.svg` },
      { name: 'Bootstrap', url: `${C}/Boot.svg` },
      { name: 'Tailwind', url: `${C}/Tailwind.svg` },
      { name: 'Express.js', url: `${C}/ExpressJs.svg` },
      { name: 'Socket.IO', url: `${C}/SocketIO.svg` },
      { name: 'MUI', url: `${C}/MUI.svg` },
      { name: 'Rest API', url: `${C}/RestAPI.svg` },
      { name: 'Three.js', url: `${C}/threejs.svg` },
      { name: 'Framer', url: `${C}/Framer.svg` },
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', url: `${C}/MySQL.svg` },
      { name: 'MongoDB', url: `${C}/MongoDB.svg` },
      { name: 'Redis', url: `${C}/Redis.svg` },
      { name: 'PostgreSQL', url: `${C}/postgresql.svg` },
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', url: `${C}/Git.svg` },
      { name: 'GitHub', url: `${C}/Github.svg` },
      { name: 'VS Code', url: `${C}/VSCode.svg` },
      { name: 'Docker', url: `${C}/Docker.svg` },
      { name: 'Postman', url: `${C}/Postman.svg` },
      { name: 'Vercel', url: `${C}/Vercel.svg` },
    ]
  },
]

// Marquee — all skills flattened from categories, auto-id'd
export const Skills = SkillCategories
  .flatMap(group => group.skills)
  .map((skill, i) => ({ ...skill, id: i + 1 }));