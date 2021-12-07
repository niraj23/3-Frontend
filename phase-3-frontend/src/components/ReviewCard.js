import React, { useState } from 'react'


function ReviewCard({reviews, ratings}) {
    
    // const [reviewList, setReviewList] = useState([])


    // function handleAddReview(newReview) {
    //     setReviewList([...reviewList, newReview])
    // }

const displayReviews = reviews.map(review => <p>"{review.content}"</p>)

    return(
        <div className="review-card">
           {displayReviews}
        </div>
    )
}

export default ReviewCard;