import React, { useEffect, useState } from 'react';
import ManageEvryproduct from './ManageEvryproduct';

const ManageALLProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('https://ancient-shelf-73698.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }
        , [products])
    return (
        <div>
            <h2 className='text-center text-4xl font-bold p-3 my-4'> Manage All Products</h2>

            <div className='w-4/5 gap-4 mx-auto grid grid-cols-1 md:grid-cols-3' >

                {
                    products.map(product => <ManageEvryproduct key={product.id} allproduct={product} ></ManageEvryproduct>)
                }


            </div>
        </div>
    );
};

export default ManageALLProduct;