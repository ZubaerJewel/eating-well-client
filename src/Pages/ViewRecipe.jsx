import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import first from '../assets/react.svg'
import RecipeCard from './RecipeCard';
import LazyLoad from 'react-lazyload';



const ViewRecipe = () => {
    const specificData = useLoaderData();
    // console.log(specificData);
    //chef details
    const { id, chefName, chefPicture, yearsOfExperience, likes, numberOfRecipes, recipes, details } = specificData;
    console.log(specificData);

    //recipe details
    const { rating, ingredients, cookingMethod } = recipes;



    return (
        <div >

            <h1 className='text-center mt-4 '>Chef  <span className='text-danger'>Details</span></h1>
            <section className='container d-flex align-items-center justify-content-center '>
                <Card className=''>
                    <Card.Body>
                        <Card.Title className='fs-1 fw-bold text-danger text-center'>   {chefName}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>


                        <Card.Subtitle className="mb-2">
                            <p >Experience: {yearsOfExperience}</p>
                            <p>No. of Recipe:{numberOfRecipes}</p>
                            <p>Likes: {likes}</p>

                        </Card.Subtitle>
                        <Button variant="danger"> View Recipe</Button>
                    </Card.Body>
                </Card>
                <div className='p-4 '>
                    <LazyLoad height={200}>
                    <Image className="d-block w-100 h-100  roundedCircle " src={chefPicture} alt="" roundedCircle />
                    </LazyLoad>
                </div>
            </section>

 


            <div className='container  '>
                <h1 className='text-center mt-4'>Recipe made by  <span className='text-danger'>{chefName}</span> </h1>
              
              <div className=' '>
              {
                    recipes.map(recipe => <RecipeCard

                        recipe={recipe}

                    ></RecipeCard>)

                }
              </div>
 
            </div>



            {/* cooking courses end */}








        </div>
    );
};

export default ViewRecipe;