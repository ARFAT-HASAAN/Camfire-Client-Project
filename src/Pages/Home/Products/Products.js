import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {


    const [Products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://ancient-shelf-73698.herokuapp.com/products')

            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 6)
                setproducts(slicedData)
            })



    }, [])

    // const spliceProduct = Products?.splice(0, 4)
    // console.log(spliceProduct)


    return (
        <div id='products' >
            <div className='my-2 md:my-5'>
                <h2 className='text-center font-bold text-2xl md:text-4xl p-4 my-2 md:my-4'>Latest Collection</h2>

                <p className='text-center peragrap '>Your photography is a record of your living, for anyone who really sees.</p>
            </div>


            <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3' >

                {
                    Products.map(product => <Product key={product.id} allproduct={product}></Product>)

                }

            </div>
        </div>
    );
};

export default Products;