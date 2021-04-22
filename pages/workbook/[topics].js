import Workbook from '@/components/Workbook/Workbook.js';
import Navbar from '@/components/Navbar/Navbar';

export const workbook = () => {
    return (
        <div>
            <Navbar/>
            <Workbook/>
        </div>
    );
};

export default workbook;