import { Code, Server, Cloud } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: 'Web Development',
      description: 'Building responsive and modern websites with clean UI/UX.',
    },
    {
      icon: <Server className="text-blue-400" size={24} />,
      title: 'Backend Development',
      description: 'Developing secure and scalable REST APIs and server-side applications.',
    },
    {
      icon: <Cloud className="text-purple-400" size={24} />,
      title: 'Cloud Solutions',
      description: 'Deploying, managing and scaling applications on cloud platforms like AWS.',
    },
  ]

  return (
    <section id="services" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Services</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0d142d] border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-purple-500/50 transition-colors"
          >
            <div className="p-2.5 bg-slate-900/80 w-fit rounded-lg border border-slate-800 mb-3">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
