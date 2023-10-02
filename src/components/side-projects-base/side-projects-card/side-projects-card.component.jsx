// Modules
import React from "react";

// Components
import ListItemIcon from "../../../assets/images/list-icon.svg?react";

// Styles
import {
  SideProjectsCardWrapper,
  SideProjectsCardContent,
} from "./side-projects-card.styles";

export const SideProjectsCard = ({ name, description }) => {
  return (
    <SideProjectsCardWrapper>
      <ListItemIcon />
      <SideProjectsCardContent>
        <p>{name}</p>
        <p>{description}</p>
      </SideProjectsCardContent>
    </SideProjectsCardWrapper>
  );
};
