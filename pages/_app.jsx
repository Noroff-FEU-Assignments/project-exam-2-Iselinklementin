import { AuthProvider } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Theme from "global/ThemeConfig";
import GlobalStyle from "global/GlobalStyle";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";

const Wrapper = styled.div`
  min-height: 100vh;
`;

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <GlobalStyle />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </AuthProvider>
      </ThemeProvider>
    </SSRProvider>
  );
}

export default MyApp;
