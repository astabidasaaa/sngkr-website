import { createGlobalStyle } from "styled-components";
import "@fontsource/dm-serif-text";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/900-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto-condensed";

const Typography = createGlobalStyle`
h1 {
  font: var(--boldWeight) clamp(2rem, 1.0000rem + 5.0000vw, 5.5rem) var(--sansSerif);
  margin: 0 0 calc(var(--spacing) * 2);
}

p {
  margin: calc(var(--spacing) * 0.75) 0;
  font: var(--regularWeight) var(--para) var(--sansSerif);
  line-height: 1.5;
  color: var(--white);

  &.subPara {
    font-size: var(--subPara);
  }
}

a {
    font: var(--boldWeight) var(--para) var(--sansSerif);
    color: var(--white);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    &:focus-visible:
      outline: 3px solid var(--white);

    &.menu-header {
      position: relative;
      font: var(--boldWeight) var(--subPara) var(--sansSerif);
      color: var(--white);
      text-decoration: none;
      opacity: 0.7;
      padding: 0.5rem 0;
      box-sizing: border-box;

      &:after {
          position: absolute;
          bottom: 0;
          left: 50%;
          content: "";
          height: 0.1rem;
          width: 0;
          background: var(--white);
          transition: var(--transMed) ease-in-out;
        }

      &.active {
        opacity: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          height: 0.1rem;
          width: 100%;
          background: var(--white);
          transition: var(--transMed) ease-in-out;
        }
      }
    }
}

h2,
h3,
h4, 
h5,
h6
 {
  font-family: var(--sansSerif);
  font-weight: var(--heavyWeight);
  letter-spacing: 0px;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--white);
}

h2, h3, h4 {
  margin: calc(var(--spacing) * 1.5) 0;
}

h5,
h6 {
  margin: var(--spacing) 0;
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}

.strike {
  text-decoration: line-through;
}
`;

export default Typography;
