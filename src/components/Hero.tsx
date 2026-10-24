import Monitor from './Monitor'

function Hero() {
  const actions = [
    { label: './resume', href: './LazarTrajkovski_CV.pdf' },
    { label: '~/projects', href: '#projects' },
    { label: 'mail lazar', href: 'mailto:lazar.trajkovski@hotmail.com' },
  ]

  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.25fr_1fr] lg:py-24"
      >
        <div className="flex flex-col items-start gap-6">
          <p className="text-muted flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase">
            <span className="bg-accent h-px w-8"></span>
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            OPEN TO WORK | Skopje, North Macedonia
          </p>
          <p className="text-muted text-sm">
            <span className="text-accent">root@lazar</span>:
            <span className="text-cyan-400">~</span>
            $whoami
          </p>
          <h1 className="-mt-3 text-4xl leading-[1.05] font-extrabold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
            I build web apps that actually ship
            <span className="text-accent">_</span>
          </h1>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-neutral-400">
            Software engineer with over 4 years of experience, specializing in
            backend development with C# and .NET, alongside frontend
            technologies like React, Angular, and TypeScript. I enjoy building
            clean, responsive interfaces and writing maintainable code that's
            easy for others to work with.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                className="border-line hover:border-accent hover:text-accent border px-4 py-2.5 text-neutral-200 transition"
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
        <Monitor />
      </section>
    </>
  )
}

export default Hero
