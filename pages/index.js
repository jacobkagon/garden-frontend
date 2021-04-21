import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Welcome from '@/components/Welcome/Welcome';
import Navbar from '@/components/Navbar/Navbar';
import Homepage from '@/components/Home/Home';

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* <Welcome /> */}
            <Homepage />
        </div>
    );
}
