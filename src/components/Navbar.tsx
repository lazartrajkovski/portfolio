import { useState, useEffect } from 'react'

const sections = [
  { label: './home', id: 'home' },
  { label: './experience', id: 'experience' },
  { label: './projects', id: 'projects' },
  { label: './skills', id: 'skills' },
  { label: './about', id: 'about' },
  { label: './contact', id: 'contact' },
]

function NavBar() {
  const [activeSection, setActiveSection] = useState('home')
  const [atPageBottom, setAtPageBottom] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      setAtPageBottom(isAtPageBottom)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const highlightedSection = atPageBottom ? 'contact' : activeSection

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
                    section.id === highlightedSection
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
