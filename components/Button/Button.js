import React from 'react';
import styles from './Button.module.css';

function Button({onClick, children}) {
    return (
        <div>
            <button className={styles.button} onClick={() => onClick()}>{children}</button>
        </div>
    );
}

export default Button;
