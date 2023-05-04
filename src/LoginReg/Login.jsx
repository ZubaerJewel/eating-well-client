import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GithubGoogle from './GithubGoogle';


const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';     

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        // console.log(name, password,email,url);
        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                // notify();
                form.reset();
                navigate(from,{replace:true});
                toast("Successfully Login!!!");


            })
            .catch((error) => {
                console.log(error);
                toast("  Login Failed!!!")
            })



    }


    return (
        <Container className='mt-5  '>

            <Form onSubmit={handleLogin} className='w-75 mx-auto mt-4  '>
                <h3 className='mb-4'>Login</h3>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className='em'>Username or Email </Form.Label>
                    <Form.Control type="email" required name='email' placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-between" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />

                    <Link className='text-warning'>Forgot Password</Link>
                </Form.Group>

                <Button variant="warning" type='submit' className='text-black  w-100'>Login</Button>


                <p className='mt-2 text-center'>Don't have an account?<Link className='text-warning ' to='/registration'> Create an account</Link></p>


            </Form>

            <div>
                <GithubGoogle></GithubGoogle>

            </div>

            <ToastContainer />
        </Container>
    );
};

export default Login;