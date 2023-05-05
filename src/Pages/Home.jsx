import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import first from '../assets/react.svg'
import ChefDetails from './ChefDetails';
import Caresoul from './Caresoul';
import Banner from './Banner';
import Featured from './Featured';
import ContactUs from './ContactUs';
import logo from '../assets/logo/logo.jpg'
import DeliciousFood from './DeliciousFood';
import ClientReview from './ClientReview';


const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);

    return (
        <div>

            {/* caresoul start */}

            <Caresoul></Caresoul>

            {/* caresoul end */}





            {/* Chef details start*/}
            <div className='container'>
                <h2 className='container text-center text-success my-4 fs-1 fw-bold'>Chef Info</h2>
                <Row xs={1} md={2} lg={3} className="g-4 ">
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
            <Featured></Featured>
            {/* Make cooking fun and easy */}



            {/* banner start */}
            <Banner></Banner>

            {/* banner end */}


            {/* Contact us */}
            <ContactUs></ContactUs>

            {/* Contact us */}







        </div>
    );
};

export default Home;