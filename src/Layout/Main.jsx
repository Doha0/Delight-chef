import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;