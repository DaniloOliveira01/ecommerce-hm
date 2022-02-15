import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
  }

  body {
    background-image: linear-gradient(to left bottom, #cfcfcf, #1c2026);
  }
`;