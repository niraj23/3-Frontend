import React from 'react'
import ReviewCard from './ReviewCard'
import Rating from './Rating'
import { useState } from 'react'
import Modal from './Modal'

function SongCard({song: {title, artist, reviews, ratings}, songList, song}) {

    const [isShown, setIsShown] = useState(false)
    
  
   const displayReviews = reviews.map(review => console.log(review))
    

    
    return(
        <>
        <div className="songCard">
            <p id="song-title">{title}</p>
            <p id="artist-name">{artist}</p>
            <p id="avg-rating">Average star rating: _/5 stars</p>

            <Rating />

            <button id="review-button" onClick={(e) => setIsShown(!isShown)} onclick={(e) => console.log(song.id)}>Leave a Review</button>
            {isShown ? (<Modal />) : null}
            <p>See reviews</p>
            {displayReviews}
        </div>
        </>
    )
}

export default SongCard;

