import React from 'react'
import styles from '../styles/Home.module.css'

import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Socials() {
    return (
        <div className={styles.socials}>
            <FaTwitter size={18} color="white" className={styles.icons} />
            <FaInstagram size={18} color="white" className={styles.icons} />
            <FaFacebookF size={18} color="white" className={styles.icons} />
            <FaYoutube size={18} color="white" className={styles.icons} />
        </div>
    )
}

export default Socials
