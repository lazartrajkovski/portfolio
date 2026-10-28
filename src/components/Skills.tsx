function Skills() {
  const skillGroups = [
    {
      label: '# languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'PHP', 'SQL'],
    },
    {
      label: '# frameworks & librarires',
      skills: ['.NET', 'React', 'Angular', 'Tailwind'],
    },
    { label: '# databases', skills: ['SQL Server', 'MySQL', 'PostgreSQL'] },
    {
      label: '# tools & platforms',
      skills: ['Git', 'Datadog', 'Docker', 'Linux'],
    },
  ]

  return (
    <>
      <section
        id="skills"
        className="border-line mx-auto max-w-6xl border-t px-4 py-20"
      >
        <p className="text-muted mb-2 text-sm">
          <span className="text-accent">~/skills</span>: $ cat stack.txt
        </p>
        <h2 className="mb-10 text-3xl font-extrabold text-neutral-100">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-muted mb-3 text-xs tracking-[0.2em] uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2 text-sm">
                {group.skills.map((skill) => (
                  <li key={skill} className="border-line border px-3 py-1">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
