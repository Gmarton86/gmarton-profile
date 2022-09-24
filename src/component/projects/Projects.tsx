import React from "react";
import { useTranslation } from "react-i18next";
import Item from "./Item";

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

const Projects = () => {
  const { t } = useTranslation();
  const projects: Array<IProjectItem> = require("./../../data/projects.json");

  return (
    <div className="projects-container">
      <div className="projects_header-container">
        <div className="wrapper">
          <h1>{t("PROJECTS_TITLE")}</h1>
        </div>
      </div>
      <div className="items-container">
        {projects.map((project) => (
          <Item project={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
