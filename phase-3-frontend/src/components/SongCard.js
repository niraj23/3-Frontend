import React from 'react'
import ReviewCard from './ReviewCard'
import Rating from './Rating'

function SongCard({song: {title, artist, reviews, ratings}, songList}) {

    //console.log(songList)
    console.log(reviews)
    const displayReviews = songList.map(song => (<ReviewCard key={song.id} reviews={song.reviews} ratings={song.ratings} />))

    return(
        <>
        <div className="songCard">
            <p id="song-title">{title}</p>
            <p id="artist-name">{artist}</p>
            <p id="avg-rating">Average star rating: _/5 stars</p>

            <Rating />

            <button id="review-button">Leave a Review</button>
            
            <p>See reviews</p>
            {displayReviews}
        </div>
        </>
    )
}

export default SongCard;

