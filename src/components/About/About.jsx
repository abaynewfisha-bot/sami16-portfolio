
import {
  GraduationCap,
  Code2,
  Rocket,
  CalendarDays,
  CheckCircle2,
  BookOpen,
  Database,
  // Network,
  Cpu,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import profileImage from "../../assets/Images/sami.png";

const highlights = [
  {
    icon: GraduationCap,
    title: "Injibara University",
    subtitle: "Bachelor of Science in Software Engineering",
    detail: "2023 - 2028 (Expected)",
  },
  {
    icon: Code2,
    title: "Full Stack Focus",
    subtitle: "React, Node.js, Python, Databases",
    detail: "3+ Years Experience",
  },
  {
    icon: Rocket,
    title: "Career Goals",
    subtitle: "Senior Full Stack Developer",
    detail: "Tech Lead & Mentor",
  },
];

const education = [
  {
    date: "2023 - 2028 (Expected)",
    title: "B.Sc. in Software Engineering (Candidate)",
    institution: "Injibara University, Ethiopia",
    description:
      "Undergraduate study emphasizing software engineering methodology, data structures, algorithms, operating systems, and distributed system design.",
    subjects: [
      "Advanced coursework in Database Management, Computer Networks, and Object-Oriented Analysis & Design",
      "Academic project lead for multi-criteria University Department Selection System",
      "Collaborative peer coding mentor and active participant in university technology seminars",
    ],
    tags: [
      "Software Engineering",
      "Algorithms",
      "Databases",
      "System Design",
      "OOP",
    ],
  },
];

const skills = [
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    category: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Git", "GitHub", "VS Code"],
  },
];

function SectionTitle({ title, accent, description }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
        {title}{" "}
        <span className="relative inline-block text-[#50f5d2]">
          {accent}
          <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#50f5d2]/25" />
        </span>
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08172c] text-slate-100">
      {/* Introduction */}
      <section id="about" className="relative border-b border-white/[0.04] bg-gradient-to-br from-[#0d2133] via-[#091a2e] to-[#07152a]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
          {/* Profile photo */}
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-5">
            <div className="rounded-[22px] border border-[#50f5d2]/20 bg-[#102c3b] p-1 shadow-[0_0_0_7px_rgba(80,245,210,0.04)]">
              <img
                src={profileImage}
                alt="Software engineering student working on a laptop"
                className="aspect-[4/5] w-full rounded-[17px] object-cover object-center"
              />
            </div>
          </div>

          {/* About description */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#50f5d2]">
              Get to know me
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Passionate{" "}
              <span className="block text-[#50f5d2]">
                Software Engineer
              </span>
              <span className="block">& Problem Solver</span>
            </h1>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              With a strong foundation in full-stack development, I
              specialize in building scalable, user-centric web
              applications that blend creativity with technical
              excellence. My career goal is to become a senior software
              engineer at an innovative company, perhaps in the fintech
              or edtech space, while contributing to open-source
              projects that empower underrepresented communities in
              Africa. I'm always eager to connect, collaborate, or
              discuss ideas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#50f5d2]/20 bg-[#50f5d2]/5 px-3 py-1.5 text-xs text-[#50f5d2]">
                Full Stack Development
              </span>
              <span className="rounded-full border border-[#50f5d2]/20 bg-[#50f5d2]/5 px-3 py-1.5 text-xs text-[#50f5d2]">
                Problem Solving
              </span>
              <span className="rounded-full border border-[#50f5d2]/20 bg-[#50f5d2]/5 px-3 py-1.5 text-xs text-[#50f5d2]">
                Continuous Learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, subtitle, detail }) => (
            <article
              key={title}
              className="group rounded-xl border border-[#50f5d2]/20 bg-[#102b3b]/80 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#50f5d2] hover:bg-[#143344]"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#50f5d2] to-cyan-400 text-[#07172b]">
                <Icon size={20} />
              </div>

              <h2 className="text-base font-bold text-slate-100">
                {title}
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                {subtitle}
              </p>

              <p className="mt-2 text-xs font-semibold text-[#50f5d2]">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Education timeline */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8 lg:px-12">
        <SectionTitle
          title="Education &"
          accent="Journey"
          description="My academic progression, professional milestones, and engineering experience."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[9px] top-2 w-px bg-gradient-to-b from-[#50f5d2] via-[#50f5d2]/50 to-transparent sm:left-4" />

          {education.map((item) => (
            <article
              key={item.title}
              className="relative pb-8 pl-8 sm:pl-10"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-0 z-10 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-[#50f5d2] bg-[#08172c] text-[#50f5d2] shadow-[0_0_12px_rgba(80,245,210,0.2)] sm:left-[7px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50f5d2]" />
              </div>

              <div className="rounded-xl border border-[#50f5d2]/20 bg-[#10273a] p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-base font-bold leading-6 text-slate-100">
                    {item.title}
                  </h3>

                  <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-[#50f5d2]/30 bg-[#50f5d2]/10 px-2.5 py-1 text-[10px] font-semibold text-[#50f5d2]">
                    <CalendarDays size={12} />
                    {item.date}
                  </span>
                </div>

                <p className="mt-3 text-xs font-semibold text-[#50f5d2]">
                  {item.institution}
                </p>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.subjects.map((subject) => (
                    <li
                      key={subject}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-300"
                    >
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#50f5d2]"
                      />
                      {subject}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[#50f5d2]/20 bg-[#50f5d2]/5 px-2 py-1 text-[10px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical skills */}
      <section className="border-y border-white/[0.05] bg-[#0b1c31] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Technical"
            accent="Expertise"
            description="Technologies and tools I use to turn ideas into working software."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((skill, index) => {
              const icons = [Code2, Database, Cpu];
              const Icon = icons[index];

              return (
                <article
                  key={skill.category}
                  className="rounded-xl border border-white/10 bg-[#10273a] p-6 transition hover:border-[#50f5d2]/50"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-[#50f5d2]/10 p-2.5 text-[#50f5d2]">
                      <Icon size={21} />
                    </div>
                    <h3 className="font-bold">{skill.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personal values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionTitle
          title="What Drives"
          accent="Me"
          description="The principles behind how I learn, build, and collaborate."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Lightbulb,
              title: "Continuous Learning",
              description:
                "I keep learning new tools and concepts to create better, more reliable software.",
            },
            {
              icon: Target,
              title: "Purposeful Engineering",
              description:
                "I focus on understanding real problems and building practical solutions for users.",
            },
            {
              icon: Award,
              title: "Quality & Collaboration",
              description:
                "I value readable code, teamwork, feedback, and sharing knowledge with others.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-[#50f5d2]/15 bg-[#10273a]/70 p-6"
            >
              <Icon size={28} className="text-[#50f5d2]" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#50f5d2]/20 bg-gradient-to-br from-[#103047] to-[#0d2034] px-6 py-10 text-center sm:px-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Let's build something{" "}
            <span className="text-[#50f5d2]">meaningful</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            I'm interested in connecting with developers, collaborating
            on useful projects, and exploring new opportunities.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#50f5d2] px-6 py-3 font-bold text-[#08172c] transition hover:-translate-y-0.5 hover:bg-[#8affea]"
          >
            <BookOpen size={17} />
            Let's Connect
          </a>
        </div>
      </section>
    </main>
  );
}
