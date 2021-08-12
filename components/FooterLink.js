import React from 'react'
import styles from '../styles/Home.module.css'

function FooterLink(props) {
    return (
        <div className={styles.footerLink}>
            <a href={props.link}>
                <h3>
                    {props.text}
                </h3>
            </a>
        </div>
    )
}

export default FooterLink
