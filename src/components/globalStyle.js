import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #BE9F56;
    --text-color: #444;
    --white: #FFFAFF;
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color: var(--text-color);
    font-family: omnes-pro, sans-serif;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: capitolina, serif;
  }

`

