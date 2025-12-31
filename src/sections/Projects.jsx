import { useState, useRef } from "react";
import Card from "../components/Card";
import GithubButton from "../components/GithubButton";
import Button from "../components/Button";

/* template for adding  a project
    {
        id: 1,
        image: "",
        title: "",
        repository: "",
        view: "",
        desc: "",
        fullDesc: "",
        technologies: 
            [],
    },
*/

const projectList = [
    {
        id: 1,
        image: "/images/jammming.png",
        title: "Spotify Web API page",
        repository: "https://github.com/manuelorb/Jammming",
        view: "https://jammmingsand.netlify.app/",
        desc: "Jammming is a React web app that uses the Spotify API to let users search for songs, create custom playlists, and save those playlists to their Spotify accounts.",
        fullDesc: "Jammming is a React-based application that integrates with the Spotify API to let users search Spotify’s music library, create custom playlists, and save them directly to their Spotify account. The app also allows users to view their existing Spotify playlists, load them into the editor, update tracklists, and save changes back to Spotify. Designed using modular React components, Jammming focuses on smooth state management, clear UI interactions, and real-time updates through API requests.",
        technologies: 
            ["React (components, state management, hooks)",
            "Create React App (project setup & development environment)",
            "JavaScript (ES6+)",
            "HTML5 & CSS3",
            "Spotify Web API",
            "OAuth 2.0 (Spotify authentication)",
            "Fetch API (handling requests)",
            "Git & GitHub (version control)",
            "Netlify (deployment)"
        ],
    },
    {
        id: 2,
        image: "/images/redditClient.png",
        title: "Minimal Reddit Client",
        repository: "https://github.com/manuelorb/RedditClient",
        view: "https://redditsand.netlify.app/",
        desc: "A lightweight Reddit client built with React and Redux, featuring a clean minimalist interface. I built this project to practice React, Redux state management and API handling.",
        fullDesc: "Reddit Minimal is a streamlined Reddit viewer that allows users to browse popular subreddits, search across all of Reddit and view posts and comments. The app is fully browser-compatible and deployed online so users can access it anywhere. Users can explore Reddit content, switch subreddits, recover from error states, it works with the reddit API wich has troubles loading when the page is having too many requests.",
        technologies: 
            ["React (components, state management, hooks)",
            "Create React App (project setup & development environment)",
            "Redux Toolkit (state management)",
            "Axios (API requests)",
            "date-fns (time formatting)",
            "HTML5 & CSS3 (layout and design)",
            "Git & GitHub (version control)",
            "Netlify (deployment)",
        ],
    },
    {
        id: 3,
        image: "/images/TeresaPsicologia.png",
        title: "Teresa Delgado Psicologia",
        repository: "",
        view: "https://teresadelgadopsicologia.com/",
        desc: "I provide basic maintenance and minor updates for the website of a psychologist. The site is built with WordPress and hosted on Hostinger.",
        fullDesc: "I provide basic maintenance and minor updates for the website of a psychologist. The site is built using WordPress and is hosted on Hostinger. My work focuses on keeping the website functional and up to date.",
        technologies: 
            ["Wordpress (layout and design)",
            "Hostinger (deployment)",
        ],
    },
];

const Projects = () => {
    const [activeCard, setActiveCard] = useState(null);
    const cardRef = useRef(null);

    // if click on active hide section
    // else open it and close others
    // also scroll to hidden area
    const handleToggle = (id) => {

        const newActive = activeCard === id ? null : id;
        setActiveCard(newActive);

        if (newActive != null) {
            cardRef.current.scrollIntoView();
        }
    };

    return (
        <section id="projects">
            <h2 className="section-header autoShow">
                <img src="/icons/projects.svg" alt="projects icon" className="icon" />
                Projects
            </h2>
            <div className="card-grid">
                {projectList.map((project) => (
                    <div className="reveal">
                    <Card
                        key={project.id} 
                        handleClick={() => handleToggle(project.id)} 
                        {...project} 
                    />
                    </div>
                ))}
            </div>
            <div className="display-project" ref={cardRef} >
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        id={`project-${project.id}`}
                        className={`project-grid reveal slide-section ${activeCard === project.id ? "show" : "hide"}`}
                    >
                        <h3 className="project-title title">{project.title}</h3>
                        <div>
                            <p className="project-title title">Preview</p>
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-info">
                            <p className="project-title title">Info</p>
                            <p className="project-description">{project.fullDesc}</p>
                            <ul className="project-description">
                                <h3>Technologies</h3>
                                {project.technologies.map((item) =>(
                                    <li>{item}</li>
                                ))}
                            </ul>
                            <div className="project-links">
                                {project.repository && <GithubButton link={project.repository} text="Repository" />}
                                {project.view && <Button text="View page" handleClick={() => window.open(project.view, "_blank")} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;