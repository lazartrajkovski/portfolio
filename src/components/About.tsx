function About() {
  const details = [
    { label: 'based in', value: 'Skopje, North Macedonia' },
    { label: 'languages', value: 'English, Macedonian' },
    { label: 'interests', value: 'Running, NBA, Gaming, Music' },
    { label: 'exploring', value: 'Game Development, Linux, DevOps' },
    { label: 'status', value: 'open to work', highlight: true },
  ]
  return (
    <>
      <section
        id="about"
        className="border-line mx-auto max-w-6xl border-t px-4 py-20"
      >
        <p className="text-muted mb-2 text-sm">
          <span className="text-accent">~/about</span> $ cat about.txt
        </p>
        <h2 className="mb-10 text-3xl font-extrabold text-neutral-100">
          About
        </h2>
        <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="grid max-w-[60ch] gap-4 text-[15px] leading-relaxed text-neutral-400">
            <p>
              I'm Lazar, a software engineer with a genuine curiosity for
              computer science and a passion for building things people actually
              use. Most of my work is on the web, where I enjoy figuring out how
              things work, solving interesting problems, and building software
              that's clean, maintainable, and enjoyable to use.
            </p>{' '}
            <p>
              Outside of work, I've recently started experimenting with game
              development in Godot, along with exploring Linux, DevOps, and
              system administration. I enjoy tinkering with new technologies,
              working on personal projects, and learning more about how things
              work behind the scenes.
            </p>{' '}
            <p>
              {' '}
              I'm currently looking for my next opportunity, somewhere I can put
              my experience to good use, learn from others, and build meaningful
              software with a great team.
            </p>
          </div>
          <dl className="border-line grid content-start gap-2 justify-self-end border bg-[#111113] p-5 text-[13px]">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-3">
                <dt className="text-accent w-24">{detail.label}</dt>
                <dd className={detail.highlight ? 'text-green-500' : ''}>
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

export default About
