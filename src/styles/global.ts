import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6, p, span, input {
    font-family: 'Source Sans Pro';
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 48em) {
    html {
      font-size: 75%;
    }
  }

  @media (max-width: 30em) {
    html {
      font-size: 62.5%;
    }
  }
`;
