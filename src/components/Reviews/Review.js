
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
    
    const [reviews, setReviews] = useReviews()
    return (
        <div className='reviews' >
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