import React, { useEffect, useState } from 'react';
import Allproduct from './Allproduct';

const Explore = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://ancient-shelf-73698.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }
        , [])

    // console.log(products)

    return (
        <>
            <h2 className='text-center text-4xl font-bold p-3 my-4'> Explore Our Product</h2>

            <div className='w-4/5 gap-4 mx-auto grid grid-cols-1 md:grid-cols-3' >

                {
                    products.map(product => <Allproduct key={product.id} allproduct={product} ></Allproduct>)
                }


            </div>




        </>

    );
};

export default Explore;