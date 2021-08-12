import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navlink}><a href="https://nerf.hasbro.com/en-us/toys-games"><h3>PRODUCTS</h3></a></div>
            <div className={styles.navlink}><a href="https://www.zazzle.com/store/nerf/products"><h3>MERCH</h3></a></div>
            <div style={{ display: "block", position: "relative", width: "14rem", margin: "5px" }}>
                <Image
                    src="/NERF-LOGO2.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className={styles.brand}
                />
            </div>
            <div className={styles.navlink}><a href="https://www.kohls.com/media/digital/ecom/pdfs/pdf/Hasbro_NerfPerks.pdf"><h3>REWARDS</h3></a></div>
            <div className={styles.navlink}><a href="https://nerf.hasbro.com/en-us/instructions"><h3>FAQ</h3></a></div>
        </nav>
    )
}

export default Nav
