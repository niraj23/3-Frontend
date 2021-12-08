import React from 'react'
import ReviewCard from './ReviewCard'
import Rating from './Rating'
import { useState } from 'react'
import Modal from './Modal'

function SongCard({song: {title, artist, reviews, ratings}, songList, song}) {

    const [isShown, setIsShown] = useState(false)
    const [reviewsAreShown, setReviewsAreShown] = useState(false)
//   console.log(reviews)
//    const displayReviews = reviews.map(review => <p>{review}</p>)
    

    
    return(
        <>
        <div className="songCard">
            <p id="song-title">{title}</p>
            <p id="artist-name">{artist}</p>
            <p id="avg-rating">Average star rating: _/5 stars</p>
    

            <Rating />

            <button id="review-button" onClick={(e) => setIsShown(!isShown)} onClick={(e) => console.log(song.id)}>Leave a Review</button>
            {isShown ? (<Modal />) : null}
            <button id="show-reviews" onClick={(e) => setReviewsAreShown(!reviewsAreShown)}>See All Reviews</button>
            {reviewsAreShown ? (<p className="reviews">{reviews}</p>) : null}
            {/* {displayReviews} */}
        </div>
        </>
    )
}

export default SongCard;

