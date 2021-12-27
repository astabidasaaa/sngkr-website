import styled from "styled-components";

const IDMapStyle = styled.div`
  #tooltip {
    padding: 0.5rem;
    border-radius: 0.3rem;
    font: var(--regularWeight) var(--subPara) var(--sansSerif);
    color: var(--white);
    background-color: var(--gray);
    text-transform: lowercase;
    display: none;

    &:first-line {
      text-transform: capitalize;
    }
  }

  #svgContainer {
    svg {
      path {
        transform: scale(11, -11);
        transform-origin: center;
        stroke: var(--black);
        stroke-width: 0.01px;
        fill: var(--yellow);

        &:hover {
          fill: var(--gray);
        }
      }
    }
  }
`;

export default IDMapStyle;
