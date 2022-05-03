import { AuthProvider } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Theme from "global/ThemeConfig";
import GlobalStyle from "global/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
