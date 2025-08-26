import Me from "../assets/me.jpg";
import HTML from "../icons/html.svg";
import CSS from "../icons/css.svg";
import JavaScript from "../icons/javascript.svg";
import TypeScript from "../icons/typescript.svg";
import React from "../icons/react.svg";
import Git from "../icons/git.svg";
import Vite from "../icons/vite.svg";
import Sass from "../icons/sass.svg";
import Figma from "../icons/figma.svg";

const skills = [
  { name: "HTML", src: HTML },
  { name: "CSS", src: CSS },
  { name: "JavaScript", src: JavaScript },
  { name: "TypeScript", src: TypeScript },
  { name: "React", src: React },
  { name: "Git", src: Git },
  { name: "Vite", src: Vite },
  { name: "Sass", src: Sass },
  { name: "Figma", src: Figma },
];

export default function About() {
  return (
    <section className="about relative mx-auto max-w-7xl px-6 py-20 text-white bg-neutral-900">
      <h2 className="mb-30 text-center text-5xl font-extrabold">
        About{" "}
        <span className="relative">
          Me
          <span className="absolute -bottom-1 left-0 h-2 w-full bg-cyan-500" />
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-30 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 lg:items-center">
          <img
            src={Me}
            alt="Me"
            className="about-image h-52 w-52 rounded-full object-cover bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-rose-400 p-[3px]"
          />

          <div className="about-content max-w-prose text-lg leading-relaxed text-neutral-300">
            <p className="mb-4">
              I’m a Front-End Engineer with a strong design sensibility who
              builds scalable, accessible, and performant web apps. I ship
              polished, component-based UIs in{" "}
              <span className="text-cyan-300">React</span> and{" "}
              <span className="text-cyan-300">
                Salesforce Lightning Web Components
              </span>
              , turning Figma prototypes into production experiences.
            </p>
            <p>
              I care about responsive design, a11y, and performance, and I’m
              actively growing full-stack capabilities with Node.js and{" "}
              <span className="text-cyan-300">REST APIs</span> so I can
              contribute across the stack.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3">
          {skills.map(({ name, src }) => (
            <div
              key={name}
              className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-rose-400"
              title={name}
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-neutral-900 shadow-[inset_0_0_40px_rgba(236,72,153,0.12)]">
                {/* icon (replace /icons/*.svg with your actual assets) */}
                <img
                  src={src}
                  alt={name}
                  className="mb-2 h-10 w-10 object-contain opacity-90"
                  loading="lazy"
                  onError={(e) => {
                    // simple fallback if icon path is missing
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
                <span className="text-xs font-medium tracking-wide text-neutral-200">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
