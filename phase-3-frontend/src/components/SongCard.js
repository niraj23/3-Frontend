import React from 'react'
import ReviewCard from './ReviewCard'
import Rating from './Rating'
import { useState } from 'react'
import Modal from './Modal'
import AddReview from './AddReview'

function SongCard({song: {title, artist, reviews, ratings}, songList, song}) {

    const [isShown, setIsShown] = useState(false)
    const [reviewsAreShown, setReviewsAreShown] = useState(false)
    const [reviewList, setReviewList] = useState(song.reviews)
    console.log(song.reviews)
  console.log(reviewList)
   const displayReviews = reviewList.map(review => <ReviewCard review={review} />)
    
   

    
    return(
        <>
        <div className="songCard">
            <p id="song-title">{title}</p>
            <p id="artist-name">{artist}</p>
            <p id="avg-rating">Average star rating: _/5 stars</p>
    

            <Rating />

            <button id="review-button" onClick={(e) => setIsShown(!isShown)}>Leave a Review</button>
            {/* isShown for Modal */}
            {/* {isShown ? (<Modal />) : null} */}
            {/* is shown below for AddReview componenet */}
            {isShown ? (<AddReview song={song} reviews={reviews} reviewList={reviewList} setReviewList={setReviewList}/>) : null}
            <button id="show-reviews" onClick={(e) => setReviewsAreShown(!reviewsAreShown)}>See All Reviews</button>
            {reviewsAreShown ? displayReviews : null}
        </div>
        </>
    )
}

export default SongCard;

