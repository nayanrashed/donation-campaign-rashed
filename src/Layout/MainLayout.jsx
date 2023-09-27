
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Header/NavBar';

const MainLayout = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;