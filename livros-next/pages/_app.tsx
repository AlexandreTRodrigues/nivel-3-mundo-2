
import 'bootstrap/dist/css/bootstrap.css'
import '../src/app/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Menu } from '../componentes/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <> 
  <Head> 
    <meta name="viewport" 
          content="width=device-width, initial-scale=1" /> 
  </Head> 
      <Menu />
  <Component {...pageProps} /> 
  </>
  )
}

export default MyApp

