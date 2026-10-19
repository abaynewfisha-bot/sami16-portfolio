
import { useState } from "react";
import {
  Star,
  Quote,
  MessageSquareQuote,
  ArrowUpRight,
  Sparkles,
  Heart,
  Code2,
} from "lucide-react";

const testimonials = [
  {
    name: "Client One",
    role: "Web Development Project",
    initials: "C1",
    color: "bg-violet-100 text-violet-700",
    rating: 5,
    message:
      "The project was organized professionally, with a clean interface and attention to responsive design. Communication throughout the process was helpful.",
    project: "Website Development",
    date: "Sample testimonial",
  },
  {
    name: "Client Two",
    role: "Academic Project Collaborator",
    initials: "C2",
    color: "bg-indigo-100 text-indigo-700",
    rating: 5,
    message:
      "Working together on the project was a valuable experience. The focus on solving problems and improving the application helped us move forward.",
    project: "Software Development",
    date: "Sample testimonial",
  },
  {
    name: "Client Three",
    role: "Frontend Project",
    initials: "C3",
    color: "bg-pink-100 text-pink-700",
    rating: 5,
    message:
      "The interface was designed with a clear layout and consistent styling. The result made the application easier to navigate and understand.",
    project: "UI Development",
    date: "Sample testimonial",
  },
  {
    name: "Client Four",
    role: "Full Stack Project",
    initials: "C4",
    color: "bg-emerald-100 text-emerald-700",
    rating: 5,
    message:
      "The work brought the frontend and backend together into a more complete application. The development process emphasized functionality and maintainability.",
    project: "Full Stack Application",
    date: "Sample testimonial",
  },
  {
    name: "Client Five",
    role: "Website Project",
    initials: "C5",
    color: "bg-amber-100 text-amber-700",
    rating: 5,
    message:
      "The website was structured thoughtfully, and the responsive layout made the experience more comfortable across different screen sizes.",
    project: "Responsive Website",
    date: "Sample testimonial",
  },
  {
    name: "Client Six",
    role: "Development Collaborator",
    initials: "C6",
    color: "bg-sky-100 text-sky-700",
    rating: 5,
    message:
      "A collaborative approach, willingness to learn, and attention to technical details helped us work through the challenges of development.",
    project: "Application Development",
    date: "Sample testimonial",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-20  transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/60 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={16}
              className={
                index < testimonial.rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-300"
              }
            />
          ))}
        </div>

        <Quote
          size={30}
          className="text-purple-200 transition group-hover:text-purple-400"
        />
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
        “{testimonial.message}”
      </p>

      <div className="my-6 border-t border-slate-100" />

      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${testimonial.color}`}
        >
          {testimonial.initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-lg  px-3 py-1.5 text-xs font-medium text-purple-700">
          {testimonial.project}
        </span>

        <span className="text-[10px] text-slate-400">
          {testimonial.date}
        </span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3);

  return (
    <main className="min-h-screen  px-4 py-12 text-slate-900 sm:px-6 lg:px-10">
      {/* Hero */}
      <section id="testimonials" className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-slate-200 px-5 py-12 text-center shadow-sm sm:px-10 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-purple-600">
            <MessageSquareQuote size={32} />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
            <Sparkles size={15} />
            Feedback & Collaboration
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Kind Words,{" "}
            <span className="text-purple-500">Shared Experiences</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Feedback from people I have worked with helps me reflect,
            improve my development process, and build better digital
            experiences.
          </p>

          <a
            href="#testimonials-list"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-purple-700"
          >
            Explore Testimonials
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto grid max-w-7xl gap-4 py-8 sm:grid-cols-3">
        {[
          {
            icon: MessageSquareQuote,
            title: "Collaboration",
            description: "Learning and building together",
          },
          {
            icon: Code2,
            title: "Quality Work",
            description: "Focus on clean, useful solutions",
          },
          {
            icon: Heart,
            title: "Continuous Growth",
            description: "Listening, learning, and improving",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Icon size={23} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Testimonials grid */}
      <section
        id="testimonials-list"
        className="mx-auto max-w-7xl scroll-mt-8 py-10"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              What People Say
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Experiences, feedback, and lessons from working together.
            </p>
          </div>

          <span className="self-start rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 sm:self-auto">
            {testimonials.length} sample cards
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>

        <div className="mt-9 text-center">
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            className="inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-700 transition hover:border-purple-500 hover:bg-purple-50"
          >
            {showAll ? "Show Less" : "View All Testimonials"}
            <ArrowUpRight
              size={17}
              className={showAll ? "rotate-180" : ""}
            />
          </button>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-7xl pb-10 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-violet-600 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Let's Build Something Meaningful
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-purple-100">
            Have a project idea or want to collaborate? Get in touch
            and let's explore what we can create together.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-purple-700 transition hover:-translate-y-0.5 hover:bg-purple-50"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
