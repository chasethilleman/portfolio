import clsx from "clsx";
import NewChat from "../assets/NewChat.gif";
import PLC from "../assets/PLC.png";
import JPM from "../assets/JPM.jpg";
import Jobsy from "../assets/Jobsy.gif";

const DEFAULT_PROJECTS = [
  {
    title: "AI Chat Drawer",
    description:
      "A clean, responsive drawer for managing multiple AI conversations with smooth navigation and intuitive UX.",
    image: NewChat,
    reverse: false,
    imgWidth: "max-w-[40rem]",
    cta: "Learn More",
    ctaLink:
      "https://www.loom.com/share/ede8f37d397a4712bd42de1604b4feb0?sid=517ae264-6e0f-4868-bd5d-086e6095e634",
  },
  {
    title: "Jobsy - Job Application Tracker",
    description: "An easy way to track your job applications. Built with Next.js, TypeScript, Prisma, and PostgreSQL.",
    image: Jobsy,
    reverse: true,
    imgWidth: "max-w-[40rem]",
    cta: "View Demo",
    ctaLink: "https://application-tracker-next.vercel.app",
  },
  {
    title: "Salesforce Partner Learning Camp",
    description: "A comprehensive learning platform for Salesforce partners.",
    image: PLC,
    reverse: false,
    imgWidth: "max-w-[70rem]",
  },
  {
    title: "J.P. Morgan Payments Partner Portal",
    description: "A platform built for managing partner accounts and listings.",
    image: JPM,
    reverse: true,
    imgWidth: "max-w-[70rem]",
  },
];

function Project({
  title,
  description,
  image,
  cta,
  reverse,
  imgWidth,
  ctaLink,
}) {
  return (
    <div
      className={clsx(
        // mobile: column, desktop: row
        "project flex flex-col md:flex-row mx-auto px-6 py-20 text-white items-center md:items-start",
        reverse && "md:flex-row-reverse"
      )}
    >
      {/* Image container */}
      <div
        className={clsx(
          "project-img-container transition-transform duration-300 ease-in-out hover:scale-95 inline-block pt-10 pb-10 mb-8 md:mb-0", // add margin for stacked layout
          reverse ? "md:pl-30 md:pr-0" : "md:pl-0 md:pr-30",
          imgWidth
        )}
      >
        <img
          src={image}
          alt={title}
          className="project-image max-w-full h-auto block"
        />
      </div>

      {/* Details */}
      <div
        className={clsx(
          "project-details text-left relative pt-6 md:pt-16 max-w-xl",
          reverse ? "md:mr-8 md:right-[-6rem]" : "md:ml-8 md:left-[-6rem]"
        )}
      >
        <h3 className="text-3xl md:text-4xl font-bold pb-4 md:pb-6">{title}</h3>
        <p className="text-[1.1rem] md:text-[1.3rem]">{description}</p>
        {cta && (
          <a
            className="group text-cyan-500 transition-all duration-300 ease-in-out max-w-prose text-lg leading-relaxed"
            href={ctaLink}
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {cta}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects relative mx-auto max-w-8xl px-6 py-20 text-white bg-neutral-900">
      <h2 className="section-heading mb-5 text-center text-5xl font-extrabold">
        <span className="section-heading-text">Projects</span>
        <div className="section-heading-line" />
      </h2>
      <div className="project-list justify-items-center">
        {DEFAULT_PROJECTS.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
