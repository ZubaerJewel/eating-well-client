import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import GithubGoogle from './GithubGoogle';


const Registration = () => {


    const { createAccount } = useContext(AuthContext);


    // const notify = () => toast("Successfully registered!!!");

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.url.value;

        // console.log(name, password,email,url);
        createAccount(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                // notify();
                form.reset();
                toast("Successfully registered!!!")
            })
            .catch((error) => {
                console.log(error);
                toast("  Registration Failed!!!")
            })





    }
    return (
        <div>
            <Container className='mt-4  '>

                <Form onSubmit={handleRegister} className='w-75 mx-auto mt-4  '>
                    <h3 className='mb-4'>Create an account</h3>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className='em'>Name</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Enter name" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className='em'>URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter Photo URL" name='url' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className='em'>Username or Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required name='password' placeholder="Password" />
                    </Form.Group>




                    <Button variant="warning" type='submit' className='text-black  w-100'>Create an account</Button>
                    <p className='mt-2 text-center'>Don't have an account?<Link className='text-warning ' to='/login'> Login</Link></p>


                </Form>

                <div>
                    <GithubGoogle></GithubGoogle>
                </div>

            </Container>
            <ToastContainer />
        </div>
    );
};

export default Registration;