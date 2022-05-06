import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

  html ,
  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.body};
    background: ${props => props.theme.backgroundColour};
    font-family: "Roboto", sans-serif;
    height: 100%;
    width: 100%;
  }

  h1 {
    font-family: "Roboto";

  }

  a {
    color: ${props => props.theme.body};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.primaryColour};
    }
  }
  
`;

export default GlobalStyle;
