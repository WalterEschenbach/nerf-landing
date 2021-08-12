import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Socials from '../components/Socials'
import Nav from '../components/Nav'
import Homepage from '../components/Homepage'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nerf Perks are Here | Nerf</title>
        <meta name="description" content="Nerf Perks in the style of Dr. Pepper Perks" />
        <link rel="icon" href="/NERF-LOGO.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      </Head>

      <main className={styles.main}>
        <Socials />
        <Nav />
        <Homepage />
      </main>
      <Footer />
    </div>
  )
}
