
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  ArrowUpRight,
  GitBranch,
  CheckCircle2,
  AlertCircle,
  Building2,
  User,
} from "lucide-react";

const contactDetails = {
  email: "abaynewfisha@gmail.com",
  phone: "+251 9 27 58 23 87",
  whatsapp: "251927582387",
  location: "Injibara, Amhara, Ethiopia",
  availability: "Open to opportunities",
  mapQuery: "Injibara, Amhara, Ethiopia",
  github: "https://github.com/abaynewfisha-bot",
  linkedin: "https://www.linkedin.com/",
};

const initialForm = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email is not configured yet. Please set up your EmailJS environment variables.",
      });
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company || "Not provided",
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey }
      );

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully! Thank you for contacting me.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("Email delivery failed:", error);

      setStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again or contact me directly by email.",
      });
    } finally {
      setSending(false);
    }
  }

  const details = [
    {
      icon: Mail,
      title: "Email Me",
      value: contactDetails.email,
      href: `email:${contactDetails.email}`,
      description: "For projects and professional inquiries",
    },
    {
      icon: Phone,
      title: "Call Me",
      value: contactDetails.phone,
      href: `tel:${contactDetails.phone}`,
      description: "Let's discuss your project",
    },
    {
      icon: MapPin,
      title: "My Location",
      value: contactDetails.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        contactDetails.mapQuery
      )}`,
      description: "Available for remote collaboration",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-12 text-slate-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
            <MessageCircle size={15} />
            Get in touch
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's Start a{" "}
            <span className="text-purple-600">Conversation</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Have a project idea, a job opportunity, or a question?
            Contact me or your company and let's discuss how we can
            work together.
          </p>
        </header>

        {/* Contact details */}
        <section className="mb-8 grid gap-4 md:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "My Location" ? "_blank" : undefined}
                rel={
                  item.title === "My Location"
                    ? "noreferrer"
                    : undefined
                }
                className="group flex gap-4 rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <div className="min-w-0">
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="mt-1 break-words text-sm font-medium text-purple-700">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </section>

        {/* Main contact area */}
        <section id="contact" className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Contact form */}
          <div className="rounded-3xl border border-slate-200 p-5 shadow-sm sm:p-8">
            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Send size={23} />
              </div>

              <h2 className="text-2xl font-bold">
                Send Me a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill out the form below. Your message will be sent
                to my configured email inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-slate-700"
                >
                  Company or Organization
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder=" company name (optional)"
                  autoComplete="organization"
                  maxLength={150}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-slate-700"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  maxLength={200}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, question, or opportunity..."
                  rows={6}
                  maxLength={5000}
                  required
                  className={`${inputClass} resize-y`}
                />
                <p className="mt-2 text-right text-xs text-slate-400">
                  {form.message.length}/5000
                </p>
              </div>

              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl p-4 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                  ) : (
                    <AlertCircle className="mt-0.5 shrink-0" size={20} />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {sending ? "Sending Message..." : "Send Message"}
                {!sending && <Send size={18} />}
              </button>
            
            </form>
          </div>

          {/* Contact information and map */}
          <aside className="space-y-6">
            <div className="rounded-3xl text-white sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-purple-300">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    Let's Work Together
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Software Development & Collaboration
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-3">
                <Building2 className="mt-1 shrink-0 text-purple-300" size={19} />
                <div>
                  <p className="font-semibold">Clients & Companies</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Available to discuss website development, full-stack
                    applications, and software projects.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Clock className="mt-1 shrink-0 text-purple-300" size={19} />
                <div>
                  <p className="font-semibold">Availability</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {contactDetails.availability}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <a
                  href={`https://wa.me/${contactDetails.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={`https://email/${contactDetails.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail size={17} />
                  Email Me
                </a>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="text-slate-400 transition hover:text-white"
                >
                  <GitBranch size={21} />
                </a>

                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-slate-400 transition hover:text-white"
                >
                  <User size={21} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <MapPin size={21} />
                </div>
                <div>
                  <h2 className="font-bold">Find My Location</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    {contactDetails.location}
                  </p>
                </div>
              </div>

              <iframe
                title="Map showing Injibara, Amhara, Ethiopia"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  contactDetails.mapQuery
                )}&output=embed`}
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contactDetails.mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                Open in Google Maps
                <ArrowUpRight size={17} />
              </a>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
