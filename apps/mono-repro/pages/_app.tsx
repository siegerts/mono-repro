import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Reproduction</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
