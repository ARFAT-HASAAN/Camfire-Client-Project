import React from 'react';
import Rating from 'react-rating';

const Review = ({ allReviews }) => {

    const { name, rate, desc } = allReviews
    return (
        <div className="shadow-2xl p-4 text-center rounded-lg " >

            <h2 className='font-bold text-2xl md:text-xl mb-2 text-gray-900'>{name}</h2>

            <Rating
                readonly
                initialRating={rate}
                emptySymbol="far fa-star  icon-color"
                fullSymbol="fas fa-star  icon-color"
            >

            </Rating>
            <p className='my-4 text-normal text-gray-500'>{desc}</p>


        </div >

    )
};

export default Review;