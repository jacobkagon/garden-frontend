import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Welcome from '@/components/Welcome/Welcome';
import Navbar from '@/components/Navbar/Navbar';
import Homepage from '@/components/Home/Home';

import { useAuth } from '@/lib/auth';

export default function Home() {
    const auth = useAuth();

    return (
        <div>
            <Navbar />
            {auth.user ? <Homepage /> : <Welcome />}
        </div>
    );
}
