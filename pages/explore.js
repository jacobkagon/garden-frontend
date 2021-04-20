import React from 'react'
import Card from '@/components/Explore/Card'
import styles from "@/styles/Explore.module.css"
export const explore = () => {
    return (
        <div className={styles.topicsHead}>
            <h1 className={styles.exploreHead} >Explore</h1>
            <Card>Understanding</Card>
        </div>
    )
}
export default explore
