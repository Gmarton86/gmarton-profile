import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { IProjectItem } from "./Projects";

interface IItemProps {
  project: IProjectItem;
  setProject: Function;
  handleClick: Function;
}

const ProjectTile: React.FC<IItemProps> = ({
  project,
  setProject,
  handleClick,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="project-tile-animation"
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className="item-container grow"
        style={{
          backgroundImage: `url(${
            process.env.REACT_APP_PUBLIC_URL + project.background_image
          }`,
        }}
        onClick={() =>
          setProject((prev: any) => {
            const previousObject = { ...prev, data: project };
            return { ...previousObject, isVisible: true };
          })
        }
      ></div>
      <div className="project-tile__header">
        <Button className="flex flex-col" style={{ minWidth: "100%" }}>
          <h2 className="project-tile__header-font">
            {t("PROJECTS." + project.title)}
          </h2>
          <div className="project-tile__header-font">
            {project.tags.map((tag: any, index) => (
              <span key={tag.id}>
                {tag.text}
                {index !== project.tags.length - 1 && "/"}
              </span>
            ))}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProjectTile;
