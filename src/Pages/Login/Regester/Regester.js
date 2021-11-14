import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import UseAuth from '../../Context/UseAuth';
import { useHistory, useLocation } from 'react-router';

const Regester = () => {

    const history = useHistory()
    const location = useLocation()
    const { RegesterUser, error } = UseAuth();


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        RegesterUser(data?.email, data?.password, history, location)

        alert('regestered')
        reset()
        // console.log(data)
    }
    return (
        <div className='w-3/5 mx-auto border-2 text-center p-3 my-4 ' >

            <h2 className='header text-2xl md:text-4xl my-4'> Regester Here</h2>
            <p>{error}</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Name' class="border-2 my-1 w-9/12 p-2" type='text' {...register("name")} /> <br />
                <input placeholder='Email' class="border-2 my-1 w-9/12 p-2" type='email' {...register("email")} /> <br />
                <input placeholder='Password' class="border-2 my-1 w-9/12 p-2" type="password" {...register("password")} /> <br />

                <input placeholder='phone' class="border-2 my-2 w-9/12 p-2" type='number' {...register("phone")} /> <br />


                <input className='button' type="submit" value='regester' />
            </form>

            <Link to='/login'> <h2 className='font-bold text-2xl my-2'>Already have account?</h2>  </Link>

        </div>

    );
};

export default Regester;