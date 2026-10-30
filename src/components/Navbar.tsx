import { useState } from 'react'

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
