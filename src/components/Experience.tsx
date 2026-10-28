function Experience() {
  const companies = [
    {
      Name: 'RLDatix',
      role: 'Software Engineer',
      joinDate: '2022.05',
      endDate: '2026.08',
      stack: [
        '.NET',
        'C#',
        'PHP',
        'JavaScript',
        'React',
        'TypeScript',
        'SQL Server',
        'MySQL',
      ],
      highlights: [
        'Built NHS-compliant incident reporting across a microservice healthcare risk platform, converting Kafka Protobuf messages into FHIR R3/R4',
        'Refactored the PSIMS codebase into modular class libraries, improving maintainability and separation of concerns',
        'Traced missing report data through PySpark/MySQL ETL jobs using Datadog logs, cross-checking against Yellowfin BI dashboards',
        'Built features and fixed bugs in the React frontend of a microservices-based HR platform, migrating it from JavaScript to TypeScript with Jest coverage',
        'Fixed bugs in a legacy ASP.NET Web Forms monolith',
      ],
    },
    {
      Name: 'Semos Cloud',
      role: 'Full Stack Developer Intern',
      joinDate: '2022.03',
      endDate: '2022.04',
      stack: ['Node.js', 'JavaScript', 'Angular', 'TypeScript', 'MySQL'],
      highlights: [
        'Built features for an internal employee rewards platform using Angular and Node.js',
        'Handled data persistence and queries against a relational database',
      ],
    },
  ]

  return (
    <>
      <section
        id="experience"
        className="border-line mx-auto max-w-6xl border-t px-4 py-20"
      >
        <p className="text-muted mb-2 text-sm">
          <span className="text-accent">~/experience</span> $ git log --oneline
        </p>
        <h2 className="mb-10 text-3xl font-extrabold text-neutral-100">
          Experience
        </h2>
        <ul className="grid gap-10">
          {companies.map((company) => (
            <li
              key={company.Name}
              className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <p className="text-muted text-sm tabular-nums">
                {company.joinDate} <span className="text-accent">-</span>{' '}
                {company.endDate}
              </p>
              <div>
                <h3 className="font-bold text-neutral-100">
                  {company.role}{' '}
                  <span className="text-muted font-normal">
                    @ {company.Name}
                  </span>
                </h3>
                <ul className="mt-3 grid gap-1.5 text-sm text-neutral-400">
                  {company.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="text-accent">-</span> {highlight}
                    </li>
                  ))}
                </ul>
                <ul className="text-muted mt-3 flex flex-wrap gap-2 text-[11px]">
                  {company.stack.map((companyStack) => (
                    <li key={companyStack}>
                      <span className="border-line border px-2 py-0.5">
                        {companyStack}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Experience
