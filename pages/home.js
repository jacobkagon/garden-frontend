import React from 'react';
import Goals from '@/components/Home/Goals';
import Prompt from '@/components/Home/Prompt';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';

const home = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1 className={styles.title}>Welcome Home</h1>
                <div styles={styles.container}>
                    <div className={styles.card}>
                        <Goals />
                    </div>
                    <div className={styles.card}>
                        <Prompt />
                    </div>
                </div>
            </div>
        </>
    );
};

export default home;
