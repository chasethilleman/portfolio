import mail from "../icons/mail.png";
import github from "../icons/github-share.png";
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer bg-neutral-800 text-white py-6">
      <div className="container mx-auto text-center pb-4 justify-items-center align-items-center">
        <button
          className="text-[#fafafa] text-[10px] font-medium transition-transform duration-300 ease-in-out hover:translate-y-[-5px] cursor-pointer bg-cyan-500 pt-1 pb-0.5 relative bottom-13"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 11l6-6 6 6"
              stroke="#FFFFFF"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="miter"
            />
            <path
              d="M6 19l6-6 6 6"
              stroke="#FFFFFF"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="miter"
            />
          </svg>
        </button>
        <div className="flex pb-3 gap-3">
          <a
            href="https://github.com/chasethilleman"
            target="_blank"
            className="hover:scale-110 ease-in-out duration-300 transition-transform cursor-pointer"
          >
            <img src={github} alt="GitHub" className="w-10 h-10" />
          </a>
          <a
            href="mailto:chasethilleman@gmail.com"
            className="hover:scale-110 ease-in-out duration-300 transition-transform cursor-pointer"
          >
            <img src={mail} alt="Mail" className="w-10 h-10" />
          </a>
        </div>
        <p className="text-[#fafafa] text-[10px] font-medium">
          CHASE THILLEMAN &copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
