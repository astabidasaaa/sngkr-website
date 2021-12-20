import styled from "styled-components";

const DrumMachineStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  #drum-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.25rem;
  }

  .drum-pad-style,
  .active-pad-on,
  .active-pad-off {
    height: 4rem;
    width: 6rem;
    border-radius: 0.3rem;
    border: none;
    outline: none;
  }

  .green-box,
  .active-pad-on,
  .active-pad-off {
    text-align: center;
    font: var(--boldWeight) var(--h5) var(--sansSerif);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    &:focus-visible {
      color: var(--black);
      background-color: var(--white);
    }
  }

  .drum-pad-style:hover,
  .active-pad-on:hover,
  .active-pad-off:hover {
    cursor: pointer;
  }

  .green-box,
  .active-pad-off {
    background-color: var(--black);
    border: 2px solid var(--white);
  }

  .active-pad-on,
  .active-pad-off {
    transform: scale(0.95, 0.95);
  }

  .active-pad-on {
    background-color: var(--black);
  }

  #drum-control {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    #display {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      background: var(--black);
      border-radius: 0.3rem;

      h5 {
        text-align: center;
      }
    }

    #power-bank {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;

      #power,
      #bank {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        p {
          font-weight: var(--boldWeight);
        }
      }
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 4.4rem;
    height: 2.4rem;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: transform var(--transSlow),
      background-image var(--transSlow);
    transition: transform var(--transSlow), background-image var(--transSlow);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: var(--white);
    font: var(--boldWeight) var(--subPara) var(--sansSerif);

    &.round {
      border-radius: 2rem;

      &:before {
        border-radius: 50%;
      }
    }

    &.pwr {
      background-image: linear-gradient(
        90deg,
        rgba(202, 62, 71, 1) 0%,
        rgba(213, 97, 57, 1) 84%,
        rgba(220, 120, 48, 1) 92%,
        rgba(246, 201, 14, 1) 100%
      );
    }

    &.bnk {
      background: var(--gray);
    }

    &:before {
      position: absolute;
      content: "";
      height: 2rem;
      width: 2rem;
      left: 0.2rem;
      bottom: 0.2rem;
      background-color: var(--white);
      -webkit-transition: transform var(--transSlow),
        background var(--transSlow);
      transition: transform var(--transSlow), background var(--transSlow);
    }
  }

  input:checked + .pwr {
    // background: rgb(202, 62, 71);
    background-image: linear-gradient(
      90deg,
      rgba(202, 62, 71, 1) 0%,
      rgba(213, 97, 57, 1) 8%,
      rgba(220, 120, 48, 1) 16%,
      rgba(246, 201, 14, 1) 100%
    );
  }

  input:checked + .bnk {
    background: var(--gray);
  }

  input:focus-visible + .slider {
    outline: 2px solid var(--white);
    outline-offset: 0.4rem;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(2rem);
    -ms-transform: translateX(2rem);
    transform: translateX(2rem);
  }

  #volume-control {
    position: relative;
    width: 50%;
    min-width: 10rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: var(--h5);
    color: var(--white);
  }

  .volume-slider {
    -webkit-appearance: none;
    position: relative;
    height: 0.2rem;
    background: var(--gray);
    outline: none;
    opacity: 0.7;
    -webkit-transition: var(--transMed);
    transition: opacity var(--transMed);

    &:focus {
      background: var(--white);
    }

    &:hover,
    &:focus {
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid var(--white);
      outline-offset: 0.4rem;
    }
  }

  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--white);
    cursor: pointer;
  }

  .volume-slider::-moz-range-thumb {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--white);
    cursor: pointer;
  }

  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export default DrumMachineStyle;
