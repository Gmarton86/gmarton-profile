import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ProfileBox = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-box-container">
      <header>
        <div> {t("PROFILE_BOX_HEADER")}</div>
      </header>
      <section className="profile-box-body">
        {/* eslint-disable-next-line */}
        <img
          className="profile-box__profile-image"
          src={require("../../assets/profile.jpg")}
          alt="profile picture"
        />
        {t("PROFILE_BOX")}
      </section>
      <section className="profile-box-footer">
        <IconButton>
          <FacebookRounded />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </section>
    </div>
  );
};

export default ProfileBox;
