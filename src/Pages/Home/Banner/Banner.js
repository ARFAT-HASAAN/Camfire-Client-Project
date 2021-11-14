import React from 'react';
import bannerpic from '../../../Images/Banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='containerr text-center md:text-left'>
            <div className="grid  grid-cols-1 md:grid-cols-2 flex items-center ">
                <div> <h1 className='header leading-normal md:leading-normal text-4xl md:text-6xl '>Capature Your Beautiful Moments</h1>

                    <p className='text-2xl italic my-4 font-medium '>Your photography is a record of your living, for anyone who really sees.</p>
                    <button className='button' >Explore</button>
                </div>
                <div> <img width="100%" src={bannerpic} /> </div>


            </div>
        </div>

    );
};

export default Banner;