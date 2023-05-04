import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaBeer, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
const GithubGoogle = () => {

const {signInGoogle,signInGithub}=useContext(AuthContext);
const navigate = useNavigate();
const location=useLocation();
const from=location.state?.from?.pathname || '/';   

const handleGoogleSignIN=()=>{
     signInGoogle()
     .then(res=>{
        const user=res.user;
        // console.log(user);
        navigate(from,{replace:true});
        toast('Successfully Login With Google!!!')

     })
     .catch(error=>{
        // console.log(error);
        toast('  Login failed With Google!!!')
     })

}

const handleGithubSignIn=()=>{
    signInGithub()
    .then(res=>{
       const user=res.user;
    //    console.log(user);
       navigate(from,{replace:true});
       toast('Successfully Login With Github!!!')

    })
    .catch(error=>{
    //    console.log(error);
       toast('Login failed With Github!!!')
    })
}


    return (
        <div>
            

            <div className='d-flex align-item-center  justify-content-center mt-4'>
                    <hr className='w-25 text-center' />
                    <p>Or </p>
                    <hr className='w-25' />

                </div>
                <div className='d-flex align-item-center  justify-content-center mt-2'>
                    <Button onClick={handleGithubSignIn} variant="outline-primary " className='border rounded-pill  w-50 text-center'> 
                    <FaGithub  className='me-2'> </FaGithub>
                     Continue with Github</Button>
                </div>
                <div className='d-flex align-item-center  justify-content-center mt-2'>
                    <Button onClick={handleGoogleSignIN} variant="outline-primary " className='border rounded-pill  w-50 text-center'>  <FaGoogle className='me-2'></FaGoogle> Continue with Google</Button>
                </div>
                <ToastContainer />
        </div>
    );
};

export default GithubGoogle;