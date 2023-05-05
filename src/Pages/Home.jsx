import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import first from '../assets/react.svg'
import ChefDetails from './ChefDetails';

import logo from '../assets/logo/logo.jpg';
import DeliciousFood from './DeliciousFood';
import ClientReview from './ClientReview';


const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);

    return (
        <div>

            {/* caresoul start */}

            

            {/* caresoul end */}





            {/* Chef details start*/}
            <div className='container bg-warning '>
                <h2 className='container text-center text-success    fs-1 fw-bold'>Available Chefs</h2>
                <Row xs={1} md={2} lg={3} className="gy-4 gx-0 ">
                    {
                        chefData.map(chef => <ChefDetails
                            chef={chef}
                            key={chef.id}

                        ></ChefDetails>)
                    }
                </Row>
            </div>
            {/* chef details end */}


         {/* delicious food */}
         <DeliciousFood></DeliciousFood>


         {/* client review */}
         <ClientReview></ClientReview>
           



            {/* Make cooking fun and easy */}
           



        </div>
    );
};

export default Home;