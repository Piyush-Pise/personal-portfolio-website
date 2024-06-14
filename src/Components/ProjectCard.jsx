import { Link } from "react-router-dom";
import "../css/ProjectCard.css";

function TechUsed(prop) {
  return <div className="tech-used-container">{prop.name}</div>;
}

function ProjectCard(prop) {
  const techUsed = prop.TechUsed.map((tech, index) => <TechUsed key={index} name={tech} />);

  const Style = {
    backgroundImage: `url(${prop.path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="project-card-container">
      {/* <img className="project-card-image" style={Style} src={prop.path}/> */}
      <div className="project-card-image" style={Style}></div>
      <div className="project-card-info-section">
        <div className="title-container">
          <div className="project-title roboto-bold">{prop.name}</div>
          <Link to={`/projects/${prop.name}`}>
            <span className="material-symbols-outlined open_in_new">open_in_new</span>
          </Link>
        </div>
        <div className="project-description">{techUsed}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
