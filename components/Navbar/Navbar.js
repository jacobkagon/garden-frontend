import React from 'react';
import styles from './Navbar.module.css';

import { useAuth } from '@/lib/auth';

function Navbar() {
    const auth = useAuth();

    return (
        <header className={styles.wrapper}>
            <div className={styles.navbar}>
                <a href=''>
                    <h2>The Garden</h2>
                </a>
                {auth.user ? (
                    <nav>
                        <a className={styles.navbar__link} href=''>
                            Explore Garden
                        </a>
                        <button
                            className={styles.navbar__link}
                            onClick={() => auth.signout()}
                        >
                            Sign Out
                        </button>
                    </nav>
                ) : (
                    <nav>
                        <button className={styles.navbar__link} onClick={() => auth.signinWithGoogle()}>
                            Sign In With Google
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Navbar;
