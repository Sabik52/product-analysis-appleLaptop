import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
            <p>{review.name}</p>
        </div>
    );
};

export default ReviewCard;