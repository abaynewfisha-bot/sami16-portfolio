
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Smartphone,
  Globe,
  Palette,
  GitBranch,
  Terminal,
  Braces,
  Layers,
  Atom,
  Wind,
  FileCode2,
  ShieldCheck,
  Rocket,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces.",
    icon: Monitor,
    color: "cyan",
    skills: [
      { name: "HTML5", level: 90, icon: Globe },
      { name: "CSS3", level: 85, icon: Palette },
      { name: "JavaScript", level: 80, icon: Braces },
      { name: "React", level: 80, icon: Atom },
      { name: "Tailwind CSS", level: 85, icon: Wind },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side applications.",
    icon: Server,
    color: "purple",
    skills: [
      { name: "Node.js", level: 75, icon: Terminal },
      { name: "Express.js", level: 75, icon: Server },
      { name: "REST APIs", level: 80, icon: Globe },
      { name: "Python", level: 70, icon: FileCode2 },
    ],
  },
  {
    title: "Database Management",
    description: "Modeling data and managing database systems.",
    icon: Database,
    color: "emerald",
    skills: [
      { name: "PostgreSQL", level: 75, icon: Database },
      { name: "MongoDB", level: 65, icon: Database },
      { name: "SQL", level: 75, icon: Layers },
      { name: "Prisma ORM", level: 65, icon: Code2 },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Development tools, collaboration, and delivery.",
    icon: Wrench,
    color: "orange",
    skills: [
      { name: "Git & GitHub", level: 80, icon: GitBranch },
      { name: "VS Code", level: 90, icon: Code2 },
      { name: "Vite", level: 80, icon: Rocket },
      { name: "npm", level: 75, icon: Terminal },
    ],
  },
];

const additionalSkills = [
  "Responsive Design",
  "Object-Oriented Programming",
  "Data Structures",
  "Algorithms",
  "Problem Solving",
  "Debugging",
  "API Integration",
  "Team Collaboration",
];

const learningItems = [
  {
    title: "Advanced React",
    description: "Reusable components, state management, and performance.",
  },
  {
    title: "System Design",
    description: "Building scalable and maintainable applications.",
  },
  {
    title: "DevOps & Deployment",
    description: "Production builds, hosting, and deployment workflows.",
  },
];

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#50f5d2]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#50f5d2]">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
        {title}{" "}
        <span className="text-[#50f5d2]">{accent}</span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function SkillCard({ group }) {
  const Icon = group.icon;

  return (
    <article className="group rounded-2xl border border-[#50f5d2]/15 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#50f5d2]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#50f5d2]/20 text-[#50f5d2] transition group-hover:bg-[#50f5d2] group-hover:text-[#08172c]">
          <Icon size={23} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-100">
            {group.title}
          </h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            {group.description}
          </p>
        </div>
      </div>

      <div className="mt-7 space-y-5">
        {group.skills.map((skill) => {
          const SkillIcon = skill.icon;

          return (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <SkillIcon size={15} className="text-[#50f5d2]" />
                  {skill.name}
                </span>

                <span className="text-xs font-semibold tabular-nums text-[#50f5d2]">
                  {skill.level}%
                </span>
              </div>

              <div
                className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
                role="progressbar"
                aria-label={`${skill.name} self-assessed proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#36d9d0] to-[#50f5d2] transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-100">
      {/* Hero */}
      <section  id="skills" className="relative border-b border-white/[0.05] bg-gradient-to-br from-[#0d2133] via-[#091a2e] to-[#08172c] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-64 w-64 rounded-full bg-emerald-400/[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#50f5d2]/25 bg-[#50f5d2]/10 text-[#50f5d2] shadow-[0_0_35px_rgba(80,245,210,0.08)]">
            <Code2 size={32} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#50f5d2]">
            What I work with
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            My Technical{" "}
            <span className="text-[#50f5d2]">Skills</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base lg:text-lg">
            A growing toolkit of technologies, tools, and engineering
            practices I use to transform ideas into useful digital
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Frontend",
              "Backend",
              "Databases",
              "Developer Tools",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#50f5d2]/20 bg-[#50f5d2]/5 px-4 py-2 text-xs font-medium text-[#50f5d2]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Technical expertise"
          title="Technologies &"
          accent="Tools"
          description="Explore the main technologies I use across the software development process."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </section>

      {/* Additional competencies */}
      <section className="border-y border-white/[0.05] bg-[#0b1c31] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Beyond the code"
            title="Engineering"
            accent="Fundamentals"
            description="Core concepts and practical abilities that support my development work."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#10273a] px-4 py-3 text-sm text-slate-300 transition hover:border-[#50f5d2]/40 hover:text-[#50f5d2]"
              >
                <ShieldCheck size={16} className="text-[#50f5d2]" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently learning */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Always improving"
          title="Currently"
          accent="Learning"
          description="Areas I am working to strengthen as I continue growing as a software engineer."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {learningItems.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-[#50f5d2]/15 bg-[#10273a]/80 p-6"
            >
              <span className="absolute right-4 top-3 text-5xl font-black text-[#50f5d2]/[0.07]">
                0{index + 1}
              </span>

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#50f5d2]/10 text-[#50f5d2]">
                {index === 0 ? (
                  <Atom size={23} />
                ) : index === 1 ? (
                  <Layers size={23} />
                ) : (
                  <Rocket size={23} />
                )}
              </div>

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#50f5d2]">
                <GraduationCap size={15} />
                Continuous development
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#50f5d2]/20 bg-gradient-to-r from-[#103047] to-[#0c2438] px-6 py-10 text-center sm:px-12">
          <Smartphone
            size={32}
            className="mx-auto text-[#50f5d2]"
          />

          <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
            Let's create something{" "}
            <span className="text-[#50f5d2]">great</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Interested in working together, sharing ideas, or discussing
            a project? I'd be happy to connect.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#50f5d2] px-6 py-3 font-bold text-[#08172c] transition hover:-translate-y-0.5 hover:bg-[#8affea]"
          >
            Get in Touch
            <Rocket size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
