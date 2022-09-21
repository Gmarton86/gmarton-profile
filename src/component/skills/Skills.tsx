import React from "react";
import { useTranslation } from "react-i18next";

const Skills = (props: any) => {
  const { t } = useTranslation();
  return (
    <section className="skills-container" ref={props.skillsRef}>
      <div className="wrapper">
        <h1>{t("HEADER_MENU.SKILLS")}</h1>
        <div id="resp-table">
          <div id="resp-table-body">
            <div className="resp-table-row">
              <div
                className="table-body-cell label"
                style={{ color: "#347FD5" }}
              >
                FRONTEND
              </div>
              <div className="table-body-cell">
                HTML, CSS, SCSS, JS(TypeScript, ES6+, Babel, Webpack), React,
                VueJS, jQuery, React Native
              </div>
            </div>
            <div className="resp-table-row">
              <div
                className="table-body-cell label"
                style={{ color: "#B9AAA2" }}
              >
                BACKEND
              </div>
              <div className="table-body-cell">
                Java, PHP, Laravel, JavaScript(Express.js, Nest.js), MySQL,
                PostgreSQL, SQLite, DB2
              </div>
            </div>
            <div className="resp-table-row">
              <div
                className="table-body-cell label"
                style={{ color: "#F2545F" }}
              >
                {t("JOBS")}
              </div>
              <div className="table-body-cell">IBM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
