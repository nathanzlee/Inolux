import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Inolux</title>
        <link rel="icon" href="/logo.png" type="image/x-icon"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
    
  )
}

export default MyApp
