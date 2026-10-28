function Contact() {
  const links = [
    {
      label: 'Email',
      href: 'mailto:lazar.trajkovski@hotmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lazar-trajkovski/',
    },
  ]
  return (
    <>
      <section
        id="contact"
        className="border-line mx-auto max-w-6xl border-t px-4 py-20"
      >
        <p className="text-muted mb-2 text-sm">
          <span className="text-accent">~/contact</span> $ ./say-hello.sh
        </p>
        <h2 className="max-w-[18ch] text-4xl leading-tight font-extrabold text-neutral-100 sm:text-5xl">
          Let's build something
          <span className="text-accent">_</span>
        </h2>
        <p className="mt-5 max-w-[55ch] text-[15px] text-neutral-400">
          Have a role, a project or just a question? My inbox is open, and I
          usually answer within a day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="border-line hover:border-accent hover:text-accent border px-4 py-2.5 text-neutral-200 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default Contact
