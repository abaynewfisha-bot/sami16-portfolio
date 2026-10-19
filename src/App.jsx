import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Projects from './components/Projects/Projects.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Skills from './components/Skills/Skills.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-[#050814] dark:text-slate-100 min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Radial Gradient Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <Navbar />
      
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        <Home />
        <About />
        <Skills/>
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer/>

        <div className="grid lg:grid-cols-2 gap-8">
          
        </div>
      </main>
    </div>
  )
}

export default App
