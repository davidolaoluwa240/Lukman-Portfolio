// Modules
import React from "react";

// Components
import { SideProjectsCard } from "../../";

// Styles
import { SideProjectsListWrapper } from "./side-projects-list.styles";

export const SideProjectsList = ({ items }) => {
  // Side Projects Card Items
  const renderedSideProjectCardItems = items.map(({ id, ...restProps }) => (
    <SideProjectsCard key={id} {...restProps} />
  ));

  return (
    <SideProjectsListWrapper>
      {renderedSideProjectCardItems}
    </SideProjectsListWrapper>
  );
};
