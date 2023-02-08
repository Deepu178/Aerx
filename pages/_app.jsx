import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import styles from '../styles/globals.css';

export default function Home({Component, pageProps}) {
  return (
    <ChakraProvider theme={extendTheme}>
        <Component {...pageProps}/>
    </ChakraProvider>
  )
}
