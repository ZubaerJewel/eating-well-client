import React from 'react';

import logo from '../../public/logo.jpg'
import { Button,Container, Card, Col, Image, Row } from 'react-bootstrap';
const DeliciousFood = () => {
    return (
        <div>
             <div className='container pt-5  ' style={{ backgroundColor:'#f5f5f5',height:'400px',marginBottom:'50px' ,marginTop:'50px'}}>
                
                <Container >
                    
                    <Row >
                        <Col md={6}>
                            <img src={logo} alt="placeholder" className="img-fluid h-50 w-75 order-1 order-lg-2" />
                        </Col>
                        <Col md={6}>
                            <h1>Enjoy Your Healthy</h1>
                            <h1>Delicious Food</h1>
                            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                            <Button>View Food</Button>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default DeliciousFood;