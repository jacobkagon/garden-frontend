import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Welcome from '@/components/Welcome/Welcome';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Welcome />
        </div>
    );
}
