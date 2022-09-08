import React from "react";
import { useTranslation } from "react-i18next";
import HeaderMenu from "../../component/header/HeaderMenu";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="background-space">
        <HeaderMenu></HeaderMenu>
        <div className="header-block">
          <h1 className="header">{t("HEADER")}</h1>
          <h3 className="subheader">{t("SUB_HEADER")}</h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
