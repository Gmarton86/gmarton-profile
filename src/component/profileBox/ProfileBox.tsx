import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProfileBox = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-box-container">
      <header>
        <div>{t("PROFILE_BOX_HEADER")}</div>
      </header>
      <section className="profile-box-body">
        <LazyLoadImage
          src={require("../../assets/profile.jpg")}
          className="profile-box__profile-image"
          alt="profile picture"
          effect="blur"
          placeholderSrc={require("../../assets/profile.jpg")}
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
