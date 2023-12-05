// Styles
import {
  SectionGroupContainer,
  SectionGroupHeading,
} from "./section-group.styles";

export const SectionGroup = ({ name, children }) => {
  return (
    <SectionGroupContainer>
      <SectionGroupHeading>{name}</SectionGroupHeading>
      <div>{children}</div>
    </SectionGroupContainer>
  );
};
