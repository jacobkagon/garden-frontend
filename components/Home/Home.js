import React from 'react';
import Goals from '@/components/Goals/Goals';
import Prompt from '@/components/Prompt/Prompt';
import styles from './Home.module.css';

const home = () => {
    return (
        <>
            <h1 className={styles.title}>Welcome Home</h1>
            <div className={styles.container}>
                <Goals />

                <Prompt />
            </div>
        </>
    );
};

export default home;
