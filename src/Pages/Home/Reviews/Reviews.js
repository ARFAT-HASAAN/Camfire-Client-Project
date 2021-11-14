import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviws] = useState([])

    useEffect(() => {
        fetch('https://ancient-shelf-73698.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviws(data))
    }, [])

    return (
        <div id='reviews' className='my-4 md:my-8'>
            <h2 className='text-center text-2xl md:text-4xl font-bold p-4 my-2 md:my-4'> Buyer Reviews</h2>

            <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3' >

                {
                    reviews.map(review => <Review key={review.id} allReviews={review}></Review>)

                }

            </div>

        </div>
    );
};

export default Reviews;