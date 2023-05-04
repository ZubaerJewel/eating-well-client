import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import first from '../assets/react.svg'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';



const ChefDetails = ({ chef }) => {
    // console.log(chef);

    const { id, name, pic, experience, likes, no_of_recipe
    } = chef;

    return (
        <div>


            <Col >
                <Card className='text-center '  >

                    <LazyLoad height={200}>
                        <Card.Img variant="top" style={{ height: '100px', width: '200px', borderRadius: '50%' }} src={pic}
                            className='roundedCircle img-fluid mx-auto w-25 mt-2' />

                    </LazyLoad>

                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <p>Experience: {experience}</p>
                        <p>No. of Recipe:{no_of_recipe
                        }</p>
                        <p>Likes: {likes}</p>
                        <Link to={`/viewRecipe/${id}`}> <Button variant="danger">View Recipe</Button></Link>
                    </Card.Body>
                </Card>
            </Col>



        </div>
    );
};

export default ChefDetails;