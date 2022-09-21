import React from "react";
import { useTranslation } from "react-i18next";
import { IProjectItem } from "./Projects";

interface IItemProps {
  project: IProjectItem;
}

const Item: React.FC<IItemProps> = ({ project }) => {
  const { t } = useTranslation();
  return (
    <div className="item-container grow">
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

export default Item;
