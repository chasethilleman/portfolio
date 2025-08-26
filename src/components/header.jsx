export default function Header() {
  return (
    <header className="bg-neutral-800 py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-end">
        <ul className="flex space-x-12">
          <li>
            <a
              href="#"
              className="text-white text-3xl font-light hover:text-cyan-500 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-3xl font-light hover:text-cyan-500 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-3xl font-light hover:text-cyan-500 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-3xl font-light hover:text-cyan-500 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
