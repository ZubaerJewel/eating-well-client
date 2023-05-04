import React from 'react';
import client1 from '../assets/person/client1.jpg'
import client2 from '../assets/person/client2.jpg'
import client3 from '../assets/person/client3.jpg'

const ClientReview = () => {
    return (

        <div className="container mb-5 bg-light ">
            <h1 className="text-center text-danger pt-5 fw-bold mb-5">Happy Clients says</h1>

            <div className=" row row-cols-1 row-cols-md-3 g-4">
                <div className="col box-shadow">
                    <div className="card text-center">
                        <div className="card-body">
                            <p className="card-text">Slate helps you see how<br /> many more days you need<br /> to work to reach your financial <br /> goal for the month and year.</p>
                        </div>
                        <img className=" w-25 card-img-top  mx-auto" src={client1} alt="..." /><br />
                        <h5 className="card-title">Angela Miles</h5>
                        <p>Banker</p>
                    </div>
                </div>
                <div className="col box-shadow">
                    <div className="card text-center">
                        <div className="card-body">
                            <p className="card-text">Slate helps you see how<br /> many more days you need<br /> to work to reach your financial <br /> goal for the month and year.</p>
                        </div>
                        <img className=" w-25 card-img-top mx-auto" src={client2} alt="..." /><br />
                        <h5 className="card-title">Jone abraham</h5>
                        <p>Banker</p>
                    </div>
                </div>
                <div className="col box-shadow">
                    <div className="card text-center">
                        <div className="card-body">
                            <p className="card-text">Slate helps you see how<br /> many more days you need<br /> to work to reach your financial <br /> goal for the month and year.</p>
                        </div>
                        <img className=" w-25 card-img-top mx-auto" src={client3} alt="..." /><br />
                        <h5>Jonson Yater</h5>
                        <p>Banker</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ClientReview;