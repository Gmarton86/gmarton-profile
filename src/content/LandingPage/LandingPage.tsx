import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../../component/contact/Contact";
import HeaderMenu from "../../component/header/HeaderMenu";
import Projects from "../../component/projects/Projects";
import Skills from "../../component/skills/Skills";

const LandingPage = () => {
  const { t } = useTranslation();
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  return (
    <div>
      <div className="background-space">
        <div className="header-container">
          <div className="header-menu">
            <HeaderMenu contactRef={contactRef} skillsRef={skillsRef} />
          </div>
          <div className="header-block">
            <h1 className="header">{t("HEADER")}</h1>
            <h3 className="subheader">{t("SUB_HEADER")}</h3>
          </div>
        </div>
      </div>
      <Projects/>
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default LandingPage;
