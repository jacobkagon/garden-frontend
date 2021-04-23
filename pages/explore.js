import React from 'react';
import ExploreCard from '@/components/Explore/ExploreCard';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/Explore.module.css';
import { useAuth } from '@/lib/auth';
import Image from 'next/image'

export const explore = () => {
    const auth = useAuth();
    return (
        <>
            <Navbar />
            <div className={styles.bgWrap}>
                <Image
                    width={45}
                    height={60}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    src='/images/icons/explore_garden.png'
                    alt='explore gardening greenhouse'
                />
            </div>
            <h1 className={styles.exploreHead}>Explore</h1>
            <div className={styles.wrapper}>
                <ExploreCard topicsId={1}>Gratitude</ExploreCard>
                <ExploreCard topicsId={2}>Inner Peace</ExploreCard>
                <ExploreCard topicsId={3}>Relationships</ExploreCard>
            </div>
        </>
    );
};
export default explore;
