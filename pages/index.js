import Head from 'next/head';
import { ModalProvider, ModalTransition } from 'react-simple-hook-modal';

import Welcome from '@/components/Welcome/Welcome';
import Navbar from '@/components/Navbar/Navbar';
import HomePage from '@/components/Home/Home';

import { useAuth } from '@/lib/auth';

export default function Home() {
    const auth = useAuth();
    return (
        <div>
            <Head>
                <title>The Garden</title>
            </Head>
            <ModalProvider>
                <Navbar />
                {auth.user ? <HomePage /> : <Welcome />}
            </ModalProvider>
        </div>
    );
}
