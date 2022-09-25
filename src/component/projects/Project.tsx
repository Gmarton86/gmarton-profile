import React, { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { IconButton } from "@mui/material";
import { useTransition, animated } from "@react-spring/web";

const Project = (props: any) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const transitions = useTransition(animation, {
    key: animation,
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (props.project.isVisible) setAnimation(true);
  }, [props.project.isVisible]);

  return props.project.isVisible ? (
    transitions(
      (styles, item) =>
        item && (
          <animated.div style={styles}>
            <div className="project__container">
              <div>
                <IconButton
                  className="icon__button"
                  aria-label="Backspace"
                  id="backspace-icon"
                  onClick={() => {
                    setAnimation(false);
                    props.setProject((prev: any) => {
                      return { ...prev, isVisible: false };
                    });
                  }}
                >
                  <BackspaceIcon />
                </IconButton>
              </div>
            </div>
          </animated.div>
        )
    )
  ) : (
    <></>
  );
};

export default Project;
