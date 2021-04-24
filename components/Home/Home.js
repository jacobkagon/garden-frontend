import React from 'react';
import Goals from '@/components/Goals/Goals';
import Prompt from '@/components/Prompt/Prompt';
import styles from './Home.module.css';
import Image from 'next/image';
import { useAuth } from '@/lib/auth';

const Home = () => {
    const auth = useAuth();

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.bgWrap}>
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        src='/images/crinkle_light.PNG'
                        alt='explore gardening greenhouse'
                    />
                </div>
                <h1 className={styles.title}>
                    Welcome, {auth.user.name.split(' ')[0]}
                </h1>
                <div className={styles.container}>
                    <Goals />
                    <img
                        src='/images/plant_image.PNG'
                        className={styles.image}
                    />
                    <Prompt />
                </div>
            </div>
        </>
    );
};

export default Home;
