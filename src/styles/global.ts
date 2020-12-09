import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  /* UI Colors */
  --primary-color: #fff;
  --secondary-color: #9BA5C1;
  --tertiary-color: #3D60b1;
  --quaternary-color: #F0921A;

  /* ... */
  --border-color: #f7f9f9;
  --background-color: #030303;

  --gradient: linear-gradient(90deg, rgba(215,93,5,1) 50%, rgba(216,52,1,1) 100%);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    max-height: 100vh;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    margin: auto;
    color: var(--primary-color);
    font-size: 1.6rem;
    overflow: initial;
    width: 100vw;
  }

  body, input, textarea, button {
    font: 1.6rem 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
