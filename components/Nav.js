import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navlink}><h3>PRODUCTS</h3></div>
            <div className={styles.navlink}><h3>MERCH</h3></div>
            <div style={{ display: "block", position: "relative", width: "14rem", margin: "5px" }}>
                <Image
                    src="/NERF-LOGO2.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className={styles.brand}
                />
            </div>
            <div className={styles.navlink}><h3>REWARDS</h3></div>
            <div className={styles.navlink}><h3>FAQ</h3></div>
        </nav>
    )
}

export default Nav
