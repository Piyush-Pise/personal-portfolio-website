import { Link } from "react-router-dom";
import "../css/ProjectCard.css";
import { memo, useMemo } from "react";

const TechUsed = memo(function TechUsed(prop) {
  return <div className="tech-used-container">{prop.name}</div>;
});

const ProjectCard = memo(function ProjectCard(prop) {
  const techUsed = useMemo(() => {
    return prop.TechUsed.map((tech, index) => (
      <TechUsed key={index} name={tech} />
    ));
  }, [prop.TechUsed]);

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
          {/* <Link to={`/projects/${prop.name}`}>
          <a href="">
            <span className="material-symbols-outlined open_in_new">open_in_new</span>
          </Link>
          </a> */}
          <a href={prop.url} target="_blank">
            <span className="material-symbols-outlined open_in_new">
              open_in_new
            </span>
          </a>
        </div>
        <div className="project-description">{techUsed}</div>
      </div>
    </div>
  );
});

export default ProjectCard;
