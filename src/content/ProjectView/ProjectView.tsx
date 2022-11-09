import React, { useState } from "react";
import ReactImageGallery from "react-image-gallery";
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
  const images = project.images.map(
    (item: any) => {return {original: process.env.REACT_APP_PUBLIC_URL + item}}
  );

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
          <ProjectBox />
        </div>
        <div>
          <ProfileBox />
        </div>
      </div>
      <div className="project-view__gallery">
        <ReactImageGallery items={images} />
      </div>
    </div>
  );
};

export default ProjectView;
