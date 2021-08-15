import React from 'react'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'

import Hamburger from './Hamburger'


function MobileNav() {
    return (
        <nav className={styles.mobileNav}>
            <Hamburger />
            <Image
                src="/NERF-LOGO2.png"
                alt=""
                layout="fill"
                objectFit="contain"
                className={styles.brand}
            />
        </nav>
    )
}

export default MobileNav
