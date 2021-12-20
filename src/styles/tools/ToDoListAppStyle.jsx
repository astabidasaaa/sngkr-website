import styled from "styled-components";

const ToDoListAppStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .list {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .clear {
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    background: linear-gradient(
      45deg,
      rgba(202, 62, 71, 1) 0%,
      rgba(213, 97, 57, 1) 32%,
      rgba(220, 120, 48, 1) 64%,
      rgba(246, 201, 14, 1) 100%
    );
    font: var(--boldWeight) var(--subPara) var(--sansSerif);
    color: var(--white);

    &:hover {
      cursor: pointer;
      box-shadow: 0.1rem 0.1rem 0.8rem #1c1c1c;
    }

    &:active {
      transform: scale(0.98, 0.98);
      box-shadow: none;
    }
  }

  form {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    input {
      box-sizing: border-box;
      padding: 0.5rem 1rem;
      border: 2px solid var(--gray);
      outline: none;
      border-radius: 0.3rem;
      background: transparent;
      font: var(--boldWeight) var(--subPara) var(--sansSerif);
      color: var(--white);
    }

    .submit {
      box-sizing: border-box;
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      border-radius: 0.3rem;
      background: var(--gray);
      font: var(--boldWeight) var(--subPara) var(--sansSerif);
      color: var(--white);

      &:hover {
        cursor: pointer;
        box-shadow: 0.1rem 0.1rem 0.8rem #1c1c1c;
      }

      &:active {
        transform: scale(0.98, 0.98);
        box-shadow: none;
      }
    }
  }
`;

export default ToDoListAppStyle;
