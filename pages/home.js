import React from 'react';
import Goals from '@/components/Goals/Goals';
import Prompt from '@/components/Prompt/Prompt';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';

const home = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1 className={styles.title}>Welcome Home</h1>
                <div styles={styles.container}>
                    <Goals />

                    <Prompt />
                </div>
            </div>
        </>
    );
};

export default home;
