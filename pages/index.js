import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { getWindowDimension } from '../utils/getWindowDimension'

import Socials from '../components/Socials'
import Nav from '../components/Nav'
import Homepage from '../components/Homepage'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'



export default function Home() {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    setWindowWidth(getWindowDimension().width)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Nerf Perks are Here | Nerf</title>
        <meta name="description" content="Nerf Perks in the style of Dr. Pepper Perks" />
        <link rel="icon" href="/NERF-LOGO.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      </Head>
      {windowWidth >= 600 && (
        <React.Fragment>
          <main className={styles.main}>
            <Socials />
            <Nav />
            <Homepage />
          </main>
          <Footer />
        </React.Fragment>
      )}
      {windowWidth < 600 && (
        <React.Fragment>
          <main className={styles.main}>
            <MobileNav />
            <Homepage />
            <Socials />
          </main>
          <Footer />
        </React.Fragment>
      )}
    </div>
  )
}
