import React from 'react';
import { Link } from 'react-router-dom';

const YourOrder = ({ myorder }) => {

    const { url, desc, title, _id, status } = myorder

    // https://ancient-shelf-73698.herokuapp.com/deleteOrders
    const DeleteOrders = id => {
        console.log(id)
        const url = `https://ancient-shelf-73698.herokuapp.com/deleteOrders?id=${id}`
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {

                    window.confirm('are sure you want to delete?')

                }
            }



            )

    }

    return (
        <div className="shadow-lg" >

            <img width='100%' className="package-pic" src={url} alt="" />
            <div className='p-3'>
                <h2 className='font-bold text-2xl md:text-xl mb-2 text-gray-900'>{title}</h2>
                <p className='mb-2 text-normal text-gray-500'>{desc}</p>
                <div className='flex justify-between '>
                    <h2 className='font-bold text-base md:text-xl'>$</h2>

                    {/* <Link to={`/products/${_id}`}> */}
                    <button onClick={() => DeleteOrders(_id)} className='font-bold py-1 w-28   px-3 button text-white shadow-sm rounded-lg'>Delete</button>
                    {/* </Link> */}

                </div>

            </div>

        </div>
    );
};

export default YourOrder;