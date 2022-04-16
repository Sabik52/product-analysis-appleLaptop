import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect (()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>
        setReviews(data))
    }, [])
    return (
        <div className='review'>
        {reviews.map(review=>
            <ReviewCard
            key={review.id}
            review={review}
            ></ReviewCard>
            )}
        </div>
    );
};

export default Review;