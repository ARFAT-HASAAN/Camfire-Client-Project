import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import { useHistory, useLocation } from 'react-router';
const Login = () => {

    const history = useHistory()
    const location = useLocation()
    const { logIn } = UseAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        logIn(data?.email, data?.password, history, location)

        alert('succesfully loged')
        reset()
    }

    return (
        <div className='w-3/5 mx-auto border-2 text-center p-3 my-4 '>
            <h2 className='header text-2xl md:text-4xl my-4'>Log With Your Valid Email</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input class="border-2 my-1 w-9/12 p-2" placeholder='Email' type='email' {...register("email")} /> <br />
                <input class="border-2 my-1 w-9/12 p-2" placeholder='Password' type="password" {...register("password")} /> <br />
                <input className='button' type="submit" />
            </form>

            <Link className='font-bold text-2xl my-2' to='/regester'>Create new account?</Link>

        </div>


    );
};

export default Login;