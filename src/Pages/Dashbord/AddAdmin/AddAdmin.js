import React from 'react';
import { useForm } from "react-hook-form";



const AddAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://ancient-shelf-73698.herokuapp.com/user', {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    alert('make admin successfully')
                    reset()

                }

            })


    }


    return (
        <div className='text-center' >
            <h2 className='header text-2xl md:text-3xl my-2'> Make Admin</h2>

            <form onSubmit={handleSubmit(onSubmit)}>



                <input
                    placeholder='Email'
                    class="border-2 my-2 w-9/12 p-2"
                    type='email'
                    {...register("email")}
                /> <br />

                <input
                    placeholder='Password'
                    class="border-2 my-2 w-9/12 p-2"
                    type='password'
                    {...register("password")}
                /> <br />



                <input className='button' type="submit" value='Make Admin' />
            </form>

        </div>
    );
};

export default AddAdmin;