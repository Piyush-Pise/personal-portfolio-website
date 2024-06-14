import "../css/NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">PortFolio.</div>
      <div className="navbar-elements">
        <div className="home">Home</div>
        <div className="skills">Skills</div>
        <div className="work-ex">Work Experience</div>
        <div className="contact">Contact</div>
        <div className="resume">Resume</div>
      </div>
    </div>
  );
}

export default NavBar;
