import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElMobileNavigation, setAnchorElMobileNavigation] =
    React.useState<null | HTMLElement>(null);
  const openMobileNavigation = Boolean(anchorElMobileNavigation);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const options = [
    { id: "en", label: t("LANGUAGES.EN") },
    { id: "sk", label: t("LANGUAGES.SK") },
  ];

  const mobileNavigationOptions = [
    { id: "projects", label: t("HEADER_MENU.PROJECTS") },
    { id: "about", label: t("HEADER_MENU.ABOUT") },
    { id: "contact", label: t("HEADER_MENU.CONTACT") },
  ];

  const ITEM_HEIGHT = 48;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMobileNavigation = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElMobileNavigation(event.currentTarget);
  };
  const handleCloseMobileNavigation = () => {
    setAnchorElMobileNavigation(null);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <div>
      <div className="header-menu-container">
        <div className="header-navigation">
          <Button
            variant="text"
            className="header-menu-font"
            onClick={() => navigate("/projects")}
          >
            {t("HEADER_MENU.PROJECTS")}
          </Button>
          <Button
            variant="text"
            className="header-menu-font"
            onClick={() => navigate("/about")}
          >
            {t("HEADER_MENU.ABOUT")}
          </Button>
          <Button
            variant="text"
            className="header-menu-font"
            onClick={() => navigate("/contact")}
          >
            {t("HEADER_MENU.CONTACT")}
          </Button>
        </div>
        <IconButton
          aria-label="more"
          className="header-menu-font"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <LanguageIcon />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              onClick={() => {
                changeLanguage(option.id);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
        <div className="header-mobile-navigation">
          <IconButton
            aria-label="mobile navigation"
            className="header-menu-font"
            id="mobile-navigation"
            aria-controls={
              openMobileNavigation ? "mobile-navigation-menu" : undefined
            }
            aria-expanded={openMobileNavigation ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClickMobileNavigation}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Menu
          id="mobile-navigation-menu"
          MenuListProps={{
            "aria-labelledby": "mobile-navigation",
          }}
          anchorEl={anchorElMobileNavigation}
          open={openMobileNavigation}
          onClose={handleCloseMobileNavigation}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {mobileNavigationOptions.map((option) => (
            <MenuItem
              key={option.id}
              onClick={() => {
                navigate(`/${option.id}`);
                handleCloseMobileNavigation();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};
export default HeaderMenu;
