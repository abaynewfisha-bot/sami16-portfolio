
import { User, Mail, MapPin, Briefcase } from 'lucide-react'
import Image from "../../assets/Images/photo.jpg"

const About = () => {
  return (
    <section id="about" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">
        About <span className="text-purple-400">Me</span>
      </h2>

      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
        I'm a passionate Full Stack Developer with a strong foundation in building scalable web applications.<br/> I love turning complex problems into simple, beautiful, and intuitive solutions.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 items-center">
        {/* Details List */}
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-slate-300">
            <User className="text-purple-400" size={16} />
            <span className="text-slate-500 min-w-[70px]">Name:</span>
            <span className="font-medium text-white">Abaynew Fisha</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="text-purple-400" size={16} />
            <span className="text-slate-500 min-w-[70px]">Email:</span>
            <span className="font-medium text-white">abaynewfisha@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <MapPin className="text-purple-400" size={16} />
            <span className="text-slate-500 min-w-[70px]">Location:</span>
            <span className="font-medium text-white">Addis Ababa, Ethiopia</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <Briefcase className="text-purple-400" size={16} />
            <span className="text-slate-500 min-w-[70px]">Experience:</span>
            <span className="font-medium text-white">2+ Years</span>
          </div>
        </div>

        {/* 3D Holographic Image Container */}
        <div className="flex justify-center items-center relative [perspective:1000px] group py-4">
          
          {/* Glowing 3D Backdrop Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition duration-500"></div>

          {/* 3D Tilted Card Frame */}
          <div className="relative w-full max-w-[280px] h-60 bg-[#080d1e] border border-purple-500/30 rounded-2xl p-2 shadow-2xl transition-all duration-500 [transform-style:preserve-3d] [transform:rotateY(-12deg)_rotateX(6deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.03)] flex items-center justify-center">
            
            {/* Image with Floating 3D Pop Effect */}
            <img
              src={Image}
              alt="Abaynew working"
              className="w-full h-full object-cover rounded-xl shadow-inner transition-transform duration-500 [transform:translateZ(20px)] group-hover:[transform:translateZ(35px)]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x200/0b1021/8b5cf6?text=Abaynew';
              }}
            />

            {/* Glowing Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-400 rounded-tl-md"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-blue-400 rounded-br-md"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
