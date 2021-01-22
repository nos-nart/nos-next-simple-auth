import Head from 'next/head';
import { GlobalStyles } from '@/components/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>feedback</title>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </>
  )
}

export default MyApp
