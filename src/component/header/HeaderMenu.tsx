import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const HeaderMenu = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  const options = [
    { id: "en", label: t("LANGUAGES.EN") },
    { id: "sk", label: t("LANGUAGES.SK") },
  ];

  const ITEM_HEIGHT = 48;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  const executeScroll = (ref: any) => {
    if (ref) ref.current.scrollIntoView();
  };

  return (
    <div className="container">
      <Button
        variant="text"
        className="header-menu-font"
        onClick={() => {
          executeScroll(props.projectsRef);
        }}
      >
        {t("HEADER_MENU.PROJECTS")}
      </Button>
      <Button
        variant="text"
        className="header-menu-font"
        onClick={() => {
          executeScroll(props.skillsRef);
        }}
      >
        {t("HEADER_MENU.SKILLS")}
      </Button>
      <Button
        variant="text"
        className="header-menu-font"
        onClick={() => {
          executeScroll(props.contactRef);
        }}
      >
        {t("HEADER_MENU.CONTACT")}
      </Button>
      <IconButton
        className="IconButton"
        aria-label="more"
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
    </div>
  );
};
export default HeaderMenu;
