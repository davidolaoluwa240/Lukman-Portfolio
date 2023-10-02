// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../hooks";

// Components
import { SideProjectsList } from "../";

// Styles
import {
  SideProjectsBaseContainer,
  SideProjectsBaseHeading,
} from "./side-projects-base.styles";

export const SideProjectsBase = () => {
  const { SIDE_PROJECTS_ITEMS: sideProjectsItems } = useStaticData();

  return (
    <SideProjectsBaseContainer>
      <SideProjectsBaseHeading>Some side projects</SideProjectsBaseHeading>
      <SideProjectsList items={sideProjectsItems} />
    </SideProjectsBaseContainer>
  );
};
