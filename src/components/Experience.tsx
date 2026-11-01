import type { ExperienceItem } from '../models/ExperienceItem'

const companies = [
  {
    name: 'RLDatix',
    role: 'Software Engineer',
    workMode: 'Hybrid',
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
      'Developed features and resolved bugs in PHP and AngularJS services, including form enhancements and changes supporting LFPSE reporting requirements',
      'Extended a .NET-based NHS incident reporting service with FHIR R4 support, mapping Kafka Protobuf messages to the new FHIR format while maintaining compatibility with FHIR R3',
      'Refactored the PSIMS codebase into modular class libraries, improving maintainability and separation of concerns',
      'Extended LFPSE reporting capabilities in the DES service by updating database schemas, Entity Framework models, and SQL queries to support additional reporting fields',
      'Traced missing report data through PySpark/MySQL ETL jobs using Datadog logs, cross-checking against Yellowfin BI dashboards',
      'Built features and fixed bugs in the React frontend of a microservices-based HR platform, migrating it from JavaScript to TypeScript with Jest coverage',
      'Fixed bugs in a legacy ASP.NET Web Forms monolith',
    ],
  },
  {
    name: 'Semos Cloud',
    role: 'Full Stack Developer Intern',
    workMode: 'Remote',
    joinDate: '2022.03',
    endDate: '2022.04',
    stack: ['Node.js', 'JavaScript', 'Angular', 'TypeScript', 'MySQL'],
    highlights: [
      'Built features for an internal employee rewards platform using Angular and Node.js',
      'Handled data persistence and queries against a relational database',
    ],
  },
] as const satisfies readonly ExperienceItem[]

function Experience() {
  return (
    <>
      <section
        id="experience"
        className="border-line mx-auto max-w-6xl border-t px-4 pt-10 pb-12"
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
              key={company.name}
              className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <p className="text-muted flex gap-x-1 text-sm tabular-nums">
                <span>{company.joinDate}</span>
                <span className="text-accent">-</span>
                <span>{company.endDate}</span>
              </p>
              <div>
                <h3 className="flex flex-wrap items-baseline gap-x-1.5 font-bold text-neutral-100">
                  <span>{company.role}</span>
                  <span className="text-muted font-normal">
                    @ {company.name} · {company.workMode}
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
