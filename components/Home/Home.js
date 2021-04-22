import React from 'react';
import Goals from '@/components/Goals/Goals';
import Prompt from '@/components/Prompt/Prompt';
import styles from './Home.module.css';
import img from '@/public/images/plant_image.jpeg';
import { useAuth } from '@/lib/auth';

const home = () => {
    const auth = useAuth();

    return (
        <>
            <h1 className={styles.title}>Welcome, {auth.user.name} </h1>
            <div className={styles.container}>
                <Goals />

                <img src={img} className={styles.image}   
                />
                <Prompt />
            </div>
        </>
    );
};

export default home;
