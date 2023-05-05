 import React from 'react';
 import { Button, Card, Col, Image, Row } from 'react-bootstrap';
 import logo from  '../assets/logo/logo.jpg'
import { Link } from 'react-router-dom';

 const Footer = () => {
    return (
        
            
            <div class="container-fluid bg-dark text-white">
            <div class="row d-flex justify-content-center align-items-center mx-5 ">
        <div class="col-md-3 ">
          <div class="d-flex flex-row justify-content-start align-items-start ">
            <img class="m-4   img-fluid rounded-circle w-25 h-25" src={logo} alt="" />
          </div>
          <p>There are many variations of passages of Chef Recipe available, but the majority have suffered alteration in some form, by injected humour.</p>
        </div>
       
        <div class=" col-md-3  my-5 ">
          <h3 class="mt-4">Usefull Link</h3>
          <p> <Link to="/">Home</Link></p>
          <p><Link to="/blog">Blog</Link></p>
          <p><Link to="/contact">Contact Us</Link></p>
          <p><Link to="/registration">Sign Up</Link></p>
          <p><Link to="/login">Log In</Link></p>
         
          
          
          
          
        
       </div>
       <div class="col-md-3  my-5">
        <h3 class="mt-4">Contact Now</h3>
        <p>82-Roypur,Bagherpara<br/>
          7470-Jashore,Bangladesh</p>
        <p>+88 01839666712</p>
        <p>+88 01303407372</p>
        <p>zubaer5jewel.16@gmail.com</p>
        <p>jewel5zubaer.16@gmail.com</p>
     </div>
        <div class="col-md-3">
          <h3>Subscribe</h3>
          <p>Subscribe for our latest & Articles. <br/>We Won’t Give You Spam Mails</p>
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-location-arrow"></i></span>
          </div>
        </div>
      </div>
           
 
        </div>

       
    );
 };
 
 export default Footer;
