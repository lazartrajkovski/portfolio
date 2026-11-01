import { useState, useEffect } from 'react'

function NavBar() {
  const sections = [
    { label: './home', id: 'home' },
    { label: './experience', id: 'experience' },
    { label: './projects', id: 'projects' },
    { label: './skills', id: 'skills' },
    { label: './about', id: 'about' },
    { label: './contact', id: 'contact' },
  ]

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      if (isAtBottom) {
        setActiveSection('contact')
        return
      }

      document
        .querySelectorAll<HTMLElement>('section[id]')
        .forEach((section) => {
          if (window.scrollY >= section.offsetTop - 175) {
            setActiveSection(section.id)
          }
        })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="border-line bg-surface/85 sticky top-0 z-50 border-b backdrop-blur">
        <nav className="mx-auto max-w-6xl px-4 py-4">
          <ul className="flex justify-end gap-6 text-[13px]">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={
                    section.id === activeSection
                      ? 'text-accent'
                      : 'hover:text-accent'
                  }
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
