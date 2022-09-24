import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { IconButton } from "@mui/material";

const Project = (props: any) => {
  return props.project.isVisible ? (
    <div>
      <div>
        <IconButton
          aria-label="Backspace"
          id="Backspace-icon"
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
