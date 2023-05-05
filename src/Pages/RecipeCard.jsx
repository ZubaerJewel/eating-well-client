import React, { useState } from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    // console.log(recipe);

    const handleFavorite = () => {
        setFavorite(true);
        toast('Add recipe to favorite!!')
    }

    const { chefName, cookingMethod, ingredients, chefPicture, rating } = recipe;


    return (
        <div className=' text-center '>

            <Row xs={1} md={2}
                lg={3} className="g-4 my-5  " >

                <Col  className=' '>
                    <Card>

                        <LazyLoad height={200}>
                            <img
                                className="d-block w-100   object-fit-cover border rounded img-fluid"
                                src={chefPicture}
                                alt=""
                            />
                        </LazyLoad>

                        <Card.Body>
                            <Card.Title className='fw-bold fs-2'> {chefName}</Card.Title>
                            <Card.Text>
                                <p > <span className='fw-bold'>Ingredients:</span>
                                    <ul>
                                        {
                                            ingredients.map(val => <li>{val}</li>)
                                        }

                                    </ul>
                                </p>

                                <p><small className='fw-bold'>Method of Cooking:</small> {cookingMethod}</p>
                                <p> <span className='fw-bold'>Rating: </span> {rating}</p>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <Button onClick={handleFavorite} variant="danger" disabled={favorite} > Favorite</Button>
                                    <p className='mt-1 '>Ratings :

                                        <Rating
                                            placeholderRating={rating}
                                            readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        />


                                    </p>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <ToastContainer />

        </div>
    );
};

export default RecipeCard;