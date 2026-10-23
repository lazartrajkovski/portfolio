function Hero() {
    
    return <>
        <section id="home" className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 lg:py-24">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
                <span className="h-px w-8 bg-accent"></span>
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                OPEN TO WORK | Skopje, North Macedonia
            </p>
            <p className="mb-3 text-sm text-muted">
                <span className="text-accent">root@lazar</span>:<span className="text-cyan-400">~</span>$
                whoami
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
                I build web apps that actually ship<span className="text-accent">_</span></h1>
            <p>Software engineer with over 4 years of experience, specializing in backend development with C# and .NET, alongside frontend technologies like React, Angular, and TypeScript.
                Recently, I've also started exploring game development with Godot as a side project. I enjoy building clean, responsive interfaces and writing maintainable code that's easy for others to work with.
            </p>
        </section>
    </>
}

export default Hero