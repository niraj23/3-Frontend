import React from 'react'
import ReviewCard from './ReviewCard'
import Rating from './Rating'
import { useState } from 'react'
import AddReview from './AddReview'

function SongCard({song: {title, artist, reviews, ratings}, songList, song}) {

    const [isShown, setIsShown] = useState(false)
    const [reviewsAreShown, setReviewsAreShown] = useState(false)
    const [reviewList, setReviewList] = useState(song.reviews)

   const displayReviews = reviewList.map(review => <ReviewCard review={review} reviewList={reviewList} setReviewList={setReviewList} />)

   function handleShowingReviews(e) {
       e.preventDefault()
       setIsShown(!isShown)
       setReviewsAreShown(!reviewsAreShown)
   }
   
    return(
        <>
        <div className="songCard">
            <p id="song-title">{title}</p>
            <p id="artist-name">{artist}</p>
            <p id="avg-rating">Average star rating: _/5 stars</p>
    
            <Rating />

            <button id="review-button" onClick={(e) => handleShowingReviews(e)}>Reviews</button>
            {isShown ? (<AddReview song={song} reviews={reviews} reviewList={reviewList} setReviewList={setReviewList}/>) : null}
            {reviewsAreShown ? displayReviews : null}
        </div>
        </>
    )
}

export default SongCard;

