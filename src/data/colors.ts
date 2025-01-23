import { FaAws, FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { SiAngular, SiNextdotjs, SiPostgresql, SiPrisma, SiReactquery, SiTailwindcss, SiTypescript, SiVercel, SiVite, SiZod } from 'react-icons/si';

export const logos = [
  { name: 'HTML', shadow: 'hover:shadow-orange-500', icon: FaHtml5 },
  { name: 'CSS', shadow: 'hover:shadow-sky-500', icon: FaCss3Alt },
  { name: 'JS', shadow: 'hover:shadow-yellow-300', icon: FaJs },
  { name: 'NodeJS', shadow: 'hover:shadow-lime-500', icon: FaNodeJs },
  { name: 'TS', shadow: 'hover:shadow-blue-500', icon: SiTypescript },
  { name: 'React', shadow: 'hover:shadow-cyan-300', icon: FaReact },
  { name: 'Next', shadow: 'hover:shadow-zinc-50', icon: SiNextdotjs },
  { name: 'Tailwind', shadow: 'hover:shadow-teal-300', icon: SiTailwindcss },
  { name: 'Zod', shadow: 'hover:shadow-blue-700', icon: SiZod },
  { 
    name: 'Zustand', 
    shadow: 'hover:shadow-sky-700', 
    icon: null,
    imageSrc: '/zustand.png' 
  },
  { name: 'TanStack Query', shadow: 'hover:shadow-pink-200', icon: SiReactquery },
  { name: 'Vite', shadow: 'hover:shadow-violet-400', icon: SiVite },
  { name: 'GitHub', shadow: 'hover:shadow-slate-50', icon: FaGithub },
  { name: 'Vercel', shadow: 'hover:shadow-slate-200', icon: SiVercel },
  { name: 'Postgres', shadow: 'hover:shadow-blue-400', icon: SiPostgresql },
  { name: 'Prisma', shadow: 'hover:shadow-blue-800', icon: SiPrisma },
  { name: 'Python', shadow: 'hover:shadow-yellow-500', icon: FaPython },
  { name: 'PHP', shadow: 'hover:shadow-violet-500', icon: FaPhp},
  { name: 'Angular', shadow: 'hover:shadow-red-500', icon: SiAngular },
  { name: 'AWS', shadow: 'hover:shadow-orange-300', icon: FaAws },
];