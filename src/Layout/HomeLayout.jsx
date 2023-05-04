import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import './HomeLayout.css'
import { AuthContext } from '../Provider/AuthProvider';
import LoadingPage from '../components/LoadingPage';

const HomeLayout = () => {


    const {loading}=useContext(AuthContext);
    if(loading){
        return <LoadingPage></LoadingPage>
    }

    return (
        <div>

            <Header></Header>
             <div  className='lay'>
             <Outlet ></Outlet>
             </div>
            <Footer></Footer>
      
            

        </div>
    );
};

export default HomeLayout;