import React from 'react';

import logo from '../assets/logo/logo.jpg'
import { Button,Container, Card, Col, Image, Row } from 'react-bootstrap';
const DeliciousFood = () => {
    return (
        <div>
             <div className='container   bg-success' style={{ backgroundColor:'#f5f5f5',height:'400px' ,marginTop:'50px'}}>
                
                <Container >
                    
                    <Row >
                        <Col md={6}>
                            <img src={logo} alt="placeholder" className="img-fluid h-50 w-75 order-1 order-lg-2" />
                        </Col>
                        <Col md={6}>
                            <h1 className='text-warning  '>Enjoy Your Healthy</h1>
                            <h1 className='text-warning  '>Delicious Food</h1>
                            <p>This place is great! Atmosphere is chill and cool but the staff is also really friendly. 
                                They know what they’re doing and what
                                 they’re talking about, and you can tell making the customers happy is their main priority.</p>
                            
                            <Button className='bg-warning  '> View Food</Button>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default DeliciousFood;