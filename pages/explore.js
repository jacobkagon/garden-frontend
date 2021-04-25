import React from 'react';
import ExploreCard from '@/components/Explore/ExploreCard';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/Explore.module.css';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';

export const explore = () => {
    const auth = useAuth();
    return (
        <>
            <Navbar />
            {/* <div className={styles.bgWrap}>
                <Image
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    src='/images/explore_garden_new.PNG'
                    alt='explore gardening greenhouse'
                />
            </div> */}
            <div className={styles.background}>
                <h1 className={styles.exploreHead}>Explore</h1>
                <div className={styles.wrapper}>
                    <ExploreCard topicsId={1}>Gratitude</ExploreCard>
                    <ExploreCard topicsId={2}>Inner Peace</ExploreCard>
                    <ExploreCard topicsId={3}>Relationships</ExploreCard>
                </div>
            </div>
        </>
    );
};
export default explore;
