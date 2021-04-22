import React from 'react';
import styles from './ExploreCard.module.css';
import Button from '@/components/Button/Button.js';
import Workbook from '@/components/Workbook/Workbook';
import Link from 'next/link';

function ExploreCard({ children, topicsId}) {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{children}</h1>
            <Link href={`/workbook/${topicsId}`}>
                <Button>Dig In</Button>
            </Link>
        </div>
    );
}

export default ExploreCard;
