function NavBar() {

    const sections = ["./home", "./about", "./projects", "./contact"];

    return <>
        <nav className="px-8 py-4">
            <ul className="flex gap-6 justify-end">
            {sections.map((section) => (
                <li key={section}><a href="#" className="hover:text-[#ff1f3d]">{section}</a></li>
            ))}
            </ul>
        </nav>
    </>
}

export default NavBar

