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
    color: ${props => props.theme.darkGrey};
    background: ${props => props.theme.backgroundColour};
    font-family: "Roboto", sans-serif;
    height: 100%;
  }
  h1 {
    font-family: "Roboto";

  }
`;

export default GlobalStyle;
