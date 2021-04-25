import React from 'react';
import Goals from '@/components/Goals/Goals';
import Prompt from '@/components/Prompt/Prompt';
import styles from './Home.module.css';
import Image from 'next/image';
import { useAuth } from '@/lib/auth';

const Home = () => {
    const auth = useAuth();

    const curday = (sp) =>{
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //As January is 0.
        let yyyy = today.getFullYear();
        
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+sp+dd+sp+yyyy);
        };

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    Welcome, {auth.user.name.split(' ')[0]}
                   
                </h1>
                <div className={styles.title}>{curday('/')}</div>
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
