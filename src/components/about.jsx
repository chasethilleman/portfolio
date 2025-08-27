import { motion } from "framer-motion";
import Me from "../assets/Me.jpg";
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
      <h2 className="section-heading mb-30 text-center text-5xl font-extrabold">
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
            className="about-image h-52 w-52 rounded-full object-cover bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-rose-400 p-[3px]"
          />

          <div className="about-content max-w-prose text-lg leading-relaxed text-neutral-300">
            <p className="mb-4">
              I’m a Front-End Engineer with a strong design sensibility who
              builds scalable and performant web applications. I ship polished,
              component-based UIs in{" "}
              <span className="text-cyan-300">React</span> and{" "}
              <span className="text-cyan-300">
                Salesforce Lightning Web Components
              </span>
              , transforming Figma prototypes into production-ready experiences.
            </p>
            <p>
              I’m a technologically adept engineer eager to learn and grow
              within an ever-evolving landscape of modern technologies,
              continuously pushing my skills forward to contribute across the
              stack.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — staggered icon reveals */}
        <motion.div
          className="grid grid-cols-2 place-items-center justify-items-center justify-center items-center gap-6 sm:grid-cols-3 aspect-square max-w-[500px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={iconGrid}
        >
          {skills.map(({ name, src }) => (
            <motion.div
              key={name}
              variants={iconItem}
              className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-rose-400"
              title={name}
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-neutral-900 shadow-[inset_0_0_40px_rgba(236,72,153,0.12)]">
                <img
                  src={src}
                  alt={name}
                  className="mb-2 h-15 w-15 object-contain opacity-90"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const label = document.createElement("span");
                    label.textContent = name[0];
                    label.className = "mb-2 text-2xl font-bold opacity-70";
                    e.currentTarget.parentElement?.insertBefore(
                      label,
                      e.currentTarget
                    );
                  }}
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
