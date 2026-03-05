"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Production Web Apps", value: "3+" },
  { label: "Business Websites", value: "4+" },
  { label: "Mobile Apps Delivered", value: "4+" },
  { label: "Years Experience", value: "2" },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase", "Cloud Functions", "AWS Amplify", "Strapi CMS"],
  },
  {
    title: "Integrations",
    skills: [
      "Razorpay",
      "ULIP/DigiLocker APIs",
      "Mapbox",
      "Google Maps Platform",
      "REST APIs",
      "Gemini API",
    ],
  },
  {
    title: "Engineering",
    skills: ["Zustand", "Redux", "Jest", "React Testing Library", "CI/CD", "Sentry"],
  },
  {
    title: "AI Workflow",
    skills: ["Prompt Engineering", "Claude", "Cursor", "Copilot", "Codex", "Lovable"],
  },
];

const highlights = [
  "Delivered multiple client MVPs from idea to production in startup timelines.",
  "Built secure payment and government verification flows for compliant data handling.",
  "Owned complete lifecycle: requirements, build, testing, release, monitoring, maintenance.",
  "Published a React Native logistics app with booking and live tracking workflows.",
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "NMAM Institute of Technology, Nitte",
    score: "CGPA: 8.44",
    year: "2022-2024",
  },
  {
    degree: "B.Sc. in Computer Science",
    institute: "Mahatma Gandhi Memorial College, Udupi",
    score: "Percentage: 60%",
    year: "2018-2021",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="grid-overlay" />
      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-between rounded-2xl border border-[#23314d] bg-[#091220]/70 px-4 py-3 backdrop-blur sm:px-6"
        >
          <div>
            <p className="kicker">Vivek V S</p>
            <h1 className="text-lg font-semibold sm:text-xl">Full Stack Developer</h1>
          </div>
          <a
            href="mailto:vivekbhat820@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[#2e4671] px-4 py-2 text-sm text-[#ccddff] transition hover:border-[#74c0ff] hover:text-white"
          >
            <Mail size={15} />
            Hire Me
          </a>
        </motion.header>

        <section className="mb-8 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <motion.article {...fadeIn} className="glass-card rounded-3xl p-6 sm:p-8">
            <span className="kicker">Professional Summary</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              Building scalable products with fast shipping and clean execution.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#c5d5f2] sm:text-base">
              Full Stack Developer with 2 years of startup experience delivering production web and mobile
              applications. Specialized in React.js, Next.js, React Native, Firebase, and AWS Amplify with
              strong capability in API-heavy integrations, secure payment flows, and AI-assisted engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="tel:+917338085820"
                className="inline-flex items-center gap-2 rounded-xl border border-[#2e4671] px-4 py-2 text-[#dce7ff] transition hover:border-[#74c0ff]"
              >
                <Phone size={15} />
                +91 7338085820
              </a>
              <a
                href="https://linkedin.com/in/vivekbhat820"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#2e4671] px-4 py-2 text-[#dce7ff] transition hover:border-[#74c0ff]"
              >
                <ArrowUpRight size={15} />
                LinkedIn
              </a>
            </div>
          </motion.article>

          <motion.aside {...fadeIn} className="glass-card rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-2 text-[#bcd5ff]">
              <Sparkles size={16} />
              <p className="kicker">Value Proposition</p>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-[#d7e4fb]">
              {highlights.map((item) => (
                <li key={item} className="rounded-xl border border-[#25344f] bg-[#0c1424]/70 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.aside>
        </section>

        <motion.section {...fadeIn} className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="glass-card rounded-2xl p-4 text-center sm:text-left">
              <p className="text-3xl font-bold text-[#8dd2ff]">{stat.value}</p>
              <p className="mt-1 text-sm text-[#cadeff]">{stat.label}</p>
            </article>
          ))}
        </motion.section>

        <motion.section {...fadeIn} className="mb-10 rounded-3xl glass-card p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Code2 size={18} className="text-[#8ed3ff]" />
            <h3 className="section-title">Technical Skills</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-[#273650] bg-[#0b1221]/85 p-4">
                <p className="mb-3 text-sm font-semibold text-[#d7e6ff]">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#304b72] bg-[#102036] px-3 py-1 text-xs text-[#cce0ff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="mb-10 rounded-3xl glass-card p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2">
            <Briefcase size={18} className="text-[#8ed3ff]" />
            <h3 className="section-title">Experience</h3>
          </div>

          <article className="rounded-2xl border border-[#2a3956] bg-[#091424]/70 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-xl font-semibold">Full Stack Developer</h4>
                <p className="mt-1 inline-flex items-center gap-2 text-sm text-[#b7caec]">
                  <Building2 size={15} />
                  CogniMuse
                </p>
              </div>
              <p className="rounded-full border border-[#324e75] px-3 py-1 text-xs text-[#d8e6fd]">
                Jan 2024 - Present
              </p>
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[#d3e0f8]">
              <li>Delivered 3 production web apps, 4 business sites, and 4 mobile applications for real clients.</li>
              <li>Built frontend-heavy products in React.js and Next.js to accelerate go-to-market timelines.</li>
              <li>Implemented serverless architecture with Firestore and Cloud Functions for real-time workflows.</li>
              <li>Integrated Razorpay and ULIP/DigiLocker APIs for secure payments and verification automation.</li>
              <li>Set up testing with Jest + React Testing Library and maintained CI/CD deployment pipelines.</li>
            </ul>
          </article>
        </motion.section>

        <motion.section {...fadeIn} className="mb-10 rounded-3xl glass-card p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2">
            <GraduationCap size={18} className="text-[#8ed3ff]" />
            <h3 className="section-title">Education</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.degree} className="rounded-2xl border border-[#2a3956] bg-[#0c1424]/80 p-5">
                <p className="text-base font-semibold">{item.degree}</p>
                <p className="mt-1 text-sm text-[#c9dcfb]">{item.institute}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-[#a8bfeb]">
                  <span>{item.score}</span>
                  <span>{item.year}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.footer
          {...fadeIn}
          className="glass-card flex flex-col items-start justify-between gap-4 rounded-3xl p-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="kicker">Open To Opportunities</p>
            <p className="mt-2 text-lg font-semibold">Software Developer / Full Stack Developer Roles</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#bfd2f4]">
              <MapPin size={15} />
              India | Remote / On-site / Hybrid
            </p>
          </div>
          <a
            href="mailto:vivekbhat820@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-[#8dd2ff] px-4 py-2 font-semibold text-[#071424] transition hover:bg-[#b0e0ff]"
          >
            <Mail size={16} />
            Contact Vivek
          </a>
        </motion.footer>
      </main>
    </div>
  );
}
