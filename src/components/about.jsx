import { motion } from "framer-motion";
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
];

// Animation variants
const leftCol = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconGrid = {
  hidden: {},
  show: {
    transition: {
      // stagger each child (icon bubble)
      staggerChildren: 0.08,
      delayChildren: 0.15,
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
              I’m a Front-End Engineer with a strong design sensibility who
              builds scalable and performant web applications. I ship polished,
              component-based UIs in{" "}
              <span className="text-cyan-300">React</span> and{" "}
              <span className="text-cyan-300">
                Salesforce Lightning Web Components
              </span>
              , transforming Figma prototypes into production-ready experiences.
            </p>
            <p className="text-left">
              I’m a technologically adept engineer eager to learn and grow
              within an ever-evolving landscape of modern technologies,
              continuously pushing my skills forward to contribute across the
              stack.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(144px,1fr))] gap-6 w-full max-w-[500px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={iconGrid}
        >
          {skills.map(({ name, src }) => (
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
      </div>
    </section>
  );
}
