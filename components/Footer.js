import React from 'react'
import styles from '../styles/Footer.module.css'

import FooterLink from '../components/FooterLink'

function Footer() {

    const footerLinks = [
        { title: 'PRIVACY POLICY', link: "https://docs.hasbro.com/en-us/legal/privacy" },
        { title: 'TERMS OF USE', link: "https://docs.hasbro.com/en-us/legal/terms" },
        { title: 'ACCESSIBILITY', link: "https://corporate.hasbro.com/en-us/sitemap" },
        { title: 'CONTACT US', link: "https://corporate.hasbro.com/en-us/contact-us" },
        { title: 'CAREERS', link: "https://jobs.hasbro.com/?locale=en_US" },
        { title: 'LET\'S PLAY', link: "https://nerf.hasbro.com/en-us/games" },
        { title: 'CORPORATE INFORMATION', link: "https://corporate.hasbro.com/en-us" },
        { title: 'FAQ', link: "https://consumercare.hasbro.com/en-us" }
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                {footerLinks.map(link => {
                    if (link.title == footerLinks[footerLinks.length - 1].title) {
                        return (
                            <React.Fragment key={link.title}>
                                <FooterLink text={link.title} link={link.link} />
                            </React.Fragment>
                        )
                    }
                    return (
                        <React.Fragment key={link.title}>
                            <FooterLink text={link.title} link={link.link} />
                            <span style={{ fontWeight: "800" }}>|</span>
                        </React.Fragment>
                    )
                })}
            </div>
            <p>NERF is a registered trademark of Nerf/Hasbro, Inc.</p>

            <p>©2021 Nerf/Hasbro, Inc.</p>
        </footer>
    )
}

export default Footer
