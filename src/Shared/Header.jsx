import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg'
import { FaBeer, FaUser } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';




const Header = () => {

    const { user, logout } = useContext(AuthContext);
    // console.log(user);
    // console.log(user);
    // console.log(user?.displayName);
    const userName = user?.displayName;

    const activeLink = ' text-warning me-4 text-decoration-none border border-warning rounded p-1 px-3   ';
    const normalLink = 'text-warning me-4 text-decoration-none';


    const handleLogOut = () => {
        logout()
            .then(() => {
                toast('Succefully Logout')
            })
            .catch(error => {
                console.log(error);
                toast('Logout Failed!!!')
            })
    }

    return (
        <div>

            <Navbar expand="lg" className='d-flex bg-dark ' bg="primary" variant="dark">
                <Container fluid>


                    <div className='ms-4'>
                        <img src={logo} style={{ height: '40px', width: '60px', borderRadius: '50%' }} alt="" />
                        <Navbar.Brand href="#" className='ms-3 text-success'>EaTinG <span className='text-warning fs-4'>wEll</span></Navbar.Brand>
                    </div>

                    <div style={{ marginRight: '60px' }} className=''>
                        <Navbar.Toggle aria-controls="navbarScroll" />

                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0 text-white" style={{ maxHeight: '100px', color: 'white' }} navbarScroll >




                                <div className='text-warning'>

                                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/blog">Blog</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/contact">Contact</NavLink>

                                    {
                                        user ?
                                            <>
                                                <FaUser title={userName ? userName : 'Null'} className='fs-4 me-3 ms-5'></FaUser>
                                                <Link to='/login' >  <Button onClick={handleLogOut} className='text-warning' variant="success">Logout</Button></Link>
                                            </> :
                                            <Link to='/login'>  <Button variant="success">Login</Button></Link>
                                    }


                                </div>

                            </Nav>


                        </Navbar.Collapse>
                    </div>
                </Container>



            </Navbar>



        </div>
    );
};

export default Header;