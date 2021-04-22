import React from 'react';
import styles from './Goals.module.css';
const Goals = () => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>Goals</div>
            <div className={styles.cardHome}>
                <span className={styles.goalsList}>
                    <a href='/explore'>this is a hiperlink</a>
                </span>
            </div>
        </div>
    );
};

export default Goals;
