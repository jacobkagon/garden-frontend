import React from 'react';
import styles from './Welcome.module.css';
import Image from 'next/image'

const Welcome = () => {
    return (
        <>
            <div className={styles.header}>
                {/* <h1>The Garden</h1> */}
                <Image
                    // className={styles.image}
                    width={600}
                    height={150}
                    src='/images/garden_welcome_2.png'
                    alt='welcome image'
                />

                <p className={styles.slogan}>
                    A place to journal and plant new seeds.
                </p>
            </div>
        </>
    );
};

export default Welcome;
