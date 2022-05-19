import { AuthProvider } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Theme from "styles/global/ThemeConfig";
import GlobalStyle from "styles/global/GlobalStyle";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";
import Footer from "components/layout/footer/Footer";
import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  min-height: 71vh;
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
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </SSRProvider>
  );
}

export default MyApp;
