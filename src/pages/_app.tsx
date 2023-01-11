import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import Head from "next/head";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
        <title>Fuxam Task</title>
        <meta property="og:title" content="My page title" key="title" />
    </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
