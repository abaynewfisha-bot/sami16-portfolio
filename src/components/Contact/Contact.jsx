import { Mail, Phone, MapPin, Send, User } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">
        Contact <span className="text-purple-400">Me</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Info Cards */}
        <div className="space-y-3">
          <div className="bg-[#080d1e] border border-slate-800 p-3 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Email</p>
              <p className="text-xs font-semibold text-white">abaynewfisha@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#080d1e] border border-slate-800 p-3 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Phone</p>
              <p className="text-xs font-semibold text-white">+251 9 27 58 23 87</p>
            </div>
          </div>

          <div className="bg-[#080d1e] border border-slate-800 p-3 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Location</p>
              <p className="text-xs font-semibold text-white">Injibara , Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#080d1e] border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-500" size={16} />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#080d1e] border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full bg-[#080d1e] border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Send Message <Send size={14} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
