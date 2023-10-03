// Modules
import styled from "styled-components";

// Components
import { Container } from "../../assets/styles/common.styles";

export const AboutGalleryContainer = styled(Container)`
  margin-top: 9.6rem;
  max-width: 1290px;
  height: 533.33px;
  display: flex;
  justify-content: space-between;

  svg:not(:last-child) {
    margin-right: 5.2rem;
  }

  svg:first-of-type {
    margin-top: 12.5rem;
  }

  svg:nth-of-type(2) {
    margin-top: 8rem;
  }

  svg:last-of-type {
    margin-top: 3.447rem;
  }
`;
