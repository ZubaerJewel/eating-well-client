import React from 'react';
import client1 from '../assets/person/client1.jpg'
import client2 from '../assets/person/client2.jpg'
import client3 from '../assets/person/client3.jpg'

const ClientReview = () => {
    return (

        <div className="container   bg-warning ">
            <h1 className="text-center text-success pt-5 fw-bold mb-5">Happy Clients Review</h1>

            <div className=" bg-success row row-cols-1 row-cols-md-3 g-4 text-dark ">
                <div className="col box-shadow ">
                    <div className="card text-center bg-success">
                        <div className="card-body">
                            <p className="card-text">This cozy restaurant has left the best 
                            impressions! Hospitable hosts,  delicious dishes, beautiful presentation, wide wine list and wonderful dessert.
                                I recommend to everyone! I would like to come back here again and again.</p>
                        </div>
                        <img className=" w-25 card-img-top  mx-auto" src={client1} alt="..." /><br />
                        <h5 className="card-title text-warning">Angela Miles</h5>
                        <p className='text-warning'>Banker</p>
                    </div>
                </div>
                <div className="col box-shadow bg-success">
                    <div className="card text-center bg-success">
                        <div className="card-body ">
                            <p className="card-text ">It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, 
                            food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                        </div>
                        <img className=" w-25 card-img-top mx-auto" src={client2} alt="..." /><br />
                        <h5 className="card-title text-warning">Jone abraham</h5>
                        <p className='text-warning'>Engineer</p>
                    </div>
                </div>
                <div className="col box-shadow bg-success">
                    <div className="card text-center bg-success">
                        <div className="card-body">
                            <p className="card-text">This place is great! Atmosphere is chill and cool but
                             the staff is also really friendly. They know what they’re doing and what they’re talking about,
                             and you can tell making the customers happy is their main priority.</p>
                        </div>
                        <img className=" w-25 card-img-top mx-auto" src={client3} alt="..." /><br />
                        <h5 className="card-title text-warning">Jonson Yater</h5>
                        <p className='text-warning'>Doctor</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ClientReview;