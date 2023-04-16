import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectTile from "./ProjectTile";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { t } from "i18next";
import { Search as SearchIcon2 } from "@mui/icons-material";

export interface IProjectItem {
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  images: Array<string>;
  data: string;
  customer: string;
  link: string;
  background_image: string;
}

const Projects = (props: any) => {
  const projects: Array<IProjectItem> = require("./../../data/projects.json");
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    borderBottom: "solid",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (t("PROJECTS." + project.title).startsWith(filter)) return true;
      else return false;
    });
  }, [filter, projects]);

  return (
    <div className="projects-container" ref={props.projectsRef}>
      <div className="projects-search-container">
        <div className="search-input-container">
          <SearchIcon2 className="search-icon" />
          <input
            className="search-input"
            value={filter}
            placeholder="Search..."
            onChange={(event: React.ChangeEvent<EventTarget>) => {
              const inputElement = event.target as HTMLInputElement;
              const inputValue = inputElement.value;
              setFilter(inputValue);
            }}
          />
        </div>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
      </div>
      <div className="items-container">
        {filteredProjects.map((project) => (
          <ProjectTile
            project={project}
            key={project.id}
            setProject={props.setProject}
            handleClick={() => {
              navigate(`/projects/${project.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
