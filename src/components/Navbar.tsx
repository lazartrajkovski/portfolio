function NavBar() {
  const sections = [
    './home',
    './experience',
    './projects',
    './skills',
    './about',
    './contact',
  ]

  return (
    <>
      <header className="border-line bg-surface/85 sticky top-0 border-b backdrop-blur">
        <nav className="mx-auto max-w-6xl px-4 py-4">
          <ul className="flex justify-end gap-6 text-[13px]">
            {sections.map((section) => (
              <li key={section}>
                <a href="#" className="hover:text-accent">
                  {section}
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
