import { createGlobalStyle } from "styled-components/macro";

import base from "./_base";

import { css } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

  ${base} 

  * {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  
  }

  // svg onclick events 
  path {
    pointer-events: none; 
  } 

  #root {
    display: flex;
    justify-content: center;
    ${({ theme }) => css`
      margin: ${theme.space[3]};
      gap: ${theme.space[3]};
    `}
    flex-wrap: wrap; 
  }

  body {
    background: hsl(0, 0%, 94%);
  }

  b {
    ${({ theme }) => css`
      font-weight: ${({ theme }) => theme.fontWeights[3]};
    `}
  }
`;

export default GlobalStyle;
