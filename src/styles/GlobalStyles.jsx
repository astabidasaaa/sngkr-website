import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --regularWeight: 400;
    --mediumWeight: 500;
    --boldWeight: 700;
    --heavyWeight: 900;
    --transMed: 0.1s;
    --transSlow: 0.3s;
    // --black: #151515;
    --black: #26282b;
    --gray: #3a4750;
    --lightgray: #c5c5c5;
    --white: #eeeeee;
    --red: #CA3E47;
    --yellow: #f6c90e;
    --blue: #3457D5;
    --lightblue: #3388D6;
    --serif: "DM Serif Text", serif;
    --sansSerifCondensed: "Roboto Condensed", sans-serif;
    --sansSerif: Roboto, sans-serif;
    --monospace: "Roboto Mono", monospace;
    --h1: 3rem;
    --h2: 2.4rem;
    --h3: 2rem;
    --h4: 1.5rem;
    --h5: 1.25rem;
    --h6: 1.125rem;
    --para: 1rem;
    --subPara: 0.85rem;
    --spacing: 1rem;

::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--black);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--gray);
  border-radius: 0.25rem;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #454545;
}
}

body {
    height: 100vh;
    background-color: var(--black);
    margin: 0;
}

.main-body {
    position: relative;
    width: 100%;
    min-height: 90vh;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5rem 1.5rem 3rem;
    gap: 2rem;

    section {
        width: 100%;
        min-height: 50vh;
        padding: 3.5rem 0 3rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 6rem;

      }

    header {
      width: 100%;
      
      h1 {
        margin-bottom: 1rem;
      }
    }

    article {
        width: 100%;
        padding: 3rem 0;
        // min-height: 50vh;
    }
}
`;

export default GlobalStyles;
