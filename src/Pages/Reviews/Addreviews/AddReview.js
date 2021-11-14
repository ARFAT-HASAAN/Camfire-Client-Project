import React from 'react';
import { useForm } from "react-hook-form";



const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://ancient-shelf-73698.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review added succesfully')

                }

            })
        reset()
        // console.log(data)
    }


    return (
        <div className='w-3/5 mx-auto border-2 text-center p-3 my-4 ' >

            <h2 className='header text-2xl md:text-4xl my-4'> Tell us your experiance with this project </h2>


            <form onSubmit={handleSubmit(onSubmit)}>


                <input placeholder='Your Name' class="border-2 my-1 w-9/12 p-2" type='text' {...register("name")} /> <br />

                <input placeholder='Rate between 1 to 5' class="border-2 my-1 w-9/12 p-2" type='number' required {...register("rate")} /> <br />

                <textarea class="border-2 my-1 w-9/12 p-2" placeholder='write someting...'   {...register("desc")} /> <br />




                <input className='button text-center' type="submit" value='Add Reviews' />
            </form>
        </div>

    )
};

export default AddReview;