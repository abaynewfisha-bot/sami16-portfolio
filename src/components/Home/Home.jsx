import {
  ArrowDown,
  GitBranch,
  User,
  Mail,
  Atom,
  Code2,
  Braces,
  Leaf,
  Layers,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE } from "../../utils/constants";
import profileImage from "../../assets/Images/sami.png";

const technologies = [
  { name: "React", Icon: Atom, position: "react" },
  { name: "Node.js", Icon: Braces, position: "node" },
  { name: "Tailwind CSS", Icon: Layers, position: "tailwind" },
  { name: "TypeScript", Icon: Code2, position: "typescript" },
  { name: "MongoDB", Icon: Leaf, position: "database" },
];

const stats = [
  { value: "7+", label: "Technologies" },
  { value: "12+", label: "Projects" },
  { value: "80%", label: "Satisfaction" },
];

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden  text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/[0.05] blur-[120px]" />

      <section  id ="home" className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1600px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-16 lg:py-12">
        {/* Left: Introduction */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#52f5d2]/20 bg-[#52f5d2]/[0.06] px-4 py-2 text-sm text-[#52f5d2] lg:hidden">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#52f5d2]" />
            Available for opportunities
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl xl:text-8xl">
            Hi, I'm{" "}
            <span className="relative inline-block text-[#50f5d2]">
              {PROFILE.name}
              <span className="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-[#50f5d2]/20" />
            </span>
          </h1>

          <h2 className="mt-7 max-w-3xl text-3xl font-semibold leading-tight text-[#aab8d5] sm:text-4xl lg:text-5xl">
            I build{" "}
            <span className="relative inline-block text-[#50f5d2]">
              digital experiences
              <span className="absolute -bottom-1 left-0 h-2.5 w-full rounded-full bg-[#50f5d2]/20" />
            </span>{" "}
            that make an impact
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-[#8e9bb7] sm:text-xl sm:leading-10 lg:text-2xl">
            {PROFILE.role} &amp; Software Engineering student at
            Injibara University, passionate about creating elegant
            solutions with modern technologies.
          </p>

          {/* Statistics */}
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 sm:gap-x-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold tracking-tight text-[#50f5d2] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-base font-medium text-[#8e9bb7] sm:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#50f5d2] px-6 py-3.5 font-bold text-[#061226] transition hover:-translate-y-1 hover:bg-[#83ffe7]"
            >
              Explore Projects
              <ArrowUpRight size={19} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border bg-[#50f5d3] border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-[#50f5d2]/50 hover:bg-green/5"
            >
              <Mail size={18} />
              Contact Me
            </a>

            <a
              href={PROFILE.resume}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-semibold text-white transition hover:border-[#50f5d2]/50 hover:bg-blue/5 bg-green-400"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4 text-[#8e9bb7]">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="transition hover:text-[#50f5d2]"
            >
              <GitBranch size={23} />
            </a>

            {PROFILE.linkedin && (
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="transition hover:text-[#50f5d2]"
              >
                <User size={23} />
              </a>
            )}
          </div>
        </div>

        {/* Right: Profile portrait and technology badges */}
        <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center py-8 sm:py-12 lg:py-16">
          {/* Outer decorative rings */}
          <div className="absolute aspect-square w-[108%] rounded-full border-[3px] border-cyan-500/30" />
          <div className="absolute aspect-square w-[98%] rounded-full border-[3px] border-emerald-300/40" />
          <div className="absolute aspect-square w-[91%] rounded-full border-[16px] border-[#102c3b]" />

          {/* Portrait */}
          <div className="relative aspect-square w-[84%] overflow-hidden rounded-full border-[5px] border-[#50f5d2] bg-[#102c3b] shadow-[0_0_55px_rgba(80,245,210,0.12)]">
            <img
              src={profileImage}
              alt={`${PROFILE.name} — Full Stack Developer`}
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061226]/20 via-transparent to-transparent" />
          </div>

          {/* Floating technology icons */}
          {technologies.map(({ name, Icon, position }) => {
            const positions = {
              react: "left-[10%] top-[12%]",
              node: "right-[8%] top-[18%]",
              tailwind: "left-[49%] top-[30%]",
              typescript: "left-[13%] bottom-[17%]",
              database: "right-[11%] bottom-[13%]",
            };

            return (
              <div
                key={name}
                title={name}
                className={`absolute ${positions[position]} z-10 flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#50f5d2]/20 bg-[#0b1b31] text-[#50f5d2] shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-110 hover:border-[#50f5d2]/70 sm:h-[78px] sm:w-[78px]`}
              >
                <Icon size={34} strokeWidth={1.8} />
                <span className="sr-only">{name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Scroll indicator */}
      <a
        href="#more"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[#50f5d2]/70 transition hover:text-[#50f5d2] lg:block"
      >
        <ArrowDown size={23} className="animate-bounce" />
      </a>

      <div id="more" className="h-1" />
    </main>
  );
}
