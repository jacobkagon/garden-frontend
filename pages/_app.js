import '../styles/globals.css';
import { AuthProvider } from '@/lib/auth';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code
        axios.defaults.baseURL = 'http://localhost:3001/api/v1';
    } else {
        // production code
        axios.defaults.baseURL = process.env.API_PROD;
    }

    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
