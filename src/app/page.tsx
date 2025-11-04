export default function Page() {
  const contact = {
    name: "Bastian Paredes",
    linkedin: "linkedin.com/in/bastianparedes",
    phone: "(+56) 9 9342 6163",
    email: "bastian.p@outlook.com",
  }

  const summary =
    "8 years of experience leading teams and building high-impact web and mobile solutions that improve efficiency, reduce costs, and deliver exceptional user experiences."

  const experience = [
    {
      title: "Back End Developer (NOW)",
      company: "Sodimac",
      period: "2024-now",
      achievements: [
        "50% reduction in deployment times.",
        "90% reduction in automated testing times.",
        "2% increase in online sales by improving the website's look and feel.",
        "15% faster website loading times through performance optimization.",
        "Updated technologies and dependencies to their latest stable versions.",
      ],
    },
    {
      title: "Front End Developer",
      company: "Falabella Corporate Technology",
      period: "2022-2024",
      achievements: [
        "Saved USD 100 000 annually by replacing a third-party tool with an in-house solution.",
        "Accelerated project launches from months to weeks.",
        "Removed unnecessary pending projects that were not beneficial to the company.",
      ],
    },
    {
      title: "Mobile App Developer (React Native)",
      company: "Cerogrado",
      period: "2021-2023",
      achievements: [
        "Built from scratch their mobile application.",
        "Enabled users to easily purchase entry tickets and track customers to enhance the store experience.",
      ],
    },
    {
      title: "CEO",
      company: "Trilma",
      period: "2021-2022",
      achievements: [
        "My first startup, it was abandoned but the knowledge acquired was huge.",
        "It created tests for teachers using AI.",
      ],
    },
    {
      title: "Web developer and Programming Teacher",
      company: "Schools and Universities",
      period: "2017-2022",
      achievements: [
        "80% reduction in teacher workload by automating exam creation and grading.",
        "Implemented systems that allow parents to schedule appointments with teachers online.",
        "Improved loading times, look and feel, and accessibility for all users in existing websites.",
        "Taught programming classes to students as a professor.",
      ],
    },
  ]

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Node",
    "React",
    "Angular",
    "React Native",
    "Svelte",
    "Next",
    "Nest",
    "Express",
    "Fastify",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Google Cloud",
  ]

  const abilities = ["Web Development", "Front End", "Back End", "CI / CD", "Testing", "TDD", "BDD", "Scrum", "Kanban"]

  const languages = ["English", "Spanish", "French"]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-500/5 to-blue-600/10 dark:from-blue-500/10 dark:to-blue-600/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 top-40 h-64 w-64 rounded-full bg-coral-500 opacity-10 blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="text-center animate-fade-in-up">
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-blue-600 dark:text-blue-400 md:text-7xl">
              {contact.name}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl animate-fade-in-up [animation-delay:200ms]">
              {summary}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base animate-fade-in-up [animation-delay:400ms]">
              <a
                href={`https://${contact.linkedin}`}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 hover:bg-blue-700"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 rounded-lg bg-coral-500 px-6 py-3 font-medium text-white shadow-lg shadow-coral-500/30 transition-all hover:shadow-xl hover:shadow-coral-500/40 hover:scale-105 hover:bg-coral-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Email
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-transparent px-6 py-3 font-medium text-blue-600 dark:text-blue-400 transition-all hover:bg-blue-600 hover:text-white hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Phone
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400 md:text-5xl">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building impactful solutions across leading companies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg transition-all hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-blue-500 opacity-10 blur-3xl transition-all group-hover:opacity-20"></div>
              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                    <p className="text-base font-medium text-coral-600 dark:text-coral-400">{job.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-coral-600 dark:text-coral-400 md:text-5xl">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Technologies and methodologies I work with</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Technologies */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-lg animate-fade-in-up [animation-delay:200ms]">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-blue-600 p-3">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 transition-all hover:border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Abilities */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-lg animate-fade-in-up [animation-delay:400ms]">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-coral-500 p-3">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-coral-600 dark:text-coral-400">Abilities</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {abilities.map((ability, index) => (
                  <span
                    key={index}
                    className="rounded-lg border-2 border-coral-200 dark:border-coral-800 bg-coral-50 dark:bg-coral-950 px-3 py-2 text-sm font-medium text-coral-700 dark:text-coral-300 transition-all hover:border-coral-400 hover:bg-coral-100 dark:hover:bg-coral-900 hover:scale-105"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-lg animate-fade-in-up">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Education</h3>
            </div>
            <div>
              <h4 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">University Andres Bello</h4>
              <p className="text-base text-slate-600 dark:text-slate-400">Computer Science and Engineering</p>
            </div>
          </div>

          {/* Languages */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-lg animate-fade-in-up [animation-delay:200ms]">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-coral-500 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-coral-600 dark:text-coral-400">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-coral-500 px-4 py-2 text-base font-medium text-white shadow-lg hover:bg-coral-600 transition-colors"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 py-8 animate-fade-in">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2025 {contact.name}. Building the future, one line of code at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
