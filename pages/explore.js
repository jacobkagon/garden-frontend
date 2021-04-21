import React from 'react';
import ExploreCard from '@/components/Explore/ExploreCard';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/Explore.module.css';
export const explore = () => {
    return (
        <>
            <Navbar />
            <h1 className={styles.exploreHead}>Explore</h1>
            <div className={styles.wrapper}>
                <ExploreCard>Gratitude</ExploreCard>
                <ExploreCard>Inner Peace</ExploreCard>
                <ExploreCard>Relationships</ExploreCard>
            </div>
        </>
    );
};
export default explore;
