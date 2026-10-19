import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const ThemeButton = ({ isDarkMode, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    title={isDarkMode ? "Light mode" : "Dark mode"}
  >
    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Smoothly scroll to a section and account for the fixed navbar.
  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsOpen(false);

    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // Update the URL hash without a sudden jump.
      window.history.replaceState(null, "", href);
    } else {
      console.warn(
        `Navbar: section #${sectionId} was not found. Add id="${sectionId}" to that section.`
      );
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((previous) => !previous);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/50 dark:bg-[#050814]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="flex items-center gap-1 text-2xl font-black tracking-widest text-slate-900 dark:text-white"
        >
          <span className="text-purple-600 dark:text-purple-500">
            Abaynew
          </span>
          F
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center space-x-5 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="whitespace-nowrap text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center space-x-3 lg:flex">
          <ThemeButton isDarkMode={isDarkMode} onToggle={toggleTheme} />

          <a
            href="/cv.pdf"
            download="Abaynew_CV.pdf"
            className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-purple-500 hover:text-purple-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-purple-400"
          >
            <Download size={16} />
            CV
          </a>

          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:from-blue-500 hover:to-purple-500"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-2 lg:hidden">
          <ThemeButton isDarkMode={isDarkMode} onToggle={toggleTheme} />

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="flex flex-col space-y-1 border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm dark:border-slate-800 dark:bg-[#0a0f24] lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="rounded-lg py-3 text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download="Abaynew_CV.pdf"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-slate-300 py-3 font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            <Download size={16} />
            Download CV
          </a>

          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="mt-2 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white shadow"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
