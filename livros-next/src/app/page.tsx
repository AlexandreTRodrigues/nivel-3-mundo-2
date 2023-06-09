import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import { Menu } from '../../componentes/Menu';

export default function Home() {
  return (

    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  )
}

