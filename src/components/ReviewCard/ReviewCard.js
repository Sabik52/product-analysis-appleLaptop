import React from 'react';
import './ReviewCard.css'
import {StarIcon } from '@heroicons/react/solid'
const ReviewCard = ({review}) => {
    return (
        <div className='review-card'>
           <div className="review-details">
           <h5>{review.name}:</h5>
            <p>{review.comment}</p>
           </div>
           <div className='star-review'>
               <StarIcon></StarIcon> 
               <StarIcon></StarIcon> 
               <StarIcon></StarIcon> 
               <StarIcon></StarIcon> 
               <StarIcon></StarIcon> 
               
               
              
           </div>
           
          
        </div>
    );
};

export default ReviewCard;