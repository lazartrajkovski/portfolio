import ProjectCard from './ProjectCard'
import quizlyImage from '../assets/images/quizly.jpg'

function Projects() {
  const projects = [
    {
      name: 'TimePlanner',
      description: 'Time tracking and task management application',
      stack: ['.NET', 'C#', 'PostgreSQL', 'Docker'],
      codeLink: 'https://github.com/lazartrajkovski/TimePlanner',
      liveLink: '',
      image: '',
    },
    {
      name: 'Quizly',
      description: 'Quiz application for online studying',
      stack: ['Strapi', 'Node.js', 'Angular', 'MongoDB'],
      codeLink: 'https://github.com/lazartrajkovski/Quizly',
      liveLink: '',
      image: quizlyImage,
    },
  ]
  return (
    <>
      <section
        id="projects"
        className="border-line mx-auto max-w-6xl border-t px-4 py-20"
      >
        <p className="text-muted mb-2 text-sm">
          <span className="text-accent">~/projects</span>: $ ls
        </p>
        <h2 className="mb-10 text-3xl font-extrabold text-neutral-100">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              stack={project.stack}
              codeLink={project.codeLink}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
