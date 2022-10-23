import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../../component/contact/Contact";
import HeaderMenu from "../../component/header/HeaderMenu";
import Project from "../../component/projects/Project";
import Projects from "../../component/projects/Projects";
import Skills from "../../component/skills/Skills";

const LandingPage = () => {
  const { t } = useTranslation();
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const [project, setProject] = useState({
    isVisible: false,
    data: undefined,
  });

  useEffect(() => {
    if (project.isVisible) window.scrollTo(0, 0);
  }, [project.isVisible]);
  return (
    <div>
      <div className="background-space">
        <div className="header-container">
          <div className="header-menu">
            <HeaderMenu
              // contactRef={contactRef}
              // skillsRef={skillsRef}
              // projectsRef={projectsRef}
            />
          </div>

          <div className="header-block">
            <h1 className="header">
              <div className="wave">
                <span style={{ "--item": 1 } as React.CSSProperties}>Z</span>
                <span style={{ "--item": 2 } as React.CSSProperties}>U</span>
                <span style={{ "--item": 3 } as React.CSSProperties}>R</span>
                <span style={{ "--item": 4 } as React.CSSProperties}>V</span>
                <span style={{ "--item": 5 } as React.CSSProperties}>I</span>
                <span style={{ "--item": 6 } as React.CSSProperties}>.</span>
                <span style={{ "--item": 7 } as React.CSSProperties}>s</span>
                <span style={{ "--item": 8 } as React.CSSProperties}>k</span>
              </div>
            </h1>
            <h3 className="subheader">{t("SUB_HEADER")}</h3>
          </div>
        </div>
       
      </div>
      {!project.isVisible && (
        <div>
          <hr style={{color: "white", margin: "0px", padding: "0px"}}/>
          <Projects projectsRef={projectsRef} setProject={setProject} />
          <Skills skillsRef={skillsRef} />
          <Contact contactRef={contactRef} />
        </div>
      )}
      <Project project={project} setProject={setProject} />
    </div>
  );
};

export default LandingPage;
