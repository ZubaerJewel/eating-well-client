import React from 'react';
import call from '../assets/contact/call.png'
import address from '../assets/contact/address.png'
import email from '../assets/contact/email.png'
import time from '../assets/contact/time.png'
import { Button } from 'react-bootstrap';


const Contact = () => {
    return (
        <div className="container mb-5">
        <div className="text-center my-5">
          <h1> <span className='text-danger fw-bold'>Contact</span> With Us</h1>
          <p>There are many variations of passages of chef recipe available,<br/> but the majority have suffered alteration in some form, by injected humour.</p>
        </div>

        {/* map */}
        <div className='mx-auto mb-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0843420677675!2d90.39004477610766!3d23.815599686268765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a042f85d03%3A0xef12fb233281e7b1!2sBismillah%20Tower!5e0!3m2!1sen!2sbd!4v1683143477060!5m2!1sen!2sbd" 
        width="100%"
         height="450" 
          style={{ border:'0' }} 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
 
 
        </div>
           
              {/* <!-- contact part --> */}
              <div className="row d-flex gap-5 mx-5">
                {/* <!-- left side --> */}
               <div className="col-md-6 text-center mb-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                
                  <div className="col  ">
                    <div className="card bg-body-secondary h-100">
                      <img className=" card-img-top logo-image w-25 h-25 mx-auto mt-4" src={address}  alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Address</h5>
                        <p className="card-text">A108 Adam Street,New York, NY 535022</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="card bg-body-secondary h-100">
                      <img  className="card-img-top logo-image w-25 h-25 mx-auto mt-4" src={call}  alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Call Us</h5>
                        <p className="card-text">+88 01750 00 00 00 <br/> +88 01750 00 00 00</p>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-body-secondary h-100">
                      <img  className="card-img-top w-25 h-25 logo-image mx-auto mt-4" src={email}  alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Email Us</h5>
                        <p className="card-text">info@gmail.com <br/> info@gmail.com</p>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-body-secondary h-100">
                      <img  className="card-img-top w-25 h-25 logo-image mx-auto mt-4" src={time}  alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Working Hours</h5>
                        <p className="card-text">Mon-Fri: 9AM to 5PM <br/> Sunday: 9AM to 1 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
               {/* <!-- right side --> */}

               <div className="col-md-4 mb-3  ms-5">
                <input type="email" className="form-control mb-4 bg-body-secondary" id="exampleFormControlInput1" placeholder="Your Name"/>
               <input type="email" className="form-control mb-3 bg-body-secondary" id="exampleFormControlInput1" placeholder="Your Email"/>
               
                <input type="email" className="form-control mb-4 bg-body-secondary" id="exampleFormControlInput1" placeholder="Subject"/>
                <textarea id="exampleFormControlTextarea1" className="form-control mb-2 p-4 bg-body-secondary" rows="3" cols="25" placeholder="Your Massages"></textarea>
                <Button className="btn bg-info-subtle col-12 mb-3 bg-body-secondary text-white">Send Massages</Button>
               </div>
               
     
              </div>
       </div>
    );
};

export default Contact;