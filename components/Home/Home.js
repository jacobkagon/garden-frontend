import React from 'react';
import Goals from '@/components/Goals/Goals';
import Prompt from '@/components/Prompt/Prompt';
import styles from './Home.module.css';
import { useAuth } from '@/lib/auth';

const home = () => {
    const auth = useAuth();

    return (
        <>
            <h1 className={styles.title}>Welcome, {auth.user.name} </h1>
            <div className={styles.container}>
                <Goals />

                <img
                    className={styles.image}
                    src='http://clipart-library.com/img/873284.jpg'
                />
                <Prompt />
            </div>
        </>
    );
};

export default home;
