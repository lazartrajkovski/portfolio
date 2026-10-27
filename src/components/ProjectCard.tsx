type ProjectCardProps = {
  name: string
  description: string
  stack: string[]
  codeLink: string
  image?: string
}

function ProjectCard({
  name,
  description,
  stack,
  codeLink,
  image,
}: ProjectCardProps) {
  return (
    <article className="group border-line hover:border-accent flex flex-col border bg-[#111113] transition">
      <div className="border-line text-muted grid aspect-video place-items-center border-b p-4 text-sm">
        {image ? <img src={image} alt={name} /> : '[ In Progress ]'}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="group-hover:text-accent font-bold text-neutral-100">
          {name}/
        </h3>
        <p className="text-sm text-neutral-400">{description}</p>
        <ul className="text-muted flex flex-wrap gap-2 text-[11px]">
          {stack.map((tech) => (
            <li key={tech} className="border-line border px-2 py-0.5">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-2 text-sm">
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent"
          >
            [ code ]
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
