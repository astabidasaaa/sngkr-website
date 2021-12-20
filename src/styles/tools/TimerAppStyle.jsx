import styled from "styled-components";

const TimerAppStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  box-sizing: border-box;
  user-select: none;
  gap: 0.25rem;

  #control {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    #break,
    #session {
      box-sizing: border-box;
      display: flex;
      flex-flow: column nowrap;
      justify-items: center;
      align-items: center;
      padding: 1.3rem 1rem;
      border-radius: 0.3rem;
      gap: 1rem;

      .length-number {
        font: var(--boldWeight) var(--h4) var(--sansSerif);
        color: var(--white);
      }
    }
  }

  .label {
    font: var(--boldWeight) var(--para) var(--sansSerif);
    text-transform: capitalize;
    text-align: center;
    margin: 0;
  }

  #timer {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    padding: 2rem 3rem;
    border-radius: 0.3rem;
    gap: 1rem;

    .time-left {
      font: var(--boldWeight) var(--h1) var(--sansSerif);
      color: var(--white);
    }

    #timer-label,
    .time-left {
      &.turn-red-now {
        color: var(--red);
      }
    }

    .button-group {
      display: flex;
      flex-flow: row nowrap;
    }
  }

  button.b {
    width: 2rem;
    height: 2rem;
    margin: 0 0.4rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    background-color: var(--black);
    color: var(--white);
    border: none;
    outline: none;

    &.break-decrement,
    &.break-increment,
    &.session-decrement,
    &.session-increment {
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }
    }

    &#start_stop {
      width: 2.5rem;
    }

    &#reset {
      color: var(--red);
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.85, 0.85);
      box-shadow: none;
    }

    &:focus-visible {
      outline: 1px solid var(--white);
    }
  }
`;

export default TimerAppStyle;
