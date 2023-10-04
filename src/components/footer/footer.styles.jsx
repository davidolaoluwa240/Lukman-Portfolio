// Modules
import styled from "styled-components";

//  Components
import { Container, PrimaryHeading } from "../../assets/styles/common.styles";

export const FooterContainer = styled(Container)`
  margin-top: 9.6rem;
  padding-bottom: 8.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterHeading = styled(PrimaryHeading)`
  letter-spacing: normal;
  margin-bottom: 0.8rem;
`;

export const FooterContent = styled.p`
  color: rgba(33, 33, 33, 0.5);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 30px;
`;

export const FooterSocialsGroup = styled.div`
  max-width: 227px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const FooterContentGroup = styled.div`
  max-width: 390px;
`;
