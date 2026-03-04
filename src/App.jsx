const skills = {
  core: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  frameworks: ['React.js', 'Next.js', 'Vue.js'],
  state: ['Redux', 'Zustand', 'Pinia', 'Vuex'],
  styling: ['Tailwind CSS', 'Sass', 'Bootstrap'],
  tooling: ['Vite', 'Webpack', 'Gulp', 'Git', 'Bitbucket'],
  backend: ['Node.js', 'MongoDB', 'REST APIs', 'Firebase'],
  platforms: ['WebOS', 'TizenOS', 'VidaaOS'],
}

const experiences = [
  {
    company: 'Mobiotics IT Solution',
    role: 'Frontend Developer',
    period: 'Apr 2023 – Aug 2025',
    points: [
      'Designed and implemented responsive user interfaces for OTT and media apps, improving engagement by ~25%.',
      'Optimized performance and rendering logic, reducing page load times by up to 30%.',
      'Integrated REST APIs, Firebase real-time data, and secure authentication using Google OAuth 2.0 and JWT.',
    ],
  },
  {
    company: 'Mobiotics IT Solution',
    role: 'Full Stack Developer Intern',
    period: '151 days',
    points: [
      'Built full‑stack features with JavaScript, React, and Node.js, focusing on usability and reliability.',
      'Collaborated with cross‑functional teams to deploy scalable features and reduce system errors by 30%.',
    ],
  },
]

const projects = [
  {
    name: 'Sainaplay',
    period: '61 days',
    description:
      'High‑performance OTT application focused on delivering a smooth streaming experience across devices.',
    highlights: [
      'Improved user engagement by 30% while significantly reducing buffering time.',
      'Implemented video shorts with like / dislike interactions.',
    ],
  },
  {
    name: 'Streamnxt',
    period: '153 days',
    description:
      'Smart TV OTT application with a focus on seamless navigation and program discovery.',
    highlights: [
      'Developed and maintained TV apps across multiple devices and smart TV platforms.',
      'Designed an Electronic Program Guide (EPG) using user preference‑based content handling and smooth page scrolling.',
    ],
  },
  {
    name: 'Orimedia',
    period: '6 months',
    description:
      'Music streaming application with a rich, responsive UI and personalized interactions.',
    highlights: [
      'Integrated RESTful APIs and Firebase to enable continuous playback and like / dislike features.',
      'Implemented secure Google login and JWT token‑based authorization.',
    ],
  },
  {
    name: 'Ultraplay, Ultragaane & Ultrajhakaas',
    period: '3 months',
    description:
      'Multilingual (Marathi & Hindi) OTT experience for regional web series and movies.',
    highlights: [
      'Delivered seamless streaming across diverse media formats and platforms.',
      'Implemented next‑movie and video scrubbing features for richer media navigation.',
    ],
  },
]

function SectionHeading({ label }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
      {label}
    </h2>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
              Frontend Developer
            </p>
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Komal Gadve
            </h1>
          </div>
          <nav className="hidden items-center gap-4 text-xs sm:flex sm:text-sm">
            <a href="#about" className="text-slate-300 hover:text-emerald-400">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-emerald-400">
              Skills
            </a>
            <a
              href="#experience"
              className="text-slate-300 hover:text-emerald-400"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-slate-300 hover:text-emerald-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-slate-900/40 px-4 py-1.5 text-emerald-400 hover:border-emerald-400 hover:bg-slate-900"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
        {/* Hero / About */}
        <section id="about" className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                WebOS • TizenOS • OTT
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Crafting performant OTT & Smart TV experiences.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                I&apos;m a frontend developer with around 3 years of experience
                building high‑performance applications for smart TV platforms
                like LG WebOS and Samsung TizenOS. I specialize in React,
                Vue.js and Next.js, creating responsive, accessible UIs backed
                by robust API integrations, real‑time data with Firebase, and
                secure authentication flows.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                I&apos;ve worked on OTT solutions for music and video streaming,
                focusing on performance, smooth playback, and delightful user
                journeys across devices.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:komal.gadve04@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/gadve-komal-b5693a1b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  View LinkedIn
                </a>
              </div>
            </div>

            <aside className="w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200 sm:w-72 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Quick Info
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Location</dt>
                  <dd className="text-slate-100">India</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Experience</dt>
                  <dd className="text-slate-100">~3 years</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Primary stack</dt>
                  <dd className="text-slate-100">React, Next.js, Vue.js</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Platforms</dt>
                  <dd className="text-slate-100">WebOS, TizenOS, web</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between gap-4">
            <SectionHeading label="Skills" />
            <p className="text-xs text-slate-400">
              Focused on clean, performant, maintainable frontend code.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Core & Frameworks
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {skills.core.concat(skills.frameworks).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                State, Styling & Tooling
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {skills.state
                  .concat(skills.styling)
                  .concat(skills.tooling)
                  .map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-800 px-3 py-1 text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Backend & Data
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {skills.backend.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Platforms
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {skills.platforms.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-12 sm:mb-16">
          <SectionHeading label="Experience" />
          <ol className="mt-5 space-y-5 border-l border-slate-800 pl-4">
            {experiences.map((exp) => (
              <li key={exp.company + exp.period} className="relative">
                <span className="absolute -left-2 top-1 h-3 w-3 rounded-full border border-emerald-400 bg-slate-950" />
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        {exp.role}
                      </p>
                      <p className="text-xs text-slate-400">{exp.company}</p>
                    </div>
                    <p className="text-xs text-slate-400">{exp.period}</p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between gap-4">
            <SectionHeading label="Selected Projects" />
            <p className="hidden text-xs text-slate-400 sm:block">
              OTT, music streaming, and multilingual media platforms.
            </p>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-400/70 hover:bg-slate-900"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    {project.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full bg-emerald-500/80 group-hover:bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Contact */}
        <section
          id="contact"
          className="flex flex-col gap-6 border-t border-slate-800 pt-8 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <SectionHeading label="Education" />
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200">
              <p className="font-medium">
                MCA, Computers — MGM&apos;S Jawaharlal Neharu Engineering
                College
              </p>
              <p className="mt-1 text-slate-400">Graduated 2022 • Grade 8.0/10</p>
            </div>
          </div>

          <div className="sm:text-right">
            <SectionHeading label="Let&apos;s connect" />
            <p className="mt-3 max-w-sm text-sm text-slate-300">
              Open to frontend and OTT‑focused roles where I can design and
              build performant user experiences using React, Next.js, Vue, and
              modern tooling.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 sm:justify-end">
              <a
                href="mailto:komal.gadve04@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                komal.gadve04@gmail.com
              </a>
              <a
                href="tel:+918766420006"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                +91 87664 20006
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80 bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500 sm:px-6">
          <p>© {new Date().getFullYear()} Komal Gadve</p>
          <p className="hidden sm:block">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
