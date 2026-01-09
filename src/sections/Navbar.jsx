const Navbar = () => {
    return (
        <nav className="nav-container">
            <input className="checkbox" type="checkbox" name="sidebar-toggler" id="sidebar-toggler-input" />
            <label htmlFor="sidebar-toggler-input" className="hamburger-lines">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </label>
            <a href="#home"><h2 className="logo">M·R·B</h2></a>
            <div className="menu-items">
                <li className="HOME"><a href="#home">HOME<div className="underline"></div></a></li>
                <li><a href="#about-me">ABOUT ME<div className="underline"></div></a></li>
                <li><a href="#tools">TOOLS<div className="underline"></div></a></li>
                <li><a href="#projects">PROJECTS<div className="underline"></div></a></li>
                <li><a href="#contact">CONTACT<div className="underline"></div></a></li>
            </div>
        </nav>
    )
}

export default Navbar;