import React from 'react';
import { Link } from 'react-router-dom';

const Allproduct = ({ allproduct }) => {

    const { id, _id, title, url, desc, price } = allproduct
    return (
        <div className="shadow-lg" >

            <img width='100%' className="package-pic" src={url} alt="" />
            <div className='p-3'>
                <h2 className='font-bold text-2xl md:text-xl mb-2 text-gray-900'>{title}</h2>
                <p className='mb-2 text-normal text-gray-500'>{desc}</p>
                <div className='flex justify-between '>
                    <h2 className='font-bold text-base md:text-xl'>${price}</h2>

                    <Link to={`/products/${_id}`}> <button className='font-bold py-1 w-28   px-3 button text-white shadow-sm rounded-lg'>Buy Now</button> </Link>

                </div>

            </div>

        </div>
    );
};

export default Allproduct;