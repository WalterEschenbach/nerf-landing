import React from 'react'
import styles from '../styles/Nav.module.css'

function Hamburger() {
    return (
        <div className={styles.hamburger}>
            <div className={styles.bun}></div>
            <div className={styles.bun}></div>
            <div className={styles.bun}></div>
        </div>
    )
}

export default Hamburger
