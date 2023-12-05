// Styles
import {
  SwimmoDesignProcessCardHeader,
  SwimmoDesignProcessCardWrapper,
  SwimmoDesignProcessCardNum,
  SwimmoDesignProcessCardDuration,
  SwimmoDesignProcessCardName,
  SwimmoDesignProcessCardContent,
} from "./swimmo-design-process-card.styles";

export const SwimmoDesignProcessCard = ({
  num,
  duration,
  name,
  description,
}) => {
  return (
    <SwimmoDesignProcessCardWrapper>
      <SwimmoDesignProcessCardHeader>
        <SwimmoDesignProcessCardNum>{num}</SwimmoDesignProcessCardNum>
        <SwimmoDesignProcessCardDuration>
          {duration} hour
        </SwimmoDesignProcessCardDuration>
      </SwimmoDesignProcessCardHeader>

      <SwimmoDesignProcessCardName>{name}</SwimmoDesignProcessCardName>
      <SwimmoDesignProcessCardContent>
        {description}
      </SwimmoDesignProcessCardContent>
    </SwimmoDesignProcessCardWrapper>
  );
};
