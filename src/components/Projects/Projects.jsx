
import {
  ArrowRight,
  ExternalLink,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { useState } from "react";


const projects = [

  {
    title: "Food Delivery Website",
    description:
      "A food ordering interface featuring attractive food cards, category navigation, and shopping cart functionality.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
    technologies: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/abaynewfisha-bot/food-delivery",
    demo: "https://sami-food-d.vercel.app/",
    category: "Frontend",
  },
  {
    title: "ShopEase E-commerce",
    description:
      "An online shopping application for browsing products, managing a cart, and connecting with backend services.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    technologies: ["React Native", "Expo", "Node.js", "Prisma"],
    github: "https://github.com/abaynewfisha-bot",
    demo: "",
    category: "Mobile App",
  },
  {
    title: "University EMS",
    description:
      "A university employee management system designed to organize employee records, leave requests, and payroll.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/abaynewfisha-bot/EMS",
    demo: "",
    category: "Full Stack",
  },
 
  {
    title: "Student Management System",
    description:
      "A student information management interface for organizing student profiles and academic records.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
    technologies: ["React", "JavaScript", "REST API"],
    github: "https://github.com/abaynewfisha-bot",
    demo: "",
    category: "Web Application",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard concept for presenting current conditions and forecasts through a clear interface.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=85",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/abaynewfisha-bot",
    demo: "",
    category: "Web Application",
  },
];

const filters = [
  "All",
  "Full Stack",
  "Frontend",
  "Web Application",
  "Mobile App",
];

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/60">
      {/* Project preview */}
      <div className="overflow-hidden border-b border-slate-200  p-3">
        <div className="relative aspect-[16/8.5] overflow-hidden rounded-xl border border-slate-300 bg-slate-200">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-semibold text-purple-700 shadow-sm backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition group-hover:text-purple-700">
          {project.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        {/* Technology tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-purple-700"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <GitBranch size={18} />
            GitHub
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 transition hover:text-purple-800"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
              Demo unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] =useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="min-h-screen  px-4 py-10 text-slate-900 sm:px-6 lg:px-10">
      <section id="projects" className="mx-auto max-w-[1600px] rounded-3xl border border-slate-200   p-5 shadow-sm sm:p-8 lg:p-10">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              <Sparkles size={15} />
              My portfolio
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Featured{" "}
              <span className="text-purple-500">Projects</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore my projects, technologies, and practical
              software development experience.
            </p>
          </div>

          <a
            href="#project-list"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-medium text-purple-600 transition hover:text-purple-800 sm:self-center"
          >
            Explore Projects
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Project filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "border-purple-600 bg-purple-600 text-white shadow-md shadow-purple-200"
                  : "border-slate-200 bg-white text-slate-600 hover:border-purple-300 hover:text-purple-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          id="project-list"
          className="mt-8 grid scroll-mt-8 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Result count */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-purple-600">
            {filteredProjects.length}
          </span>{" "}
          of {projects.length} projects
        </p>
      </section>
    </main>
  );
}

