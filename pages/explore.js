import React from 'react';
import Card from '@/components/Explore/Card';
import Navbar from '@/components/Navbar/Navbar';
import styles from '@/styles/Explore.module.css';
export const explore = () => {
    return (
        <>
            <Navbar />
            <h1>Explore</h1>
            <div className={styles.wrapper}>
                <Card>Understanding</Card>
                <Card>Responsibility</Card>
                <Card>Space To Grow</Card>
            </div>
        </>
    );
};
export default explore;
