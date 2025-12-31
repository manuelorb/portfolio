import Home from "./sections/Home"
import Navbar from "./sections/Navbar"
import Tools from "./sections/Tools"
import Projects from "./sections/Projects"
import AboutMe from "./sections/AboutMe"
import Contact from "./sections/Contact"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <main>
        <div className="space"></div>
        <AboutMe />
        <Tools />
        <div className="space"></div>
        <Projects />
      </main>
      <div className="space"></div>
      <Contact />
    </>
  )
}

export default App;
