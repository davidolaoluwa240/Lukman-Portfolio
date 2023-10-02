// Modules
import styled from "styled-components";

// Components
import { Container, PrimaryHeading } from "../../assets/styles/common.styles";

export const HomeHeroTag = styled.p`
  svg {
    margin-right: 0.8rem;
    width: 21px;
    height: 21px;
  }

  color: rgba(33, 33, 33, 0.7);
  font-size: 1.4rem;
  line-height: 21px;
`;

export const HomeHeroContainer = styled(Container)`
  margin-top: 9.6rem;
`;

export const HomeHeroHeading = styled(PrimaryHeading)`
  padding: 2rem 0;
`;
