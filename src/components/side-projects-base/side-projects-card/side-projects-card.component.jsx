// Images
import ListItemIcon from "../../../assets/images/list-icon.svg?react";

// Styles
import {
  SideProjectsCardWrapper,
  SideProjectsCardLink,
  SideProjectsCardContent,
} from "./side-projects-card.styles";

export const SideProjectsCard = ({ name, description, to }) => {
  return (
    <SideProjectsCardWrapper>
      <SideProjectsCardLink href={to} target="_blank" />
      <ListItemIcon />
      <SideProjectsCardContent>
        <p>{name}</p>
        <p>{description}</p>
      </SideProjectsCardContent>
    </SideProjectsCardWrapper>
  );
};
