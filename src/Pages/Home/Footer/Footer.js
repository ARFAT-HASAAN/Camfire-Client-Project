import React from 'react';

const Footer = () => {

    return (

        <div id='Contact' className='containerr text-center  md:text-left'>
            <div className="grid grid-cols-1 md:grid-cols-3" >
                <div className='my-3'>
                    <h2 className='text-2xl header'>About us</h2>
                    <p className='peragrap'>The new hero pieces bring instant fashion credibility. Bright florals clash with camouflg</p>
                    <h3 className='text-2xl header mb-2'>Follow us</h3>
                    <ul>
                        <span ><i className="fab fa-google text-3xl pr-2"></i></span>
                        <span><i className="fab fa-facebook text-3xl px-2"></i> </span>
                        <span><i className="fab fa-twitter text-3xl px-2"></i> </span>
                        <span><i className="fab fa-linkedin-in text-3xl px-2"></i> </span>
                        <span><i className="fab fa-instagram text-3xl px-2"></i></span>


                    </ul>
                </div>
                <div id='Aboute'>
                    <h2 className='text-2xl font-bold header'>Information</h2>
                    <ul>
                        <li className='li' >About Us</li>
                        <li className='li' >Service</li>
                        <li className='li' >Delivary Information</li>
                        <li className='li' >Terms & Conditions</li>
                        <li className='li' >Privacy Policy</li>

                    </ul>
                </div>
                <div className='my-3'>
                    <h2 className='text-2xl font-bold header'>Get In Touch
                    </h2>

                    <p className='li'> <i class="fas fa-map-marker-alt"></i> 14 Tottenham Road, London, England.</p>

                    <p className='li'><i className="fas fa-envelope"></i> info@demo.com</p>
                    <p className='li' ><i className="fas fa-phone-alt"></i> 8888 9999</p>
                    <p className='li' ><i className="fab fa-500px"></i> (102) 8888 9999</p>
                </div>
            </div>

            <div className='text-center font-bold mt-2'>
                Copyright © 2019 camo. All Right Reserved.
            </div>

        </div>


    );
};

export default Footer;