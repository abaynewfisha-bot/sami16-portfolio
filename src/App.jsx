import { BriefcaseBusiness, GitBranch } from 'lucide-react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Projects from './components/Projects/Projects.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <div className="bg-[#050814] text-slate-100 min-h-screen relative overflow-hidden">
      {/* Radial Gradient Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        <Home />
        
        <div className="grid lg:grid-cols-2 gap-8">
          <About />
          <Skills/>
          <Services />
        </div>

        <Projects />

        <div className="grid lg:grid-cols-2 gap-8">
          <Testimonials />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#070b19] py-10 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-2xl font-bold tracking-wider text-white mb-2">
              <span className="text-purple-500">A</span>B
            </div>
            <p className="text-xs text-slate-400 max-w-xs">
              I'm available for freelance work. Connect with me via email or social media.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
              <a href="#home" className="hover:text-purple-400">Home</a>
              <a href="#services" className="hover:text-purple-400">Services</a>
              <a href="#about" className="hover:text-purple-400">About</a>
              <a href="#testimonials" className="hover:text-purple-400">Testimonials</a>
              <a href="#skills" className="hover:text-purple-400">Skills</a>
              <a href="#contact" className="hover:text-purple-400">Contact</a>
              <a href="#projects" className="hover:text-purple-400">Projects</a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="text-white font-semibold text-sm mb-2">Follow Me</h4>
            <div className="flex md:justify-end gap-4 text-slate-400 mb-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400"><GitBranch size={16} />GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400"><BriefcaseBusiness size={16} />LinkedIn</a>
            </div>
            <p className="text-xs text-slate-500">© 2025 Abaynew Fisha. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
