import { useState, useEffect } from "react";
import AnimatedBackground from "./animatedBackground";
import SymbolWater from "./symbolWater";

export default function Hero(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <SymbolWater />
      <section className="hero flex flex-col justify-center items-center space-y-4 px-4">
        <h1
          className={[
            "hero-title text-7xl text-white transition-all duration-700 ease-out",
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
          ].join(" ")}
        >
          Hello, I'm <span className="hero-name text-cyan-500">Chase</span>.
        </h1>
        <h2
          className={[
            "hero-subtitle text-7xl pb-[1.5rem] text-white transition-all duration-700 ease-out",
            loaded
              ? "opacity-100 translate-x-0 delay-100"
              : "opacity-0 -translate-x-full",
          ].join(" ")}
        >
          I'm a full stack engineer.
        </h2>
        <a
          href="#_"
          onClick={props.handleLearnMore}
          class="relative px-6 py-3 font-bold text-white group"
        >
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-cyan-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
          <span class="relative flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-label="Down chevron"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              />
            </svg>
          </span>
        </a>
        {/* <button
          onClick={props.handleLearnMore}
          className={[
            "group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full",
            "bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50",
            "transition-all duration-700 ease-out",
            loaded
              ? "opacity-100 translate-y-0 delay-200"
              : "opacity-0 translate-y-full",
          ].join(" ")}
        >
          <span className="z-10 pr-2">Learn more</span>

          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3.5 flex items-center justify-center rotate-90">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-50"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button> */}
      </section>
    </>
  );
}
