import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { IconButton } from "@mui/material";

const Project = (props: any) => {

  return props.project.isVisible ? (
    <div className="project__container">
      <div>
        <IconButton
          className="icon__button"
          aria-label="Backspace"
          id="backspace-icon"
          onClick={() =>
            props.setProject((prev: any) => {
              return { ...prev, isVisible: false };
            })
          }
        >
          <BackspaceIcon />
        </IconButton>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Project;
