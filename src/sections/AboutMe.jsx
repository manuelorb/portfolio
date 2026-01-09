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
                    Hi! I’m Manuel Rodríguez Bravo, which is why you’ll see the M·R·B logo throughout my work. I’m originally from Venezuela and currently based in Madrid.
                    </p>

                    <p>
                    This portfolio is like a canvas where I display my work, track my progress, and remind myself of what I’m capable of.
                    </p>

                    <p>
                    I’ve always been passionate about building things and solving problems. That curiosity led me to study Civil Engineering at UCAB in Venezuela. At the same time, I had a strong interest in coding from a young age, but for years I thought it was “too hard” to pursue as a career. Eventually, I realized that wasn’t true. You only need consistency—skills grow with time and patience.
                    </p>

                    <p>
                    I chose the path of Full-Stack Engineering because I love understanding how everything fits together. I’m constantly learning new tools, especially in the world of web applications. I completed the Full-Stack Engineering path on Codecademy and later pursued a more formal education through the DAW (Desarrollo de Aplicaciones Web) program at IES Lope de Vega in Madrid. I plan to continue studying, building, and exploring new technologies, and I’m especially excited about creating AI-powered applications.
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