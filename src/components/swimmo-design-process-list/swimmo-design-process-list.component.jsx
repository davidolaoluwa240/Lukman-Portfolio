// Components
import { SwimmoDesignProcessCard } from "./swimmo-design-process-card/swimmo-design-process-card.component";

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
