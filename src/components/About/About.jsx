import { User, Mail, MapPin, Briefcase } from 'lucide-react'
import Image from "../../assets/Images/photo.jpg"

const About = () => {
  return (
    <section id="about" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">
        About <span className="text-purple-400">Me</span>
      </h2>

      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
        I'm a passionate Full Stack Developer with a strong foundation in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 items-center">
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

        {/* Small Image Preview Card */}
        <div className="relative rounded-xl overflow-hidden border border-purple-500/30 bg-slate-900">
          <img
            src={Image}
            alt="Abaynew working"
            className="w-full h-44 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x200/0b1021/8b5cf6?text=Abaynew';
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default About
