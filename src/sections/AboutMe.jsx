const AboutMe = () => {
    return (
        <section id="about-me">
            <h2 className="section-header autoShow">
                <img src="/icons/aboutMe.svg" alt="info icon" className="icon" />
                About Me
            </h2>
            <div className="aboutme-grid">
                <div className="aboutme-description autoShow">
                    <h3>Languages</h3>
                    <ul>
                        <li>Spanish: Native</li>
                        <li>English: C1 (advanced)</li>
                    </ul>
                </div>
                <div className="aboutme-description autoShow">
                     <h3>Studies</h3>
                     <ul>
                        <li>Civil Engineering: Universidad Catolica Andres Bello (UCAB)</li>
                        <li>Full-Stack Engineer: Codecademy</li>
                        <li>Web Application Development (DAW): IES Lope de Vega</li>
                     </ul>
                </div>
                <img src="/images/desk.jpg" alt="desk" className="aboutme-image autoShow" />
                <div className="aboutme-description autoShow">
                    <h3>About me</h3>
                    <p>
                        Hi! I’m Manuel Rodríguez Bravo, which is why you’ll see the M·R·B logo throughout my work. I’m originally from  Venezuela, and I’m currently based in Madrid.
                    </p>
                    <p>
                        This portfolio is like a canvas where I can display my work, track my progress, and remind myself of what I’m capable of.
                    </p>
                    <p>
                        I’ve always loved building things. That curiosity led me to study Civil Engineering at UCAB in Venezuela. At the same time, I had a deep interest in coding from a young age, but for years I thought it was “too hard” to pursue as a career. Eventually I realized that wasn’t true. I’ve always had the mindset to tackle complex challenges. I enjoy problem-solving, and I believe the only real failure is giving up. Skills grow with time, patience, and consistency.
                    </p>
                    <p>
                        I chose the path of Full-Stack Engineering because I love understanding how everything fits together. My interests revolve around learning new tools. Especially in the world of web applications. I completed the Full-Stack Engineering path on Codecademy and later pursued a more formal education through the DAW (Desarrollo de Aplicaciones Web) program at IES Lope de Vega in Madrid and i plan to continue studying, building, and exploring new technologies. Right now, I’m especially excited about creating AI-powered applications.
                    </p>
                    <p>
                        Throughout my life, I’ve worked many different jobs, and the most valuable skill I’ve developed is this: I always try to do my work as well as I possibly can, no matter the circumstances. I’ve learned that this mindset is one of the things that truly sets me apart.
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default AboutMe;