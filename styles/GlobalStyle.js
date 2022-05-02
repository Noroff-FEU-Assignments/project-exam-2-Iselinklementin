import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  *,
*::before,
*::after {
  box-sizing: border-box;
}
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    color: #767676;
    background: ${props => props.theme.gradientBackground};
    font-family: "Roboto", sans-serif;
    height: 100%;
  }
  h1 {
    font-family: "Roboto";
  }
`;

export default GlobalStyle;
