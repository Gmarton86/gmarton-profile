import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { IProjectItem } from "../../component/projects/Projects";

const ProjectBox = () => {
  const { t } = useTranslation();
  const { projectId } = useParams();
  const projects: Array<IProjectItem> = require("./../../data/projects.json");
  const [project] = useState<IProjectItem | undefined>(
    projects.find((project) => project.id.toString() === projectId?.toString())
  );
  return (
    <div className="project-box-container">
      <header className="project-box__header">
        {t(`PROJECTS.` + project?.title)}
      </header>
      <section className="project-box__body">
        {t(`PROJECTS.` + project?.description)}
      </section>
    </div>
  );
};

export default ProjectBox;
