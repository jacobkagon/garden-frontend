import React from 'react'
import styles from './Card.module.css'
import Button from './Button'

 
function Card({children}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{children}</h1>
            <button>Dig In</button>
        </div>
       
    )
}

export default Card