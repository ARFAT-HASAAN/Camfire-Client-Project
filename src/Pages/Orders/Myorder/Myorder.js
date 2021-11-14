import React from 'react';
import { useEffect, useState } from "react";
import UseAuth from '../../Context/UseAuth'
import YourOrder from '../YourOrder';


const Myorder = () => {

    const [myorders, setMyorders] = useState([])
    const { user } = UseAuth()

    useEffect(() => {

        const url = `https://ancient-shelf-73698.herokuapp.com/myorder?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data))

    }, [user?.email, myorders])

    return (
        <div>
            <h2 className='head text-3xl font-bold text-center'>See your Orders</h2>
            <div className=' w-4/5 grid grid-cols-1 md:grid-cols-3 mx-auto my-4 gap-4'>
                {
                    myorders.map(myorder => <YourOrder key={myorder._id} myorder={myorder}  ></YourOrder>)
                }
            </div>

        </div>
    );
};

export default Myorder;