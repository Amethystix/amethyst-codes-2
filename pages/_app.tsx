import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>the amethyst mine</title>
        <meta name="description" content="amethyst codes portfolio" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
