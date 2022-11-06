import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useParams } from "react-router-dom";
import ProfileBox from "../../component/profileBox/ProfileBox";
import { IProjectItem } from "../../component/projects/Projects";
import ProjectBox from "./ProjectBox";

const ProjectView = () => {
  const { projectId } = useParams();
  const projects: Array<IProjectItem> = require("./../../data/projects.json");
  const [project] = useState<any>(
    projects.find((project) => project.id.toString() === projectId?.toString())
  );
  const { t } = useTranslation();

  return (
    <div>
      <Outlet />
      <div
        className="mt-16 project-view__header-image"
        style={{
          backgroundImage: `url(${
            process.env.REACT_APP_PUBLIC_URL + project.background_image
          }`,
        }}
      ></div>

      <div className="project-view__body-container">
        <div>
          {/* BLOCK SITE */}
          <ProjectBox/>
        </div>
        <div>
          {/* MOJ PROFILE */}
          <ProfileBox/>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
