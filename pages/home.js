import React from 'react';
import Goals from "../components/Goals"
import Prompt from "../components/Prompt"
import styles from '../styles/Home.module.css'

const home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>
            <div styles={styles.container}>
            <div className={styles.card}>
            <Goals />
            </div>
            <div className={styles.card}>
            <Prompt/>
            </div> 
            </div>
        </div>
    );
}

export default home;
