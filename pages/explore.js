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
                <ExploreCard topicsId={1}>Gratitude</ExploreCard>
                <ExploreCard topicsId={2}>Inner Peace</ExploreCard>
                <ExploreCard topicsId={3}>Relationships</ExploreCard>
            </div>
        </>
    );
};
export default explore;
