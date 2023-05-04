import React from 'react';
// import sadEmoji from '../assets/Sad-Face-Emoji.png';
import logo from '../../public/notFound.jpg'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
 
const ErrorPage = () => {
    return (
        <Container >
        <Row className="mt-5">
          <Col className="text-center">
         
            <img src={logo} className="mb-4 h-75 w-50" alt="" />


            <h1>404 Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link
              to='/'
              className=''
            >
              Back to Homepage
            </Link>
          </Col>
        </Row>
      </Container>
    );
};
 
export default ErrorPage;
 
 
 
 
  
 