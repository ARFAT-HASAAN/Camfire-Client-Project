import React from 'react';
import { Link } from 'react-router-dom';

const ManageEvryproduct = ({ allproduct }) => {
    const { id, _id, title, url, desc, price } = allproduct

    const deleteproduct = (id) => {
        const url = `https://ancient-shelf-73698.herokuapp.com/deleteProduct?id=${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    window.confirm('are you sure you want to delete')

                }
            })
        console.log(id)

    }


    return (
        <div className="shadow-lg" >

            <img width='100%' className="package-pic" src={url} alt="" />
            <div className='p-3'>
                <h2 className='font-bold text-2xl md:text-xl mb-2 text-gray-900'>{title}</h2>
                <p className='mb-2 text-normal text-gray-500'>{desc}</p>
                <div className='flex justify-between '>
                    <h2 className='font-bold text-base md:text-xl'>${price}</h2>

                    {/* <Link to={`/products/${_id}`}> */}
                    <button className='font-bold py-1 w-28   px-3 button text-white shadow-sm rounded-lg' onClick={() => deleteproduct(_id)} >Delete</button>
                    {/* </Link> */}

                </div>

            </div>

        </div>
    );
};

export default ManageEvryproduct;