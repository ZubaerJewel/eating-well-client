import React from 'react';
import './LoadingPage.css'
import Spinner from 'react-bootstrap/Spinner';

const LoadingPage = () => {
    return (
        <div className='loading  '>
           
           <h1>Loading...</h1>
           <Spinner className='text-center  ' animation="grow" variant="primary" />
 
        </div>
    );
};

export default LoadingPage;