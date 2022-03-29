// src/components/Home/Home.js

// Homepage
import About from "./About.js";
import Education from "./Education.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Jobs from "./Jobs.js";
import Extracurriculars from "./Extracurriculars.js";
import Coursework from "./Coursework.js";
import Contact from "./Contact.js";

export default function Home() {
    return (
        <main className="text-gray-300 bg-gray-900">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Jobs />
            <Extracurriculars />
            <Coursework />
            <Contact />
        </main>
    );
}