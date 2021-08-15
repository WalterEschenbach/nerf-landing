import React from 'react'
import styles from '../styles/Socials.module.css'

import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Socials() {
    return (
        <div className={styles.socials}>
            <a href="https://twitter.com/Hasbro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <FaTwitter
                    size={18}
                    className={styles.icons} />
            </a>
            <a href="https://www.instagram.com/nerf/?hl=en">
                <FaInstagram
                    size={18}
                    className={styles.icons} />
            </a>
            <a href="https://www.facebook.com/Nerf/">
                <FaFacebookF
                    size={18}
                    className={styles.icons} />
            </a>
            <a href="https://www.youtube.com/channel/UC4Y59VZCCGnuYZwwFGDT-vA">
                <FaYoutube
                    size={18}
                    className={styles.icons} />
            </a>
        </div>
    )
}

export default Socials
