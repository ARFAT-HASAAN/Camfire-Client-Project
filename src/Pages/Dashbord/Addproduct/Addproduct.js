import React from 'react';
import { useForm } from "react-hook-form";
const Addproduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://ancient-shelf-73698.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    alert('succesfully added new product')
                }
            })
        reset()
        // console.log(data)
    }

    return (
        <div className='w-3/5 mx-auto border-2 text-center p-3 my-4 ' >

            <h2 className='header text-2xl md:text-4xl my-4'> Add New Product</h2>


            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Product title' class="border-2 my-1 w-9/12 p-2" type='text' {...register("title")} /> <br />

                <input placeholder='photo Url' class="border-2 my-1 w-9/12 p-2" type='text' {...register("url")} /> <br />

                <textarea placeholder='Description' class="border-2 my-1 w-9/12 p-2" type="text" {...register("desc")} /> <br />
                <input placeholder='id' class="border-2 my-2 w-9/12 p-2" type='number' {...register("id")} /> <br />

                <input placeholder='Price' class="border-2 my-1 w-9/12 p-2" type='number' {...register("price")} /> <br />

                <input className='button text-center' type="submit" value='Add Product' />
            </form>



        </div>
    );
};

export default Addproduct;


// product url 
// 1) https://i.ibb.co/JRPwCSw/product-1.jpg
// 2) https://i.ibb.co/mSBTW1r/product-2.jpg
// 3) https://i.ibb.co/DWDr9wG/product-3.jpg
// 4) https://i.ibb.co/kx4qvDB/product-4.jpg
// 5) https://i.ibb.co/xM1znyQ/product-5.jpg
// 6) https://i.ibb.co/nLhwMgh/product-6.jpg
// 7) https://i.ibb.co/V3BWCt0/product-7.jpg
// 8) https://i.ibb.co/9g8b9Xf/product-8.jpg
// 9) https://i.ibb.co/RbpcWXk/product-9.jpg

//title 
// 1) Camera Pro 440
// 2) Red Digital Camera
// 3) Axor Digital camera
// 4) Neko Digital Camera
// 5) Retro Digital Camera
// 6) Polaid camera 300
// 7) Retro Pro 600
// 8) Retro ProPlus 300

// des
// This digital camera supports 16X digital zoom, you could zoom in or out images by using the W/T button. The pause function allows you to pause when record or playback videos. And the build-in fill light helps you to take quality pictures in the dark.