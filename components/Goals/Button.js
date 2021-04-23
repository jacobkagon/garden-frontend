import React from 'react';
// import styles from './Card.module.css'
import styles from './Button.module.css';

function Button() {
    return (
        <div>
            <button className={styles.button}>
                <strong>new</strong>
            </button>
        </div>
    );
}

export default Button;
