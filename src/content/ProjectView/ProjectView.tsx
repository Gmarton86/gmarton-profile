import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { IProjectItem } from "../../component/projects/Projects";

const ProjectView = () => {
  const { projectId } = useParams();
  const projects: Array<IProjectItem> = require("./../../data/projects.json");
  const [project] = useState<any>(
    projects.find((project) =>  project.id.toString() === projectId?.toString())
  );
  const { t } = useTranslation();

  return (
    <div className="mt-16">
      <img
        src={`${process.env.REACT_APP_PUBLIC_URL + project.background_image}`}
        alt={t(project.title)}
      />
    </div>
  );
};

export default ProjectView;
