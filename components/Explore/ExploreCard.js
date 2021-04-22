import React from 'react';
import styles from './ExploreCard.module.css';
import Button from '@/components/Button/Button.js';
import Workbook from '@/components/Workbook/Workbook';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ExploreCard({ children, topicsId}) {

    const router = useRouter();


    function clickButton() {
        router.push(`/workbook/${topicsId}`)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{children}</h1>
            <Button onClick={clickButton}>
            {/* <Link href={`/workbook/${topicsId}`}> */}
                Dig In
            {/* </Link> */}
            </Button>
        </div>
    );
}

export default ExploreCard;
