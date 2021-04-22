import Workbook from '@/components/Workbook/Workbook.js';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router'

export const workbook = () => {
    const router = useRouter()
    return (
        <div>
            <Navbar/>
            <Workbook number={router.query.topics}/>
        </div>
    );
};

export default workbook;