import React, { useEffect, useState } from 'react';
import Order from './Order';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://ancient-shelf-73698.herokuapp.com/manageorders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])


    return (

        <div className='my-4'>

            <h2 className='header text-3xl md:text-5xl p-2 text-center'>Manage All orders</h2>

            <div className=' w-4/5 grid grid-cols-1 md:grid-cols-3 mx-auto my-4 gap-4'>
                {
                    orders.map(order => <Order key={order._id} order={order} ></Order>)
                }

            </div>
        </div >
    );
};

export default ManageOrder;