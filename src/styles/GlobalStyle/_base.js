import { css } from "styled-components/macro";

const base = css`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  html,
  body,
  #root {
    min-height: 100%; // or 100vh?
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
    color: inherit;
    // border: 0;
  }

  /* Typography */

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.1;
    margin-top: 0;
  }

  p {
    margin-top: 10px;
  }

  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  // input {
  //   border: 0;
  // }
`;

export default base;
