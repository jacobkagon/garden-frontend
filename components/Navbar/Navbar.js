import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.navbar}>
                <a href=''>
                    <h2>The Garden</h2>
                </a>
                {false ? (
                    <nav>
                        <a className={styles.navbar__link} href=''>
                            Explore Garden
                        </a>
                        <a className={styles.navbar__link} href=''>
                            Log out
                        </a>
                    </nav>
                ) : (
                    <nav>
                        <a className={styles.navbar__link} href=''>
                            Log In
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Navbar;
