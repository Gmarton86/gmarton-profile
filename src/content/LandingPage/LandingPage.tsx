import React, { useRef, useState } from "react";
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
  return (
    <div>
      <div className="background-space">
        <div className="header-container">
          <div className="header-menu">
            <HeaderMenu
              contactRef={contactRef}
              skillsRef={skillsRef}
              projectsRef={projectsRef}
            />
          </div>
          {!project.isVisible && (
            <div className="header-block">
              <h1 className="header">{t("HEADER")}</h1>
              <h3 className="subheader">{t("SUB_HEADER")}</h3>
            </div>
          )}
        </div>
      </div>
      {!project.isVisible && (
        <div>
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
