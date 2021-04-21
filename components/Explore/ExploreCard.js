import React from 'react'
import styles from './ExploreCard.module.css'
import Button from '@/components/Button/Button.js'

 
function ExploreCard({children}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{children}</h1>
            <Button>Dig In</Button>
        </div>
       
    )
}

export default ExploreCard
