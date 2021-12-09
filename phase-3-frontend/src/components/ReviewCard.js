import React, { useState } from 'react'


function ReviewCard({review}) {
    console.log('Hello')
    console.log(review)
    return(
        <div className="review-card">
           <p>{review}</p>
        </div>
    )
}

export default ReviewCard;