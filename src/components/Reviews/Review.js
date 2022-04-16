import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect (()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>
        setReviews(data))
    }, [])
    return (
        <div >
            <h2>What Our Customers Say!</h2>
       <div className='card-container'>
       {reviews.map(review=>
            <ReviewCard
            key={review.id}
            review={review}
            ></ReviewCard>
            )}
       </div>
        </div>
    );
};

export default Review;