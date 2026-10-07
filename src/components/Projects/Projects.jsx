import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react'
import Image1 from "/frontendimage1.png"
const Projects = () => {
  const projects = [
    {
      title: 'E-Learning Platform',
      description: 'A full-stack e-learning platform built with React, Node.js and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB'],
      preview: 'https://via.placeholder.com/400x250/090d1f/8b5cf6?text=E-Learning+Platform',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management app with real-time updates and notifications.',
      tech: ['React', 'Express', 'Socket.io'],
      preview: 'https://via.placeholder.com/400x250/090d1f/2563eb?text=Task+Management+App',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Food-delivery',
      description: 'A collection of different food integration with clean UI.',
      tech: ['React', 'JavaScript', 'vite' ,'Tailwidcss'],
      preview: 'https://via.placeholder.com/400x250/090d1f/8b5cf6?text=Weather+Dashboard',
      github: 'https://github.com/abaynewfisha-bot',
      demo: 'https://sami-food-d.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="bg-[#0b1021]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <a href="#projects" className="text-xs text-purple-400 hover:underline flex items-center gap-1">
          View All Projects <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-[#080d1e] border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all flex flex-col justify-between"
          >
            {/* Mockup Laptop Display Header */}
            <div className="bg-[#0f172a] p-2 border-b border-slate-800 relative">
              <img
                src={Image1}
                alt={proj.title}
                className="w-full h-36 object-cover rounded-lg border border-slate-800"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">{proj.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{proj.description}</p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-950/60 text-blue-300 text-[10px] px-2 py-0.5 rounded border border-blue-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex justify-between items-center border-t border-slate-800/80 pt-3 text-xs text-slate-400">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                    <GitBranch size={14} /> GitHub
                  </a>
                  <a href={proj.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
