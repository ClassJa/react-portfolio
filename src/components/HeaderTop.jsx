function HeaderTop() {
    return ( 
        <div>
        <header className="header-words">
            <div className="header-section-text"> Julia A's Portfolio </div>
        <section className="nav-links">
            <a className="anchor-decor" href="/about"> <div className="nav-style">About</div> </a>
            <a className="anchor-decor" href="/projects"> <div className="nav-style">Portfolio</div> </a>
            <a className="anchor-decor" href="/contact"> <div className="nav-style">Contact</div> </a>
            <a className="anchor-decor" href="/resume"> <div className="nav-style"> Resume</div> </a>
        </section>
        </header>
        {/* <section className="nav-links">
        <div className="nav-style">About Me</div>
        <div className="nav-style">Portfolio</div>
        <div className="nav-style">Contact Me</div>
        <div className="nav-style"> Resume</div>
        </section> */}
        </div>
    )
}

export default HeaderTop