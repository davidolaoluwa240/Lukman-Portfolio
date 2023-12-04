// Modules
import styled from "styled-components";

export const SwimmoDesignProcessCardContent = styled.p``;
export const SwimmoDesignProcessCardWrapper = styled.article`
  font-family: Studio Feixen Sans TRIAL, serif;
  border-radius: 10px;
  background: var(--tertiary-color);
  color: var(--white-color);
  padding: 2rem;

  ${SwimmoDesignProcessCardContent} {
    color: var(--gray-200);
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 23px;
  }
`;

export const SwimmoDesignProcessCardDuration = styled.small``;
export const SwimmoDesignProcessCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;

  ${SwimmoDesignProcessCardDuration} {
    color: var(--gray-200);
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const SwimmoDesignProcessCardNum = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 170%;
  border: 2px solid rgba(233, 206, 247, 0.5);
`;

export const SwimmoDesignProcessCardName = styled.h6`
  color: var(--white-color);
  font-family: Studio Feixen Edgy TRIAL;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.7rem;
`;
