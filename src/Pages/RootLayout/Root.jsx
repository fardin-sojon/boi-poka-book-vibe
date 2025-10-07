import React from 'react';
import Navber from '../../Components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className="flex flex-col max-w-7xl min-h-screen mx-auto">
            <Navber></Navber>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;