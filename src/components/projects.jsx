import clsx from "clsx";
import NewChat from "../assets/NewChat.gif";
import PLC from "../assets/plc.png";
import JPM from "../assets/jpm.jpg";

const DEFAULT_PROJECTS = [
  {
    title: "AI Chat Drawer",
    description:
      "A clean, responsive drawer for managing multiple AI conversations with smooth navigation and intuitive UX.",
    image: NewChat,
    reverse: false,
    imgWidth: "max-w-[40rem]",
  },
  {
    title: "Salesforce Partner Learning Camp",
    description: "A comprehensive learning platform for Salesforce partners.",
    image: PLC,
    reverse: true,
    imgWidth: "max-w-[70rem]",
  },
  {
    title: "J.P. Morgan Payments Partner Portal",
    description: "A platform built for managing partner accounts and listings.",
    image: JPM,
    reverse: false,
    imgWidth: "max-w-[70rem]",
  },
];

function Project({ title, description, image, cta, reverse, imgWidth }) {
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
          "project-img-container bg-fuchsia-900 transition-transform duration-300 ease-in-out hover:scale-95 cursor-pointer inline-block pt-10 pb-10 mb-8 md:mb-0", // add margin for stacked layout
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
          <a href="#" className="cta">
            {cta}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects relative mx-auto max-w-8xl px-6 py-20 text-white bg-neutral-900">
      <h2 className="section-heading mb-30 text-center text-5xl font-extrabold">
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
