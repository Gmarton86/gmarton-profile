import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectTile from "./ProjectTile";
import { t } from "i18next";
import { Search } from "@mui/icons-material";

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
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const matchFilterInArray = (arr: any, filter: string): Boolean => {
    return arr.find((item: any) =>
      item.text.toLowerCase().startsWith(filter.toLowerCase())
    )
      ? true
      : false;
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (
        t("PROJECTS." + project.title)
          .toLowerCase()
          .startsWith(filter.toLowerCase())
      )
        return true;
      else if (matchFilterInArray(project.tags, filter)) return true;
      else return false;
    });
  }, [filter, projects]);

  return (
    <div className="projects-container" ref={props.projectsRef}>
      <div className="projects-search-container">
        <div className="search-input-container">
          <Search className="search-icon" />
          <input
            className="search-input"
            value={filter}
            placeholder="Search..."
            onChange={(event: React.ChangeEvent<EventTarget>) => {
              const inputElement = event.target as HTMLInputElement;
              const inputValue = inputElement.value;
              setFilter(inputValue);
            }}
          />
        </div>
      </div>
      <div className="items-container">
        {filteredProjects.map((project) => (
          <ProjectTile
            project={project}
            key={project.id}
            setProject={props.setProject}
            handleClick={() => {
              navigate(`/projects/${project.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
