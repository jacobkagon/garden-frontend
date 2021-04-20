import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Welcome from '@/components/Welcome/Welcome';

export default function Home() {
    return (
        <div className={styles.container}>
            <Welcome />
        </div>
    );
}
