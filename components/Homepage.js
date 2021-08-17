import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import { getWindowDimension } from '../utils/getWindowDimension'

function Homepage() {
    const [windowWidth, setWindowWidth] = useState(null)

    useEffect(() => {
        setWindowWidth(getWindowDimension().width)
    }, [])

    return (
        <div className={styles.homepage}>
            <div className={styles.homepageContainer}>
                {/* Desktop */}
                {windowWidth >= 600 && (
                    <React.Fragment>
                        <div className={styles.homepageLeft}>
                            <div className={styles.homepageText}>
                                <p style={{ fontWeight: "700" }}>NERF PERKS HAVE ARRIVED</p>
                                <h1>BUY NERF. <br />EARN NERF <br />PERKS POINTS.</h1>
                                <p>Sign up for Nerf Perks to earn rewards and a chance to win <br />tickets to the College Football Playoff National Championship.</p>
                            </div>
                        </div>
                        <div className={styles.homepageRight}>
                            <div className={styles.circleBrandContainer}>
                                <Image
                                    src="/NERF-LOGO5.png"
                                    alt=""
                                    className={styles.circleBrand}
                                    placeholder="blur"
                                    blurDataURL
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </React.Fragment>
                )}
                {/* Mobile */}
                {windowWidth < 600 && (
                    <React.Fragment>
                        <div className={styles.homepageRight}>
                            <div className={styles.circleBrandContainer}>
                                <Image
                                    src="/NERF-LOGO5.png"
                                    alt=""
                                    className={styles.circleBrand}
                                    placeholder="blur"
                                    blurDataURL
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className={styles.homepageLeft}>
                            <div className={styles.homepageText}>
                                <p style={{ fontWeight: "700" }}>NERF PERKS HAVE ARRIVED</p>
                                <h1>BUY NERF. <br />EARN NERF <br />PERKS POINTS.</h1>
                                <p>Sign up for Nerf Perks to earn rewards and a</p>
                                <p>chance to win tickets to the College Football</p>
                                <p>Playoff National Championship.</p>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default Homepage
