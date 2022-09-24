import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const projects: Array<IProjectItem> = require("./../../data/projects.json");

  return (
    <div className="projects-container" ref={props.projectsRef}>
      <div className="projects_header-container">
        <div className="wrapper">
          <h1>{t("PROJECTS_TITLE")}</h1>
        </div>
      </div>
      <div className="items-container">
        {projects.map((project) => (
          <ProjectTile
            project={project}
            key={project.id} 
            setProject={props.setProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
