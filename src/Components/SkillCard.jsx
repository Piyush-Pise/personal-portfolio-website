import "../css/SkillCard.css"

function SkillCard(prop) {
  const backgroundStyle = {
    backgroundImage: `url("${prop.logoPath}")`,
  };
  return (
    <div className="skill-card">
      <div className="skill-logo" style={backgroundStyle}></div>
      <div className="skill-name">{prop.name}</div>
    </div>
  );
}

export default SkillCard;
