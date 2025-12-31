import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const logoIconList = [
    {text: "html", imgPath: "/tools/html5.svg"},
    {text: "css", imgPath: "/tools/css3.svg"},
    {text: "javascript", imgPath: "/tools/javascript.svg"},
    {text: "java", imgPath: "/tools/java.svg"},
    {text: "node.js", imgPath: "/tools/nodejs.svg"},
    {text: "npm", imgPath: "/tools/npm.svg"},
    {text: "react", imgPath: "/tools/react.svg"},
    {text: "vite", imgPath: "/tools/vite.svg"},
    {text: "redux", imgPath: "/tools/redux.svg"},
    {text: "mySQL", imgPath: "/tools/mysql.svg"},
    {text: "postgreSQL", imgPath: "/tools/postgresql.svg"},
    {text: "git", imgPath: "/tools/git.svg"},
    {text: "github", imgPath: "/tools/github.svg"},
    {text: "git bash", imgPath: "/tools/bash.svg"},
    {text: "powershell", imgPath: "/tools/powershell.svg"},
    {text: "cmd", imgPath: "/tools/cmd.svg"},
    {text: "Figma", imgPath: "/tools/figma.svg"},
    {text: "Hostinger", imgPath: "/tools/hostinger.svg"},
    {text: "Netlify", imgPath: "/tools/netlify.svg"},
    {text: "Wordpress", imgPath: "/tools/wordpress.svg"},
    {text: "Visual Studio", imgPath: "/tools/visualstudio.svg"},
    {text:"Postman", imgPath: "/tools/postman.svg"},
    {text:"n8n", imgPath: "/tools/n8n.svg"},
];

const Tools = () => {
    const [showSection, setShowSection] = useState(false);

    return (
        <section id="tools" className="tools-container">
            <h2 className="section-header autoShow">
                <img src="/tools/tools.svg" alt="icon" className="icon" />
                Tools & Technologies
                <ToggleSwitch 
                    checked={showSection}
                    onChange={() => setShowSection((prev) => !prev)} 
                />
            </h2>
            <div className={`slide-section ${showSection ? "show" : "hide"}`}>
                <h2>View All Tools & Technologies</h2>
                <div className="tools-list">
                    {logoIconList.map((logo) =>(
                        <div className="tools-list-item" key={logo.text}>
                            <img src={logo.imgPath} alt="icon" className="tool-carousel-item icon" />
                            <p>{logo.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tools-carousel">
                <div className="tools-carousel-group">
                    {logoIconList.map((logo) => (
                        <img src={logo.imgPath} alt={logo.text} key={`${logo.text} - 1`} className="tool-carousel-item icon" />
                    ))}
                </div>
                <div className="tools-carousel-group">
                    {logoIconList.map((logo) => (
                        <img src={logo.imgPath} alt={logo.text} key={`${logo.text} - 2`} className="tool-carousel-item icon" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tools;