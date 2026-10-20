import {
GitBranch,
  User,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Heart,
  ArrowUp,
} from "lucide-react";

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/@SamuelFisha",
    icon: Send,
  },
  {
    name: "Email",
    href: "https://gmail.com/abaynewfisha@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/YOUR_PHONE_NUMBER",
    icon: MessageCircle,
  },
  {
    name: "Phone",
    href: "tel:+251927582387",
    icon: Phone,
  },
  {
    name: "GitHub",
    href: "https://github.com/abaynewfisha-bot",
    icon: GitBranch,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    icon: User,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10  text-gray-300">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full  blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className="text-2xl font-bold tracking-wide text-white"
            >
              Abaynew<span className="text-purple-400">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Full Stack Developer building modern, responsive, and
              user-friendly web applications.
            </p>
          </div>

          {/* Social links */}
          <div className="flex max-w-md flex-wrap justify-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                title={name}
                target={
                  ["Telegram", "WhatsApp", "GitHub", "LinkedIn"].includes(name)
                    ? "_blank"
                    : undefined
                }
                rel={
                  ["Telegram", "WhatsApp", "GitHub", "LinkedIn"].includes(name)
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/20 hover:text-purple-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} Abaynew Fisha. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with <Heart size={15} className="fill-pink-500 text-pink-500" /> 
            using React & Tailwind CSS
          </p>

          <a
            href="#top"
            className="flex items-center gap-2 transition hover:text-purple-400"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
