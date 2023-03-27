import theme from "@/theme";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../theme/globalStyle";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "@/components/Modal/modalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}
