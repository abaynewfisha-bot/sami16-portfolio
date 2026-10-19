import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') !== 'light')

  // Toggle dark mode class on the document root
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#050814]/85 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-black text-slate-900 dark:text-white tracking-widest flex items-center gap-1">
          <span className="text-purple-600 dark:text-purple-500">Abaynew</span>F
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:bg-green-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download="Abaynew_CV.pdf"
            className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-purple-500 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-semibold px-4 py-2 rounded-lg transition-all"
          >
            <Download size={16} />
            CV
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all shadow-lg shadow-purple-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Open Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#0a0f24] border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col space-y-3 text-sm transition-colors duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href="/cv.pdf"
              download="Abaynew_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2 rounded-lg"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-center bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
