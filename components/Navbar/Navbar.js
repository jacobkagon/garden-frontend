import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.navbar}>
                <a href=''>
                    <h3>The Garden</h3>
                </a>
                <nav>
                    <a className={styles.navbar__link} href=''>
                        Explore Garden
                    </a>
                    <a className={styles.navbar__link} href=''>
                        Log out
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
