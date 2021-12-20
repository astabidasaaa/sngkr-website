import styled from "styled-components";

// export const CalculatorPageStyle = styled.

export const CalculatorStyle = styled.div`
  //   min-height: 428px;
  width: 16.75rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  // outline: 2px solid var(--white);
  border-radius: 0.3rem;
  // padding: 1rem;

  .calculator-screen {
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    margin-bottom: 0.25rem;
    padding: 0.6rem 1rem;
    background: var(--white);
    border-radius: 0.3rem;

    .input-screen {
      width: 100%;
      color: var(--gray);
      font: var(--boldWeight) var(--h6) var(--sansSerif);
      text-align: right;
      white-space: normal;
      overflow-wrap: break-word;
      word-wrap: break-word;
      overflow: hidden;
    }

    .result-screen {
      width: 100%;
      color: var(--black);
      font: var(--boldWeight) var(--h4) var(--sansSerif);
      text-align: right;
      overflow-wrap: break-word;
      word-wrap: break-word;
      overflow: hidden;
    }
  }

  .buttons {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 4rem);
    grid-template-rows: repeat(5, 3rem);
    gap: 0.25rem;
    outline: none;
    border: none;
  }

  #clear {
    grid-column: 1 / 3;
    grid-row: 1;
    color: var(--red);
  }

  .divide {
    grid-column: 3 / 4;
    grid-row: 1;
  }

  .multiply {
    grid-column: 4 / 5;
    grid-row: 1;
  }

  .subtract {
    grid-column: 4 / 5;
    grid-row: 2;
  }

  .add {
    grid-column: 4 / 5;
    grid-row: 3;
  }

  .equal-btn {
    grid-column: 4 / 5;
    grid-row: 4 / 6;
    background: linear-gradient(
      135deg,
      rgba(202, 62, 71, 1) 0%,
      rgba(213, 97, 57, 1) 10%,
      rgba(220, 120, 48, 1) 24%,
      rgba(246, 201, 14, 1) 100%
    );
  }

  .nine {
    grid-column: 3 / 4;
    grid-row: 2;
  }

  .eight {
    grid-column: 2 / 3;
    grid-row: 2;
  }

  .seven {
    grid-column: 1 / 2;
    grid-row: 2;
  }

  .six {
    grid-column: 3 / 4;
    grid-row: 3;
  }

  .five {
    grid-column: 2 / 3;
    grid-row: 3;
  }

  .four {
    grid-column: 1 / 2;
    grid-row: 3;
  }

  .three {
    grid-column: 3 / 4;
    grid-row: 4;
  }

  .two {
    grid-column: 2 / 3;
    grid-row: 4;
  }

  .one {
    grid-column: 1 / 2;
    grid-row: 4;
  }

  .zero {
    grid-column: 1 / 3;
    grid-row: 5;
  }

  .decimal-btn {
    grid-column: 3 / 4;
    grid-row: 5;
  }

  .operation-btn,
  .clear-btn,
  .number-btn,
  .decimal-btn {
    background: var(--black);
  }

  .btn {
    width: 100%;
    height: 100%;
    color: var(--white);
    font: var(--boldWeight) var(--para) var(--sansSerif);
    text-align: center;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;

    svg {
      pointer-events: none;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9, 0.9);
      outline: none;
      border: none;
    }

    &:focus-visible {
      outline: none;
      border: 2px solid var(--white);
    }
  }
`;
