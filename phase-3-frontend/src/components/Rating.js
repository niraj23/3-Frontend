import React, {useState} from 'react'
import Star from './Star';

function Rating({ onChange }) {

const [rating, setRating] = useState(0)

const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);

   //function to post star rating 

}


    return(
       
       <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
            <Star key={value}
            filled={value <= rating}
            onClick={ () => changeRating(value)} />
        ))}

       </div>
    )
}

export default Rating