import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image'

import { useAuth } from '@/lib/auth';

function Navbar() {
    const auth = useAuth();

    return (
        <header className={styles.wrapper}>
            <div className={styles.navbar}>
                <a href='' style={{display:"flex", alignItems:"flex-end" }}>
                    <h2 >The Garden</h2>
                    <Image
                        width={30}
                        height={30}
                        responsive={true}
                        src='/images/icons/pot.PNG'
                        alt='pot'

                    />
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
                        <button
                            className={styles.navbar__link}
                            onClick={() => auth.signinWithGoogle()}
                        >
                            Sign In With Google
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Navbar;
