import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
      <h2 className="text-2xl font-bold text-white mb-4">Testimonials</h2>

      <div className="bg-[#090e24] border border-slate-800 rounded-xl p-6 relative my-auto">
        <Quote className="text-purple-500/30 mb-2" size={32} />
        <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6">
          "Abaynew is an excellent developer! He delivered our project on time with amazing quality and great communication."
        </p>

        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/50/2563eb/ffffff?text=DK"
            alt="Daniel Kim"
            className="w-10 h-10 rounded-full object-cover border border-purple-500"
          />
          <div>
            <h4 className="text-white font-semibold text-sm">Yibeltal Fekadu</h4>
            <p className="text-slate-500 text-xs">CEO, TechNova</p>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center pt-4">
        <button className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white">
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <span className="w-2 h-2 rounded-full bg-slate-700"></span>
          <span className="w-2 h-2 rounded-full bg-slate-700"></span>
          <span className="w-2 h-2 rounded-full bg-slate-700"></span>
        </div>
        <button className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white">
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
