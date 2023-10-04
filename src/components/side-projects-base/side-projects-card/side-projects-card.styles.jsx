// Modules
import styled from "styled-components";

export const SideProjectsCardWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1.7rem 4.3rem 1.75rem 2rem;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.3s linear;

  svg {
    opacity: 0.7;
    flex-basis: 7%;
    margin-top: 0.5rem;
    width: 20px;
    height: 21px;
    transition: opacity 0.3s linear;
  }

  &:hover {
    background: var(--white-color);

    svg,
    p:last-of-type {
      opacity: 1;
    }
  }
`;

export const SideProjectsCardContent = styled.div`
  flex-basis: 91%;

  p:first-of-type {
    font-family: Studio Feixen Edgy TRIAL;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }

  p:last-of-type {
    transition: opacity 0.3s linear;
    opacity: 0.7;
  }
`;
