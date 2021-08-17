import React, { useEffect, useState } from 'react'
import styles from '../styles/Socials.module.css'

import { getWindowDimension } from '../utils/getWindowDimension'

import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Socials() {
    const [windowWidth, setWindowWidth] = useState(null)
    const [iconSize, setIconSize] = useState(18);

    useEffect(() => {
        setWindowWidth(getWindowDimension().width)
        console.log('window:', windowWidth)
        windowWidth < 600 ? setIconSize(25) : setIconSize(18)
    }, [])

    return (
        <div className={styles.socials}>
            <a href="https://twitter.com/Hasbro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <FaTwitter
                    size={iconSize}
                    className={styles.icons} />
            </a>
            <a href="https://www.instagram.com/nerf/?hl=en">
                <FaInstagram
                    size={iconSize}
                    className={styles.icons} />
            </a>
            <a href="https://www.facebook.com/Nerf/">
                <FaFacebookF
                    size={iconSize}
                    className={styles.icons} />
            </a>
            <a href="https://www.youtube.com/channel/UC4Y59VZCCGnuYZwwFGDT-vA">
                <FaYoutube
                    size={iconSize}
                    className={styles.icons} />
            </a>
        </div>
    )
}

export default Socials
