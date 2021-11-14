import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import UseAuth from '../Context/UseAuth';
import { useParams } from "react-router";



const Purchace = () => {

    const { user } = UseAuth()

    const { id } = useParams()
    const [product, setProduct] = useState({})

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email
        data.status = 'pending'
        data.title = product?.title
        data.desc = product?.desc
        data.url = product?.url
        data.price = product?.price
        fetch('https://ancient-shelf-73698.herokuapp.com/addOrders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    alert('order placed')
                    reset()

                }
            })

    }

    useEffect(() => {
        fetch(`https://ancient-shelf-73698.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])

    return (

        <div className='my-5'>
            <div className=' w-4/5 grid grid-cols-1 md:grid-cols-2 mx-auto my-4 gap-4' >
                <div className="shadow-lg" >

                    <img width='100%' className="package-pic" src={product?.url} alt="" />
                    <div className='p-3'>
                        <h2 className='font-bold text-2xl md:text-xl mb-2 text-gray-900'>{product?.title}</h2>
                        <p className='mb-2 text-normal text-gray-500'>{product?.desc}</p>
                        <div className='flex justify-between '>
                            <h2 className='font-bold text-base md:text-xl'>${product?.price}</h2>
                        </div>

                    </div>

                </div>

                <div className='w-4/5 mx-auto  text-center p-1 my-1 ' >

                    <h2 className='header text-2xl md:text-3xl my-2'> Place Your Order</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>



                        <input
                            placeholder='Address'
                            class="border-2 my-2 w-9/12 p-2"
                            type='text'
                            {...register("desc")}
                        /> <br />

                        <input
                            placeholder='Phone'
                            class="border-2 my-2 w-9/12 p-2"
                            type='text'
                            {...register("phone")}
                        /> <br />

                        <input className='button' type="submit" value='Place order' />
                    </form>



                </div>

            </div>
        </div>


    );
};

export default Purchace;