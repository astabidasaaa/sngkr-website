import styled from "styled-components";

const USMapStyle = styled.div`
  #tooltip {
    padding: 0.5rem;
    border-radius: 0.3rem;
    font: var(--regularWeight) var(--subPara) var(--sansSerif);
    color: var(--white);
    background-color: var(--black);
  }

  #svgContainer {
    svg {
      .county {
        &:hover {
          fill: var(--gray);
          // stroke: var(--white);
        }
      }

      .states {
        fill: none;
        stroke: var(--black);
        stroke-linejoin: round;
      }

      #legend {
        text {
          color: var(--white);
          font-size: var(--para);
        }

        path,
        line {
          stroke: var(--white);
        }
      }
    }
  }
`;

export default USMapStyle;
