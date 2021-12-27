import styled from "styled-components";

const USMapStyle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  #tooltip {
    padding: 0.5rem;
    border-radius: 0.3rem;
    font: var(--regularWeight) var(--subPara) var(--sansSerif);
    color: var(--white);
    background-color: var(--black);
    display: none;
  }

  #svgContainer {
    svg {
      .county {
        &:hover {
          fill: var(--gray);
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

  p#source {
    width: 100%;
  }
`;

export default USMapStyle;
