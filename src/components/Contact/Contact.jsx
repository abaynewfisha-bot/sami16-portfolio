import { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, CheckCircle, Loader2 } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b24394b0-6f45-4a95-99d0-2cf8ded8b248', // <-- Replace with your Web3Forms Access Key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      })

      const result = await response.json()
      if (result.success) {
        setSuccessMessage('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-white/80 dark:bg-[#0b1021]/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl transition-colors duration-300">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Contact <span className="text-purple-400">Me</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
      {/* Info Cards */}
<div className="space-y-3">
  {/* Email */}
  <a 
    href="https://abaynewfisha@gmail.com" 
    className="bg-slate-50 dark:bg-[#080d1e] border border-slate-200 dark:border-slate-800 p-3 rounded-xl flex items-center gap-3 hover:border-purple-500/50 transition-colors group"
  >
    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg group-hover:scale-105 transition-transform">
      <Mail size={18} />
    </div>
    <div>
      <p className="text-[10px] text-slate-500 font-medium">Email</p>
      <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
        abaynewfisha@gmail.com
      </p>
    </div>
  </a>

  {/* Phone */}
  <a 
    href="tel:+251927582387" 
    className="bg-slate-50 dark:bg-[#080d1e] border border-slate-200 dark:border-slate-800 p-3 rounded-xl flex items-center gap-3 hover:border-blue-500/50 transition-colors group"
  >
    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-105 transition-transform">
      <Phone size={18} />
    </div>
    <div>
      <p className="text-[10px] text-slate-500 font-medium">Phone</p>
      <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
        +251 9 27 58 23 87
      </p>
    </div>
  </a>

  {/* Location / Map */}
  <a 
    href="https://maps.google.com/?q=Injibara,Ethiopia" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-slate-50 dark:bg-[#080d1e] border border-slate-200 dark:border-slate-800 p-3 rounded-xl flex items-center gap-3 hover:border-purple-500/50 transition-colors group"
  >
    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg group-hover:scale-105 transition-transform">
      <MapPin size={18} />
    </div>
    <div>
      <p className="text-[10px] text-slate-500 font-medium">Location</p>
      <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
        Injibara, Ethiopia
      </p>
    </div>
  </a>
</div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 text-slate-500" size={16} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-slate-50 dark:bg-[#080d1e] border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-500" size={16} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-slate-50 dark:bg-[#080d1e] border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-slate-50 dark:bg-[#080d1e] border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
            ></textarea>
          </div>

          {successMessage && (
            <p className="text-xs text-green-400 flex items-center gap-1">
              <CheckCircle size={14} /> {successMessage}
            </p>
          )}

          {errorMessage && (
            <p className="text-xs text-red-400">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>Sending... <Loader2 size={14} className="animate-spin" /></>
            ) : (
              <>Send Message <Send size={14} /></>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
