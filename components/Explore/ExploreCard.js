import React from 'react'
import styles from './ExploreCard.module.css'

 
function ExploreCard({children}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{children}</h1>
            <button>Dig In</button>
        </div>
       
    )
}

export default ExploreCard
