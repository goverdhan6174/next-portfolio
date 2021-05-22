import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import GlobalProvider from "../context/globalContext";
import StyleWrapper from "../themes/styleWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <StyleWrapper>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </StyleWrapper>
    </GlobalProvider>
  );
}

export default MyApp;
