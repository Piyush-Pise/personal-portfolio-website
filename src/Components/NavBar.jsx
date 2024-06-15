import "../css/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">PortFolio.</div>
      <div className="navbar-elements">
        <a href="#Home">
          <div className="home">Home</div>{" "}
        </a>
        <a href="#Skills">
          <div className="skills">Skills</div>{" "}
        </a>
        <a href="#Projects">
          <div className="work-ex">Work Experience</div>
        </a>
        {/* <a href="#">
          <div className="contact">Contact</div>{" "}
        </a> */}
        <a href="https://drive.google.com/file/d/1qjWmqdQr3sUXtyR_qDMPGeWE80cIlY1_/view?usp=sharing">
          <div className="resume">Resume</div>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
