function NavBar() {

    const sections = ["./home", "./experience", "./projects", "./skills", "./about", "./contact"];

    return <>
        <header className="sticky top-0 border-b border-line bg-surface/85 backdrop-blur">
            <nav className="mx-auto px-32 py-4">
                <ul className="flex gap-6 justify-end text-sm">
                    {sections.map((section) => (
                        <li key={section}><a href="#" className="hover:text-accent">{section}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    </>
}

export default NavBar

