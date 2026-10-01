import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
    <nav className="fixed top-0 left-0 w-full bg-[#050814]/80 backdrop-blur-md z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-black text-white tracking-widest flex items-center gap-1">
          <span className="text-purple-500">Abaynew</span>F
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all shadow-lg shadow-purple-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f24] border-b border-slate-800 px-6 py-4 flex flex-col space-y-3 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center bg-blue-600 text-white font-semibold py-2 rounded-lg"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
