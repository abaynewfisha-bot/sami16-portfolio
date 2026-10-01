
import { ArrowRight, Mail, Target, Atom, Leaf, Smartphone } from 'lucide-react'
import ProfileImage from "../../assets/Images/sami.png"
const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#070d18] text-white flex items-center pt-24 pb-16 px-6 sm:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">

        {/* 2. Content Column */}
        <div className="lg:col-span-6 space-y-5 z-10">
          <div className="inline-block">
            <span className="bg-[#0c221e] text-[#10b981] border border-[#10b981]/30 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
              • Fullstack Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Hi, I'm Abaynew<span className="inline-block animate-bounce">👋</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            I build modern, <br />
            scalable <span className="text-[#10b981]">web applications.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-lg font-normal leading-relaxed">
            Passionate fullstack developer with expertise in building exceptional digital experiences.
          </p>

          {/* Connected CTA Button Links */}
          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-[#070d18] font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#10b981]/20 group"
            >
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#0b1325] border border-slate-700/80 hover:border-[#10b981] text-slate-200 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Contact Me 
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* 3. Photo Box & Floating Tech Badges with Links */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
          
          <div className=" rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0b1325] z-5 w-full max-w-md">
            <img
              src={ProfileImage}
              alt="Yibeltal Developer"
              className="w-full h-200 object-cover"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://via.placeholder.com/500x380/0b1325/10b981?text=Yibeltal'
              }}
            />
          </div>

          {/* Smartphone Link */}
          <a href="#responsive" className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0c162c] border border-slate-800/80 p-2.5 rounded-xl shadow-xl z-20 hover:border-cyan-400 transition-all">
            <Smartphone className="text-cyan-400" size={18} />
          </a>

          {/* React / Atom Link */}
          <a href="#skills" className="absolute -top-6 left-12 bg-[#0c162c] border border-slate-800/80 p-3 rounded-2xl shadow-xl z-20 hover:scale-110 transition-transform">
            <Atom className="text-cyan-400" size={24} />
          </a>

          {/* Target Icon Link */}
          <a href="#about" className="absolute top-1/2 -left-6 -translate-y-1/2 bg-[#0c162c] border-2 border-[#10b981] p-2.5 rounded-2xl shadow-[0_0_15px_rgba(16,185,129,0.4)] z-20 hover:scale-110 transition-transform">
            <Target className="text-red-500" size={22} />
          </a>

          {/* Leaf Link */}
          <a href="#skills" className="absolute -bottom-6 left-20 bg-[#0c162c] border border-slate-800/80 p-3 rounded-2xl shadow-xl z-20 hover:scale-110 transition-transform">
            <Leaf className="text-emerald-400" size={22} />
          </a>

          {/* JS Tag Link */}
          <a href="#skills" className="absolute -top-8 right-6 bg-[#0c162c] border border-slate-800/80 px-4 py-2.5 rounded-2xl shadow-xl z-20 hover:border-yellow-400 transition-all">
            <span className="text-emerald-400 font-bold text-sm">JS</span>
          </a>

          {/* TS Tag Link */}
          <a href="#skills" className="absolute top-12 -right-4 bg-[#0c162c] border border-slate-800/80 px-4 py-3 rounded-2xl shadow-xl z-20 hover:border-blue-400 transition-all">
            <span className="text-blue-400 font-bold text-base">TS</span>
          </a>

          {/* Status Dot */}
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-[#0c162c] border border-slate-800/80 p-3 rounded-2xl shadow-xl z-20">
            <span className="w-4 h-4 bg-[#10b981] rounded-full block shadow-[0_0_10px_#10b981]"></span>
          </div>

          {/* PHP Tag Link */}
          <a href="#skills" className="absolute -bottom-8 right-8 bg-[#0c162c] border border-slate-800/80 px-5 py-3 rounded-2xl shadow-xl z-20 hover:border-purple-400 transition-all">
            <span className="text-purple-400 font-bold text-base">PHP</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Home
