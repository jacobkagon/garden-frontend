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
                            width={30}
                            height={30}
                            responsive={true}
                            src='/images/icons/pot.PNG'
                            alt='pot'
                        />
                    </a>
                </Link>

                {auth.user ? (
                    <nav>
                        <Link href='/explore'>
                            <a className={styles.navbar__link}>
                                Explore Garden
                            </a>
                        </Link>
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
