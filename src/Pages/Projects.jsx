import { useState } from "react";

import "../css/projects.css";
import ProjectCard from "../Components/ProjectCard";

const projectsData = [
  {
    name: "DSA Search Engine",
    path: "/dsa-img.png",
    techArray:[ "HTML", "CSS", "JavaScript","NodeJS", "Express", "BautifulSoup"],
    url: "https://github.com/Piyush-Pise/Search-Engine-On-DSA-Questions",
    type: 1,
  },
  {
    name: "Interactive card detail form",
    path: "/interctive-card-details-form.png",
    techArray:["React", "HTML", "CSS"],
    url: "https://github.com/Piyush-Pise/Interactive-card-details-form-react-vite",
    type: 1,
  },
  {
    name: "Full Stack Todo App",
    path: "/todo-app-react.png",
    techArray:["MongoDB", "Express", "React", "NodeJS"],
    url: "https://github.com/Piyush-Pise/Full-Stack-Todo-Web-Application",
    type: 1,
  },
  {
    name: "Multi Step React Form",
    path: "/Multi-step-react-from.png",
    techArray:["React", "HTML", "CSS"],
    url: "https://github.com/Piyush-Pise/Multi-step-form-react-vite",
    type: 1,
  },
  {
    name: "Data Compression Decompression App",
    path: "/text-file-zipper.png",
    techArray: ["C++", "Huffman Encoding Algorithm"],
    url: "https://github.com/Piyush-Pise/Huffman-Coding-Algorithm-based-Data-Compression-Decompression-CPP-Project",
    type: 2,
  },
  {
    name: "Carrom Game (Unity Game Engine)",
    path: "/carrom.png",
    techArray:["C#","Unity Game Engine"],
    url: "https://github.com/Piyush-Pise/Carrom-Game-Development",
    type: 3,
  },
  {
    name: "NFT Preview Card Component",
    path: "/NFT.png",
    techArray:["HTML", "CSS"],
    url: "https://nft-card-component-liard.vercel.app/",
    type: 1,
  },
  {
    name: "Result Summary Card",
    path: "/result-summary-card.png",
    techArray:["HTML", "CSS"],
    url: "https://result-summary-card-phi.vercel.app/",
    type: 1,
  },
  {
    name: "Cyber Sentinel (Unity Game Engine)",
    path: "/cyber.png",
    techArray:["C#", "Unity Game Engine"],
    url: "https://github.com/Piyush-Pise/Cyber-Sentinel",
    type: 3,
  },
  {
    name: "Floating Island (Unity Game Engine)",
    path: "/project-icons/floating-island.jpg",
    techArray:["C#","Unity Game Engine"],
    url: "https://github.com/Piyush-Pise/Floating-Island",
    type: 3,
  },
  {
    name: "Open UI",
    path: "/project-icons/openui.png",
    techArray:[ "MongoDB", "Express", "React","NodeJS", "React Router"],
    url: "#",
    type: 1,
  },
];

function Project() {
  const [currentSortIndex, SetCurrentSortIndex] = useState(0);

  function OnclickSortIndex(index) {
    SetCurrentSortIndex(index);
  }

  const projectCards = projectsData
    .filter((project) => {
      if (currentSortIndex === 0) {
        return true;
      }
      return project.type === currentSortIndex;
    })
    .map((obj, index) => (
      <ProjectCard
        key={index}
        name={obj.name}
        path={obj.path}
        url={obj.url}
        description={obj.description}
        TechUsed={obj.techArray}
      />
    ));

  return (
    <div className="project-section">
      <div className="project-section-name">PROJECTS</div>
      <div className="line"></div>
      <div className="project-sort-buttons">
        <div
          onClick={() => {
            OnclickSortIndex(0);
          }}
          className={
            "project-sort-button" + (currentSortIndex == 0 ? " selected" : "")
          }
        >
          All
        </div>
        <div
          onClick={() => {
            OnclickSortIndex(1);
          }}
          className={
            "project-sort-button" + (currentSortIndex == 1 ? " selected" : "")
          }
        >
          Web Development
        </div>
        <div
          onClick={() => {
            OnclickSortIndex(2);
          }}
          className={
            "project-sort-button" + (currentSortIndex == 2 ? " selected" : "")
          }
        >
          Data Structures And Algorithms
        </div>
        <div
          onClick={() => {
            OnclickSortIndex(3);
          }}
          className={
            "project-sort-button" + (currentSortIndex == 3 ? " selected" : "")
          }
        >
          Game Development
        </div>
      </div>
      <div className="projects-container">{projectCards}</div>
    </div>
  );
}

export default Project;
