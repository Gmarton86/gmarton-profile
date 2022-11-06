import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectTile from "./ProjectTile";

export interface IProjectItem {
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  images: Array<string>;
  data: string;
  customer: string;
  link: string;
  background_image: string;
}

const Projects = (props: any) => {
  const projects: Array<IProjectItem> = require("./../../data/projects.json");
  const navigate = useNavigate()

  return (
    <div className="projects-container" ref={props.projectsRef}>
      <div className="items-container">
        {projects.map((project) => (
          <ProjectTile
            project={project}
            key={project.id}
            setProject={props.setProject}
            handleClick={() => {navigate(`/projects/${project.id}`);}}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
