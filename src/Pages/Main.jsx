import NavBar from "../Components/NavBar.jsx";

import Home from "./Home.jsx";
import Project from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";

export default function Main()
{
    return (
        <>
          <NavBar />
          <Home />
          <Skills />
          <Project />
          <Contact />
        </>
      );
}