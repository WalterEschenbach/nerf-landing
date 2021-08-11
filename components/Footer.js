import React from 'react'
import styles from '../styles/Home.module.css'

import FooterLink from '../components/FooterLink'



function Footer() {
    const footerLinks = [
        'PRIVACY POLICY',
        'TERMS OF USE',
        'ACCESSIBILITY',
        'CONTACT US',
        'CAREERS',
        'LET\'S PLAY',
        'CORPORATE INFORMATION',
        'FAQ'
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                {footerLinks.map(link => {
                    return (
                        <React.Fragment key={link}>
                            <FooterLink text={link} />
                            <span>|</span>
                        </React.Fragment>
                    )
                })}
            </div>
            <p>NERF is a registered trademark of Nerf/Hasbro, Inc.</p>
            <br />
            <p>©2021 Nerf/Hasbro, Inc.</p>
        </footer>
    )
}

export default Footer
