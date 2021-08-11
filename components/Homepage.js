import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Homepage() {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.homepageLeft}>
                <div className={styles.homepageText}>
                    <p>NERF PERKS HAVE ARRIVED</p>
                    <h1>BUY NERF. <br />EARN NERF <br />PERKS POINTS.</h1>
                    <p>Sign up for Nerf Perks to earn rewards and a chance to win <br />tickets to the College Football Playoff National Championship.</p>

                </div>
            </div>
            <div className={styles.homepageRight}>

                <Image src="/NERF-LOGO5.png" alt="" className={styles.circleBrand} />
            </div>
        </div>
    )
}

export default Homepage
