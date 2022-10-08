import React, { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Chip, IconButton, Link, Stack } from "@mui/material";
import { useTransition, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";

const Project = (props: any) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const { t } = useTranslation();
  const transitions = useTransition(animation, {
    key: animation,
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (props.project.isVisible) setAnimation(true);
  }, [props.project.isVisible]);
  console.log(props.project.data);

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
                <header className="project__header">
                  <h1>{t("PROJECTS." + props.project.data.title)}</h1>
                </header>
              </div>
              <section className="project__body-container">
                <div className="project__body__panel">
                  <div className="project__body__panel_text">
                    {t("PROJECTS." + props.project.data.description)}
                  </div>
                </div>
                <div>
                  <div className="project__body__panel">
                    <div className="project__body__panel_text project__body__panel_infos resp-table">
                      <div className="resp-table-body">
                        <div className="resp-table-row">
                          <div className="table-body-cell">{t("CUSTOMER")}</div>
                          <div className="table-body-cell">
                            {props.project.data.customer}
                          </div>
                        </div>
                        <div className="resp-table-row">
                          <div className="table-body-cell">{t("LINK")}</div>
                          <div className="table-body-cell">
                            <Link
                              href={props.project.data.link}
                              target="_blank"
                            >
                              {t("PROJECTS." + props.project.data.title)}
                            </Link>
                          </div>
                        </div>
                        <div className="resp-table-row">
                          <div className="table-body-cell">{t("TAGS")}</div>
                          <div className="table-body-cell">
                            <Stack direction="row" spacing={1}>
                              {props.project.data.tags.map((tag: any) => (
                                <Chip
                                  label={tag.text}
                                  color={tag.color}
                                  key={tag.id + "-tag"}
                                />
                              ))}
                            </Stack>
                          </div>
                        </div>
                        <div className="resp-table-row">
                          <div className="table-body-cell">{t("DATE")}</div>
                          <div className="table-body-cell">
                            {props.project.data.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="project__image-container">
                  {props.project.data.images.map(
                    (image: any, index: number) => {
                      return (
                        <div className="project__image" key={index + image}>
                          <img
                            src={process.env.REACT_APP_PUBLIC_URL + image} alt={image}
                          ></img>
                        </div>
                      );
                    }
                  )}
                </div>
              </section>
            </div>
          </animated.div>
        )
    )
  ) : (
    <></>
  );
};

export default Project;
