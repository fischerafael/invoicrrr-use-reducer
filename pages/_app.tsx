import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ClientProvider } from "../src/store/clients";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ClientProvider>
        <Component {...pageProps} />
      </ClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
