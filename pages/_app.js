import '../styles/globals.css';
import { AuthProvider } from '@/lib/auth';
import axios from 'axios';
import { useAuth } from '@/lib/auth';
import Welcome from '@/components/Welcome/Welcome';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    const auth = useAuth();

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code
        axios.defaults.baseURL = 'http://localhost:3001/api/v1';
    } else {
        // production code
        axios.defaults.baseURL =
            'https://the-garden-nurture-diffrence.herokuapp.com/api/v1';
    }
    
    return (
        <AuthProvider>
            <Head>
                <title>The Garden</title>
            </Head>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
