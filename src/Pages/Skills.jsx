import "../css/skills.css";
import SkillCard from "../Components/SkillCard";

const WebDevSkillInfo = [
  { name: "HTML", path: "icons/html.svg" },
  { name: "CSS", path: "/icons/css.svg" },
  { name: "JavaScript", path: "/icons/js.svg" },
  { name: "React", path: "icons/react.svg" },
  { name: "NodeJS", path: "icons/nodejs.svg" },
  { name: "Express", path: "/icons/express.svg" },
  { name: "MongoDB", path: "/icons/mongodb.svg" },
  // { name: "Mongoose", path: "/react-logo.svg" },
];

const DSASkillInfo = [
  { name: "C", path: "/icons/c.svg" },
  { name: "C++", path: "/icons/cpp.svg" },
  { name: "C#", path: "/icons/c-sharp.svg" },
  { name: "Python", path: "/icons/python.svg" },
  { name: "JavaScript", path: "/icons/js.svg" },
  { name: "GitHub", path: "/icons/github-icon-dark.svg" },
];

const GameDevSkillInfo = [
  { name: "C#", path: "/icons/c-sharp.svg" },
  { name: "Unity Game Engine", path: "/icons/unity.svg" },
  { name: "Blender", path: "/icons/blender.svg" },
  { name: "Animations", path: "/icons/animation.svg" },
  { name: "Particle Effects", path: "/icons/particle-effect.svg" },
];

const WebDevSkillsArray = WebDevSkillInfo.map((obj, index) => (
  <SkillCard key={index} logoPath={obj.path} name={obj.name} />
));

const DSASkillsArray = DSASkillInfo.map((obj, index) => (
  <SkillCard key={index} logoPath={obj.path} name={obj.name} />
));

const GameDevSkillsArray = GameDevSkillInfo.map((obj, index) => (
  <SkillCard key={index} logoPath={obj.path} name={obj.name} />
));

function Skills() {
  return (
    <div className="skills-section">
      <div className="skill-text">SKILLS</div>
      <div className="line"></div>
      <div className="Parent-skills-container">
        <div className="skills-container">
          {WebDevSkillsArray}
          {/* <div className="left-block">Web Development</div> */}
          {/* <div className="right-block">Right Block</div> */}
        </div>

        {/* <div className="skills-container">
          <div className="left-block">Data Structures And Algorithms</div>
          <div className="right-block">Right Block</div>
        </div> */}

        <div className="skills-container">
          {DSASkillsArray}
          {/* <div className="left-block">Game Development</div> */}
          {/* <div className="right-block">Right Block</div> */}
        </div>
        <div className="skills-container">
          {GameDevSkillsArray}
          {/* <div className="left-block">Game Development</div> */}
          {/* <div className="right-block">Right Block</div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
