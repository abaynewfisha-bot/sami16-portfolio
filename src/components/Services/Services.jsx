
import {
  Code2,
  Palette,
  Database,
  Globe,
  Wrench,
  ShoppingCart,
  GraduationCap,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Rocket,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites designed to showcase your brand, engage visitors, and work smoothly across devices.",
    features: [
      "Responsive layouts",
      "Modern UI development",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Full Stack Development",
    description:
      "End-to-end web application development, from interactive frontend interfaces to backend APIs and data storage.",
    features: [
      "Frontend and backend integration",
      "REST API development",
      "Database integration",
      "Authentication implementation",
    ],
    tags: ["React", "Node.js", "Express"],
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Implementation",
    description:
      "Clean, accessible interfaces that turn design concepts into intuitive and user-friendly digital experiences.",
    features: [
      "Responsive interface design",
      "Reusable components",
      "Consistent visual styling",
      "Usability improvements",
    ],
    tags: ["Figma handoff", "CSS", "Tailwind CSS"],
  },
  {
    icon: ShoppingCart,
    number: "04",
    title: "E-commerce Websites",
    description:
      "Online store development with product catalogs, shopping carts, and checkout integrations suited to your requirements.",
    features: [
      "Product listing pages",
      "Shopping cart functionality",
      "Order management integration",
      "Payment provider integration",
    ],
    tags: ["React", "REST APIs", "Databases"],
  },
  {
    icon: Database,
    number: "05",
    title: "Database & API Development",
    description:
      "Structured data models and maintainable APIs to help applications communicate reliably with backend services.",
    features: [
      "Database schema design",
      "CRUD operations",
      "API integration",
      "Data validation",
    ],
    tags: ["PostgreSQL", "Prisma", "Express"],
  },
  {
    icon: Wrench,
    number: "06",
    title: "Website Maintenance",
    description:
      "Practical improvements to existing websites, including bug fixes, responsive adjustments, and feature updates.",
    features: [
      "Bug fixing and debugging",
      "Mobile responsiveness",
      "Code refactoring",
      "Deployment assistance",
    ],
    tags: ["Git", "Vite", "React"],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your goals, audience, requirements, and project scope.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Organize the structure, user experience, and implementation plan.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build the application with maintainable code and responsive layouts.",
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "Test functionality, resolve issues, and prepare the project for deployment.",
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

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#50f5d2]/15 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#50f5d2]/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:p-7">
      <span className="pointer-events-none absolute right-5 top-3 text-5xl font-black text-[#50f5d2]/[0.06]">
        {service.number}
      </span>

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#50f5d2]/20 text-[#50f5d2] transition group-hover:bg-[#50f5d2] group-hover:text-[#08172c]">
          <Icon size={24} />
        </div>

        <ArrowUpRight
          size={19}
          className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#50f5d2]"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-100">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {service.description}
      </p>

      <div className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-2.5 text-sm text-slate-300"
          >
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#50f5d2]"
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 px-2.5 py-1.5 text-[11px] font-medium text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <main className="min-h-screen overflow-hidden  text-slate-100">
      {/* Hero */}
      <section className="relative border-b border-white/[0.05] bg-gradient-to-br from-[#0d2133] via-[#091a2e] to-[#08172c] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-64 w-64 rounded-full bg-emerald-400/[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#50f5d2]/25 text-[#50f5d2]">
            <Layers size={31} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#50f5d2]">
            What I can do for you
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="text-[#50f5d2]">Services</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base lg:text-lg">
            I help turn ideas into practical digital products through
            modern web development, thoughtful interfaces, and reliable
            software solutions.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#50f5d2] px-6 py-3.5 font-bold text-[#08172c] transition hover:-translate-y-0.5 hover:bg-[#8affea]"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="My expertise"
          title="Solutions I"
          accent="Offer"
          description="Flexible development services for personal projects, businesses, startups, and organizations."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/[0.05]  px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How I work"
            title="From Idea to"
            accent="Launch"
            description="A clear process helps keep projects organized, understandable, and focused on their goals."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="relative rounded-xl border border-white/10  p-6 transition hover:border-[#50f5d2]/40"
              >
                <span className="text-sm font-extrabold tracking-widest text-[#50f5d2]">
                  STEP {step.number}
                </span>

                <div className="my-5 flex h-11 w-11 items-center justify-center rounded-xl text-[#50f5d2]">
                  {index === 0 ? (
                    <MessageCircle size={22} />
                  ) : index === 1 ? (
                    <Palette size={22} />
                  ) : index === 2 ? (
                    <Code2 size={22} />
                  ) : (
                    <Rocket size={22} />
                  )}
                </div>

                <h3 className="text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-[#50f5d2]/20 bg-gradient-to-br from-[#103047] to-[#0c2034] px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-[#50f5d2]">
              <GraduationCap size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
              Have an idea? Let's{" "}
              <span className="text-[#50f5d2]">build it.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Tell me about your project, your goals, and the problem
              you want to solve. We can discuss the right approach
              together.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl  px-6 py-3.5 font-bold text-[#08172c] transition hover:-translate-y-0.5 hover:bg-[#8affea]"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
