import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Contact = (props: any) => {
  const { t } = useTranslation();
  return (
    <div
      className="contact-container_background"
      id="contact"
      ref={props.contactRef}
    >
      <section className="contact-container">
        <div className="contact_icons">
          <IconButton className="IconButton">
            <FacebookRounded />
          </IconButton>
          <IconButton className="IconButton">
            <Instagram />
          </IconButton>
          <IconButton className="IconButton">
            <LinkedIn />
          </IconButton>
        </div>
        <div>
          <address>
            <div>
              Email: {""}
              <a href="mailto:zurvalecerik@gmail.com">zurvalecerik@gmail.com</a>
            </div>
            <div>{t("CONTACT.PHONE")}: +421 950 856 766</div>
            <div>Francisciho 11, Bratislava</div>
            <div>{t("CONTACT.COUNTRY")}</div>
          </address>
        </div>
      </section>
      <div style={{ float: "right" }}>© 2022 - 2022 zurvi.sk</div>
    </div>
  );
};

export default Contact;
