import React from "react";
import { useTranslation } from "react-i18next";
import { IProjectItem } from "./Projects";

interface IItemProps {
  project: IProjectItem;
}

const ProjectTile: React.FC<IItemProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div
      className="item-container grow"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(35,37,38, 0.42), rgba(65,67,69, 0.52))," +
          `url(${process.env.REACT_APP_PUBLIC_URL + project.background_image}`,
      }}
    >
      <h2>{t("PROJECTS." + project.title)}</h2>
      <div>
        {project.tags.map((tag: any, index) => (
          <span key={tag.id}>
            {tag.text}
            {index !== project.tags.length - 1 && "/"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTile;
