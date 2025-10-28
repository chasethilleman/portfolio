import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Me from "../assets/Me.png";
import HTML from "../icons/html.svg";
import CSS from "../icons/css.svg";
import JavaScript from "../icons/javascript.svg";
import TypeScript from "../icons/typescript.svg";
import ReactIcon from "../icons/react.svg";
import Git from "../icons/git.svg";
import Vite from "../icons/vite.svg";
import Sass from "../icons/sass.svg";
import Figma from "../icons/figma.svg";
import PostgreSQL from "../icons/postgresql.svg";
import Prisma from "../icons/prisma.svg";
import Redux from "../icons/redux.svg";
import Tailwind from "../icons/tailwind.svg";

const skills = [
  { name: "HTML", src: HTML },
  { name: "CSS", src: CSS },
  { name: "JavaScript", src: JavaScript },
  { name: "TypeScript", src: TypeScript },
  { name: "React", src: ReactIcon },
  { name: "Git", src: Git },
  { name: "Vite", src: Vite },
  { name: "Sass", src: Sass },
  { name: "Figma", src: Figma },
  { name: "PostgreSQL", src: PostgreSQL },
  { name: "Prisma", src: Prisma },
  { name: "Redux", src: Redux },
  { name: "Tailwind", src: Tailwind },
];

const skillLayout = [4, 5, 4];
const skillRows = (() => {
  let index = 0;
  return skillLayout.map((count) => {
    const row = skills.slice(index, index + count);
    index += count;
    return row;
  });
})();

// Animation variants
const leftCol = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: {},
  show: {
    transition: {
      // stagger each icon in the row
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section className="about relative mx-auto max-w-6xl px-6 py-20 text-white bg-neutral-900">
      <h2 className="section-heading mb-20 text-center text-5xl font-extrabold">
        <span className="section-heading-text">About Me</span>
        <div className="section-heading-line" />
      </h2>

      <div className="grid grid-cols-1 gap-30 lg:grid-cols-2 justify-items-center">
        {/* LEFT COLUMN — fade & slide in from left */}
        <motion.div
          className="flex flex-col items-center gap-6 lg:items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={leftCol}
        >
          <img
            src={Me}
            alt="Me"
            className="about-image h-50 w-50 object-cover p-[3px]"
          />

          <div className="about-content max-w-prose text-lg leading-relaxed text-neutral-300">
            <p className="mb-4 text-left">
              I'm a <strong>Design Engineer blending full-stack development with a strong foundation in UI/UX design.</strong> I build scalable, performant web applications by combining design thinking with technical precision—crafting intuitive, component-based interfaces and seamless user experiences from prototype to production.
            </p>
            <p className="mb-4 text-left">
              I'm technologically adept, eager to learn and grow within an
              ever-evolving landscape of modern technologies, continuously
              pushing my skills forward to contribute across the stack.
            </p>
            <p className="text-left space-x-4">
              <a
                className="inline-flex items-center gap-2 border border-cyan-500 px-3 py-1 text-cyan-500"
                href="https://drive.google.com/file/d/1KFnrviAz--mQ2IbMhjvl6uZa2G4ZoT07/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a
                className="inline-flex items-center gap-2 border border-cyan-500 px-3 py-1 text-cyan-500"
                href="https://www.linkedin.com/in/chase-thilleman-33458965/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a
                className="inline-flex items-center gap-2 border border-cyan-500 px-3 py-1 text-cyan-500"
                href="https://www.github.com/chasethilleman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a
                className="inline-flex items-center gap-2 border border-cyan-500 px-3 py-1 text-cyan-500"
                href="mailto:chasechaisson@me.com"
              >
                <span>Mail</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="flex w-full max-w-[500px] flex-col items-center gap-15 items-center justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={iconGrid}
        >
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={`skills-row-${rowIndex}`}
              className="grid w-full gap-6"
              style={{
                gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
              }}
              variants={rowVariants}
            >
              {row.map(({ name, src }) => (
                <motion.div
                  key={name}
                  variants={iconItem}
                  className="relative w-full aspect-square flex flex-col items-center justify-center p-[2px]"
                  title={name}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-900">
                    <img
                      src={src}
                      alt={name}
                      className="mb-2 h-15 w-15 object-contain opacity-90"
                    />
                    <span className="text-xs font-semibold leading-none tracking-[1px] text-neutral-200">
                      {name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
