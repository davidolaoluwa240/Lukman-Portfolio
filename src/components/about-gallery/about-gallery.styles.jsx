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

  img {
    width: 30.33%;
    height: 272px;
  }

  img:not(:last-child) {
    margin-right: 5.2rem;
  }

  img:first-of-type {
    margin-top: 12.5rem;
  }

  img:nth-of-type(2) {
    margin-top: 8rem;
  }

  img:last-of-type {
    margin-top: 3.447rem;
  }
`;
