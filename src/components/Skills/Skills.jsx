import { Layout, Server, Database, MessageSquare } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-purple-400" size={22} />,
      skills: [
        { name: 'HTML', percent: 95 },
        { name: 'CSS', percent: 90 },
        { name: 'JavaScript', percent: 85 },
        { name: 'React', percent: 90 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="text-blue-400" size={22} />,
      skills: [
        { name: 'Node.js', percent: 85 },
        { name: 'Java', percent: 80 },
        { name: 'Spring Boot', percent: 78 },
        { name: 'REST APIs', percent: 88 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="text-purple-400" size={22} />,
      skills: [
        { name: 'MongoDB', percent: 82 },
        { name: 'PostgreSQL', percent: 75 },
        { name: 'MySQL', percent: 80 },
        { name: 'Redis', percent: 70 },
      ],
    },
    {
      title: 'Communication & Soft Skills',
      icon: <MessageSquare className="text-blue-400" size={22} />,
      skills: [
        { name: 'Teamwork & Collaboration', percent: 92 },
        { name: 'Problem Solving', percent: 90 },
        { name: 'Client Communication', percent: 85 },
        { name: 'Agile / Scrum', percent: 88 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Technical <span className="text-purple-400">Skills</span>
        </h2>

        {/* 4 Category Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#0b1021]/80 backdrop-blur-md border border-slate-800/80 hover:border-purple-500/50 rounded-2xl p-6 shadow-xl transition-all duration-300"
            >
              {/* Category Card Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.percent}%</span>
                    </div>

                    {/* Blue-to-Purple Gradient Bar */}
                    <div className="w-full h-2 bg-slate-800/90 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
