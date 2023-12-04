// Modules
import React from "react";

// Components
import { SwimmoDesignProcessCard } from "../";

// Styles
import { SwimmoDesignProcessListWrapper } from "./swimmo-design-process-list.styles";

export const SwimmoDesignProcessList = ({ items, ...restProps }) => {
  // Rendered Swimmo Design Process Items
  const renderedSwimmoDesignProcessItems = items.map(({ id, ...restProps }) => (
    <SwimmoDesignProcessCard key={id} num={id} {...restProps} />
  ));

  return (
    <SwimmoDesignProcessListWrapper {...restProps}>
      {renderedSwimmoDesignProcessItems}
    </SwimmoDesignProcessListWrapper>
  );
};
