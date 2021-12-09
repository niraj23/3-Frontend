import React, { useState } from 'react'


function ReviewCard({review}) {
    return(
        <div className="review-card">
           <p>{review}</p>
        </div>
    )
}

export default ReviewCard;