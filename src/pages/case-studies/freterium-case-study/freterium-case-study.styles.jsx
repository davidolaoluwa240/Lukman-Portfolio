// Modules
import styled from "styled-components";

// Images
import heroLinesSvg from "../../../assets/images/hero-lines.svg";

export const FreteriumUserFlowChartWrapper = styled.section`
  background-color: var(--gray-100);
  padding: 3.7rem 0;
  background-image: url(${heroLinesSvg});
  background-repeat: no-repeat;

  svg {
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const FreteriumParticipantGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:last-of-type {
    flex-basis: 22%;
  }

  .participant-duration-group {
    display: flex;
    align-items: center;

    p {
      line-height: 22px;
      margin-left: 1.5rem;
    }

    svg {
      flex-shrink: 0;
      width: 45px;
      height: 42.885px;

      * {
        color: rgba(33, 33, 33, 0.7);
      }
    }
  }
`;

export const FreteriumAvgMetrics = styled.div`
  li {
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: 2.6rem;
    }
  }

  svg {
    fill: rgba(33, 33, 33, 0.7);
    width: 20px;
    height: 19.946px;
    margin-right: 2rem;
  }
`;
