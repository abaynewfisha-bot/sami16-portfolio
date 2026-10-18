import  { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

// You can import your own images like this:
// import Avatar1 from "../../assets/Images/avatar1.jpg"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Abaynew is an excellent developer! He delivered our project on time with amazing quality and great communication.",
      name: "Yibeltal Fekadu",
      role: "CEO, TechNova",
      image: "https://via.placeholder.com/50/2563eb/ffffff?text=YF" // Replace with imported image if desired
    },
    {
      quote: "Working with Abaynew was an absolute pleasure. His frontend skills and attention to detail transformed our web app completely.",
      name: "Alemayehu Tadesse",
      role: "Product Manager, EthioTech",
      image: "https://via.placeholder.com/50/8b5cf6/ffffff?text=AT"
    },
    {
      quote: "Incredible full-stack capabilities! He solved complex database and UI bugs quickly and efficiently.",
      name: "Sara Mola",
      role: "Founder, StartupHub",
      image: "https://via.placeholder.com/50/ec4899/ffffff?text=SM"
    },
    {
      quote: "Very professional, clean code, and great design instincts. Highly recommend him for any web development project.",
      name: "Dawit Kebede",
      role: "CTO, Innovate Ethiopia",
      image: "https://via.placeholder.com/50/10b981/ffffff?text=DK"
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
      <h2 className="text-2xl font-bold text-white mb-4">Testimonials</h2>

      <div className="bg-[#090e24] border border-slate-800 rounded-xl p-6 relative my-auto transition-all duration-300">
        <Quote className="text-purple-500/30 mb-2" size={32} />
        <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6 min-h-[50px]">
          "{current.quote}"
        </p>

        <div className="flex items-center gap-3">
          <img
            src={current.image}
            alt={current.name}
            className="w-10 h-10 rounded-full object-cover border border-purple-500"
          />
          <div>
            <h4 className="text-white font-semibold text-sm">{current.name}</h4>
            <p className="text-slate-500 text-xs">{current.role}</p>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center pt-4">
        <button 
          onClick={handlePrev}
          className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500 transition-all"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                currentIndex === idx ? 'bg-purple-500 w-4' : 'bg-slate-700'
              }`}
            ></span>
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500 transition-all"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
