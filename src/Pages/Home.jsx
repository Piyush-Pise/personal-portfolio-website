import "../css/home.css";

function home() {
  return (
    <div id="Home" className="home-section">
      <div className="information">
        <div className="online-status">Online.</div>
        <div className="name-moto-text-section">
          Hey, I'm <span className="name">Piyush</span>
          <div className="working-title">Fullstack Developer.</div>
        </div>
        <div className="links-container">
          <a className="link-container" href="https://www.linkedin.com/in/piyush-pise-b70539218/" target="_blank">
            <div className="linkedIn-icon"></div>
            LinkedIn
          </a>
          <a className="link-container" href="https://github.com/Piyush-Pise" target="_blank">
            <div className="github-icon"></div>
            Github
          </a>
          <a className="link-container" href="mailto:{Piyushpise0333@gmail.com}" target="_blank">
            <div className="mail-icon"></div>
            Mail
          </a>
        </div>
        <div className="about-me-paragraph">
          Hi, I am Piyush Pise, Full-stack developer from India, with 1
          year of expertise in React, Express, NodeJS, and MongoDB. Ready to create
          innovative web solutions!
        </div>
      </div>
      <div className="visuals">
        <div className="photo">
        <div className="top-rectangles">
          <div className="top-rectangles-1">
            <div className="rec-1"></div>
            <div className="rec-2"></div>
          </div>
          <div className="top-rectangles-2"></div>
          <div className="top-rectangles-3"></div>
        </div>
        <div className="bottom-rectangles">
        <div className="bottom-rectangles-1"></div>
        <div className="bottom-rectangles-2"></div>
        <div className="bottom-rectangles-3"></div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default home;
