import 'normalize.css/normalize.css'
import '../styles/globals.css'
import Layout from '../components/Layout';
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="manifest" href="manifest.json" />
    </Head>

    <style jsx global>
      {`
      @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
      `}
    </style>

    <Layout >
    <Component {...pageProps} />
    </Layout>
  </>
}
