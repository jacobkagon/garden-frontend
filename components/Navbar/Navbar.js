import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@/lib/auth';

function Navbar() {
    const auth = useAuth();

    return (
        <header className={styles.wrapper}>
                <div className={styles.navbar}>
                    <Link href='/'>
                        <a style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <h2>The Garden</h2>
                            <Image
                                className={styles.image}
                                width={45}
                                height={60}
                                // responsive={true}
                                src='/images/icons/potstem.PNG'
                                alt='pot'
                            />
                        </a>
                    </Link>

                    {auth.user ? (
                            <nav >
                                <Link href='/explore'>
                                    <a
                                        className={styles.navbar__link}
                                        className={styles.un}
                                        // className={styles.nav_wrap_right}
                                    >
                                        Explore Garden
                                    </a>
                                </Link>
                                <button
                                    className={styles.navbar__link}
                                    className={styles.un}
                                    onClick={() => auth.signout()}
                                    // className={styles.nav_wrap_right}
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
